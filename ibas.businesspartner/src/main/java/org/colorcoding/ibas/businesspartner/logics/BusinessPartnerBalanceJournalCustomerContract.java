package org.colorcoding.ibas.businesspartner.logics;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.businesspartner.repository.IBORepositoryBusinessPartnerApp;
/**
 * 业务伙伴余额记录影响客户余额的契约
 * @author Allen.Zhang
 *
 */
@LogicContract(IBusinessPartnerBalanceJournalCustomerContract.class)
public class BusinessPartnerBalanceJournalCustomerContract extends BusinessLogic<IBusinessPartnerBalanceJournalCustomerContract, ICustomer> {

	/**
	 * 查找被影响的客户
	 */
	@Override
	protected ICustomer fetchBeAffected(IBusinessPartnerBalanceJournalCustomerContract Contract) {
		ICriteria criteria = Criteria.create();
		ICondition condition = criteria.getConditions().create();
		// 条件业务伙伴编码
		condition.setAlias(Customer.PROPERTY_CODE.getName());
		condition.setValue(Contract.getCustomerCode());
		condition.setOperation(ConditionOperation.EQUAL);
		// 先在事物缓存里查
		ICustomer customer = super.fetchBeAffected(criteria, ICustomer.class);
		if (customer == null) {
			// 事务里不存在
			IBORepositoryBusinessPartnerApp boRepository = new BORepositoryBusinessPartner();
			boRepository.setRepository(this.getRepository());
			IOperationResult<ICustomer> operationResult = boRepository.fetchCustomer(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			if (operationResult.getResultCode() != 0) {
				throw new BusinessLogicException(operationResult.getMessage());
			}
			customer = operationResult.getResultObjects().firstOrDefault();
		}
		return customer;
	}

	/**
	 * 正向逻辑
	 */	
	@Override
	protected void impact(IBusinessPartnerBalanceJournalCustomerContract Contract) {
		ICustomer customer = this.getBeAffected();
		if(customer==null) return;
		Decimal Balance=customer.getBalance();
		Decimal Amount=Contract.getAmount();
		emDirection Direction= Contract.getDirection();
		if(Direction==emDirection.IN ){
			Balance=Balance.add(Amount);
			customer.setBalance(Balance);
		}
		if(Direction==emDirection.OUT ){
			Balance=Balance.subtract(Amount);
			customer.setBalance(Balance);
		}
	}

	/**
	 *反向逻辑
	 */
	@Override
	protected void revoke(IBusinessPartnerBalanceJournalCustomerContract Contract) {
		ICustomer customer = this.getBeAffected();
		if(customer==null) return;
		Decimal Balance=customer.getBalance();
		Decimal Amount=Contract.getAmount();
		emDirection Direction= Contract.getDirection();
		if(Direction==emDirection.IN ){
			Balance=Balance.subtract(Amount);
			customer.setBalance(Balance);
		}
		if(Direction==emDirection.OUT ){
			Balance=Balance.add(Amount);
			customer.setBalance(Balance);
		}
	}

}

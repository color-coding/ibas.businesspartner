package org.colorcoding.ibas.businesspartner.logics;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.logics.BusinessLogic;
import org.colorcoding.ibas.bobas.logics.BusinessLogicsException;
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
@LogicContract(IBusinessPartnerBalanceJournalContract.class)
public class BusinessPartnerBalanceJournalCustomerContract extends BusinessLogic<IBusinessPartnerBalanceJournalContract, ICustomer> {

	/**
	 * 查找被影响的客户
	 */
	@Override
	protected ICustomer fetchBeAffected(IBusinessPartnerBalanceJournalContract Contract) {
		ICriteria criteria = Criteria.create();
		ICondition condition = criteria.getConditions().create();
		// 条件业务伙伴编码
		condition.setAlias(Customer.PROPERTY_CODE.getName());
		condition.setValue(Contract.getBusinessPartnerCode());
		condition.setOperation(ConditionOperation.EQUAL);
		// 先在事物缓存里查
		ICustomer customer = super.fetchBeAffected(criteria, ICustomer.class);
		if (customer == null) {
			// 事务里不存在
			IBORepositoryBusinessPartnerApp boRepository = new BORepositoryBusinessPartner();
			boRepository.setRepository(this.getRepository());
			IOperationResult<ICustomer> operationResult = boRepository.fetchCustomer(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicsException(operationResult.getError());
			}
			if (operationResult.getResultCode() != 0) {
				throw new BusinessLogicsException(operationResult.getMessage());
			}
			customer = operationResult.getResultObjects().firstOrDefault();
		}
		return customer;
	}

	/**
	 * 正向逻辑
	 */	
	@Override
	protected void impact(IBusinessPartnerBalanceJournalContract Contract) {
		ICustomer customer = this.getBeAffected();
		Decimal Balance=customer.getBalance();
		Decimal Amount=Contract.getReciptAndPaymentAmount();
		emDirection Direction= Contract.getReciptAndPaymentDirection();
		if(Amount.abs().compareTo(new Decimal(0))==1 &&Direction==emDirection.IN ){
			Balance=Balance.add(Amount);
		}
		if(Amount.abs().compareTo(new Decimal(0))==1 &&Direction==emDirection.OUT ){
			Balance=Balance.subtract(Amount);
		}
	}

	/**
	 *反向逻辑
	 */
	@Override
	protected void revoke(IBusinessPartnerBalanceJournalContract Contract) {
		ICustomer customer = this.getBeAffected();
		Decimal Balance=customer.getBalance();
		Decimal Amount=Contract.getReciptAndPaymentAmount();
		emDirection Direction= Contract.getReciptAndPaymentDirection();
		if(Amount.abs().compareTo(new Decimal(0))==1 &&Direction==emDirection.IN ){
			Balance=Balance.subtract(Amount);
		}
		if(Amount.abs().compareTo(new Decimal(0))==1 &&Direction==emDirection.OUT ){
			Balance=Balance.add(Amount);
		}		
	}

}

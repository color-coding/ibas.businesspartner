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
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.businesspartner.repository.IBORepositoryBusinessPartnerApp;
/**
 * 业务伙伴余额记录影响供应商余额的契约
 * @author Allen.Zhang
 *
 */
@LogicContract(IBusinessPartnerBalanceJournalSupplierContract.class)
public class BusinessPartnerBalanceJournalSupplierContract extends BusinessLogic<IBusinessPartnerBalanceJournalSupplierContract, ISupplier> {

	/**
	 * 查找被影响的供应商
	 */
	@Override
	protected ISupplier fetchBeAffected(IBusinessPartnerBalanceJournalSupplierContract Contract) {
		ICriteria criteria = Criteria.create();
		ICondition condition = criteria.getConditions().create();
		// 条件业务伙伴编码
		condition.setAlias(Supplier.PROPERTY_CODE.getName());
		condition.setValue(Contract.getBusinessPartnerCode());
		condition.setOperation(ConditionOperation.EQUAL);
		// 先在事物缓存里查
		ISupplier supplier = super.fetchBeAffected(criteria, ISupplier.class);
		if (supplier == null) {
			// 事务里不存在
			IBORepositoryBusinessPartnerApp boRepository = new BORepositoryBusinessPartner();
			boRepository.setRepository(this.getRepository());
			IOperationResult<ISupplier> operationResult = boRepository.fetchSupplier(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			if (operationResult.getResultCode() != 0) {
				throw new BusinessLogicException(operationResult.getMessage());
			}
			supplier = operationResult.getResultObjects().firstOrDefault();
		}
		return supplier;
	}

	/**
	 * 正向逻辑
	 */	
	@Override
	protected void impact(IBusinessPartnerBalanceJournalSupplierContract Contract) {
		ISupplier supplier = this.getBeAffected();
		if (supplier==null) return;
		Decimal Balance=supplier.getBalance();
		Decimal Amount=Contract.getAmount();
		emDirection Direction= Contract.getDirection();
		if(Direction==emDirection.IN ){
			Balance=Balance.add(Amount);
			supplier.setBalance(Balance);
		}
		if(Direction==emDirection.OUT ){
			Balance=Balance.subtract(Amount);
			supplier.setBalance(Balance);
		}
	}

	/**
	 *反向逻辑
	 */
	@Override
	protected void revoke(IBusinessPartnerBalanceJournalSupplierContract Contract) {
		ISupplier supplier = this.getBeAffected();
		if (supplier==null) return;
		Decimal Balance=supplier.getBalance();
		Decimal Amount=Contract.getAmount();
		emDirection Direction= Contract.getDirection();
		if(Direction==emDirection.IN ){
			Balance=Balance.subtract(Amount);
			supplier.setBalance(Balance);
		}
		if(Direction==emDirection.OUT ){
			Balance=Balance.add(Amount);
			supplier.setBalance(Balance);
		}
	}

}

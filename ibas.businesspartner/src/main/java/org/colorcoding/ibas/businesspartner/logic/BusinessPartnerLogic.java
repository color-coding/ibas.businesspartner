package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.bo.IBusinessObject;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;

/**
 * 业务伙伴服务
 * 
 * @author Niuren.Zhu
 *
 */
public abstract class BusinessPartnerLogic<C extends IBusinessLogicContract, B extends IBusinessObject>
		extends BusinessLogic<C, B> {

	protected ICustomer checkCustomer(String bpCode) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(Customer.PROPERTY_CODE.getName());
		condition.setValue(bpCode);
		condition.setOperation(ConditionOperation.EQUAL);
		ICustomer customer = super.fetchBeAffected(criteria, ICustomer.class);
		if (customer == null) {
			BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
			boRepository.setRepository(super.getRepository());
			IOperationResult<ICustomer> operationResult = boRepository.fetchCustomer(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			customer = operationResult.getResultObjects().firstOrDefault();
		}
		// 客户不存在
		if (customer == null) {
			throw new BusinessLogicException(I18N.prop("msg_bp_customer_is_not_exist", bpCode == null ? "" : bpCode));
		}
		// 客户是否可用
		if (customer.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(
					I18N.prop("msg_bp_customer_is_unavailable", customer.getCode(), customer.getName()));
		}
		if (customer.getDeleted() == emYesNo.YES) {
			throw new BusinessLogicException(
					I18N.prop("msg_bp_customer_is_unavailable", customer.getCode(), customer.getName()));
		}
		return customer;
	}

	protected ISupplier checkSupplier(String bpCode) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(Supplier.PROPERTY_CODE.getName());
		condition.setValue(bpCode);
		condition.setOperation(ConditionOperation.EQUAL);
		ISupplier supplier = super.fetchBeAffected(criteria, ISupplier.class);
		if (supplier == null) {
			BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
			boRepository.setRepository(super.getRepository());
			IOperationResult<ISupplier> operationResult = boRepository.fetchSupplier(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			supplier = operationResult.getResultObjects().firstOrDefault();
		}
		// 供应商不存在
		if (supplier == null) {
			throw new BusinessLogicException(I18N.prop("msg_bp_supplier_is_not_exist", bpCode == null ? "" : bpCode));
		}
		// 供应商是否可用
		if (supplier.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(
					I18N.prop("msg_bp_supplier_is_unavailable", supplier.getCode(), supplier.getName()));
		}
		if (supplier.getDeleted() == emYesNo.YES) {
			throw new BusinessLogicException(
					I18N.prop("msg_bp_supplier_is_unavailable", supplier.getCode(), supplier.getName()));
		}
		return supplier;
	}
}

package org.colorcoding.ibas.businesspartner.logic.journalentry;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.data.Ledgers;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.initialfantasy.bo.organization.IOrganization;
import org.colorcoding.ibas.initialfantasy.bo.organization.Organization;
import org.colorcoding.ibas.initialfantasy.repository.BORepositoryInitialFantasy;

public class JournalEntrySmartContent extends org.colorcoding.ibas.accounting.logic.JournalEntrySmartContent {

	public JournalEntrySmartContent(Object sourceData) {
		super(sourceData);
	}

	@Override
	public Object getSourceDataPropertyValue(String property) {
		if (Ledgers.CONDITION_PROPERTY_CUSTOMER_GROUP.equals(property)) {
			String partner = String.valueOf(super.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_CUSTOMER));
			if (!JournalEntrySmartContent.VALUE_NULL.equalsIgnoreCase(partner)) {
				Criteria criteria = new Criteria();
				criteria.setResultCount(1);
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(Customer.PROPERTY_CODE.getName());
				condition.setValue(partner);
				BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
				boRepository.setRepository(this.getService().getRepository());
				IOperationResult<ICustomer> operationResult = boRepository.fetchCustomer(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				for (ICustomer item : operationResult.getResultObjects()) {
					return item.getGroup();
				}
			}
		} else if (Ledgers.CONDITION_PROPERTY_SUPPLIER_GROUP.equals(property)) {
			String partner = String.valueOf(super.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_SUPPLIER));
			if (!JournalEntrySmartContent.VALUE_NULL.equalsIgnoreCase(partner)) {
				Criteria criteria = new Criteria();
				criteria.setResultCount(1);
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(Supplier.PROPERTY_CODE.getName());
				condition.setValue(partner);
				BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
				boRepository.setRepository(this.getService().getRepository());
				IOperationResult<ISupplier> operationResult = boRepository.fetchSupplier(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				for (ISupplier item : operationResult.getResultObjects()) {
					return item.getGroup();
				}
			}
		} else if (Ledgers.CONDITION_PROPERTY_ORGANIZATION_CATEGORY.equals(property)) {
			String organization = String
					.valueOf(super.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_ORGANIZATION));
			if (!JournalEntrySmartContent.VALUE_NULL.equalsIgnoreCase(organization)) {
				Criteria criteria = new Criteria();
				criteria.setResultCount(1);
				ICondition condition = criteria.getConditions().create();
				condition.setAlias(Organization.PROPERTY_CODE.getName());
				condition.setValue(organization);
				BORepositoryInitialFantasy boRepository = new BORepositoryInitialFantasy();
				boRepository.setRepository(this.getService().getRepository());
				IOperationResult<IOrganization> operationResult = boRepository.fetchOrganization(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				for (IOrganization item : operationResult.getResultObjects()) {
					return item.getCategory();
				}
			}
		}
		return super.getSourceDataPropertyValue(property);
	}

}

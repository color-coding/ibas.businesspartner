package org.colorcoding.ibas.businesspartner.test.bo;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.businesspartner.bo.assetitem.AssetItem;
import org.colorcoding.ibas.businesspartner.bo.assetitem.IAssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.contactperson.IContactPerson;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;

import junit.framework.TestCase;

/**
 * 业务伙伴组 测试
 * 
 */
public class testBusinessPartnerAsset extends TestCase {
	/**
	 * 获取连接口令
	 */
	String getToken() {
		return OrganizationFactory.SYSTEM_USER.getToken();
	}

	public void testUsing() throws Exception {
		BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
		boRepository.setUserToken(this.getToken());
		IOperationResult<?> operationResult = null;
		String code = String.format("C%s", DateTime.getNow().getTime());
		IAssetItem assetItem = new AssetItem();
		assetItem.setCode(code);
		assetItem.setName(code);
		assetItem.setFaceAmount(100);
		assetItem.setAmountUnit("CNY");
		assetItem.setValidDays(10);
		assetItem.setUsingTimes(10);
		// assetItem.setRechargeable(emYesNo.NO); // 不可充值
		operationResult = boRepository.saveAssetItem(assetItem);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		ICustomer customer = new SuperCustomer();
		customer.setCode(code);
		customer.setName(code);
		operationResult = boRepository.saveCustomer(customer);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(BusinessPartnerAsset.PROPERTY_ASSETCODE.getName());
		condition.setValue(code);
		condition = criteria.getConditions().create();
		condition.setAlias(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE.getName());
		condition.setValue(code);
		condition = criteria.getConditions().create();
		condition.setAlias(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE.getName());
		condition.setValue(emBusinessPartnerType.CUSTOMER);
		operationResult = boRepository.fetchBusinessPartnerAsset(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		for (Object item : operationResult.getResultObjects()) {
			System.out.println(item.toString());
		}
		IBusinessPartnerAsset businessPartnerAsset = (IBusinessPartnerAsset) operationResult.getResultObjects()
				.firstOrDefault();
		IContactPerson contactPerson = new SuperContactPerson();
		contactPerson.setOwnerType(emBusinessPartnerType.CUSTOMER);
		contactPerson.setBusinessPartner(code);
		contactPerson.setName(businessPartnerAsset.getCode());
		operationResult = boRepository.saveContactPerson(contactPerson);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		criteria = new Criteria();
		condition = criteria.getConditions().create();
		condition.setAlias(BusinessPartnerAssetJournal.PROPERTY_SERVICECODE.getName());
		condition.setValue(contactPerson.getName());
		operationResult = boRepository.fetchBusinessPartnerAssetJournal(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		for (Object item : operationResult.getResultObjects()) {
			System.out.println(item.toString());
		}
	}

}

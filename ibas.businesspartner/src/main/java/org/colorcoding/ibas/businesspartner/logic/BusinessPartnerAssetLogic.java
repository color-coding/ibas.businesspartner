package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.bo.IBusinessObject;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.businesspartner.bo.assetitem.AssetItem;
import org.colorcoding.ibas.businesspartner.bo.assetitem.IAssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;

/**
 * 业务伙伴资产服务
 * 
 * @author Niuren.Zhu
 *
 */
public abstract class BusinessPartnerAssetLogic<C extends IBusinessLogicContract, B extends IBusinessObject>
		extends BusinessPartnerLogic<C, B> {

	protected IAssetItem checkAssetItem(String assetCode) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(AssetItem.PROPERTY_CODE.getName());
		condition.setValue(assetCode);
		condition.setOperation(ConditionOperation.EQUAL);
		IAssetItem assetItem = super.fetchBeAffected(criteria, IAssetItem.class);
		if (assetItem == null) {
			BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IAssetItem> operationResult = boRepository.fetchAssetItem(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			assetItem = operationResult.getResultObjects().firstOrDefault();
		}
		// 资产项目不存在
		if (assetItem == null) {
			throw new BusinessLogicException(
					String.format(I18N.prop("msg_bp_assetitem_is_not_exist"), assetCode == null ? "" : assetCode));
		}
		return assetItem;
	}

	protected IBusinessPartnerAsset checkBusinessPartnerAsset(String serviceCode) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(BusinessPartnerAsset.PROPERTY_SERVICECODE.getName());
		condition.setValue(serviceCode);
		condition.setOperation(ConditionOperation.EQUAL);
		IBusinessPartnerAsset businessPartnerAsset = super.fetchBeAffected(criteria, IBusinessPartnerAsset.class);
		if (businessPartnerAsset == null) {
			BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IBusinessPartnerAsset> operationResult = boRepository.fetchBusinessPartnerAsset(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			businessPartnerAsset = operationResult.getResultObjects().firstOrDefault();
		}
		// 业务伙伴资产不存在
		if (businessPartnerAsset == null) {
			throw new BusinessLogicException(String.format(I18N.prop("msg_bp_businesspartnerasset_is_not_exist"),
					serviceCode == null ? "" : serviceCode));
		}
		return businessPartnerAsset;
	}
}

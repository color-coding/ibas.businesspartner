package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.Strings;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.assetitem.IAssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;

/**
 * 业务伙伴资产，消耗服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IBusinessPartnerAssetConsumptionContract.class)
public class BusinessPartnerAssetConsumptionService
		extends BusinessPartnerAssetLogic<IBusinessPartnerAssetConsumptionContract, IBusinessPartnerAssetJournal> {

	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof IBusinessPartnerAssetConsumptionContract) {
			IBusinessPartnerAssetConsumptionContract contract = (IBusinessPartnerAssetConsumptionContract) data;
			if (Strings.isNullOrEmpty(contract.getServiceCode()) || contract.getServiceCode().startsWith("%")) {
				// 系统前缀，跳过
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						"ServiceCode", contract.getServiceCode());
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IBusinessPartnerAssetJournal fetchBeAffected(IBusinessPartnerAssetConsumptionContract contract) {
		// 检查单位是否一致
		IBusinessPartnerAsset businessPartnerAsset = this.checkBusinessPartnerAsset(contract.getServiceCode());
		IAssetItem assetItem = this.checkAssetItem(businessPartnerAsset.getAssetCode());
		if (assetItem.getAmountUnit() != null && !assetItem.getAmountUnit().isEmpty()) {
			if (!assetItem.getAmountUnit().equals(contract.getCurrency())) {
				throw new BusinessLogicException(I18N.prop("msg_bp_disagreement_unit_with_assetitem",
						assetItem.getName() == null ? assetItem.getCode() : assetItem.getName()));
			}
		}
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(BusinessPartnerAssetJournal.PROPERTY_SERVICECODE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getServiceCode());
		condition = criteria.getConditions().create();
		condition.setRelationship(ConditionRelationship.AND);
		condition.setAlias(BusinessPartnerAssetJournal.PROPERTY_DIRECTION.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(emDirection.OUT);
		condition = criteria.getConditions().create();
		condition.setRelationship(ConditionRelationship.AND);
		condition.setAlias(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTTYPE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentType());
		condition = criteria.getConditions().create();
		condition.setRelationship(ConditionRelationship.AND);
		condition.setAlias(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTENTRY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentEntry());
		condition = criteria.getConditions().create();
		condition.setRelationship(ConditionRelationship.AND);
		condition.setAlias(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTLINEID.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentLineId());

		IBusinessPartnerAssetJournal businessPartnerAssetJournal = this.fetchBeAffected(IBusinessPartnerAssetJournal.class, criteria);
		if (businessPartnerAssetJournal == null) {
			try (BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner()) {
				boRepository.setTransaction(this.getTransaction());
				IOperationResult<IBusinessPartnerAssetJournal> operationResult = boRepository
						.fetchBusinessPartnerAssetJournal(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				businessPartnerAssetJournal = operationResult.getResultObjects().firstOrDefault();
			}
		}
		if (businessPartnerAssetJournal == null) {
			businessPartnerAssetJournal = new BusinessPartnerAssetJournal();
			businessPartnerAssetJournal.setBaseDocumentType(contract.getBaseDocumentType());
			businessPartnerAssetJournal.setBaseDocumentEntry(contract.getBaseDocumentEntry());
			businessPartnerAssetJournal.setBaseDocumentLineId(contract.getBaseDocumentLineId());
			businessPartnerAssetJournal.setServiceCode(contract.getServiceCode());
			businessPartnerAssetJournal.setDirection(emDirection.OUT);
		}
		return businessPartnerAssetJournal;
	}

	@Override
	protected void impact(IBusinessPartnerAssetConsumptionContract contract) {
		this.getBeAffected().setAmount(contract.getAmount());
		this.getBeAffected().setTimes(contract.getTimes());
		if (this.getBeAffected().isDeleted()) {
			this.getBeAffected().undelete();
		}
	}

	@Override
	protected void revoke(IBusinessPartnerAssetConsumptionContract contract) {
		if (!this.getBeAffected().isDeleted()) {
			this.getBeAffected().delete();
		}
	}

}

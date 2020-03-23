package org.colorcoding.ibas.businesspartner.logic;

import java.util.UUID;

import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.assetitem.IAssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 业务伙伴资产创建服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IBusinessPartnerAssetCreationContract.class)
public class BusinessPartnerAssetCreationService
		extends BusinessPartnerAssetLogic<IBusinessPartnerAssetCreationContract, IBusinessPartnerAsset> {

	@Override
	protected IBusinessPartnerAsset fetchBeAffected(IBusinessPartnerAssetCreationContract contract) {
		if (contract.getBusinessPartnerType() == emBusinessPartnerType.CUSTOMER) {
			this.checkCustomer(contract.getBusinessPartnerCode());
		} else if (contract.getBusinessPartnerType() == emBusinessPartnerType.SUPPLIER) {
			this.checkSupplier(contract.getBusinessPartnerCode());
		}
		IAssetItem assetItem = this.checkAssetItem(contract.getAssetCode());
		IBusinessPartnerAsset businessPartnerAsset = new BusinessPartnerAsset();
		businessPartnerAsset.setCode(UUID.randomUUID().toString());
		businessPartnerAsset.setBusinessPartnerType(contract.getBusinessPartnerType());
		businessPartnerAsset.setBusinessPartnerCode(contract.getBusinessPartnerCode());
		businessPartnerAsset.setAssetCode(assetItem.getCode());
		businessPartnerAsset.setAssetGroup(assetItem.getGroup());
		businessPartnerAsset.setName(assetItem.getName());
		businessPartnerAsset.setAmount(assetItem.getFaceAmount());
		businessPartnerAsset.setTimes(assetItem.getUsingTimes());
		businessPartnerAsset.setAcquiredDate(DateTime.getToday());
		businessPartnerAsset.setValidDate(DateTime.getToday());
		if (assetItem.getValidDays() > 0) {
			businessPartnerAsset
					.setInvalidDate(businessPartnerAsset.getAcquiredDate().addDays(assetItem.getValidDays()));
		}
		businessPartnerAsset.setBaseDocumentType(contract.getBaseDocumentType());
		businessPartnerAsset.setBaseDocumentEntry(contract.getBaseDocumentEntry());
		businessPartnerAsset.setBaseDocumentLineId(contract.getBaseDocumentLineId());
		businessPartnerAsset.setTradingAmount(contract.getTradingAmount());
		businessPartnerAsset.setTradingCurrency(contract.getTradingCurrency());
		return businessPartnerAsset;
	}

	@Override
	protected void impact(IBusinessPartnerAssetCreationContract contract) {
		IBusinessPartnerAsset businessPartnerAsset = this.getBeAffected();
		businessPartnerAsset.setActivated(emYesNo.YES);
	}

	@Override
	protected void revoke(IBusinessPartnerAssetCreationContract contract) {
		IBusinessPartnerAsset businessPartnerAsset = this.getBeAffected();
		businessPartnerAsset.setActivated(emYesNo.NO);
	}

}

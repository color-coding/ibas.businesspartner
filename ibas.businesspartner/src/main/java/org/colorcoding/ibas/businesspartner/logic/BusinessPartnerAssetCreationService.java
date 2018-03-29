package org.colorcoding.ibas.businesspartner.logic;

import java.util.UUID;

import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.assetitem.IAssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
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
			ICustomer customer = this.checkCustomer(contract.getBusinessPartnerCode());
			if (customer.getDeleted() == emYesNo.YES || customer.getActivated() == emYesNo.NO) {
				throw new BusinessLogicException(String.format(I18N.prop("msg_bp_customer_is_not_exist"),
						customer.getName() == null ? customer.getCode() : customer.getName()));
			}
		} else if (contract.getBusinessPartnerType() == emBusinessPartnerType.SUPPLIER) {
			ISupplier supplier = this.checkSupplier(contract.getBusinessPartnerCode());
			if (supplier.getDeleted() == emYesNo.YES || supplier.getActivated() == emYesNo.NO) {
				throw new BusinessLogicException(String.format(I18N.prop("msg_bp_supplier_is_not_exist"),
						supplier.getName() == null ? supplier.getCode() : supplier.getName()));
			}
		}
		IAssetItem assetItem = this.checkAssetItem(contract.getAssetCode());
		if (assetItem.getDeleted() == emYesNo.YES || assetItem.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(String.format(I18N.prop("msg_bp_assetitem_is_not_exist"),
					assetItem.getName() == null ? assetItem.getCode() : assetItem.getName()));
		}
		IBusinessPartnerAsset businessPartnerAsset = new BusinessPartnerAsset();
		businessPartnerAsset.setCode(UUID.randomUUID().toString());
		businessPartnerAsset.setBusinessPartnerType(contract.getBusinessPartnerType());
		businessPartnerAsset.setBusinessPartnerCode(contract.getBusinessPartnerCode());
		businessPartnerAsset.setAssetCode(assetItem.getCode());
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

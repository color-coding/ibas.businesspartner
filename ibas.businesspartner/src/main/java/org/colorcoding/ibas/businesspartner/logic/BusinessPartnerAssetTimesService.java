package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.assetitem.IAssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 业务伙伴资产，剩余价值服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(IBusinessPartnerAssetTimesContract.class)
public class BusinessPartnerAssetTimesService
		extends BusinessPartnerAssetLogic<IBusinessPartnerAssetTimesContract, IBusinessPartnerAsset> {

	@Override
	protected IBusinessPartnerAsset fetchBeAffected(IBusinessPartnerAssetTimesContract contract) {
		// 检查业务伙伴资产状态
		IBusinessPartnerAsset businessPartnerAsset = this.checkBusinessPartnerAsset(contract.getServiceCode());
		if (businessPartnerAsset.getDeleted() == emYesNo.YES || businessPartnerAsset.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(String.format(I18N.prop("msg_bp_businesspartnerasset_is_unavailable"),
					businessPartnerAsset.getBusinessPartnerCode(), businessPartnerAsset.getAssetCode()));
		}
		DateTime today = DateTime.getToday();
		if (today.before(businessPartnerAsset.getValidDate()) || today.after(businessPartnerAsset.getInvalidDate())) {
			throw new BusinessLogicException(String.format(I18N.prop("msg_bp_businesspartnerasset_is_unavailable"),
					businessPartnerAsset.getBusinessPartnerCode(), businessPartnerAsset.getAssetCode()));
		}
		// 检查业务伙伴状态
		if (businessPartnerAsset.getBusinessPartnerType() == emBusinessPartnerType.CUSTOMER) {
			ICustomer customer = this.checkCustomer(businessPartnerAsset.getBusinessPartnerCode());
			if (customer.getDeleted() == emYesNo.YES || customer.getActivated() == emYesNo.NO) {
				throw new BusinessLogicException(String.format(I18N.prop("msg_bp_customer_is_not_exist"),
						customer.getName() == null ? customer.getCode() : customer.getName()));
			}
		} else if (businessPartnerAsset.getBusinessPartnerType() == emBusinessPartnerType.SUPPLIER) {
			ISupplier supplier = this.checkSupplier(businessPartnerAsset.getBusinessPartnerCode());
			if (supplier.getDeleted() == emYesNo.YES || supplier.getActivated() == emYesNo.NO) {
				throw new BusinessLogicException(String.format(I18N.prop("msg_bp_supplier_is_not_exist"),
						supplier.getName() == null ? supplier.getCode() : supplier.getName()));
			}
		}
		// 检查资产项目状态
		IAssetItem assetItem = this.checkAssetItem(businessPartnerAsset.getAssetCode());
		if (assetItem.getDeleted() == emYesNo.YES || assetItem.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(String.format(I18N.prop("msg_bp_assetitem_is_not_exist"),
					assetItem.getName() == null ? assetItem.getCode() : assetItem.getName()));
		}
		return businessPartnerAsset;
	}

	@Override
	protected void impact(IBusinessPartnerAssetTimesContract contract) {
		if (contract.getDirection() == emDirection.IN) {
			this.getBeAffected().setTimes(this.getBeAffected().getTimes() + contract.getTimes());
		} else if (contract.getDirection() == emDirection.OUT) {
			this.getBeAffected().setTimes(this.getBeAffected().getTimes() - contract.getTimes());
			if (this.getBeAffected().getTimes() < 0) {
				IAssetItem assetItem = this.checkAssetItem(this.getBeAffected().getAssetCode());
				throw new BusinessLogicException(String.format(I18N.prop("msg_bp_businesspartnerasset_exceeding_times"),
						this.getBeAffected().getBusinessPartnerCode(), this.getBeAffected().getAssetCode(),
						assetItem.getUsingTimes()));
			}
		}
	}

	@Override
	protected void revoke(IBusinessPartnerAssetTimesContract contract) {
		if (contract.getDirection() == emDirection.IN) {
			this.getBeAffected().setTimes(this.getBeAffected().getTimes() - contract.getTimes());
		} else if (contract.getDirection() == emDirection.OUT) {
			this.getBeAffected().setTimes(this.getBeAffected().getTimes() + contract.getTimes());
		}
	}

}

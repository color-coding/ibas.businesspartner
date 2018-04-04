package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;

/**
 * 供应商检查服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(ISupplierCheckContract.class)
public class SupplierCheckService extends BusinessPartnerLogic<ISupplierCheckContract, ISupplier> {

	@Override
	protected ISupplier fetchBeAffected(ISupplierCheckContract contract) {
		ISupplier supplier = this.checkSupplier(contract.getSupplierCode());
		if (supplier.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(
					String.format(I18N.prop("msg_bp_supplier_is_unavailable"), supplier.getCode(), supplier.getName()));
		}
		if (supplier.getDeleted() == emYesNo.YES) {
			throw new BusinessLogicException(
					String.format(I18N.prop("msg_bp_supplier_is_unavailable"), supplier.getCode(), supplier.getName()));
		}
		return supplier;
	}

	@Override
	protected void impact(ISupplierCheckContract contract) {
		if (this.getBeAffected().getReferenced() == emYesNo.NO) {
			this.getBeAffected().setReferenced(emYesNo.YES);
		}
	}

	@Override
	protected void revoke(ISupplierCheckContract contract) {
	}

}

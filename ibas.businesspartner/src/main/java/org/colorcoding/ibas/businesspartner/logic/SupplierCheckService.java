package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.data.emYesNo;
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
		return this.checkSupplier(contract.getSupplierCode());
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

package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;

/**
 * 客户检查服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(ICustomerCheckContract.class)
public class CustomerCheckService extends BusinessPartnerLogic<ICustomerCheckContract, ICustomer> {

	@Override
	protected ICustomer fetchBeAffected(ICustomerCheckContract contract) {
		return this.checkCustomer(contract.getCustomerCode());
	}

	@Override
	protected void impact(ICustomerCheckContract contract) {
		if (this.getBeAffected().getReferenced() == emYesNo.NO) {
			this.getBeAffected().setReferenced(emYesNo.YES);
		}
	}

	@Override
	protected void revoke(ICustomerCheckContract contract) {
	}

}

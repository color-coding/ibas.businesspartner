package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
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
		ICustomer customer = this.checkCustomer(contract.getCustomerCode());
		if (customer.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(
					String.format(I18N.prop("msg_bp_customer_is_unavailable"), customer.getCode(), customer.getName()));
		}
		if (customer.getDeleted() == emYesNo.YES) {
			throw new BusinessLogicException(
					String.format(I18N.prop("msg_bp_customer_is_unavailable"), customer.getCode(), customer.getName()));
		}
		return customer;
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

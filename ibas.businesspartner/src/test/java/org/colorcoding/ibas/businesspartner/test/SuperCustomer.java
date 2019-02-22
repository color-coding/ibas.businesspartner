package org.colorcoding.ibas.businesspartner.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicsHost;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;
import org.colorcoding.ibas.businesspartner.logic.IBusinessPartnerAssetCreationContract;

public class SuperCustomer extends Customer implements IBusinessLogicsHost {

	private static final long serialVersionUID = -252283912562130946L;

	@Override
	public IBusinessLogicContract[] getContracts() {
		return new IBusinessLogicContract[] { new IBusinessPartnerAssetCreationContract() {

			@Override
			public emBusinessPartnerType getBusinessPartnerType() {
				return emBusinessPartnerType.CUSTOMER;
			}

			@Override
			public String getBusinessPartnerCode() {
				return SuperCustomer.this.getCode();
			}

			@Override
			public String getAssetCode() {
				return SuperCustomer.this.getCode();
			}

			@Override
			public String getBaseDocumentType() {
				return SuperCustomer.this.getObjectCode();
			}

			@Override
			public Integer getBaseDocumentEntry() {
				return SuperCustomer.this.getDocEntry();
			}

			@Override
			public Integer getBaseDocumentLineId() {
				return 0;
			}

			@Override
			public BigDecimal getTradingAmount() {
				return Decimal.ONE;
			}

			@Override
			public String getTradingCurrency() {
				return "CNY";
			}

			@Override
			public String getIdentifiers() {
				return SuperCustomer.this.getIdentifiers();
			}
		} };
	}

}

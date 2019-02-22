package org.colorcoding.ibas.businesspartner.test;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicsHost;
import org.colorcoding.ibas.businesspartner.bo.contactperson.ContactPerson;
import org.colorcoding.ibas.businesspartner.logic.IBusinessPartnerAssetConsumptionContract;
import org.colorcoding.ibas.businesspartner.logic.IBusinessPartnerAssetIncreasesContract;

public class SuperContactPerson extends ContactPerson implements IBusinessLogicsHost {

	private static final long serialVersionUID = 899711534281980269L;

	@Override
	public IBusinessLogicContract[] getContracts() {
		return new IBusinessLogicContract[] {

				new IBusinessPartnerAssetIncreasesContract() {

					@Override
					public String getIdentifiers() {
						return SuperContactPerson.this.getIdentifiers();
					}

					@Override
					public String getServiceCode() {
						return SuperContactPerson.this.getName();
					}

					@Override
					public String getCurrency() {
						return "CNY";
					}

					@Override
					public String getBaseDocumentType() {
						return SuperContactPerson.this.getObjectCode();
					}

					@Override
					public Integer getBaseDocumentEntry() {
						return SuperContactPerson.this.getObjectKey();
					}

					@Override
					public Integer getBaseDocumentLineId() {
						return -1;
					}

					@Override
					public BigDecimal getAmount() {
						return Decimal.valueOf(10);
					}

				},

				new IBusinessPartnerAssetConsumptionContract() {

					@Override
					public String getIdentifiers() {
						return SuperContactPerson.this.getIdentifiers();
					}

					@Override
					public String getServiceCode() {
						return SuperContactPerson.this.getName();
					}

					@Override
					public String getCurrency() {
						return "CNY";
					}

					@Override
					public String getBaseDocumentType() {
						return SuperContactPerson.this.getObjectCode();
					}

					@Override
					public Integer getBaseDocumentEntry() {
						return SuperContactPerson.this.getObjectKey();
					}

					@Override
					public Integer getBaseDocumentLineId() {
						return -1;
					}

					@Override
					public BigDecimal getAmount() {
						return Decimal.valueOf(20);
					}

				}

		};
	}

}

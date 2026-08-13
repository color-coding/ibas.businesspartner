package org.colorcoding.ibas.businesspartner.data;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = "CustomerAsset")
@XmlRootElement(name = "CustomerAsset")
public class CustomerAsset extends Asset {

	private static final long serialVersionUID = -1068507982125625211L;

	private String customer;

	@XmlElement(name = "Customer")
	public final String getCustomer() {
		return customer;
	}

	public final void setCustomer(String customer) {
		this.customer = customer;
	}
}

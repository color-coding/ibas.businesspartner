package org.colorcoding.ibas.businesspartner.data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

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

package org.colorcoding.ibas.businesspartner.data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = "SupplierAsset")
@XmlRootElement(name = "SupplierAsset")
public class SupplierAsset extends Asset {

	private static final long serialVersionUID = -1068507982125625211L;

	private String supplier;

	@XmlElement(name = "Supplier")
	public final String getSupplier() {
		return supplier;
	}

	public final void setSupplier(String supplier) {
		this.supplier = supplier;
	}
}

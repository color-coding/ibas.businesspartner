package org.colorcoding.ibas.businesspartner.data;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;

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

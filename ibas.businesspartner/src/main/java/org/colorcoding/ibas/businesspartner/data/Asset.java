package org.colorcoding.ibas.businesspartner.data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.serialization.Serializable;

/**
 * 业务伙伴资产
 * 
 * @author Niuren.Zhu
 *
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = "Asset")
@XmlRootElement(name = "Asset")
public class Asset extends Serializable {

	private static final long serialVersionUID = 8095434432799063093L;

	private String code;

	@XmlElement(name = "Code")
	public final String getCode() {
		return code;
	}

	public final void setCode(String code) {
		this.code = code;
	}

	private String name;

	@XmlElement(name = "Name")
	public final String getName() {
		return name;
	}

	public final void setName(String name) {
		this.name = name;
	}

	private String picture;

	@XmlElement(name = "Picture")
	public final String getPicture() {
		return picture;
	}

	public final void setPicture(String picture) {
		this.picture = picture;
	}

	private DateTime validDate;

	@XmlElement(name = "ValidDate")
	public final DateTime getValidDate() {
		return validDate;
	}

	public final void setValidDate(DateTime validDate) {
		this.validDate = validDate;
	}

	private DateTime invalidDate;

	@XmlElement(name = "InvalidDate")
	public final DateTime getInvalidDate() {
		return invalidDate;
	}

	public final void setInvalidDate(DateTime invalidDate) {
		this.invalidDate = invalidDate;
	}

	private Decimal amount;

	@XmlElement(name = "Amount")
	public final Decimal getAmount() {
		return amount;
	}

	public final void setAmount(Decimal amount) {
		this.amount = amount;
	}

	private String unit;

	@XmlElement(name = "Unit")
	public final String getUnit() {
		return unit;
	}

	public final void setUnit(String unit) {
		this.unit = unit;
	}

	private Integer times;

	@XmlElement(name = "Times")
	public final Integer getTimes() {
		return times;
	}

	public final void setTimes(Integer times) {
		this.times = times;
	}

	private Decimal discount;

	@XmlElement(name = "Discount")
	public final Decimal getDiscount() {
		return discount;
	}

	public final void setDiscount(Decimal discount) {
		this.discount = discount;
	}
}

package org.colorcoding.ibas.businesspartner.data;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.serialization.Serializable;

/**
 * 资产请求
 * 
 * @author Niuren.Zhu
 *
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = "AssetRequest")
@XmlRootElement(name = "AssetRequest")
public class AssetRequest extends Serializable {

	private static final long serialVersionUID = 7471914213336797650L;

	private String businessPartner;

	@XmlElement(name = "BusinessPartner")
	public final String getBusinessPartner() {
		return businessPartner;
	}

	public final void setBusinessPartner(String businessPartner) {
		this.businessPartner = businessPartner;
	}

	private String documentType;

	@XmlElement(name = "DocumentType")
	public final String getDocumentType() {
		return documentType;
	}

	public final void setDocumentType(String documentType) {
		this.documentType = documentType;
	}

	private Integer documentEntry;

	@XmlElement(name = "DocumentEntry")
	public final Integer getDocumentEntry() {
		return documentEntry;
	}

	public final void setDocumentEntry(Integer documentEntry) {
		this.documentEntry = documentEntry;
	}

	private Integer documentLineId;

	@XmlElement(name = "DocumentLineId")
	public final Integer getDocumentLineId() {
		return documentLineId;
	}

	public final void setDocumentLineId(Integer documentLineId) {
		this.documentLineId = documentLineId;
	}

	private BigDecimal total;

	@XmlElement(name = "Total")
	public final BigDecimal getTotal() {
		return total;
	}

	public final void setTotal(BigDecimal total) {
		this.total = total;
	}

	private String currency;

	@XmlElement(name = "Currency")
	public final String getCurrency() {
		return currency;
	}

	public final void setCurrency(String currency) {
		this.currency = currency;
	}

}

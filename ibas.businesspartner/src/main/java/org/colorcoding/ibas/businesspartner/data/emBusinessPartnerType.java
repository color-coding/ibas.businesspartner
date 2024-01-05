package org.colorcoding.ibas.businesspartner.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.mapping.Value;
import org.colorcoding.ibas.businesspartner.MyConfiguration;

/**
 * 业务伙伴类型
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emBusinessPartnerType {

	/**
	 * 客户
	 */
	@Value("C")
	CUSTOMER,
	/**
	 * 供应商
	 */
	@Value("S")
	SUPPLIER,
	/**
	 * 潜在客户
	 */
	@Value("L")
	LEAD,
}

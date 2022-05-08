package org.colorcoding.ibas.businesspartner.data;

import org.colorcoding.ibas.bobas.mapping.Value;

/**
 * 业务伙伴类型
 * 
 * @author Niuren.Zhu
 *
 */
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

package org.colorcoding.ibas.businesspartner.data;

import org.colorcoding.ibas.bobas.mapping.Value;

/**
 * 业务伙伴性质
 * 
 * @author Niuren.Zhu
 *
 */
public enum emBusinessPartnerNature {

	/**
	 * 公司
	 */
	@Value("C")
	COMPANY,
	/**
	 * 私人
	 */
	@Value("P")
	PRIVATE,
}

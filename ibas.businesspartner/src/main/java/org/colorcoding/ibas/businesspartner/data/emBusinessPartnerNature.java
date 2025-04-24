package org.colorcoding.ibas.businesspartner.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.common.Value;
import org.colorcoding.ibas.businesspartner.MyConfiguration;

/**
 * 业务伙伴性质
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
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

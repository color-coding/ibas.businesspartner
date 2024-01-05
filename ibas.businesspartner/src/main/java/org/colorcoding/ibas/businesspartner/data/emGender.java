package org.colorcoding.ibas.businesspartner.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.mapping.Value;
import org.colorcoding.ibas.businesspartner.MyConfiguration;

/**
 * 性别
 * 
 * @author Niuren.Zhu
 *
 */
@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emGender {

	/**
	 * 男
	 */
	@Value("M")
	MALE,
	/**
	 * 女
	 */
	@Value("F")
	FEMALE,
}

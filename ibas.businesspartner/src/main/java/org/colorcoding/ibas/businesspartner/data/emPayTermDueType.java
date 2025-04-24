package org.colorcoding.ibas.businesspartner.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.common.Value;
import org.colorcoding.ibas.businesspartner.MyConfiguration;

@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emPayTermDueType {
	/**
	 * 无
	 */
	@Value("N")
	NONE,
	/**
	 * 月初
	 */
	@Value("S")
	MONTH_START,
	/**
	 * 月中
	 */
	@Value("H")
	MONTH_HALF,
	/**
	 * 月末
	 */
	@Value("E")
	MONTH_END,
}

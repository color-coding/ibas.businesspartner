package org.colorcoding.ibas.businesspartner.data;

import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.common.Value;
import org.colorcoding.ibas.businesspartner.MyConfiguration;

@XmlType(namespace = MyConfiguration.NAMESPACE_BO)
public enum emDueDateBaseOn {
	/**
	 * 单据日期
	 */
	@Value("D")
	DOCUMENT_DATE,
	/**
	 * 过账日期
	 */
	@Value("P")
	POSTING_DATE,
	/**
	 * 系统日期
	 */
	@Value("S")
	SYSTEM_DATE,
}

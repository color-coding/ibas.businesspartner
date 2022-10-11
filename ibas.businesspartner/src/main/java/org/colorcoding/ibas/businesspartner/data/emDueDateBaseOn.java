package org.colorcoding.ibas.businesspartner.data;

import org.colorcoding.ibas.bobas.mapping.Value;

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

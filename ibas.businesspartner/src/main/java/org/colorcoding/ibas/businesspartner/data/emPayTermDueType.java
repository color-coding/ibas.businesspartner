package org.colorcoding.ibas.businesspartner.data;

import org.colorcoding.ibas.bobas.mapping.Value;

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

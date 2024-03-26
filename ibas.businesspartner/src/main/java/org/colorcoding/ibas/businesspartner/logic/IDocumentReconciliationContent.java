package org.colorcoding.ibas.businesspartner.logic;

import java.math.BigDecimal;

public interface IDocumentReconciliationContent {

	/**
	 * 获取-业务伙伴/科目代码
	 * 
	 * @return 值
	 */
	String getShortName();

	/**
	 * 单据类型
	 * 
	 * @return
	 */
	String getBaseDocumentType();

	/**
	 * 单据编号
	 * 
	 * @return
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 获取-源单据行号
	 * 
	 * @return 值
	 */
	default Integer getBaseDocumentLineId() {
		return 0;
	}

	/**
	 * 获取-金额
	 * 
	 * @return 值
	 */
	BigDecimal getAmount();

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	String getCurrency();

}

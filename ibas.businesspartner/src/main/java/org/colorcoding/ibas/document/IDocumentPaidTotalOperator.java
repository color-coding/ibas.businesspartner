package org.colorcoding.ibas.document;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBODocument;

/**
 * 单据付款总计操作者
 * 
 * @author Niuren.Zhu
 *
 */
public interface IDocumentPaidTotalOperator extends IBODocument {

	/**
	 * 获取单据货币
	 * 
	 * @return
	 */
	String getDocumentCurrency();

	/**
	 * 获取单据货币汇率
	 * 
	 * @return
	 */
	BigDecimal getDocumentRate();

	/**
	 * 获取已付金额
	 * 
	 * @return
	 */
	BigDecimal getPaidTotal();

	/**
	 * 设置已付金额
	 * 
	 * @param value
	 */
	void setPaidTotal(BigDecimal value);
}

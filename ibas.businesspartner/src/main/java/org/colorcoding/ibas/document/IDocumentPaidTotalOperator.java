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

	String getDocumentCurrency();

	BigDecimal getDocumentRate();

	BigDecimal getPaidTotal();

	void setPaidTotal(BigDecimal value);
}

package org.colorcoding.ibas.businesspartner.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 单据付款契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IDocumentPaidTotalContract extends IBusinessLogicContract {

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
	 * 金额
	 * 
	 * @return
	 */
	BigDecimal getAmount();

	/**
	 * 币种
	 * 
	 * @return
	 */
	String getCurrency();

	/**
	 * 汇率
	 * 
	 * @return
	 */
	BigDecimal getRate();
}

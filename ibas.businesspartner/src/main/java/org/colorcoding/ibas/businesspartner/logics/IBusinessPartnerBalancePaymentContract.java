package org.colorcoding.ibas.businesspartner.logics;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logics.IBusinessLogicContract;
/**
 * 获取业务伙伴余额受付款影响的契约
 * @author Allen.Zhang
 *
 */
public interface IBusinessPartnerBalancePaymentContract extends IBusinessLogicContract{
	 /**
     * 获取付款业务伙伴编号
     * @return
     */
	String getPaymentBusinessPartnerCode();
	
	/**
	 * 获取付款业务伙伴名称
	 * @return
	 */
	String getPaymentBusinessPartnerName();
	
	/**
	 * 获取付款金额
	 * @return
	 */
	Decimal getPaymentAmount();
	
	/**
	 * 获取汇率
	 * @return
	 */
	Decimal getPaymentRate();
	
	/**
	 * 获取币种
	 * @return
	 */
	String getPaymentCurrency();
	
	/**
	 * 获取银行编码
	 * @return
	 */
	String getPaymentBankCode();
	
	/**
	 * 获取卡号
	 * @return
	 */
	String getPaymentCardNumber();
		
	/**
	 * 获取基础单据类型
	 * @return
	 */
	String getPaymentBaseDocumentType();
	
	/**
	 * 获取基础单据编号
	 * @return
	 */
	Integer getPaymentBaseDocumentEntry();
	
	/**
	 * 获取基础单据行号
	 * @return
	 */
	Integer getPaymentBaseDocumentLineId();
}

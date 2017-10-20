package org.colorcoding.ibas.businesspartner.logics;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logics.IBusinessLogicContract;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 获取付款影响业务伙伴余额记录的契约
 * @author Allen.Zhang
 *
 */
public interface IPaymentBusinessPartnerBalanceJournalContract extends IBusinessLogicContract{
	/***
	 * 获取付款业务伙伴类型
	 * @return
	 */
	emBusinessPartnerType getBusinessPartnerType();

	/**
     * 获取付款业务伙伴编号
     * @return
     */
	String getBusinessPartnerCode();
	
	/**
	 * 获取付款业务伙伴名称
	 * @return
	 */
	String getBusinessPartnerName();
	
	/**
	 * 获取付款金额
	 * @return
	 */
	Decimal getAmount();
	
	/**
	 * 获取汇率
	 * @return
	 */
	Decimal getRate();
	
	/**
	 * 获取币种
	 * @return
	 */
	String getCurrency();
	
	/**
	 * 获取银行编码
	 * @return
	 */
	String getBankCode();
	
	/**
	 * 获取卡号
	 * @return
	 */
	String getCardNumber();
		
	/**
	 * 获取基础单据类型
	 * @return
	 */
	String getBaseDocumentType();
	
	/**
	 * 获取基础单据编号
	 * @return
	 */
	Integer getBaseDocumentEntry();
	
	/**
	 * 获取基础单据行号
	 * @return
	 */
	Integer getBaseDocumentLineId();
}

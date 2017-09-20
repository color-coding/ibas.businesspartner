package org.colorcoding.ibas.businesspartner.logics;
import org.colorcoding.ibas.bobas.logics.IBusinessLogicContract;
import org.colorcoding.ibas.bobas.data.Decimal;

/**
 * 获取业务伙伴余额受收款影响的契约
 * @author Allen.Zhang
 *
 */
public interface IBusinessPartnerBalanceReceiptContract extends IBusinessLogicContract{
	    /**
	     * 获取收款业务伙伴编号
	     * @return
	     */
		String getReceiptBusinessPartnerCode();
		
		/**
		 * 获取收款业务伙伴名称
		 * @return
		 */
		String getReceiptBusinessPartnerName();
		
		/**
		 * 获取收款金额
		 * @return
		 */
		Decimal getReceiptAmount();
		
		/**
		 * 获取汇率
		 * @return
		 */
		Decimal getReceiptRate();
		
		/**
		 * 获取币种
		 * @return
		 */
		String getReceiptCurrency();
		
		/**
		 * 获取银行编码
		 * @return
		 */
		String getReceiptBankCode();
		
		/**
		 * 获取卡号
		 * @return
		 */
		String getReceiptCardNumber();
			
		/**
		 * 获取基础单据类型
		 * @return
		 */
		String getReceiptBaseDocumentType();
		
		/**
		 * 获取基础单据编号
		 * @return
		 */
		Integer getReceiptBaseDocumentEntry();
		
		/**
		 * 获取基础单据行号
		 * @return
		 */
		Integer getReceiptBaseDocumentLineId();
}

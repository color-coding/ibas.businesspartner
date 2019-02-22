package org.colorcoding.ibas.businesspartner.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 业务伙伴资产创建契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IBusinessPartnerAssetCreationContract extends IBusinessLogicContract {

	/**
	 * 业务伙伴类型
	 * 
	 * @return 值
	 */
	emBusinessPartnerType getBusinessPartnerType();

	/**
	 * 业务伙伴编码
	 * 
	 * @return 值
	 */
	String getBusinessPartnerCode();

	/**
	 * 资产项目
	 * 
	 * @return 值
	 */
	String getAssetCode();

	/**
	 * 基于类型
	 * 
	 * @return 值
	 */
	String getBaseDocumentType();

	/**
	 * 基于标识
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 基于行号
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentLineId();

	/**
	 * 交易金额
	 * 
	 * @return 值
	 */
	BigDecimal getTradingAmount();

	/**
	 * 交易货币
	 * 
	 * @return 值
	 */
	String getTradingCurrency();
}

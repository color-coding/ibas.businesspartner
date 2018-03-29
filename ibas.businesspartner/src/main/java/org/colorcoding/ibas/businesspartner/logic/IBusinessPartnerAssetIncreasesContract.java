package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.businesspartner.MyConfiguration;

/**
 * 业务伙伴资产增加契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IBusinessPartnerAssetIncreasesContract extends IBusinessLogicContract {
	/**
	 * 资产方式标记
	 */
	static final String ASSET_MODE_SIGN = MyConfiguration.ASSET_MODE_INTERNAL_BP_ASSET;

	/**
	 * 服务码
	 * 
	 * @return 值
	 */
	String getServiceCode();

	/**
	 * 交易额
	 * 
	 * @return 值
	 */
	Decimal getAmount();

	/**
	 * 币种
	 * 
	 * @return 值
	 */
	String getCurrency();

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

}

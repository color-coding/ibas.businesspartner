package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 业务伙伴资产剩余次数契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IBusinessPartnerAssetTimesContract extends IBusinessLogicContract {
	/**
	 * 业务伙伴资产码
	 * 
	 * @return 值
	 */
	String getServiceCode();

	/**
	 * 方向
	 * 
	 * @return 值
	 */
	emDirection getDirection();

	/**
	 * 交易次数
	 * 
	 * @return 值
	 */
	Integer getTimes();

}

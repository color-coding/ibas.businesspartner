package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 客户检查契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface ICustomerCheckContract extends IBusinessLogicContract {

	/**
	 * 客户编码
	 * 
	 * @return
	 */
	String getCustomerCode();

	/**
	 * 获取-客户名称
	 * 
	 * @return 值
	 */
	String getCustomerName();

	/**
	 * 设置-客户名称
	 * 
	 * @param value 值
	 */
	void setCustomerName(String value);

}

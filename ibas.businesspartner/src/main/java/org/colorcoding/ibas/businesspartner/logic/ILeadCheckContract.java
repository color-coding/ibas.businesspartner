package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 潜在客户检查契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface ILeadCheckContract extends IBusinessLogicContract {

	/**
	 * 潜在客户编码
	 * 
	 * @return
	 */
	String getLeadCode();

	/**
	 * 获取-潜在客户名称
	 * 
	 * @return 值
	 */
	String getLeadName();

	/**
	 * 设置-潜在客户名称
	 * 
	 * @param value 值
	 */
	void setLeadName(String value);

}

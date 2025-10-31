package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 供应商检查契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface ISupplierCheckContract extends IBusinessLogicContract {

	/**
	 * 供应商编码
	 * 
	 * @return
	 */
	String getSupplierCode();

	/**
	 * 获取-供应商名称
	 * 
	 * @return 值
	 */
	String getSupplierName();

	/**
	 * 设置-供应商名称
	 * 
	 * @param value 值
	 */
	void setSupplierName(String value);
}

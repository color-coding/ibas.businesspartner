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
}

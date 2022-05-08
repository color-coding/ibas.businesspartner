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

}

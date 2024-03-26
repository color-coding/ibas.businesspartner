package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

public interface IDocumentReconciliationContract extends IBusinessLogicContract {

	/**
	 * 单据类型
	 * 
	 * @return
	 */
	String getBaseDocumentType();

	/**
	 * 单据编号
	 * 
	 * @return
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 对账内容
	 * 
	 * @return
	 */
	IDocumentReconciliationContent[] getContents();
}

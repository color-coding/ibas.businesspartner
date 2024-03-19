package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.bo.IBusinessObject;

/**
 * 操作目标文档
 */
public interface IDocumentOperatingTarget extends IBusinessObject {

	/**
	 * 获取-凭证编号
	 * 
	 * @return 值
	 */
	Integer getDocEntry();

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	String getObjectCode();
}

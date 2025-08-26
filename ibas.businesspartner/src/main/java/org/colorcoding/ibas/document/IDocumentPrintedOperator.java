package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.bo.IBODocument;
import org.colorcoding.ibas.bobas.data.emYesNo;

/**
 * 单据打印状态操作者
 * 
 * @author Niuren.Zhu
 *
 */
public interface IDocumentPrintedOperator extends IDocumentOperatingTarget, IBODocument {

	/**
	 * 获取-已打印
	 * 
	 * @return
	 */
	emYesNo getPrinted();

	/**
	 * 设置-已打印
	 * 
	 * @param value
	 */
	void setPrinted(emYesNo value);
}

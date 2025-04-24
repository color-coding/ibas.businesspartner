package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.repository.ITransaction;

/**
 * 单据查询者
 * 
 * @author Niuren.Zhu
 *
 * @param <T> 检索的类型
 */
public interface IDocumentFetcher<T extends IDocumentOperatingTarget> {

	/**
	 * 设置业务仓库
	 * 
	 * @param repository
	 */
	void setTransaction(ITransaction transaction);

	/**
	 * 检索对象
	 * 
	 * @param docEntry 单据编号
	 * @return
	 * @throws Exception
	 */
	T fetch(Integer docEntry) throws Exception;
}

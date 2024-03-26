package org.colorcoding.ibas.businesspartner.bo.internalreconciliation;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBOSimpleLine;
import org.colorcoding.ibas.bobas.data.DateTime;

/**
 * 内部对账-行 接口
 * 
 */
public interface IInternalReconciliationLine extends IBOSimpleLine {

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getObjectKey();

	/**
	 * 设置-对象编号
	 * 
	 * @param value 值
	 */
	void setObjectKey(Integer value);

	/**
	 * 获取-对象行号
	 * 
	 * @return 值
	 */
	Integer getLineId();

	/**
	 * 设置-对象行号
	 * 
	 * @param value 值
	 */
	void setLineId(Integer value);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	String getObjectCode();

	/**
	 * 设置-对象类型
	 * 
	 * @param value 值
	 */
	void setObjectCode(String value);

	/**
	 * 获取-实例号
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-实例号
	 * 
	 * @param value 值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	String getDataSource();

	/**
	 * 设置-数据源
	 * 
	 * @param value 值
	 */
	void setDataSource(String value);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	DateTime getCreateDate();

	/**
	 * 设置-创建日期
	 * 
	 * @param value 值
	 */
	void setCreateDate(DateTime value);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	Short getCreateTime();

	/**
	 * 设置-创建时间
	 * 
	 * @param value 值
	 */
	void setCreateTime(Short value);

	/**
	 * 获取-更新日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-更新日期
	 * 
	 * @param value 值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-更新时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-更新时间
	 * 
	 * @param value 值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	Integer getCreateUserSign();

	/**
	 * 设置-创建用户
	 * 
	 * @param value 值
	 */
	void setCreateUserSign(Integer value);

	/**
	 * 获取-更新用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-更新用户
	 * 
	 * @param value 值
	 */
	void setUpdateUserSign(Integer value);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	String getCreateActionId();

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value 值
	 */
	void setCreateActionId(String value);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	String getUpdateActionId();

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value 值
	 */
	void setUpdateActionId(String value);

	/**
	 * 获取-备注
	 * 
	 * @return 值
	 */
	String getRemarks();

	/**
	 * 设置-备注
	 * 
	 * @param value 值
	 */
	void setRemarks(String value);

	/**
	 * 获取-业务伙伴/科目代码
	 * 
	 * @return 值
	 */
	String getShortName();

	/**
	 * 设置-业务伙伴/科目代码
	 * 
	 * @param value 值
	 */
	void setShortName(String value);

	/**
	 * 获取-源单据类型
	 * 
	 * @return 值
	 */
	String getDocumentType();

	/**
	 * 设置-源单据类型
	 * 
	 * @param value 值
	 */
	void setDocumentType(String value);

	/**
	 * 获取-源单据编号
	 * 
	 * @return 值
	 */
	Integer getDocumentEntry();

	/**
	 * 设置-源单据编号
	 * 
	 * @param value 值
	 */
	void setDocumentEntry(Integer value);

	/**
	 * 获取-源单据行号
	 * 
	 * @return 值
	 */
	Integer getDocumentLineId();

	/**
	 * 设置-源单据行号
	 * 
	 * @param value 值
	 */
	void setDocumentLineId(Integer value);

	/**
	 * 获取-类别
	 * 
	 * @return 值
	 */
	String getCategory();

	/**
	 * 设置-类别
	 * 
	 * @param value 值
	 */
	void setCategory(String value);

	/**
	 * 获取-金额
	 * 
	 * @return 值
	 */
	BigDecimal getAmount();

	/**
	 * 设置-金额
	 * 
	 * @param value 值
	 */
	void setAmount(BigDecimal value);

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	String getCurrency();

	/**
	 * 设置-货币
	 * 
	 * @param value 值
	 */
	void setCurrency(String value);

	/**
	 * 获取-汇率
	 * 
	 * @return 值
	 */
	BigDecimal getRate();

	/**
	 * 设置-汇率
	 * 
	 * @param value 值
	 */
	void setRate(BigDecimal value);

}

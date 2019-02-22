package org.colorcoding.ibas.businesspartner.bo.assetitem;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBOMasterData;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;

/**
 * 资产项目 接口
 * 
 */
public interface IAssetItem extends IBOMasterData {

	/**
	 * 获取-编号
	 * 
	 * @return 值
	 */
	String getCode();

	/**
	 * 设置-编号
	 * 
	 * @param value 值
	 */
	void setCode(String value);

	/**
	 * 获取-名称
	 * 
	 * @return 值
	 */
	String getName();

	/**
	 * 设置-名称
	 * 
	 * @param value 值
	 */
	void setName(String value);

	/**
	 * 获取-激活
	 * 
	 * @return 值
	 */
	emYesNo getActivated();

	/**
	 * 设置-激活
	 * 
	 * @param value 值
	 */
	void setActivated(emYesNo value);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	emYesNo getReferenced();

	/**
	 * 设置-已引用
	 * 
	 * @param value 值
	 */
	void setReferenced(emYesNo value);

	/**
	 * 获取-已删除
	 * 
	 * @return 值
	 */
	emYesNo getDeleted();

	/**
	 * 设置-已删除
	 * 
	 * @param value 值
	 */
	void setDeleted(emYesNo value);

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getDocEntry();

	/**
	 * 设置-对象编号
	 * 
	 * @param value 值
	 */
	void setDocEntry(Integer value);

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
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	DateTime getUpdateDate();

	/**
	 * 设置-修改日期
	 * 
	 * @param value 值
	 */
	void setUpdateDate(DateTime value);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	Short getUpdateTime();

	/**
	 * 设置-修改时间
	 * 
	 * @param value 值
	 */
	void setUpdateTime(Short value);

	/**
	 * 获取-版本
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-版本
	 * 
	 * @param value 值
	 */
	void setLogInst(Integer value);

	/**
	 * 获取-服务系列
	 * 
	 * @return 值
	 */
	Integer getSeries();

	/**
	 * 设置-服务系列
	 * 
	 * @param value 值
	 */
	void setSeries(Integer value);

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
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	Integer getUpdateUserSign();

	/**
	 * 设置-修改用户
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
	 * 获取-审批状态
	 * 
	 * @return 值
	 */
	emApprovalStatus getApprovalStatus();

	/**
	 * 设置-审批状态
	 * 
	 * @param value 值
	 */
	void setApprovalStatus(emApprovalStatus value);

	/**
	 * 获取-数据所有者
	 * 
	 * @return 值
	 */
	Integer getDataOwner();

	/**
	 * 设置-数据所有者
	 * 
	 * @param value 值
	 */
	void setDataOwner(Integer value);

	/**
	 * 获取-数据所属组织
	 * 
	 * @return 值
	 */
	String getOrganization();

	/**
	 * 设置-数据所属组织
	 * 
	 * @param value 值
	 */
	void setOrganization(String value);

	/**
	 * 获取-生效日期
	 * 
	 * @return 值
	 */
	DateTime getValidDate();

	/**
	 * 设置-生效日期
	 * 
	 * @param value 值
	 */
	void setValidDate(DateTime value);

	/**
	 * 获取-失效日期
	 * 
	 * @return 值
	 */
	DateTime getInvalidDate();

	/**
	 * 设置-失效日期
	 * 
	 * @param value 值
	 */
	void setInvalidDate(DateTime value);

	/**
	 * 获取-面值
	 * 
	 * @return 值
	 */
	BigDecimal getFaceAmount();

	/**
	 * 设置-面值
	 * 
	 * @param value 值
	 */
	void setFaceAmount(BigDecimal value);

	/**
	 * 设置-面值
	 * 
	 * @param value 值
	 */
	void setFaceAmount(String value);

	/**
	 * 设置-面值
	 * 
	 * @param value 值
	 */
	void setFaceAmount(int value);

	/**
	 * 设置-面值
	 * 
	 * @param value 值
	 */
	void setFaceAmount(double value);

	/**
	 * 获取-单位
	 * 
	 * @return 值
	 */
	String getAmountUnit();

	/**
	 * 设置-单位
	 * 
	 * @param value 值
	 */
	void setAmountUnit(String value);

	/**
	 * 获取-可用次数
	 * 
	 * @return 值
	 */
	Integer getUsingTimes();

	/**
	 * 设置-可用次数
	 * 
	 * @param value 值
	 */
	void setUsingTimes(Integer value);

	/**
	 * 获取-使用时折扣
	 * 
	 * @return 值
	 */
	BigDecimal getUsingDiscount();

	/**
	 * 设置-使用时折扣
	 * 
	 * @param value 值
	 */
	void setUsingDiscount(BigDecimal value);

	/**
	 * 设置-使用时折扣
	 * 
	 * @param value 值
	 */
	void setUsingDiscount(String value);

	/**
	 * 设置-使用时折扣
	 * 
	 * @param value 值
	 */
	void setUsingDiscount(int value);

	/**
	 * 设置-使用时折扣
	 * 
	 * @param value 值
	 */
	void setUsingDiscount(double value);

	/**
	 * 获取-透支额
	 * 
	 * @return 值
	 */
	BigDecimal getOverdraft();

	/**
	 * 设置-透支额
	 * 
	 * @param value 值
	 */
	void setOverdraft(BigDecimal value);

	/**
	 * 设置-透支额
	 * 
	 * @param value 值
	 */
	void setOverdraft(String value);

	/**
	 * 设置-透支额
	 * 
	 * @param value 值
	 */
	void setOverdraft(int value);

	/**
	 * 设置-透支额
	 * 
	 * @param value 值
	 */
	void setOverdraft(double value);

	/**
	 * 获取-有效天数
	 * 
	 * @return 值
	 */
	Integer getValidDays();

	/**
	 * 设置-有效天数
	 * 
	 * @param value 值
	 */
	void setValidDays(Integer value);

	/**
	 * 获取-可充值的
	 * 
	 * @return 值
	 */
	emYesNo getRechargeable();

	/**
	 * 设置-可充值的
	 * 
	 * @param value 值
	 */
	void setRechargeable(emYesNo value);

	/**
	 * 获取-图片
	 * 
	 * @return 值
	 */
	String getPicture();

	/**
	 * 设置-图片
	 * 
	 * @param value 值
	 */
	void setPicture(String value);

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

}

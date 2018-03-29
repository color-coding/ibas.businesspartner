package org.colorcoding.ibas.businesspartner.bo.businesspartnerasset;

import org.colorcoding.ibas.bobas.bo.IBOMasterData;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 业务伙伴资产 接口
 * 
 */
public interface IBusinessPartnerAsset extends IBOMasterData {

	/**
	 * 获取-编号
	 * 
	 * @return 值
	 */
	String getCode();

	/**
	 * 设置-编号
	 * 
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	void setName(String value);

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getDocEntry();

	/**
	 * 设置-对象编号
	 * 
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	void setOrganization(String value);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	emYesNo getReferenced();

	/**
	 * 设置-已引用
	 * 
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	void setDeleted(emYesNo value);

	/**
	 * 获取-业务伙伴类型
	 * 
	 * @return 值
	 */
	emBusinessPartnerType getBusinessPartnerType();

	/**
	 * 设置-业务伙伴类型
	 * 
	 * @param value
	 *            值
	 */
	void setBusinessPartnerType(emBusinessPartnerType value);

	/**
	 * 获取-业务伙伴编码
	 * 
	 * @return 值
	 */
	String getBusinessPartnerCode();

	/**
	 * 设置-业务伙伴编码
	 * 
	 * @param value
	 *            值
	 */
	void setBusinessPartnerCode(String value);

	/**
	 * 获取-资产项目
	 * 
	 * @return 值
	 */
	String getAssetCode();

	/**
	 * 设置-资产项目
	 * 
	 * @param value
	 *            值
	 */
	void setAssetCode(String value);

	/**
	 * 获取-激活
	 * 
	 * @return 值
	 */
	emYesNo getActivated();

	/**
	 * 设置-激活
	 * 
	 * @param value
	 *            值
	 */
	void setActivated(emYesNo value);

	/**
	 * 获取-获得日期
	 * 
	 * @return 值
	 */
	DateTime getAcquiredDate();

	/**
	 * 设置-获得日期
	 * 
	 * @param value
	 *            值
	 */
	void setAcquiredDate(DateTime value);

	/**
	 * 获取-生效日期
	 * 
	 * @return 值
	 */
	DateTime getValidDate();

	/**
	 * 设置-生效日期
	 * 
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	void setInvalidDate(DateTime value);

	/**
	 * 获取-剩余价值
	 * 
	 * @return 值
	 */
	Decimal getAmount();

	/**
	 * 设置-剩余价值
	 * 
	 * @param value
	 *            值
	 */
	void setAmount(Decimal value);

	/**
	 * 设置-剩余价值
	 * 
	 * @param value
	 *            值
	 */
	void setAmount(String value);

	/**
	 * 设置-剩余价值
	 * 
	 * @param value
	 *            值
	 */
	void setAmount(int value);

	/**
	 * 设置-剩余价值
	 * 
	 * @param value
	 *            值
	 */
	void setAmount(double value);

	/**
	 * 获取-剩余次数
	 * 
	 * @return 值
	 */
	Integer getTimes();

	/**
	 * 设置-剩余次数
	 * 
	 * @param value
	 *            值
	 */
	void setTimes(Integer value);

	/**
	 * 获取-基于类型
	 * 
	 * @return 值
	 */
	String getBaseDocumentType();

	/**
	 * 设置-基于类型
	 * 
	 * @param value
	 *            值
	 */
	void setBaseDocumentType(String value);

	/**
	 * 获取-基于标识
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 设置-基于标识
	 * 
	 * @param value
	 *            值
	 */
	void setBaseDocumentEntry(Integer value);

	/**
	 * 获取-基于行号
	 * 
	 * @return 值
	 */
	Integer getBaseDocumentLineId();

	/**
	 * 设置-基于行号
	 * 
	 * @param value
	 *            值
	 */
	void setBaseDocumentLineId(Integer value);

	/**
	 * 获取-交易金额
	 * 
	 * @return 值
	 */
	Decimal getTradingAmount();

	/**
	 * 设置-交易金额
	 * 
	 * @param value
	 *            值
	 */
	void setTradingAmount(Decimal value);

	/**
	 * 设置-交易金额
	 * 
	 * @param value
	 *            值
	 */
	void setTradingAmount(String value);

	/**
	 * 设置-交易金额
	 * 
	 * @param value
	 *            值
	 */
	void setTradingAmount(int value);

	/**
	 * 设置-交易金额
	 * 
	 * @param value
	 *            值
	 */
	void setTradingAmount(double value);

	/**
	 * 获取-交易货币
	 * 
	 * @return 值
	 */
	String getTradingCurrency();

	/**
	 * 设置-交易货币
	 * 
	 * @param value
	 *            值
	 */
	void setTradingCurrency(String value);

	/**
	 * 获取-备注 1
	 * 
	 * @return 值
	 */
	String getRemark1();

	/**
	 * 设置-备注 1
	 * 
	 * @param value
	 *            值
	 */
	void setRemark1(String value);

	/**
	 * 获取-备注 2
	 * 
	 * @return 值
	 */
	String getRemark2();

	/**
	 * 设置-备注 2
	 * 
	 * @param value
	 *            值
	 */
	void setRemark2(String value);

}

package org.colorcoding.ibas.businesspartner.bo.address;

import org.colorcoding.ibas.bobas.bo.IBOSimple;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 业务伙伴地址 接口
 * 
 */
public interface IAddress extends IBOSimple {

	/**
	 * 获取-业务伙伴
	 * 
	 * @return 值
	 */
	String getBusinessPartner();

	/**
	 * 设置-业务伙伴
	 * 
	 * @param value
	 *            值
	 */
	void setBusinessPartner(String value);

	/**
	 * 获取-归属类型
	 * 
	 * @return 值
	 */
	emBusinessPartnerType getOwnerType();

	/**
	 * 设置-归属类型
	 * 
	 * @param value
	 *            值
	 */
	void setOwnerType(emBusinessPartnerType value);

	/**
	 * 获取-有效的
	 * 
	 * @return 值
	 */
	emYesNo getActivated();

	/**
	 * 设置-有效的
	 * 
	 * @param value
	 *            值
	 */
	void setActivated(emYesNo value);

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
	 * 获取-街道
	 * 
	 * @return 值
	 */
	String getStreet();

	/**
	 * 设置-街道
	 * 
	 * @param value
	 *            值
	 */
	void setStreet(String value);

	/**
	 * 获取-县/区
	 * 
	 * @return 值
	 */
	String getDistrict();

	/**
	 * 设置-县/区
	 * 
	 * @param value
	 *            值
	 */
	void setDistrict(String value);

	/**
	 * 获取-市
	 * 
	 * @return 值
	 */
	String getCity();

	/**
	 * 设置-市
	 * 
	 * @param value
	 *            值
	 */
	void setCity(String value);

	/**
	 * 获取-省
	 * 
	 * @return 值
	 */
	String getProvince();

	/**
	 * 设置-省
	 * 
	 * @param value
	 *            值
	 */
	void setProvince(String value);

	/**
	 * 获取-国
	 * 
	 * @return 值
	 */
	String getCountry();

	/**
	 * 设置-国
	 * 
	 * @param value
	 *            值
	 */
	void setCountry(String value);

	/**
	 * 获取-邮编
	 * 
	 * @return 值
	 */
	String getZipCode();

	/**
	 * 设置-邮编
	 * 
	 * @param value
	 *            值
	 */
	void setZipCode(String value);

	/**
	 * 获取-联系电话
	 * 
	 * @return 值
	 */
	String getMobilePhone();

	/**
	 * 设置-联系电话
	 * 
	 * @param value
	 *            值
	 */
	void setMobilePhone(String value);

	/**
	 * 获取-电话 1
	 * 
	 * @return 值
	 */
	String getTelephone1();

	/**
	 * 设置-电话 1
	 * 
	 * @param value
	 *            值
	 */
	void setTelephone1(String value);

	/**
	 * 获取-电话 2
	 * 
	 * @return 值
	 */
	String getTelephone2();

	/**
	 * 设置-电话 2
	 * 
	 * @param value
	 *            值
	 */
	void setTelephone2(String value);

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

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	Integer getObjectKey();

	/**
	 * 设置-对象编号
	 * 
	 * @param value
	 *            值
	 */
	void setObjectKey(Integer value);

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
	 * 获取-实例号（版本）
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-实例号（版本）
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

}

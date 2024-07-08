package org.colorcoding.ibas.businesspartner.bo.contactperson;

import org.colorcoding.ibas.bobas.bo.IBOSimple;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;
import org.colorcoding.ibas.businesspartner.data.emGender;

/**
 * 业务伙伴联系人 接口
 * 
 */
public interface IContactPerson extends IBOSimple {

	/**
	 * 获取-业务伙伴
	 * 
	 * @return 值
	 */
	String getBusinessPartner();

	/**
	 * 设置-业务伙伴
	 * 
	 * @param value 值
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
	 * @param value 值
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
	 * @param value 值
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
	 * @param value 值
	 */
	void setName(String value);

	/**
	 * 获取-组
	 * 
	 * @return 值
	 */
	String getGroup();

	/**
	 * 设置-组
	 * 
	 * @param value 值
	 */
	void setGroup(String value);

	/**
	 * 获取-性别
	 * 
	 * @return 值
	 */
	emGender getGender();

	/**
	 * 设置-性别
	 * 
	 * @param value 值
	 */
	void setGender(emGender value);

	/**
	 * 获取-职位
	 * 
	 * @return 值
	 */
	String getPosition();

	/**
	 * 设置-职位
	 * 
	 * @param value 值
	 */
	void setPosition(String value);

	/**
	 * 获取-地址
	 * 
	 * @return 值
	 */
	String getAddress();

	/**
	 * 设置-地址
	 * 
	 * @param value 值
	 */
	void setAddress(String value);

	/**
	 * 获取-电话 1
	 * 
	 * @return 值
	 */
	String getTelephone1();

	/**
	 * 设置-电话 1
	 * 
	 * @param value 值
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
	 * @param value 值
	 */
	void setTelephone2(String value);

	/**
	 * 获取-移动电话
	 * 
	 * @return 值
	 */
	String getMobilePhone();

	/**
	 * 设置-移动电话
	 * 
	 * @param value 值
	 */
	void setMobilePhone(String value);

	/**
	 * 获取-传真
	 * 
	 * @return 值
	 */
	String getFax();

	/**
	 * 设置-传真
	 * 
	 * @param value 值
	 */
	void setFax(String value);

	/**
	 * 获取-电子邮件
	 * 
	 * @return 值
	 */
	String getMail();

	/**
	 * 设置-电子邮件
	 * 
	 * @param value 值
	 */
	void setMail(String value);

	/**
	 * 获取-备注 1
	 * 
	 * @return 值
	 */
	String getRemark1();

	/**
	 * 设置-备注 1
	 * 
	 * @param value 值
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
	 * @param value 值
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
	 * @param value 值
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
	 * 获取-实例号（版本）
	 * 
	 * @return 值
	 */
	Integer getLogInst();

	/**
	 * 设置-实例号（版本）
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

}

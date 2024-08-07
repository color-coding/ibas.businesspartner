package org.colorcoding.ibas.businesspartner.bo.address;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOUserFields;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.ownership.IDataOwnership;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleRequired;
import org.colorcoding.ibas.businesspartner.MyConfiguration;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 业务伙伴地址
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = Address.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = Address.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BusinessObjectUnit(code = Address.BUSINESS_OBJECT_CODE)
public class Address extends BusinessObject<Address> implements IAddress, IDataOwnership, IBOUserFields {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 8865210511250487290L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = Address.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_BP_OADD";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_BP_ADDRESS";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "Address";

	/**
	 * 属性名称-业务伙伴
	 */
	private static final String PROPERTY_BUSINESSPARTNER_NAME = "BusinessPartner";

	/**
	 * 业务伙伴 属性
	 */
	@DbField(name = "CardCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_BUSINESSPARTNER = registerProperty(PROPERTY_BUSINESSPARTNER_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-业务伙伴
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUSINESSPARTNER_NAME)
	public final String getBusinessPartner() {
		return this.getProperty(PROPERTY_BUSINESSPARTNER);
	}

	/**
	 * 设置-业务伙伴
	 * 
	 * @param value 值
	 */
	public final void setBusinessPartner(String value) {
		this.setProperty(PROPERTY_BUSINESSPARTNER, value);
	}

	/**
	 * 属性名称-归属类型
	 */
	private static final String PROPERTY_OWNERTYPE_NAME = "OwnerType";

	/**
	 * 归属类型 属性
	 */
	@DbField(name = "OwnerType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emBusinessPartnerType> PROPERTY_OWNERTYPE = registerProperty(
			PROPERTY_OWNERTYPE_NAME, emBusinessPartnerType.class, MY_CLASS);

	/**
	 * 获取-归属类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OWNERTYPE_NAME)
	public final emBusinessPartnerType getOwnerType() {
		return this.getProperty(PROPERTY_OWNERTYPE);
	}

	/**
	 * 设置-归属类型
	 * 
	 * @param value 值
	 */
	public final void setOwnerType(emBusinessPartnerType value) {
		this.setProperty(PROPERTY_OWNERTYPE, value);
	}

	/**
	 * 属性名称-有效的
	 */
	private static final String PROPERTY_ACTIVATED_NAME = "Activated";

	/**
	 * 有效的 属性
	 */
	@DbField(name = "Activated", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_ACTIVATED = registerProperty(PROPERTY_ACTIVATED_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-有效的
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ACTIVATED_NAME)
	public final emYesNo getActivated() {
		return this.getProperty(PROPERTY_ACTIVATED);
	}

	/**
	 * 设置-有效的
	 * 
	 * @param value 值
	 */
	public final void setActivated(emYesNo value) {
		this.setProperty(PROPERTY_ACTIVATED, value);
	}

	/**
	 * 属性名称-名称
	 */
	private static final String PROPERTY_NAME_NAME = "Name";

	/**
	 * 名称 属性
	 */
	@DbField(name = "Name", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_NAME = registerProperty(PROPERTY_NAME_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-名称
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_NAME_NAME)
	public final String getName() {
		return this.getProperty(PROPERTY_NAME);
	}

	/**
	 * 设置-名称
	 * 
	 * @param value 值
	 */
	public final void setName(String value) {
		this.setProperty(PROPERTY_NAME, value);
	}

	/**
	 * 属性名称-组
	 */
	private static final String PROPERTY_GROUP_NAME = "Group";

	/**
	 * 组代码 属性
	 */
	@DbField(name = "Group", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_GROUP = registerProperty(PROPERTY_GROUP_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-组
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_GROUP_NAME)
	public final String getGroup() {
		return this.getProperty(PROPERTY_GROUP);
	}

	/**
	 * 设置-组
	 * 
	 * @param value 值
	 */
	public final void setGroup(String value) {
		this.setProperty(PROPERTY_GROUP, value);
	}

	/**
	 * 属性名称-街道
	 */
	private static final String PROPERTY_STREET_NAME = "Street";

	/**
	 * 街道 属性
	 */
	@DbField(name = "Street", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_STREET = registerProperty(PROPERTY_STREET_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-街道
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_STREET_NAME)
	public final String getStreet() {
		return this.getProperty(PROPERTY_STREET);
	}

	/**
	 * 设置-街道
	 * 
	 * @param value 值
	 */
	public final void setStreet(String value) {
		this.setProperty(PROPERTY_STREET, value);
	}

	/**
	 * 属性名称-县/区
	 */
	private static final String PROPERTY_DISTRICT_NAME = "District";

	/**
	 * 县/区 属性
	 */
	@DbField(name = "District", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DISTRICT = registerProperty(PROPERTY_DISTRICT_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-县/区
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DISTRICT_NAME)
	public final String getDistrict() {
		return this.getProperty(PROPERTY_DISTRICT);
	}

	/**
	 * 设置-县/区
	 * 
	 * @param value 值
	 */
	public final void setDistrict(String value) {
		this.setProperty(PROPERTY_DISTRICT, value);
	}

	/**
	 * 属性名称-市
	 */
	private static final String PROPERTY_CITY_NAME = "City";

	/**
	 * 市 属性
	 */
	@DbField(name = "City", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CITY = registerProperty(PROPERTY_CITY_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-市
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CITY_NAME)
	public final String getCity() {
		return this.getProperty(PROPERTY_CITY);
	}

	/**
	 * 设置-市
	 * 
	 * @param value 值
	 */
	public final void setCity(String value) {
		this.setProperty(PROPERTY_CITY, value);
	}

	/**
	 * 属性名称-省
	 */
	private static final String PROPERTY_PROVINCE_NAME = "Province";

	/**
	 * 省 属性
	 */
	@DbField(name = "Province", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_PROVINCE = registerProperty(PROPERTY_PROVINCE_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-省
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PROVINCE_NAME)
	public final String getProvince() {
		return this.getProperty(PROPERTY_PROVINCE);
	}

	/**
	 * 设置-省
	 * 
	 * @param value 值
	 */
	public final void setProvince(String value) {
		this.setProperty(PROPERTY_PROVINCE, value);
	}

	/**
	 * 属性名称-国
	 */
	private static final String PROPERTY_COUNTRY_NAME = "Country";

	/**
	 * 国 属性
	 */
	@DbField(name = "Country", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_COUNTRY = registerProperty(PROPERTY_COUNTRY_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-国
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_COUNTRY_NAME)
	public final String getCountry() {
		return this.getProperty(PROPERTY_COUNTRY);
	}

	/**
	 * 设置-国
	 * 
	 * @param value 值
	 */
	public final void setCountry(String value) {
		this.setProperty(PROPERTY_COUNTRY, value);
	}

	/**
	 * 属性名称-邮编
	 */
	private static final String PROPERTY_ZIPCODE_NAME = "ZipCode";

	/**
	 * 邮编 属性
	 */
	@DbField(name = "ZipCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ZIPCODE = registerProperty(PROPERTY_ZIPCODE_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-邮编
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ZIPCODE_NAME)
	public final String getZipCode() {
		return this.getProperty(PROPERTY_ZIPCODE);
	}

	/**
	 * 设置-邮编
	 * 
	 * @param value 值
	 */
	public final void setZipCode(String value) {
		this.setProperty(PROPERTY_ZIPCODE, value);
	}

	/**
	 * 属性名称-联系电话
	 */
	private static final String PROPERTY_MOBILEPHONE_NAME = "MobilePhone";

	/**
	 * 联系电话 属性
	 */
	@DbField(name = "Phone", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_MOBILEPHONE = registerProperty(PROPERTY_MOBILEPHONE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-联系电话
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_MOBILEPHONE_NAME)
	public final String getMobilePhone() {
		return this.getProperty(PROPERTY_MOBILEPHONE);
	}

	/**
	 * 设置-联系电话
	 * 
	 * @param value 值
	 */
	public final void setMobilePhone(String value) {
		this.setProperty(PROPERTY_MOBILEPHONE, value);
	}

	/**
	 * 属性名称-电话 1
	 */
	private static final String PROPERTY_TELEPHONE1_NAME = "Telephone1";

	/**
	 * 电话 1 属性
	 */
	@DbField(name = "Tel1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TELEPHONE1 = registerProperty(PROPERTY_TELEPHONE1_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-电话 1
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TELEPHONE1_NAME)
	public final String getTelephone1() {
		return this.getProperty(PROPERTY_TELEPHONE1);
	}

	/**
	 * 设置-电话 1
	 * 
	 * @param value 值
	 */
	public final void setTelephone1(String value) {
		this.setProperty(PROPERTY_TELEPHONE1, value);
	}

	/**
	 * 属性名称-电话 2
	 */
	private static final String PROPERTY_TELEPHONE2_NAME = "Telephone2";

	/**
	 * 电话 2 属性
	 */
	@DbField(name = "Tel2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TELEPHONE2 = registerProperty(PROPERTY_TELEPHONE2_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-电话 2
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TELEPHONE2_NAME)
	public final String getTelephone2() {
		return this.getProperty(PROPERTY_TELEPHONE2);
	}

	/**
	 * 设置-电话 2
	 * 
	 * @param value 值
	 */
	public final void setTelephone2(String value) {
		this.setProperty(PROPERTY_TELEPHONE2, value);
	}

	/**
	 * 属性名称-备注 1
	 */
	private static final String PROPERTY_REMARK1_NAME = "Remark1";

	/**
	 * 备注 1 属性
	 */
	@DbField(name = "Notes1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_REMARK1 = registerProperty(PROPERTY_REMARK1_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-备注 1
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REMARK1_NAME)
	public final String getRemark1() {
		return this.getProperty(PROPERTY_REMARK1);
	}

	/**
	 * 设置-备注 1
	 * 
	 * @param value 值
	 */
	public final void setRemark1(String value) {
		this.setProperty(PROPERTY_REMARK1, value);
	}

	/**
	 * 属性名称-备注 2
	 */
	private static final String PROPERTY_REMARK2_NAME = "Remark2";

	/**
	 * 备注 2 属性
	 */
	@DbField(name = "Notes2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_REMARK2 = registerProperty(PROPERTY_REMARK2_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-备注 2
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REMARK2_NAME)
	public final String getRemark2() {
		return this.getProperty(PROPERTY_REMARK2);
	}

	/**
	 * 设置-备注 2
	 * 
	 * @param value 值
	 */
	public final void setRemark2(String value) {
		this.setProperty(PROPERTY_REMARK2, value);
	}

	/**
	 * 属性名称-联系人
	 */
	private static final String PROPERTY_CONTACTS_NAME = "Contacts";

	/**
	 * 联系人 属性
	 */
	@DbField(name = "Contacts", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CONTACTS = registerProperty(PROPERTY_CONTACTS_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-联系人
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CONTACTS_NAME)
	public final String getContacts() {
		return this.getProperty(PROPERTY_CONTACTS);
	}

	/**
	 * 设置-联系人
	 * 
	 * @param value 值
	 */
	public final void setContacts(String value) {
		this.setProperty(PROPERTY_CONTACTS, value);
	}

	/**
	 * 属性名称-对象编号
	 */
	private static final String PROPERTY_OBJECTKEY_NAME = "ObjectKey";

	/**
	 * 对象编号 属性
	 */
	@DbField(name = "ObjectKey", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_OBJECTKEY = registerProperty(PROPERTY_OBJECTKEY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTKEY_NAME)
	public final Integer getObjectKey() {
		return this.getProperty(PROPERTY_OBJECTKEY);
	}

	/**
	 * 设置-对象编号
	 * 
	 * @param value 值
	 */
	public final void setObjectKey(Integer value) {
		this.setProperty(PROPERTY_OBJECTKEY, value);
	}

	/**
	 * 属性名称-对象类型
	 */
	private static final String PROPERTY_OBJECTCODE_NAME = "ObjectCode";

	/**
	 * 对象类型 属性
	 */
	@DbField(name = "ObjectCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_OBJECTCODE = registerProperty(PROPERTY_OBJECTCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTCODE_NAME)
	public final String getObjectCode() {
		return this.getProperty(PROPERTY_OBJECTCODE);
	}

	/**
	 * 设置-对象类型
	 * 
	 * @param value 值
	 */
	public final void setObjectCode(String value) {
		this.setProperty(PROPERTY_OBJECTCODE, value);
	}

	/**
	 * 属性名称-创建日期
	 */
	private static final String PROPERTY_CREATEDATE_NAME = "CreateDate";

	/**
	 * 创建日期 属性
	 */
	@DbField(name = "CreateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_CREATEDATE = registerProperty(PROPERTY_CREATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEDATE_NAME)
	public final DateTime getCreateDate() {
		return this.getProperty(PROPERTY_CREATEDATE);
	}

	/**
	 * 设置-创建日期
	 * 
	 * @param value 值
	 */
	public final void setCreateDate(DateTime value) {
		this.setProperty(PROPERTY_CREATEDATE, value);
	}

	/**
	 * 属性名称-创建时间
	 */
	private static final String PROPERTY_CREATETIME_NAME = "CreateTime";

	/**
	 * 创建时间 属性
	 */
	@DbField(name = "CreateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_CREATETIME = registerProperty(PROPERTY_CREATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATETIME_NAME)
	public final Short getCreateTime() {
		return this.getProperty(PROPERTY_CREATETIME);
	}

	/**
	 * 设置-创建时间
	 * 
	 * @param value 值
	 */
	public final void setCreateTime(Short value) {
		this.setProperty(PROPERTY_CREATETIME, value);
	}

	/**
	 * 属性名称-修改日期
	 */
	private static final String PROPERTY_UPDATEDATE_NAME = "UpdateDate";

	/**
	 * 修改日期 属性
	 */
	@DbField(name = "UpdateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_UPDATEDATE = registerProperty(PROPERTY_UPDATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEDATE_NAME)
	public final DateTime getUpdateDate() {
		return this.getProperty(PROPERTY_UPDATEDATE);
	}

	/**
	 * 设置-修改日期
	 * 
	 * @param value 值
	 */
	public final void setUpdateDate(DateTime value) {
		this.setProperty(PROPERTY_UPDATEDATE, value);
	}

	/**
	 * 属性名称-修改时间
	 */
	private static final String PROPERTY_UPDATETIME_NAME = "UpdateTime";

	/**
	 * 修改时间 属性
	 */
	@DbField(name = "UpdateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_UPDATETIME = registerProperty(PROPERTY_UPDATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATETIME_NAME)
	public final Short getUpdateTime() {
		return this.getProperty(PROPERTY_UPDATETIME);
	}

	/**
	 * 设置-修改时间
	 * 
	 * @param value 值
	 */
	public final void setUpdateTime(Short value) {
		this.setProperty(PROPERTY_UPDATETIME, value);
	}

	/**
	 * 属性名称-实例号（版本）
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 实例号（版本） 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-实例号（版本）
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-实例号（版本）
	 * 
	 * @param value 值
	 */
	public final void setLogInst(Integer value) {
		this.setProperty(PROPERTY_LOGINST, value);
	}

	/**
	 * 属性名称-服务系列
	 */
	private static final String PROPERTY_SERIES_NAME = "Series";

	/**
	 * 服务系列 属性
	 */
	@DbField(name = "Series", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_SERIES = registerProperty(PROPERTY_SERIES_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-服务系列
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SERIES_NAME)
	public final Integer getSeries() {
		return this.getProperty(PROPERTY_SERIES);
	}

	/**
	 * 设置-服务系列
	 * 
	 * @param value 值
	 */
	public final void setSeries(Integer value) {
		this.setProperty(PROPERTY_SERIES, value);
	}

	/**
	 * 属性名称-数据源
	 */
	private static final String PROPERTY_DATASOURCE_NAME = "DataSource";

	/**
	 * 数据源 属性
	 */
	@DbField(name = "DataSource", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DATASOURCE = registerProperty(PROPERTY_DATASOURCE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DATASOURCE_NAME)
	public final String getDataSource() {
		return this.getProperty(PROPERTY_DATASOURCE);
	}

	/**
	 * 设置-数据源
	 * 
	 * @param value 值
	 */
	public final void setDataSource(String value) {
		this.setProperty(PROPERTY_DATASOURCE, value);
	}

	/**
	 * 属性名称-创建用户
	 */
	private static final String PROPERTY_CREATEUSERSIGN_NAME = "CreateUserSign";

	/**
	 * 创建用户 属性
	 */
	@DbField(name = "Creator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_CREATEUSERSIGN = registerProperty(PROPERTY_CREATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEUSERSIGN_NAME)
	public final Integer getCreateUserSign() {
		return this.getProperty(PROPERTY_CREATEUSERSIGN);
	}

	/**
	 * 设置-创建用户
	 * 
	 * @param value 值
	 */
	public final void setCreateUserSign(Integer value) {
		this.setProperty(PROPERTY_CREATEUSERSIGN, value);
	}

	/**
	 * 属性名称-修改用户
	 */
	private static final String PROPERTY_UPDATEUSERSIGN_NAME = "UpdateUserSign";

	/**
	 * 修改用户 属性
	 */
	@DbField(name = "Updator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_UPDATEUSERSIGN = registerProperty(PROPERTY_UPDATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEUSERSIGN_NAME)
	public final Integer getUpdateUserSign() {
		return this.getProperty(PROPERTY_UPDATEUSERSIGN);
	}

	/**
	 * 设置-修改用户
	 * 
	 * @param value 值
	 */
	public final void setUpdateUserSign(Integer value) {
		this.setProperty(PROPERTY_UPDATEUSERSIGN, value);
	}

	/**
	 * 属性名称-创建动作标识
	 */
	private static final String PROPERTY_CREATEACTIONID_NAME = "CreateActionId";

	/**
	 * 创建动作标识 属性
	 */
	@DbField(name = "CreateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CREATEACTIONID = registerProperty(PROPERTY_CREATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEACTIONID_NAME)
	public final String getCreateActionId() {
		return this.getProperty(PROPERTY_CREATEACTIONID);
	}

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value 值
	 */
	public final void setCreateActionId(String value) {
		this.setProperty(PROPERTY_CREATEACTIONID, value);
	}

	/**
	 * 属性名称-更新动作标识
	 */
	private static final String PROPERTY_UPDATEACTIONID_NAME = "UpdateActionId";

	/**
	 * 更新动作标识 属性
	 */
	@DbField(name = "UpdateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_UPDATEACTIONID = registerProperty(PROPERTY_UPDATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEACTIONID_NAME)
	public final String getUpdateActionId() {
		return this.getProperty(PROPERTY_UPDATEACTIONID);
	}

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value 值
	 */
	public final void setUpdateActionId(String value) {
		this.setProperty(PROPERTY_UPDATEACTIONID, value);
	}

	/**
	 * 属性名称-数据所有者
	 */
	private static final String PROPERTY_DATAOWNER_NAME = "DataOwner";

	/**
	 * 数据所有者 属性
	 */
	@DbField(name = "DataOwner", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_DATAOWNER = registerProperty(PROPERTY_DATAOWNER_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-数据所有者
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DATAOWNER_NAME)
	public final Integer getDataOwner() {
		return this.getProperty(PROPERTY_DATAOWNER);
	}

	/**
	 * 设置-数据所有者
	 * 
	 * @param value 值
	 */
	public final void setDataOwner(Integer value) {
		this.setProperty(PROPERTY_DATAOWNER, value);
	}

	/**
	 * 属性名称-数据所属组织
	 */
	private static final String PROPERTY_ORGANIZATION_NAME = "Organization";

	/**
	 * 数据所属组织 属性
	 */
	@DbField(name = "OrgCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ORGANIZATION = registerProperty(PROPERTY_ORGANIZATION_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-数据所属组织
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORGANIZATION_NAME)
	public final String getOrganization() {
		return this.getProperty(PROPERTY_ORGANIZATION);
	}

	/**
	 * 设置-数据所属组织
	 * 
	 * @param value 值
	 */
	public final void setOrganization(String value) {
		this.setProperty(PROPERTY_ORGANIZATION, value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));

	}

	@Override
	protected IBusinessRule[] registerRules() {
		return new IBusinessRule[] { // 注册的业务规则
				new BusinessRuleRequired(PROPERTY_BUSINESSPARTNER), // 要求有值
		};
	}

}

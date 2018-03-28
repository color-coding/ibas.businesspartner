package org.colorcoding.ibas.businesspartner.bo.businesspartnerasset;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.BOCode;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.businesspartner.MyConfiguration;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 业务伙伴资产
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = BusinessPartnerAsset.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = BusinessPartnerAsset.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BOCode(BusinessPartnerAsset.BUSINESS_OBJECT_CODE)
public class BusinessPartnerAsset extends BusinessObject<BusinessPartnerAsset> implements IBusinessPartnerAsset {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 1089370574556472310L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = BusinessPartnerAsset.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_BP_OBPA";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_BP_BPASSET";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "BusinessPartnerAsset";

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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	public final void setObjectCode(String value) {
		this.setProperty(PROPERTY_OBJECTCODE, value);
	}

	/**
	 * 属性名称-实例号
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 实例号 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-实例号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-实例号
	 * 
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	public final void setDataSource(String value) {
		this.setProperty(PROPERTY_DATASOURCE, value);
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	public final void setCreateTime(Short value) {
		this.setProperty(PROPERTY_CREATETIME, value);
	}

	/**
	 * 属性名称-更新日期
	 */
	private static final String PROPERTY_UPDATEDATE_NAME = "UpdateDate";

	/**
	 * 更新日期 属性
	 */
	@DbField(name = "UpdateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_UPDATEDATE = registerProperty(PROPERTY_UPDATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-更新日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEDATE_NAME)
	public final DateTime getUpdateDate() {
		return this.getProperty(PROPERTY_UPDATEDATE);
	}

	/**
	 * 设置-更新日期
	 * 
	 * @param value
	 *            值
	 */
	public final void setUpdateDate(DateTime value) {
		this.setProperty(PROPERTY_UPDATEDATE, value);
	}

	/**
	 * 属性名称-更新时间
	 */
	private static final String PROPERTY_UPDATETIME_NAME = "UpdateTime";

	/**
	 * 更新时间 属性
	 */
	@DbField(name = "UpdateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_UPDATETIME = registerProperty(PROPERTY_UPDATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-更新时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATETIME_NAME)
	public final Short getUpdateTime() {
		return this.getProperty(PROPERTY_UPDATETIME);
	}

	/**
	 * 设置-更新时间
	 * 
	 * @param value
	 *            值
	 */
	public final void setUpdateTime(Short value) {
		this.setProperty(PROPERTY_UPDATETIME, value);
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
	 * @param value
	 *            值
	 */
	public final void setCreateUserSign(Integer value) {
		this.setProperty(PROPERTY_CREATEUSERSIGN, value);
	}

	/**
	 * 属性名称-更新用户
	 */
	private static final String PROPERTY_UPDATEUSERSIGN_NAME = "UpdateUserSign";

	/**
	 * 更新用户 属性
	 */
	@DbField(name = "Updator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_UPDATEUSERSIGN = registerProperty(PROPERTY_UPDATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-更新用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEUSERSIGN_NAME)
	public final Integer getUpdateUserSign() {
		return this.getProperty(PROPERTY_UPDATEUSERSIGN);
	}

	/**
	 * 设置-更新用户
	 * 
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	public final void setUpdateActionId(String value) {
		this.setProperty(PROPERTY_UPDATEACTIONID, value);
	}

	/**
	 * 属性名称-已引用
	 */
	private static final String PROPERTY_REFERENCED_NAME = "Referenced";

	/**
	 * 已引用 属性
	 */
	@DbField(name = "Refed", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_REFERENCED = registerProperty(PROPERTY_REFERENCED_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCED_NAME)
	public final emYesNo getReferenced() {
		return this.getProperty(PROPERTY_REFERENCED);
	}

	/**
	 * 设置-已引用
	 * 
	 * @param value
	 *            值
	 */
	public final void setReferenced(emYesNo value) {
		this.setProperty(PROPERTY_REFERENCED, value);
	}

	/**
	 * 属性名称-已删除
	 */
	private static final String PROPERTY_DELETED_NAME = "Deleted";

	/**
	 * 已删除 属性
	 */
	@DbField(name = "Deleted", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_DELETED = registerProperty(PROPERTY_DELETED_NAME, emYesNo.class,
			MY_CLASS);

	/**
	 * 获取-已删除
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DELETED_NAME)
	public final emYesNo getDeleted() {
		return this.getProperty(PROPERTY_DELETED);
	}

	/**
	 * 设置-已删除
	 * 
	 * @param value
	 *            值
	 */
	public final void setDeleted(emYesNo value) {
		this.setProperty(PROPERTY_DELETED, value);
	}

	/**
	 * 属性名称-业务伙伴类型
	 */
	private static final String PROPERTY_BUSINESSPARTNERTYPE_NAME = "BusinessPartnerType";

	/**
	 * 业务伙伴类型 属性
	 */
	@DbField(name = "CardType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emBusinessPartnerType> PROPERTY_BUSINESSPARTNERTYPE = registerProperty(
			PROPERTY_BUSINESSPARTNERTYPE_NAME, emBusinessPartnerType.class, MY_CLASS);

	/**
	 * 获取-业务伙伴类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUSINESSPARTNERTYPE_NAME)
	public final emBusinessPartnerType getBusinessPartnerType() {
		return this.getProperty(PROPERTY_BUSINESSPARTNERTYPE);
	}

	/**
	 * 设置-业务伙伴类型
	 * 
	 * @param value
	 *            值
	 */
	public final void setBusinessPartnerType(emBusinessPartnerType value) {
		this.setProperty(PROPERTY_BUSINESSPARTNERTYPE, value);
	}

	/**
	 * 属性名称-业务伙伴编码
	 */
	private static final String PROPERTY_BUSINESSPARTNERCODE_NAME = "BusinessPartnerCode";

	/**
	 * 业务伙伴编码 属性
	 */
	@DbField(name = "CardCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_BUSINESSPARTNERCODE = registerProperty(
			PROPERTY_BUSINESSPARTNERCODE_NAME, String.class, MY_CLASS);

	/**
	 * 获取-业务伙伴编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUSINESSPARTNERCODE_NAME)
	public final String getBusinessPartnerCode() {
		return this.getProperty(PROPERTY_BUSINESSPARTNERCODE);
	}

	/**
	 * 设置-业务伙伴编码
	 * 
	 * @param value
	 *            值
	 */
	public final void setBusinessPartnerCode(String value) {
		this.setProperty(PROPERTY_BUSINESSPARTNERCODE, value);
	}

	/**
	 * 属性名称-资产项目
	 */
	private static final String PROPERTY_ASSETCODE_NAME = "AssetCode";

	/**
	 * 资产项目 属性
	 */
	@DbField(name = "AssetCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ASSETCODE = registerProperty(PROPERTY_ASSETCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-资产项目
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ASSETCODE_NAME)
	public final String getAssetCode() {
		return this.getProperty(PROPERTY_ASSETCODE);
	}

	/**
	 * 设置-资产项目
	 * 
	 * @param value
	 *            值
	 */
	public final void setAssetCode(String value) {
		this.setProperty(PROPERTY_ASSETCODE, value);
	}

	/**
	 * 属性名称-服务码
	 */
	private static final String PROPERTY_SERVICECODE_NAME = "ServiceCode";

	/**
	 * 服务码 属性
	 */
	@DbField(name = "ServiceCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_SERVICECODE = registerProperty(PROPERTY_SERVICECODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-服务码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SERVICECODE_NAME)
	public final String getServiceCode() {
		return this.getProperty(PROPERTY_SERVICECODE);
	}

	/**
	 * 设置-服务码
	 * 
	 * @param value
	 *            值
	 */
	public final void setServiceCode(String value) {
		this.setProperty(PROPERTY_SERVICECODE, value);
	}

	/**
	 * 属性名称-激活
	 */
	private static final String PROPERTY_ACTIVATED_NAME = "Activated";

	/**
	 * 激活 属性
	 */
	@DbField(name = "Activated", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_ACTIVATED = registerProperty(PROPERTY_ACTIVATED_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-激活
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ACTIVATED_NAME)
	public final emYesNo getActivated() {
		return this.getProperty(PROPERTY_ACTIVATED);
	}

	/**
	 * 设置-激活
	 * 
	 * @param value
	 *            值
	 */
	public final void setActivated(emYesNo value) {
		this.setProperty(PROPERTY_ACTIVATED, value);
	}

	/**
	 * 属性名称-获得日期
	 */
	private static final String PROPERTY_ACQUIREDDATE_NAME = "AcquiredDate";

	/**
	 * 获得日期 属性
	 */
	@DbField(name = "AcquiredDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_ACQUIREDDATE = registerProperty(PROPERTY_ACQUIREDDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-获得日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ACQUIREDDATE_NAME)
	public final DateTime getAcquiredDate() {
		return this.getProperty(PROPERTY_ACQUIREDDATE);
	}

	/**
	 * 设置-获得日期
	 * 
	 * @param value
	 *            值
	 */
	public final void setAcquiredDate(DateTime value) {
		this.setProperty(PROPERTY_ACQUIREDDATE, value);
	}

	/**
	 * 属性名称-生效日期
	 */
	private static final String PROPERTY_VALIDDATE_NAME = "ValidDate";

	/**
	 * 生效日期 属性
	 */
	@DbField(name = "ValidDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_VALIDDATE = registerProperty(PROPERTY_VALIDDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-生效日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_VALIDDATE_NAME)
	public final DateTime getValidDate() {
		return this.getProperty(PROPERTY_VALIDDATE);
	}

	/**
	 * 设置-生效日期
	 * 
	 * @param value
	 *            值
	 */
	public final void setValidDate(DateTime value) {
		this.setProperty(PROPERTY_VALIDDATE, value);
	}

	/**
	 * 属性名称-失效日期
	 */
	private static final String PROPERTY_INVALIDDATE_NAME = "InvalidDate";

	/**
	 * 失效日期 属性
	 */
	@DbField(name = "InvalidDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_INVALIDDATE = registerProperty(PROPERTY_INVALIDDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-失效日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_INVALIDDATE_NAME)
	public final DateTime getInvalidDate() {
		return this.getProperty(PROPERTY_INVALIDDATE);
	}

	/**
	 * 设置-失效日期
	 * 
	 * @param value
	 *            值
	 */
	public final void setInvalidDate(DateTime value) {
		this.setProperty(PROPERTY_INVALIDDATE, value);
	}

	/**
	 * 属性名称-剩余价值
	 */
	private static final String PROPERTY_AMOUNT_NAME = "Amount";

	/**
	 * 剩余价值 属性
	 */
	@DbField(name = "Amount", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Decimal> PROPERTY_AMOUNT = registerProperty(PROPERTY_AMOUNT_NAME, Decimal.class,
			MY_CLASS);

	/**
	 * 获取-剩余价值
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_AMOUNT_NAME)
	public final Decimal getAmount() {
		return this.getProperty(PROPERTY_AMOUNT);
	}

	/**
	 * 设置-剩余价值
	 * 
	 * @param value
	 *            值
	 */
	public final void setAmount(Decimal value) {
		this.setProperty(PROPERTY_AMOUNT, value);
	}

	/**
	 * 设置-剩余价值
	 * 
	 * @param value
	 *            值
	 */
	public final void setAmount(String value) {
		this.setAmount(new Decimal(value));
	}

	/**
	 * 设置-剩余价值
	 * 
	 * @param value
	 *            值
	 */
	public final void setAmount(int value) {
		this.setAmount(new Decimal(value));
	}

	/**
	 * 设置-剩余价值
	 * 
	 * @param value
	 *            值
	 */
	public final void setAmount(double value) {
		this.setAmount(new Decimal(value));
	}

	/**
	 * 属性名称-剩余次数
	 */
	private static final String PROPERTY_TIMES_NAME = "Times";

	/**
	 * 剩余次数 属性
	 */
	@DbField(name = "Times", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_TIMES = registerProperty(PROPERTY_TIMES_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-剩余次数
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TIMES_NAME)
	public final Integer getTimes() {
		return this.getProperty(PROPERTY_TIMES);
	}

	/**
	 * 设置-剩余次数
	 * 
	 * @param value
	 *            值
	 */
	public final void setTimes(Integer value) {
		this.setProperty(PROPERTY_TIMES, value);
	}

	/**
	 * 属性名称-基于类型
	 */
	private static final String PROPERTY_BASEDOCUMENTTYPE_NAME = "BaseDocumentType";

	/**
	 * 基于类型 属性
	 */
	@DbField(name = "BaseType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_BASEDOCUMENTTYPE = registerProperty(
			PROPERTY_BASEDOCUMENTTYPE_NAME, String.class, MY_CLASS);

	/**
	 * 获取-基于类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BASEDOCUMENTTYPE_NAME)
	public final String getBaseDocumentType() {
		return this.getProperty(PROPERTY_BASEDOCUMENTTYPE);
	}

	/**
	 * 设置-基于类型
	 * 
	 * @param value
	 *            值
	 */
	public final void setBaseDocumentType(String value) {
		this.setProperty(PROPERTY_BASEDOCUMENTTYPE, value);
	}

	/**
	 * 属性名称-基于标识
	 */
	private static final String PROPERTY_BASEDOCUMENTENTRY_NAME = "BaseDocumentEntry";

	/**
	 * 基于标识 属性
	 */
	@DbField(name = "BaseEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_BASEDOCUMENTENTRY = registerProperty(
			PROPERTY_BASEDOCUMENTENTRY_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-基于标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BASEDOCUMENTENTRY_NAME)
	public final Integer getBaseDocumentEntry() {
		return this.getProperty(PROPERTY_BASEDOCUMENTENTRY);
	}

	/**
	 * 设置-基于标识
	 * 
	 * @param value
	 *            值
	 */
	public final void setBaseDocumentEntry(Integer value) {
		this.setProperty(PROPERTY_BASEDOCUMENTENTRY, value);
	}

	/**
	 * 属性名称-基于行号
	 */
	private static final String PROPERTY_BASEDOCUMENTLINEID_NAME = "BaseDocumentLineId";

	/**
	 * 基于行号 属性
	 */
	@DbField(name = "BaseLine", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_BASEDOCUMENTLINEID = registerProperty(
			PROPERTY_BASEDOCUMENTLINEID_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-基于行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BASEDOCUMENTLINEID_NAME)
	public final Integer getBaseDocumentLineId() {
		return this.getProperty(PROPERTY_BASEDOCUMENTLINEID);
	}

	/**
	 * 设置-基于行号
	 * 
	 * @param value
	 *            值
	 */
	public final void setBaseDocumentLineId(Integer value) {
		this.setProperty(PROPERTY_BASEDOCUMENTLINEID, value);
	}

	/**
	 * 属性名称-交易金额
	 */
	private static final String PROPERTY_TRADINGAMOUNT_NAME = "TradingAmount";

	/**
	 * 交易金额 属性
	 */
	@DbField(name = "TradingAmount", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Decimal> PROPERTY_TRADINGAMOUNT = registerProperty(PROPERTY_TRADINGAMOUNT_NAME,
			Decimal.class, MY_CLASS);

	/**
	 * 获取-交易金额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TRADINGAMOUNT_NAME)
	public final Decimal getTradingAmount() {
		return this.getProperty(PROPERTY_TRADINGAMOUNT);
	}

	/**
	 * 设置-交易金额
	 * 
	 * @param value
	 *            值
	 */
	public final void setTradingAmount(Decimal value) {
		this.setProperty(PROPERTY_TRADINGAMOUNT, value);
	}

	/**
	 * 设置-交易金额
	 * 
	 * @param value
	 *            值
	 */
	public final void setTradingAmount(String value) {
		this.setTradingAmount(new Decimal(value));
	}

	/**
	 * 设置-交易金额
	 * 
	 * @param value
	 *            值
	 */
	public final void setTradingAmount(int value) {
		this.setTradingAmount(new Decimal(value));
	}

	/**
	 * 设置-交易金额
	 * 
	 * @param value
	 *            值
	 */
	public final void setTradingAmount(double value) {
		this.setTradingAmount(new Decimal(value));
	}

	/**
	 * 属性名称-交易货币
	 */
	private static final String PROPERTY_TRADINGCURRENCY_NAME = "TradingCurrency";

	/**
	 * 交易货币 属性
	 */
	@DbField(name = "TradingCurrency", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TRADINGCURRENCY = registerProperty(PROPERTY_TRADINGCURRENCY_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-交易货币
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TRADINGCURRENCY_NAME)
	public final String getTradingCurrency() {
		return this.getProperty(PROPERTY_TRADINGCURRENCY);
	}

	/**
	 * 设置-交易货币
	 * 
	 * @param value
	 *            值
	 */
	public final void setTradingCurrency(String value) {
		this.setProperty(PROPERTY_TRADINGCURRENCY, value);
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	public final void setRemark2(String value) {
		this.setProperty(PROPERTY_REMARK2, value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setAcquiredDate(DateTime.getToday());
	}

}

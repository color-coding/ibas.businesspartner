package org.colorcoding.ibas.businesspartner.bo.businesspartnerbalancejournal;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.mapping.BOCode;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.businesspartner.MyConfiguration;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;
import org.colorcoding.ibas.businesspartner.logics.IBusinessPartnerBalanceJournalContract;
import org.colorcoding.ibas.businesspartner.logics.IBusinessPartnerBalancePaymentContract;
import org.colorcoding.ibas.businesspartner.logics.IBusinessPartnerBalanceReceiptContract;

/**
 * 获取-业务伙伴余额记录
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = BusinessPartnerBalanceJournal.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = BusinessPartnerBalanceJournal.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BOCode(BusinessPartnerBalanceJournal.BUSINESS_OBJECT_CODE)
public class BusinessPartnerBalanceJournal extends BusinessObject<BusinessPartnerBalanceJournal>
		implements IBusinessPartnerBalanceJournal,IBusinessPartnerBalanceJournalContract {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = 5512030836587659648L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = BusinessPartnerBalanceJournal.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_BP_OBJN";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_BP_BALANCEJOURNAL";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "BusinessPartnerBalanceJournal";

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
	private static final String PROPERTY_BUSINESSPARTNER_NAME = "BusinessPartner";

	/**
	 * 业务伙伴编码 属性
	 */
	@DbField(name = "CardCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_BUSINESSPARTNER = registerProperty(PROPERTY_BUSINESSPARTNER_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-业务伙伴编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUSINESSPARTNER_NAME)
	public final String getBusinessPartner() {
		return this.getProperty(PROPERTY_BUSINESSPARTNER);
	}

	/**
	 * 设置-业务伙伴编码
	 * 
	 * @param value
	 *            值
	 */
	public final void setBusinessPartner(String value) {
		this.setProperty(PROPERTY_BUSINESSPARTNER, value);
	}

	/**
	 * 属性名称-方向
	 */
	private static final String PROPERTY_DIRECTION_NAME = "Direction";

	/**
	 * 方向 属性
	 */
	@DbField(name = "Direction", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emDirection> PROPERTY_DIRECTION = registerProperty(PROPERTY_DIRECTION_NAME,
			emDirection.class, MY_CLASS);

	/**
	 * 获取-方向
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DIRECTION_NAME)
	public final emDirection getDirection() {
		return this.getProperty(PROPERTY_DIRECTION);
	}

	/**
	 * 设置-方向
	 * 
	 * @param value
	 *            值
	 */
	public final void setDirection(emDirection value) {
		this.setProperty(PROPERTY_DIRECTION, value);
	}

	/**
	 * 属性名称-方式
	 */
	private static final String PROPERTY_MODE_NAME = "Mode";

	/**
	 * 方式 属性
	 */
	@DbField(name = "Mode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_MODE = registerProperty(PROPERTY_MODE_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-方式
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_MODE_NAME)
	public final String getMode() {
		return this.getProperty(PROPERTY_MODE);
	}

	/**
	 * 设置-方式
	 * 
	 * @param value
	 *            值
	 */
	public final void setMode(String value) {
		this.setProperty(PROPERTY_MODE, value);
	}

	/**
	 * 属性名称-金额
	 */
	private static final String PROPERTY_AMOUNT_NAME = "Amount";

	/**
	 * 金额 属性
	 */
	@DbField(name = "Amount", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Decimal> PROPERTY_AMOUNT = registerProperty(PROPERTY_AMOUNT_NAME, Decimal.class,
			MY_CLASS);

	/**
	 * 获取-金额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_AMOUNT_NAME)
	public final Decimal getAmount() {
		return this.getProperty(PROPERTY_AMOUNT);
	}

	/**
	 * 设置-金额
	 * 
	 * @param value
	 *            值
	 */
	public final void setAmount(Decimal value) {
		this.setProperty(PROPERTY_AMOUNT, value);
	}

	/**
	 * 设置-金额
	 * 
	 * @param value
	 *            值
	 */
	public final void setAmount(String value) {
		this.setAmount(new Decimal(value));
	}

	/**
	 * 设置-金额
	 * 
	 * @param value
	 *            值
	 */
	public final void setAmount(int value) {
		this.setAmount(new Decimal(value));
	}

	/**
	 * 设置-金额
	 * 
	 * @param value
	 *            值
	 */
	public final void setAmount(double value) {
		this.setAmount(new Decimal(value));
	}

	/**
	 * 属性名称-币种
	 */
	private static final String PROPERTY_CURRENCY_NAME = "Currency";

	/**
	 * 币种 属性
	 */
	@DbField(name = "Currency", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CURRENCY = registerProperty(PROPERTY_CURRENCY_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-币种
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CURRENCY_NAME)
	public final String getCurrency() {
		return this.getProperty(PROPERTY_CURRENCY);
	}

	/**
	 * 设置-币种
	 * 
	 * @param value
	 *            值
	 */
	public final void setCurrency(String value) {
		this.setProperty(PROPERTY_CURRENCY, value);
	}

	/**
	 * 属性名称-汇率
	 */
	private static final String PROPERTY_RATE_NAME = "Rate";

	/**
	 * 汇率 属性
	 */
	@DbField(name = "Rate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Decimal> PROPERTY_RATE = registerProperty(PROPERTY_RATE_NAME, Decimal.class,
			MY_CLASS);

	/**
	 * 获取-汇率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_RATE_NAME)
	public final Decimal getRate() {
		return this.getProperty(PROPERTY_RATE);
	}

	/**
	 * 设置-汇率
	 * 
	 * @param value
	 *            值
	 */
	public final void setRate(Decimal value) {
		this.setProperty(PROPERTY_RATE, value);
	}

	/**
	 * 设置-汇率
	 * 
	 * @param value
	 *            值
	 */
	public final void setRate(String value) {
		this.setRate(new Decimal(value));
	}

	/**
	 * 设置-汇率
	 * 
	 * @param value
	 *            值
	 */
	public final void setRate(int value) {
		this.setRate(new Decimal(value));
	}

	/**
	 * 设置-汇率
	 * 
	 * @param value
	 *            值
	 */
	public final void setRate(double value) {
		this.setRate(new Decimal(value));
	}

	/**
	 * 属性名称-银行编码
	 */
	private static final String PROPERTY_BANKCODE_NAME = "BankCode";

	/**
	 * 银行编码 属性
	 */
	@DbField(name = "BankCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_BANKCODE = registerProperty(PROPERTY_BANKCODE_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-银行编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BANKCODE_NAME)
	public final String getBankCode() {
		return this.getProperty(PROPERTY_BANKCODE);
	}

	/**
	 * 设置-银行编码
	 * 
	 * @param value
	 *            值
	 */
	public final void setBankCode(String value) {
		this.setProperty(PROPERTY_BANKCODE, value);
	}

	/**
	 * 属性名称-卡号
	 */
	private static final String PROPERTY_CARDNUMBER_NAME = "CardNumber";

	/**
	 * 卡号 属性
	 */
	@DbField(name = "CardNumber", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CARDNUMBER = registerProperty(PROPERTY_CARDNUMBER_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-卡号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CARDNUMBER_NAME)
	public final String getCardNumber() {
		return this.getProperty(PROPERTY_CARDNUMBER);
	}

	/**
	 * 设置-卡号
	 * 
	 * @param value
	 *            值
	 */
	public final void setCardNumber(String value) {
		this.setProperty(PROPERTY_CARDNUMBER, value);
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
	 * 属性名称-原始类型
	 */
	private static final String PROPERTY_ORIGINALDOCUMENTTYPE_NAME = "OriginalDocumentType";

	/**
	 * 原始类型 属性
	 */
	@DbField(name = "OrgnlType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ORIGINALDOCUMENTTYPE = registerProperty(
			PROPERTY_ORIGINALDOCUMENTTYPE_NAME, String.class, MY_CLASS);

	/**
	 * 获取-原始类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORIGINALDOCUMENTTYPE_NAME)
	public final String getOriginalDocumentType() {
		return this.getProperty(PROPERTY_ORIGINALDOCUMENTTYPE);
	}

	/**
	 * 设置-原始类型
	 * 
	 * @param value
	 *            值
	 */
	public final void setOriginalDocumentType(String value) {
		this.setProperty(PROPERTY_ORIGINALDOCUMENTTYPE, value);
	}

	/**
	 * 属性名称-原始标识
	 */
	private static final String PROPERTY_ORIGINALDOCUMENTENTRY_NAME = "OriginalDocumentEntry";

	/**
	 * 原始标识 属性
	 */
	@DbField(name = "OrgnlEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_ORIGINALDOCUMENTENTRY = registerProperty(
			PROPERTY_ORIGINALDOCUMENTENTRY_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-原始标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORIGINALDOCUMENTENTRY_NAME)
	public final Integer getOriginalDocumentEntry() {
		return this.getProperty(PROPERTY_ORIGINALDOCUMENTENTRY);
	}

	/**
	 * 设置-原始标识
	 * 
	 * @param value
	 *            值
	 */
	public final void setOriginalDocumentEntry(Integer value) {
		this.setProperty(PROPERTY_ORIGINALDOCUMENTENTRY, value);
	}

	/**
	 * 属性名称-原始行号
	 */
	private static final String PROPERTY_ORIGINALDOCUMENTLINEID_NAME = "OriginalDocumentLineId";

	/**
	 * 原始行号 属性
	 */
	@DbField(name = "OrgnlLine", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_ORIGINALDOCUMENTLINEID = registerProperty(
			PROPERTY_ORIGINALDOCUMENTLINEID_NAME, Integer.class, MY_CLASS);

	/**
	 * 获取-原始行号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORIGINALDOCUMENTLINEID_NAME)
	public final Integer getOriginalDocumentLineId() {
		return this.getProperty(PROPERTY_ORIGINALDOCUMENTLINEID);
	}

	/**
	 * 设置-原始行号
	 * 
	 * @param value
	 *            值
	 */
	public final void setOriginalDocumentLineId(Integer value) {
		this.setProperty(PROPERTY_ORIGINALDOCUMENTLINEID, value);
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
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
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));

	}
     //region 基于其他BO创建实
	public static IBusinessPartnerBalanceJournal Create(IBusinessPartnerBalanceReceiptContract ReceiptContract) {
		BusinessPartnerBalanceJournal bo = new BusinessPartnerBalanceJournal();
		bo.setProperty(PROPERTY_BUSINESSPARTNER,ReceiptContract.getReceiptBusinessPartnerCode());
		bo.setProperty(PROPERTY_AMOUNT,ReceiptContract.getReceiptAmount());
		bo.setProperty(PROPERTY_BANKCODE,ReceiptContract.getReceiptBankCode());
		bo.setProperty(PROPERTY_CURRENCY,ReceiptContract.getReceiptCurrency());
		bo.setProperty(PROPERTY_CARDNUMBER,ReceiptContract.getReceiptCardNumber());
		bo.setProperty(PROPERTY_BASEDOCUMENTTYPE,ReceiptContract.getReceiptBaseDocumentType());
		bo.setProperty(PROPERTY_BASEDOCUMENTENTRY,ReceiptContract.getReceiptBaseDocumentEntry());
		bo.setProperty(PROPERTY_BASEDOCUMENTLINEID,ReceiptContract.getReceiptBaseDocumentLineId());
		bo.setProperty(PROPERTY_DIRECTION,emDirection.IN);
		return bo;
	}

	public static IBusinessPartnerBalanceJournal Create(IBusinessPartnerBalancePaymentContract PaymentContract) {
		BusinessPartnerBalanceJournal bo = new BusinessPartnerBalanceJournal();
		bo.setProperty(PROPERTY_BUSINESSPARTNER,PaymentContract.getPaymentBusinessPartnerCode());
		bo.setProperty(PROPERTY_AMOUNT,PaymentContract.getPaymentAmount());
		bo.setProperty(PROPERTY_BANKCODE,PaymentContract.getPaymentBankCode());
		bo.setProperty(PROPERTY_CURRENCY,PaymentContract.getPaymentCurrency());
		bo.setProperty(PROPERTY_CARDNUMBER,PaymentContract.getPaymentCardNumber());
		bo.setProperty(PROPERTY_BASEDOCUMENTTYPE,PaymentContract.getPaymentBaseDocumentType());
		bo.setProperty(PROPERTY_BASEDOCUMENTENTRY,PaymentContract.getPaymentBaseDocumentEntry());
		bo.setProperty(PROPERTY_BASEDOCUMENTLINEID,PaymentContract.getPaymentBaseDocumentLineId());
		bo.setProperty(PROPERTY_DIRECTION,emDirection.OUT);
		return bo;
	}
	//endregion

	//region 服务契约接口的实现
	@Override
	public String getBusinessPartnerCode() {
		return this.getProperty(PROPERTY_BUSINESSPARTNER);
	}

	@Override
	public Decimal getReciptAndPaymentAmount() {
		return this.getProperty(PROPERTY_AMOUNT);
	}

	@Override
	public emDirection getReciptAndPaymentDirection() {
		return this.getProperty(PROPERTY_DIRECTION);
	}
	//endregion

}

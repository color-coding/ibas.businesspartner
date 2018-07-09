package org.colorcoding.ibas.businesspartner.bo.customer;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.approval.IApprovalData;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOSeriesKey;
import org.colorcoding.ibas.bobas.bo.IBOTagDeleted;
import org.colorcoding.ibas.bobas.bo.IBOUserFields;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.mapping.BOCode;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.ownership.IDataOwnership;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleRequired;
import org.colorcoding.ibas.businesspartner.MyConfiguration;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerNature;

/**
 * 获取-客户
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = Customer.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = Customer.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BOCode(Customer.BUSINESS_OBJECT_CODE)
public class Customer extends BusinessObject<Customer>
		implements ICustomer, IDataOwnership, IApprovalData, IBOSeriesKey, IBOTagDeleted, IBOUserFields {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -3578540590985797382L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = Customer.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_BP_OCUS";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_BP_CUSTOMER";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "Customer";

	/**
	 * 属性名称-编码
	 */
	private static final String PROPERTY_CODE_NAME = "Code";

	/**
	 * 编码 属性
	 */
	@DbField(name = "Code", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, uniqueKey = true)
	public static final IPropertyInfo<String> PROPERTY_CODE = registerProperty(PROPERTY_CODE_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CODE_NAME)
	public final String getCode() {
		return this.getProperty(PROPERTY_CODE);
	}

	/**
	 * 设置-编码
	 * 
	 * @param value
	 *            值
	 */
	public final void setCode(String value) {
		this.setProperty(PROPERTY_CODE, value);
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
	 * @param value
	 *            值
	 */
	public final void setName(String value) {
		this.setProperty(PROPERTY_NAME, value);
	}

	/**
	 * 属性名称-组代码
	 */
	private static final String PROPERTY_GROUP_NAME = "Group";

	/**
	 * 组代码 属性
	 */
	@DbField(name = "Group", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_GROUP = registerProperty(PROPERTY_GROUP_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-组代码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_GROUP_NAME)
	public final String getGroup() {
		return this.getProperty(PROPERTY_GROUP);
	}

	/**
	 * 设置-组代码
	 * 
	 * @param value
	 *            值
	 */
	public final void setGroup(String value) {
		this.setProperty(PROPERTY_GROUP, value);
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
	 * 属性名称-公司/个人
	 */
	private static final String PROPERTY_COMPANYPRIVATE_NAME = "CompanyPrivate";

	/**
	 * 公司/个人 属性
	 */
	@DbField(name = "CmpPrivate", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emBusinessPartnerNature> PROPERTY_COMPANYPRIVATE = registerProperty(
			PROPERTY_COMPANYPRIVATE_NAME, emBusinessPartnerNature.class, MY_CLASS);

	/**
	 * 获取-公司/个人
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_COMPANYPRIVATE_NAME)
	public final emBusinessPartnerNature getCompanyPrivate() {
		return this.getProperty(PROPERTY_COMPANYPRIVATE);
	}

	/**
	 * 设置-公司/个人
	 * 
	 * @param value
	 *            值
	 */
	public final void setCompanyPrivate(emBusinessPartnerNature value) {
		this.setProperty(PROPERTY_COMPANYPRIVATE, value);
	}

	/**
	 * 属性名称-联系人
	 */
	private static final String PROPERTY_CONTACTPERSON_NAME = "ContactPerson";

	/**
	 * 联系人 属性
	 */
	@DbField(name = "CntctPrsn", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_CONTACTPERSON = registerProperty(PROPERTY_CONTACTPERSON_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-联系人
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CONTACTPERSON_NAME)
	public final Integer getContactPerson() {
		return this.getProperty(PROPERTY_CONTACTPERSON);
	}

	/**
	 * 设置-联系人
	 * 
	 * @param value
	 *            值
	 */
	public final void setContactPerson(Integer value) {
		this.setProperty(PROPERTY_CONTACTPERSON, value);
	}

	/**
	 * 属性名称-账单地址
	 */
	private static final String PROPERTY_BILLADDRESS_NAME = "BillAddress";

	/**
	 * 账单地址 属性
	 */
	@DbField(name = "BillAddress", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_BILLADDRESS = registerProperty(PROPERTY_BILLADDRESS_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-账单地址
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BILLADDRESS_NAME)
	public final Integer getBillAddress() {
		return this.getProperty(PROPERTY_BILLADDRESS);
	}

	/**
	 * 设置-账单地址
	 * 
	 * @param value
	 *            值
	 */
	public final void setBillAddress(Integer value) {
		this.setProperty(PROPERTY_BILLADDRESS, value);
	}

	/**
	 * 属性名称-送货地址
	 */
	private static final String PROPERTY_SHIPADDRESS_NAME = "ShipAddress";

	/**
	 * 送货地址 属性
	 */
	@DbField(name = "ShipAddress", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_SHIPADDRESS = registerProperty(PROPERTY_SHIPADDRESS_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-送货地址
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SHIPADDRESS_NAME)
	public final Integer getShipAddress() {
		return this.getProperty(PROPERTY_SHIPADDRESS);
	}

	/**
	 * 设置-送货地址
	 * 
	 * @param value
	 *            值
	 */
	public final void setShipAddress(Integer value) {
		this.setProperty(PROPERTY_SHIPADDRESS, value);
	}

	/**
	 * 属性名称-电话 1
	 */
	private static final String PROPERTY_TELEPHONE1_NAME = "Telephone1";

	/**
	 * 电话 1 属性
	 */
	@DbField(name = "Phone1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	 * @param value
	 *            值
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
	@DbField(name = "Phone2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
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
	 * @param value
	 *            值
	 */
	public final void setTelephone2(String value) {
		this.setProperty(PROPERTY_TELEPHONE2, value);
	}

	/**
	 * 属性名称-移动电话
	 */
	private static final String PROPERTY_MOBILEPHONE_NAME = "MobilePhone";

	/**
	 * 移动电话 属性
	 */
	@DbField(name = "Cellular", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_MOBILEPHONE = registerProperty(PROPERTY_MOBILEPHONE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-移动电话
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_MOBILEPHONE_NAME)
	public final String getMobilePhone() {
		return this.getProperty(PROPERTY_MOBILEPHONE);
	}

	/**
	 * 设置-移动电话
	 * 
	 * @param value
	 *            值
	 */
	public final void setMobilePhone(String value) {
		this.setProperty(PROPERTY_MOBILEPHONE, value);
	}

	/**
	 * 属性名称-传真号
	 */
	private static final String PROPERTY_FAXNUMBER_NAME = "FaxNumber";

	/**
	 * 传真号 属性
	 */
	@DbField(name = "Fax", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_FAXNUMBER = registerProperty(PROPERTY_FAXNUMBER_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-传真号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_FAXNUMBER_NAME)
	public final String getFaxNumber() {
		return this.getProperty(PROPERTY_FAXNUMBER);
	}

	/**
	 * 设置-传真号
	 * 
	 * @param value
	 *            值
	 */
	public final void setFaxNumber(String value) {
		this.setProperty(PROPERTY_FAXNUMBER, value);
	}

	/**
	 * 属性名称-国税编号
	 */
	private static final String PROPERTY_TAXID_NAME = "TaxId";

	/**
	 * 国税编号 属性
	 */
	@DbField(name = "TaxId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TAXID = registerProperty(PROPERTY_TAXID_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-国税编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TAXID_NAME)
	public final String getTaxId() {
		return this.getProperty(PROPERTY_TAXID);
	}

	/**
	 * 设置-国税编号
	 * 
	 * @param value
	 *            值
	 */
	public final void setTaxId(String value) {
		this.setProperty(PROPERTY_TAXID, value);
	}

	/**
	 * 属性名称-价格清单
	 */
	private static final String PROPERTY_PRICELIST_NAME = "PriceList";

	/**
	 * 价格清单 属性
	 */
	@DbField(name = "PriceList", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_PRICELIST = registerProperty(PROPERTY_PRICELIST_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-价格清单
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PRICELIST_NAME)
	public final Integer getPriceList() {
		return this.getProperty(PROPERTY_PRICELIST);
	}

	/**
	 * 设置-价格清单
	 * 
	 * @param value
	 *            值
	 */
	public final void setPriceList(Integer value) {
		this.setProperty(PROPERTY_PRICELIST, value);
	}

	/**
	 * 属性名称-货币
	 */
	private static final String PROPERTY_CURRENCY_NAME = "Currency";

	/**
	 * 货币 属性
	 */
	@DbField(name = "Currency", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CURRENCY = registerProperty(PROPERTY_CURRENCY_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-货币
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CURRENCY_NAME)
	public final String getCurrency() {
		return this.getProperty(PROPERTY_CURRENCY);
	}

	/**
	 * 设置-货币
	 * 
	 * @param value
	 *            值
	 */
	public final void setCurrency(String value) {
		this.setProperty(PROPERTY_CURRENCY, value);
	}

	/**
	 * 属性名称-仓库
	 */
	private static final String PROPERTY_WAREHOUSE_NAME = "Warehouse";

	/**
	 * 仓库 属性
	 */
	@DbField(name = "WhsCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_WAREHOUSE = registerProperty(PROPERTY_WAREHOUSE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-仓库
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_WAREHOUSE_NAME)
	public final String getWarehouse() {
		return this.getProperty(PROPERTY_WAREHOUSE);
	}

	/**
	 * 设置-仓库
	 * 
	 * @param value
	 *            值
	 */
	public final void setWarehouse(String value) {
		this.setProperty(PROPERTY_WAREHOUSE, value);
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
	 * 属性名称-备注
	 */
	private static final String PROPERTY_REMARKS_NAME = "Remarks";

	/**
	 * 备注 属性
	 */
	@DbField(name = "Remarks", type = DbFieldType.MEMO, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_REMARKS = registerProperty(PROPERTY_REMARKS_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-备注
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REMARKS_NAME)
	public final String getRemarks() {
		return this.getProperty(PROPERTY_REMARKS);
	}

	/**
	 * 设置-备注
	 * 
	 * @param value
	 *            值
	 */
	public final void setRemarks(String value) {
		this.setProperty(PROPERTY_REMARKS, value);
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
	 * 属性名称-对象编号
	 */
	private static final String PROPERTY_DOCENTRY_NAME = "DocEntry";

	/**
	 * 对象编号 属性
	 */
	@DbField(name = "DocEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_DOCENTRY = registerProperty(PROPERTY_DOCENTRY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-对象编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCENTRY_NAME)
	public final Integer getDocEntry() {
		return this.getProperty(PROPERTY_DOCENTRY);
	}

	/**
	 * 设置-对象编号
	 * 
	 * @param value
	 *            值
	 */
	public final void setDocEntry(Integer value) {
		this.setProperty(PROPERTY_DOCENTRY, value);
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
	 * 属性名称-版本
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 版本 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-版本
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-版本
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
	 * 属性名称-审批状态
	 */
	private static final String PROPERTY_APPROVALSTATUS_NAME = "ApprovalStatus";

	/**
	 * 审批状态 属性
	 */
	@DbField(name = "ApvlStatus", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emApprovalStatus> PROPERTY_APPROVALSTATUS = registerProperty(
			PROPERTY_APPROVALSTATUS_NAME, emApprovalStatus.class, MY_CLASS);

	/**
	 * 获取-审批状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_APPROVALSTATUS_NAME)
	public final emApprovalStatus getApprovalStatus() {
		return this.getProperty(PROPERTY_APPROVALSTATUS);
	}

	/**
	 * 设置-审批状态
	 * 
	 * @param value
	 *            值
	 */
	public final void setApprovalStatus(emApprovalStatus value) {
		this.setProperty(PROPERTY_APPROVALSTATUS, value);
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
	 * @param value
	 *            值
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
	 * @param value
	 *            值
	 */
	public final void setOrganization(String value) {
		this.setProperty(PROPERTY_ORGANIZATION, value);
	}

	/**
	 * 属性名称-所属渠道
	 */
	private static final String PROPERTY_CHANNEL_NAME = "Channel";

	/**
	 * 所属渠道 属性
	 */
	@DbField(name = "Channel", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CHANNEL = registerProperty(PROPERTY_CHANNEL_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-所属渠道
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CHANNEL_NAME)
	public final String getChannel() {
		return this.getProperty(PROPERTY_CHANNEL);
	}

	/**
	 * 设置-所属渠道
	 * 
	 * @param value
	 *            值
	 */
	public final void setChannel(String value) {
		this.setProperty(PROPERTY_CHANNEL, value);
	}

	@Override
	public void setSeriesValue(Object value) {
		this.setCode((String) value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setActivated(emYesNo.YES);
		this.setCompanyPrivate(emBusinessPartnerNature.COMPANY);
	}

	@Override
	protected IBusinessRule[] registerRules() {
		return new IBusinessRule[] { // 注册的业务规则
				new BusinessRuleRequired(PROPERTY_CODE), // 要求有值
		};
	}
}

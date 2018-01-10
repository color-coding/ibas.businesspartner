/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emYesNo,
    emDocumentStatus,
    emBOStatus,
    emApprovalStatus,
    BusinessObject,
    BusinessObjects,
    BOMasterData,
    BOMasterDataLine,
    BODocument,
    BODocumentLine,
    BOSimple,
    BOSimpleLine,
    config,
} from "ibas/index";
import {
    ISupplier,
    BO_CODE_SUPPLIER,
    emBusinessPartnerNature,
} from "../../api/index";

/** 供应商 */
export class Supplier extends BOMasterData<Supplier> implements ISupplier {

    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = BO_CODE_SUPPLIER;
    /** 构造函数 */
    constructor() {
        super();
    }
    /** 映射的属性名称-编码 */
    static PROPERTY_CODE_NAME: string = "Code";
    /** 获取-编码 */
    get code(): string {
        return this.getProperty<string>(Supplier.PROPERTY_CODE_NAME);
    }
    /** 设置-编码 */
    set code(value: string) {
        this.setProperty(Supplier.PROPERTY_CODE_NAME, value);
    }

    /** 映射的属性名称-名称 */
    static PROPERTY_NAME_NAME: string = "Name";
    /** 获取-名称 */
    get name(): string {
        return this.getProperty<string>(Supplier.PROPERTY_NAME_NAME);
    }
    /** 设置-名称 */
    set name(value: string) {
        this.setProperty(Supplier.PROPERTY_NAME_NAME, value);
    }

    /** 映射的属性名称-组代码 */
    static PROPERTY_GROUP_NAME: string = "Group";
    /** 获取-组代码 */
    get group(): string {
        return this.getProperty<string>(Supplier.PROPERTY_GROUP_NAME);
    }
    /** 设置-组代码 */
    set group(value: string) {
        this.setProperty(Supplier.PROPERTY_GROUP_NAME, value);
    }

    /** 映射的属性名称-联系人 */
    static PROPERTY_CONTACTPERSON_NAME: string = "ContactPerson";
    /** 获取-联系人 */
    get contactPerson(): number {
        return this.getProperty<number>(Supplier.PROPERTY_CONTACTPERSON_NAME);
    }
    /** 设置-联系人 */
    set contactPerson(value: number) {
        this.setProperty(Supplier.PROPERTY_CONTACTPERSON_NAME, value);
    }

    /** 映射的属性名称-公司/个人 */
    static PROPERTY_COMPANYPRIVATE_NAME: string = "CompanyPrivate";
    /** 获取-公司/个人 */
    get companyPrivate(): emBusinessPartnerNature {
        return this.getProperty<emBusinessPartnerNature>(Supplier.PROPERTY_COMPANYPRIVATE_NAME);
    }
    /** 设置-公司/个人 */
    set companyPrivate(value: emBusinessPartnerNature) {
        this.setProperty(Supplier.PROPERTY_COMPANYPRIVATE_NAME, value);
    }

    /** 映射的属性名称-付款方街道 */
    static PROPERTY_BILLTOSTREET_NAME: string = "BillToStreet";
    /** 获取-付款方街道 */
    get billToStreet(): string {
        return this.getProperty<string>(Supplier.PROPERTY_BILLTOSTREET_NAME);
    }
    /** 设置-付款方街道 */
    set billToStreet(value: string) {
        this.setProperty(Supplier.PROPERTY_BILLTOSTREET_NAME, value);
    }

    /** 映射的属性名称-付款方邮政编码 */
    static PROPERTY_BILLTOZIPCODE_NAME: string = "BillToZipCode";
    /** 获取-付款方邮政编码 */
    get billToZipCode(): string {
        return this.getProperty<string>(Supplier.PROPERTY_BILLTOZIPCODE_NAME);
    }
    /** 设置-付款方邮政编码 */
    set billToZipCode(value: string) {
        this.setProperty(Supplier.PROPERTY_BILLTOZIPCODE_NAME, value);
    }

    /** 映射的属性名称-送达方街道 */
    static PROPERTY_SHIPTOSTREET_NAME: string = "ShipToStreet";
    /** 获取-送达方街道 */
    get shipToStreet(): string {
        return this.getProperty<string>(Supplier.PROPERTY_SHIPTOSTREET_NAME);
    }
    /** 设置-送达方街道 */
    set shipToStreet(value: string) {
        this.setProperty(Supplier.PROPERTY_SHIPTOSTREET_NAME, value);
    }

    /** 映射的属性名称-送达方邮政编码 */
    static PROPERTY_SHIPTOZIPCODE_NAME: string = "ShipToZipCode";
    /** 获取-送达方邮政编码 */
    get shipToZipCode(): string {
        return this.getProperty<string>(Supplier.PROPERTY_SHIPTOZIPCODE_NAME);
    }
    /** 设置-送达方邮政编码 */
    set shipToZipCode(value: string) {
        this.setProperty(Supplier.PROPERTY_SHIPTOZIPCODE_NAME, value);
    }

    /** 映射的属性名称-电话 1 */
    static PROPERTY_TELEPHONE1_NAME: string = "Telephone1";
    /** 获取-电话 1 */
    get telephone1(): string {
        return this.getProperty<string>(Supplier.PROPERTY_TELEPHONE1_NAME);
    }
    /** 设置-电话 1 */
    set telephone1(value: string) {
        this.setProperty(Supplier.PROPERTY_TELEPHONE1_NAME, value);
    }

    /** 映射的属性名称-电话 2 */
    static PROPERTY_TELEPHONE2_NAME: string = "Telephone2";
    /** 获取-电话 2 */
    get telephone2(): string {
        return this.getProperty<string>(Supplier.PROPERTY_TELEPHONE2_NAME);
    }
    /** 设置-电话 2 */
    set telephone2(value: string) {
        this.setProperty(Supplier.PROPERTY_TELEPHONE2_NAME, value);
    }

    /** 映射的属性名称-移动电话 */
    static PROPERTY_MOBILEPHONE_NAME: string = "MobilePhone";
    /** 获取-移动电话 */
    get mobilePhone(): string {
        return this.getProperty<string>(Supplier.PROPERTY_MOBILEPHONE_NAME);
    }
    /** 设置-移动电话 */
    set mobilePhone(value: string) {
        this.setProperty(Supplier.PROPERTY_MOBILEPHONE_NAME, value);
    }

    /** 映射的属性名称-传真号 */
    static PROPERTY_FAXNUMBER_NAME: string = "FaxNumber";
    /** 获取-传真号 */
    get faxNumber(): string {
        return this.getProperty<string>(Supplier.PROPERTY_FAXNUMBER_NAME);
    }
    /** 设置-传真号 */
    set faxNumber(value: string) {
        this.setProperty(Supplier.PROPERTY_FAXNUMBER_NAME, value);
    }

    /** 映射的属性名称-国税编号 */
    static PROPERTY_TAXID_NAME: string = "TaxId";
    /** 获取-国税编号 */
    get taxId(): string {
        return this.getProperty<string>(Supplier.PROPERTY_TAXID_NAME);
    }
    /** 设置-国税编号 */
    set taxId(value: string) {
        this.setProperty(Supplier.PROPERTY_TAXID_NAME, value);
    }

    /** 映射的属性名称-价格清单 */
    static PROPERTY_PRICELIST_NAME: string = "PriceList";
    /** 获取-价格清单 */
    get priceList(): number {
        return this.getProperty<number>(Supplier.PROPERTY_PRICELIST_NAME);
    }
    /** 设置-价格清单 */
    set priceList(value: number) {
        this.setProperty(Supplier.PROPERTY_PRICELIST_NAME, value);
    }

    /** 映射的属性名称-货币 */
    static PROPERTY_CURRENCY_NAME: string = "Currency";
    /** 获取-货币 */
    get currency(): string {
        return this.getProperty<string>(Supplier.PROPERTY_CURRENCY_NAME);
    }
    /** 设置-货币 */
    set currency(value: string) {
        this.setProperty(Supplier.PROPERTY_CURRENCY_NAME, value);
    }

    /** 映射的属性名称-生效日期 */
    static PROPERTY_VALIDDATE_NAME: string = "ValidDate";
    /** 获取-生效日期 */
    get validDate(): Date {
        return this.getProperty<Date>(Supplier.PROPERTY_VALIDDATE_NAME);
    }
    /** 设置-生效日期 */
    set validDate(value: Date) {
        this.setProperty(Supplier.PROPERTY_VALIDDATE_NAME, value);
    }

    /** 映射的属性名称-失效日期 */
    static PROPERTY_INVALIDDATE_NAME: string = "InvalidDate";
    /** 获取-失效日期 */
    get invalidDate(): Date {
        return this.getProperty<Date>(Supplier.PROPERTY_INVALIDDATE_NAME);
    }
    /** 设置-失效日期 */
    set invalidDate(value: Date) {
        this.setProperty(Supplier.PROPERTY_INVALIDDATE_NAME, value);
    }

    /** 映射的属性名称-备注 */
    static PROPERTY_REMARKS_NAME: string = "Remarks";
    /** 获取-备注 */
    get remarks(): string {
        return this.getProperty<string>(Supplier.PROPERTY_REMARKS_NAME);
    }
    /** 设置-备注 */
    set remarks(value: string) {
        this.setProperty(Supplier.PROPERTY_REMARKS_NAME, value);
    }

    /** 映射的属性名称-已引用 */
    static PROPERTY_REFERENCED_NAME: string = "Referenced";
    /** 获取-已引用 */
    get referenced(): emYesNo {
        return this.getProperty<emYesNo>(Supplier.PROPERTY_REFERENCED_NAME);
    }
    /** 设置-已引用 */
    set referenced(value: emYesNo) {
        this.setProperty(Supplier.PROPERTY_REFERENCED_NAME, value);
    }

    /** 映射的属性名称-已删除 */
    static PROPERTY_DELETED_NAME: string = "Deleted";
    /** 获取-已删除 */
    get deleted(): emYesNo {
        return this.getProperty<emYesNo>(Supplier.PROPERTY_DELETED_NAME);
    }
    /** 设置-已删除 */
    set deleted(value: emYesNo) {
        this.setProperty(Supplier.PROPERTY_DELETED_NAME, value);
    }

    /** 映射的属性名称-对象编号 */
    static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
    /** 获取-对象编号 */
    get docEntry(): number {
        return this.getProperty<number>(Supplier.PROPERTY_DOCENTRY_NAME);
    }
    /** 设置-对象编号 */
    set docEntry(value: number) {
        this.setProperty(Supplier.PROPERTY_DOCENTRY_NAME, value);
    }

    /** 映射的属性名称-对象类型 */
    static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
    /** 获取-对象类型 */
    get objectCode(): string {
        return this.getProperty<string>(Supplier.PROPERTY_OBJECTCODE_NAME);
    }
    /** 设置-对象类型 */
    set objectCode(value: string) {
        this.setProperty(Supplier.PROPERTY_OBJECTCODE_NAME, value);
    }

    /** 映射的属性名称-创建日期 */
    static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
    /** 获取-创建日期 */
    get createDate(): Date {
        return this.getProperty<Date>(Supplier.PROPERTY_CREATEDATE_NAME);
    }
    /** 设置-创建日期 */
    set createDate(value: Date) {
        this.setProperty(Supplier.PROPERTY_CREATEDATE_NAME, value);
    }

    /** 映射的属性名称-创建时间 */
    static PROPERTY_CREATETIME_NAME: string = "CreateTime";
    /** 获取-创建时间 */
    get createTime(): number {
        return this.getProperty<number>(Supplier.PROPERTY_CREATETIME_NAME);
    }
    /** 设置-创建时间 */
    set createTime(value: number) {
        this.setProperty(Supplier.PROPERTY_CREATETIME_NAME, value);
    }

    /** 映射的属性名称-修改日期 */
    static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
    /** 获取-修改日期 */
    get updateDate(): Date {
        return this.getProperty<Date>(Supplier.PROPERTY_UPDATEDATE_NAME);
    }
    /** 设置-修改日期 */
    set updateDate(value: Date) {
        this.setProperty(Supplier.PROPERTY_UPDATEDATE_NAME, value);
    }

    /** 映射的属性名称-修改时间 */
    static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
    /** 获取-修改时间 */
    get updateTime(): number {
        return this.getProperty<number>(Supplier.PROPERTY_UPDATETIME_NAME);
    }
    /** 设置-修改时间 */
    set updateTime(value: number) {
        this.setProperty(Supplier.PROPERTY_UPDATETIME_NAME, value);
    }

    /** 映射的属性名称-版本 */
    static PROPERTY_LOGINST_NAME: string = "LogInst";
    /** 获取-版本 */
    get logInst(): number {
        return this.getProperty<number>(Supplier.PROPERTY_LOGINST_NAME);
    }
    /** 设置-版本 */
    set logInst(value: number) {
        this.setProperty(Supplier.PROPERTY_LOGINST_NAME, value);
    }

    /** 映射的属性名称-服务系列 */
    static PROPERTY_SERIES_NAME: string = "Series";
    /** 获取-服务系列 */
    get series(): number {
        return this.getProperty<number>(Supplier.PROPERTY_SERIES_NAME);
    }
    /** 设置-服务系列 */
    set series(value: number) {
        this.setProperty(Supplier.PROPERTY_SERIES_NAME, value);
    }

    /** 映射的属性名称-数据源 */
    static PROPERTY_DATASOURCE_NAME: string = "DataSource";
    /** 获取-数据源 */
    get dataSource(): string {
        return this.getProperty<string>(Supplier.PROPERTY_DATASOURCE_NAME);
    }
    /** 设置-数据源 */
    set dataSource(value: string) {
        this.setProperty(Supplier.PROPERTY_DATASOURCE_NAME, value);
    }

    /** 映射的属性名称-创建用户 */
    static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
    /** 获取-创建用户 */
    get createUserSign(): number {
        return this.getProperty<number>(Supplier.PROPERTY_CREATEUSERSIGN_NAME);
    }
    /** 设置-创建用户 */
    set createUserSign(value: number) {
        this.setProperty(Supplier.PROPERTY_CREATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-修改用户 */
    static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
    /** 获取-修改用户 */
    get updateUserSign(): number {
        return this.getProperty<number>(Supplier.PROPERTY_UPDATEUSERSIGN_NAME);
    }
    /** 设置-修改用户 */
    set updateUserSign(value: number) {
        this.setProperty(Supplier.PROPERTY_UPDATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-创建动作标识 */
    static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
    /** 获取-创建动作标识 */
    get createActionId(): string {
        return this.getProperty<string>(Supplier.PROPERTY_CREATEACTIONID_NAME);
    }
    /** 设置-创建动作标识 */
    set createActionId(value: string) {
        this.setProperty(Supplier.PROPERTY_CREATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-更新动作标识 */
    static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
    /** 获取-更新动作标识 */
    get updateActionId(): string {
        return this.getProperty<string>(Supplier.PROPERTY_UPDATEACTIONID_NAME);
    }
    /** 设置-更新动作标识 */
    set updateActionId(value: string) {
        this.setProperty(Supplier.PROPERTY_UPDATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-审批状态 */
    static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
    /** 获取-审批状态 */
    get approvalStatus(): emApprovalStatus {
        return this.getProperty<emApprovalStatus>(Supplier.PROPERTY_APPROVALSTATUS_NAME);
    }
    /** 设置-审批状态 */
    set approvalStatus(value: emApprovalStatus) {
        this.setProperty(Supplier.PROPERTY_APPROVALSTATUS_NAME, value);
    }

    /** 映射的属性名称-数据所有者 */
    static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
    /** 获取-数据所有者 */
    get dataOwner(): number {
        return this.getProperty<number>(Supplier.PROPERTY_DATAOWNER_NAME);
    }
    /** 设置-数据所有者 */
    set dataOwner(value: number) {
        this.setProperty(Supplier.PROPERTY_DATAOWNER_NAME, value);
    }

    /** 映射的属性名称-数据所属组织 */
    static PROPERTY_ORGANIZATION_NAME: string = "Organization";
    /** 获取-数据所属组织 */
    get organization(): string {
        return this.getProperty<string>(Supplier.PROPERTY_ORGANIZATION_NAME);
    }
    /** 设置-数据所属组织 */
    set organization(value: string) {
        this.setProperty(Supplier.PROPERTY_ORGANIZATION_NAME, value);
    }

    /** 初始化数据 */
    protected init(): void {
        this.objectCode = config.applyVariables(Supplier.BUSINESS_OBJECT_CODE);
        this.companyPrivate = emBusinessPartnerNature.COMPANY;
    }
}



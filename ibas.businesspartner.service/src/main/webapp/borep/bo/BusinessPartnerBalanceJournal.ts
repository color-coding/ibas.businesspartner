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
    emDirection,
    BusinessObject,
    BusinessObjects,
    BOMasterData,
    BOMasterDataLine,
    BODocument,
    BODocumentLine,
    BOSimple,
    BOSimpleLine,
} from "ibas/index";
import {
    emBusinessPartnerType,
    IBusinessPartnerBalanceJournal,
    BO_CODE_BUSINESSPARTNERBALANCEJOURNAL,
} from "../../api/index";

/** 业务伙伴余额记录 */
export class BusinessPartnerBalanceJournal extends BOSimple<BusinessPartnerBalanceJournal> implements IBusinessPartnerBalanceJournal {

    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = BO_CODE_BUSINESSPARTNERBALANCEJOURNAL;
    /** 构造函数 */
    constructor() {
        super();
    }
    /** 映射的属性名称-业务伙伴类型 */
    static PROPERTY_BUSINESSPARTNERTYPE_NAME: string = "BusinessPartnerType";
    /** 获取-业务伙伴类型 */
    get businessPartnerType(): emBusinessPartnerType {
        return this.getProperty<emBusinessPartnerType>(BusinessPartnerBalanceJournal.PROPERTY_BUSINESSPARTNERTYPE_NAME);
    }
    /** 设置-业务伙伴类型 */
    set businessPartnerType(value: emBusinessPartnerType) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_BUSINESSPARTNERTYPE_NAME, value);
    }

    /** 映射的属性名称-业务伙伴编码 */
    static PROPERTY_BUSINESSPARTNER_NAME: string = "BusinessPartner";
    /** 获取-业务伙伴编码 */
    get businessPartner(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_BUSINESSPARTNER_NAME);
    }
    /** 设置-业务伙伴编码 */
    set businessPartner(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_BUSINESSPARTNER_NAME, value);
    }

    /** 映射的属性名称-方向 */
    static PROPERTY_DIRECTION_NAME: string = "Direction";
    /** 获取-方向 */
    get direction(): emDirection {
        return this.getProperty<emDirection>(BusinessPartnerBalanceJournal.PROPERTY_DIRECTION_NAME);
    }
    /** 设置-方向 */
    set direction(value: emDirection) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_DIRECTION_NAME, value);
    }

    /** 映射的属性名称-方式 */
    static PROPERTY_MODE_NAME: string = "Mode";
    /** 获取-方式 */
    get mode(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_MODE_NAME);
    }
    /** 设置-方式 */
    set mode(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_MODE_NAME, value);
    }

    /** 映射的属性名称-金额 */
    static PROPERTY_AMOUNT_NAME: string = "Amount";
    /** 获取-金额 */
    get amount(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_AMOUNT_NAME);
    }
    /** 设置-金额 */
    set amount(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_AMOUNT_NAME, value);
    }

    /** 映射的属性名称-币种 */
    static PROPERTY_CURRENCY_NAME: string = "Currency";
    /** 获取-币种 */
    get currency(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_CURRENCY_NAME);
    }
    /** 设置-币种 */
    set currency(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_CURRENCY_NAME, value);
    }

    /** 映射的属性名称-汇率 */
    static PROPERTY_RATE_NAME: string = "Rate";
    /** 获取-汇率 */
    get rate(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_RATE_NAME);
    }
    /** 设置-汇率 */
    set rate(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_RATE_NAME, value);
    }

    /** 映射的属性名称-银行编码 */
    static PROPERTY_BANKCODE_NAME: string = "BankCode";
    /** 获取-银行编码 */
    get bankCode(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_BANKCODE_NAME);
    }
    /** 设置-银行编码 */
    set bankCode(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_BANKCODE_NAME, value);
    }

    /** 映射的属性名称-卡号 */
    static PROPERTY_CARDNUMBER_NAME: string = "CardNumber";
    /** 获取-卡号 */
    get cardNumber(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_CARDNUMBER_NAME);
    }
    /** 设置-卡号 */
    set cardNumber(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_CARDNUMBER_NAME, value);
    }

    /** 映射的属性名称-基于类型 */
    static PROPERTY_BASEDOCUMENTTYPE_NAME: string = "BaseDocumentType";
    /** 获取-基于类型 */
    get baseDocumentType(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTTYPE_NAME);
    }
    /** 设置-基于类型 */
    set baseDocumentType(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTTYPE_NAME, value);
    }

    /** 映射的属性名称-基于标识 */
    static PROPERTY_BASEDOCUMENTENTRY_NAME: string = "BaseDocumentEntry";
    /** 获取-基于标识 */
    get baseDocumentEntry(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTENTRY_NAME);
    }
    /** 设置-基于标识 */
    set baseDocumentEntry(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTENTRY_NAME, value);
    }

    /** 映射的属性名称-基于行号 */
    static PROPERTY_BASEDOCUMENTLINEID_NAME: string = "BaseDocumentLineId";
    /** 获取-基于行号 */
    get baseDocumentLineId(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTLINEID_NAME);
    }
    /** 设置-基于行号 */
    set baseDocumentLineId(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTLINEID_NAME, value);
    }

    /** 映射的属性名称-原始类型 */
    static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string = "OriginalDocumentType";
    /** 获取-原始类型 */
    get originalDocumentType(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_ORIGINALDOCUMENTTYPE_NAME);
    }
    /** 设置-原始类型 */
    set originalDocumentType(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_ORIGINALDOCUMENTTYPE_NAME, value);
    }

    /** 映射的属性名称-原始标识 */
    static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string = "OriginalDocumentEntry";
    /** 获取-原始标识 */
    get originalDocumentEntry(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_ORIGINALDOCUMENTENTRY_NAME);
    }
    /** 设置-原始标识 */
    set originalDocumentEntry(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_ORIGINALDOCUMENTENTRY_NAME, value);
    }

    /** 映射的属性名称-原始行号 */
    static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string = "OriginalDocumentLineId";
    /** 获取-原始行号 */
    get originalDocumentLineId(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_ORIGINALDOCUMENTLINEID_NAME);
    }
    /** 设置-原始行号 */
    set originalDocumentLineId(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_ORIGINALDOCUMENTLINEID_NAME, value);
    }

    /** 映射的属性名称-对象编号 */
    static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
    /** 获取-对象编号 */
    get objectKey(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_OBJECTKEY_NAME);
    }
    /** 设置-对象编号 */
    set objectKey(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_OBJECTKEY_NAME, value);
    }

    /** 映射的属性名称-对象类型 */
    static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
    /** 获取-对象类型 */
    get objectCode(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_OBJECTCODE_NAME);
    }
    /** 设置-对象类型 */
    set objectCode(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_OBJECTCODE_NAME, value);
    }

    /** 映射的属性名称-创建日期 */
    static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
    /** 获取-创建日期 */
    get createDate(): Date {
        return this.getProperty<Date>(BusinessPartnerBalanceJournal.PROPERTY_CREATEDATE_NAME);
    }
    /** 设置-创建日期 */
    set createDate(value: Date) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_CREATEDATE_NAME, value);
    }

    /** 映射的属性名称-创建时间 */
    static PROPERTY_CREATETIME_NAME: string = "CreateTime";
    /** 获取-创建时间 */
    get createTime(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_CREATETIME_NAME);
    }
    /** 设置-创建时间 */
    set createTime(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_CREATETIME_NAME, value);
    }

    /** 映射的属性名称-修改日期 */
    static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
    /** 获取-修改日期 */
    get updateDate(): Date {
        return this.getProperty<Date>(BusinessPartnerBalanceJournal.PROPERTY_UPDATEDATE_NAME);
    }
    /** 设置-修改日期 */
    set updateDate(value: Date) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_UPDATEDATE_NAME, value);
    }

    /** 映射的属性名称-修改时间 */
    static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
    /** 获取-修改时间 */
    get updateTime(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_UPDATETIME_NAME);
    }
    /** 设置-修改时间 */
    set updateTime(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_UPDATETIME_NAME, value);
    }

    /** 映射的属性名称-实例号（版本） */
    static PROPERTY_LOGINST_NAME: string = "LogInst";
    /** 获取-实例号（版本） */
    get logInst(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_LOGINST_NAME);
    }
    /** 设置-实例号（版本） */
    set logInst(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_LOGINST_NAME, value);
    }

    /** 映射的属性名称-服务系列 */
    static PROPERTY_SERIES_NAME: string = "Series";
    /** 获取-服务系列 */
    get series(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_SERIES_NAME);
    }
    /** 设置-服务系列 */
    set series(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_SERIES_NAME, value);
    }

    /** 映射的属性名称-数据源 */
    static PROPERTY_DATASOURCE_NAME: string = "DataSource";
    /** 获取-数据源 */
    get dataSource(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_DATASOURCE_NAME);
    }
    /** 设置-数据源 */
    set dataSource(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_DATASOURCE_NAME, value);
    }

    /** 映射的属性名称-创建用户 */
    static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
    /** 获取-创建用户 */
    get createUserSign(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_CREATEUSERSIGN_NAME);
    }
    /** 设置-创建用户 */
    set createUserSign(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_CREATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-修改用户 */
    static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
    /** 获取-修改用户 */
    get updateUserSign(): number {
        return this.getProperty<number>(BusinessPartnerBalanceJournal.PROPERTY_UPDATEUSERSIGN_NAME);
    }
    /** 设置-修改用户 */
    set updateUserSign(value: number) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_UPDATEUSERSIGN_NAME, value);
    }

    /** 映射的属性名称-创建动作标识 */
    static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
    /** 获取-创建动作标识 */
    get createActionId(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_CREATEACTIONID_NAME);
    }
    /** 设置-创建动作标识 */
    set createActionId(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_CREATEACTIONID_NAME, value);
    }

    /** 映射的属性名称-更新动作标识 */
    static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
    /** 获取-更新动作标识 */
    get updateActionId(): string {
        return this.getProperty<string>(BusinessPartnerBalanceJournal.PROPERTY_UPDATEACTIONID_NAME);
    }
    /** 设置-更新动作标识 */
    set updateActionId(value: string) {
        this.setProperty(BusinessPartnerBalanceJournal.PROPERTY_UPDATEACTIONID_NAME, value);
    }



    /** 初始化数据 */
    protected init(): void {
        this.objectCode = BusinessPartnerBalanceJournal.BUSINESS_OBJECT_CODE;
    }
}



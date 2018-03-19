/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 业务伙伴资产 */
        export class BusinessPartnerAsset extends ibas.BOSimple<BusinessPartnerAsset> implements IBusinessPartnerAsset {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_BUSINESSPARTNERASSET;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号 */
            get logInst(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号 */
            set logInst(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(BusinessPartnerAsset.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-更新日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(BusinessPartnerAsset.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-更新日期 */
            set updateDate(value: Date) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-更新时间 */
            get updateTime(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-更新时间 */
            set updateTime(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-更新用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-更新用户 */
            set updateUserSign(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-业务伙伴类型 */
            static PROPERTY_BUSINESSPARTNERTYPE_NAME: string = "BusinessPartnerType";
            /** 获取-业务伙伴类型 */
            get businessPartnerType(): emBusinessPartnerType {
                return this.getProperty<emBusinessPartnerType>(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE_NAME);
            }
            /** 设置-业务伙伴类型 */
            set businessPartnerType(value: emBusinessPartnerType) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE_NAME, value);
            }

            /** 映射的属性名称-业务伙伴编码 */
            static PROPERTY_BUSINESSPARTNERCODE_NAME: string = "BusinessPartnerCode";
            /** 获取-业务伙伴编码 */
            get businessPartnerCode(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME);
            }
            /** 设置-业务伙伴编码 */
            set businessPartnerCode(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME, value);
            }

            /** 映射的属性名称-资产项目 */
            static PROPERTY_ASSETCODE_NAME: string = "AssetCode";
            /** 获取-资产项目 */
            get assetCode(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_ASSETCODE_NAME);
            }
            /** 设置-资产项目 */
            set assetCode(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_ASSETCODE_NAME, value);
            }

            /** 映射的属性名称-服务码 */
            static PROPERTY_SERVICECODE_NAME: string = "ServiceCode";
            /** 获取-服务码 */
            get serviceCode(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_SERVICECODE_NAME);
            }
            /** 设置-服务码 */
            set serviceCode(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_SERVICECODE_NAME, value);
            }

            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string = "Activated";
            /** 获取-激活 */
            get activated(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BusinessPartnerAsset.PROPERTY_ACTIVATED_NAME);
            }
            /** 设置-激活 */
            set activated(value: ibas.emYesNo) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_ACTIVATED_NAME, value);
            }

            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string = "ValidDate";
            /** 获取-生效日期 */
            get validDate(): Date {
                return this.getProperty<Date>(BusinessPartnerAsset.PROPERTY_VALIDDATE_NAME);
            }
            /** 设置-生效日期 */
            set validDate(value: Date) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_VALIDDATE_NAME, value);
            }

            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string = "InvalidDate";
            /** 获取-失效日期 */
            get invalidDate(): Date {
                return this.getProperty<Date>(BusinessPartnerAsset.PROPERTY_INVALIDDATE_NAME);
            }
            /** 设置-失效日期 */
            set invalidDate(value: Date) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_INVALIDDATE_NAME, value);
            }

            /** 映射的属性名称-余量 */
            static PROPERTY_AMOUNT_NAME: string = "Amount";
            /** 获取-余量 */
            get amount(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_AMOUNT_NAME);
            }
            /** 设置-余量 */
            set amount(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_AMOUNT_NAME, value);
            }

            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string = "BaseDocumentType";
            /** 获取-基于类型 */
            get baseDocumentType(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_BASEDOCUMENTTYPE_NAME);
            }
            /** 设置-基于类型 */
            set baseDocumentType(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_BASEDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string = "BaseDocumentEntry";
            /** 获取-基于标识 */
            get baseDocumentEntry(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_BASEDOCUMENTENTRY_NAME);
            }
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_BASEDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string = "BaseDocumentLineId";
            /** 获取-基于行号 */
            get baseDocumentLineId(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_BASEDOCUMENTLINEID_NAME);
            }
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_BASEDOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-交易金额 */
            static PROPERTY_TRADINGAMOUNT_NAME: string = "TradingAmount";
            /** 获取-交易金额 */
            get tradingAmount(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_TRADINGAMOUNT_NAME);
            }
            /** 设置-交易金额 */
            set tradingAmount(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_TRADINGAMOUNT_NAME, value);
            }

            /** 映射的属性名称-交易货币 */
            static PROPERTY_TRADINGCURRENCY_NAME: string = "TradingCurrency";
            /** 获取-交易货币 */
            get tradingCurrency(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_TRADINGCURRENCY_NAME);
            }
            /** 设置-交易货币 */
            set tradingCurrency(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_TRADINGCURRENCY_NAME, value);
            }



            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(BusinessPartnerAsset.BUSINESS_OBJECT_CODE);
                this.activated = ibas.emYesNo.YES;
                this.businessPartnerType = emBusinessPartnerType.CUSTOMER;
            }
        }


    }
}

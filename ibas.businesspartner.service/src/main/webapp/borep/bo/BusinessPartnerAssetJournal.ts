/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 业务伙伴资产日记账 */
        export class BusinessPartnerAssetJournal extends ibas.BOSimple<BusinessPartnerAssetJournal> implements IBusinessPartnerAssetJournal {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_BUSINESSPARTNERASSETJOURNAL;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(BusinessPartnerAssetJournal.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号 */
            get logInst(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号 */
            set logInst(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(BusinessPartnerAssetJournal.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(BusinessPartnerAssetJournal.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-更新日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(BusinessPartnerAssetJournal.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-更新日期 */
            set updateDate(value: Date) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-更新时间 */
            get updateTime(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-更新时间 */
            set updateTime(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-更新用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-更新用户 */
            set updateUserSign(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(BusinessPartnerAssetJournal.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(BusinessPartnerAssetJournal.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-服务码 */
            static PROPERTY_SERVICECODE_NAME: string = "ServiceCode";
            /** 获取-服务码 */
            get serviceCode(): string {
                return this.getProperty<string>(BusinessPartnerAssetJournal.PROPERTY_SERVICECODE_NAME);
            }
            /** 设置-服务码 */
            set serviceCode(value: string) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_SERVICECODE_NAME, value);
            }

            /** 映射的属性名称-方向 */
            static PROPERTY_DIRECTION_NAME: string = "Direction";
            /** 获取-方向 */
            get direction(): ibas.emDirection {
                return this.getProperty<ibas.emDirection>(BusinessPartnerAssetJournal.PROPERTY_DIRECTION_NAME);
            }
            /** 设置-方向 */
            set direction(value: ibas.emDirection) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_DIRECTION_NAME, value);
            }

            /** 映射的属性名称-交易量 */
            static PROPERTY_AMOUNT_NAME: string = "Amount";
            /** 获取-交易量 */
            get amount(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_AMOUNT_NAME);
            }
            /** 设置-交易量 */
            set amount(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_AMOUNT_NAME, value);
            }

            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string = "BaseDocumentType";
            /** 获取-基于类型 */
            get baseDocumentType(): string {
                return this.getProperty<string>(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTTYPE_NAME);
            }
            /** 设置-基于类型 */
            set baseDocumentType(value: string) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string = "BaseDocumentEntry";
            /** 获取-基于标识 */
            get baseDocumentEntry(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTENTRY_NAME);
            }
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string = "BaseDocumentLineId";
            /** 获取-基于行号 */
            get baseDocumentLineId(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTLINEID_NAME);
            }
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_BASEDOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string = "OriginalDocumentType";
            /** 获取-原始类型 */
            get originalDocumentType(): string {
                return this.getProperty<string>(BusinessPartnerAssetJournal.PROPERTY_ORIGINALDOCUMENTTYPE_NAME);
            }
            /** 设置-原始类型 */
            set originalDocumentType(value: string) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_ORIGINALDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string = "OriginalDocumentEntry";
            /** 获取-原始标识 */
            get originalDocumentEntry(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_ORIGINALDOCUMENTENTRY_NAME);
            }
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_ORIGINALDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string = "OriginalDocumentLineId";
            /** 获取-原始行号 */
            get originalDocumentLineId(): number {
                return this.getProperty<number>(BusinessPartnerAssetJournal.PROPERTY_ORIGINALDOCUMENTLINEID_NAME);
            }
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number) {
                this.setProperty(BusinessPartnerAssetJournal.PROPERTY_ORIGINALDOCUMENTLINEID_NAME, value);
            }



            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(BusinessPartnerAssetJournal.BUSINESS_OBJECT_CODE);
            }
        }


    }
}

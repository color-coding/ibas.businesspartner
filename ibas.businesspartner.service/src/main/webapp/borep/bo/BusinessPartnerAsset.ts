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
        export class BusinessPartnerAsset extends ibas.BOMasterData<BusinessPartnerAsset> implements IBusinessPartnerAsset {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_BUSINESSPARTNERASSET;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编号 */
            static PROPERTY_CODE_NAME: string = "Code";
            /** 获取-编号 */
            get code(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_CODE_NAME);
            }
            /** 设置-编号 */
            set code(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_CODE_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-对象编号 */
            get docEntry(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-对象编号 */
            set docEntry(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_DOCENTRY_NAME, value);
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

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(BusinessPartnerAsset.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-版本 */
            get logInst(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_LOGINST_NAME);
            }
            /** 设置-版本 */
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

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
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

            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus {
                return this.getProperty<ibas.emApprovalStatus>(BusinessPartnerAsset.PROPERTY_APPROVALSTATUS_NAME);
            }
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_APPROVALSTATUS_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BusinessPartnerAsset.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(BusinessPartnerAsset.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_DELETED_NAME, value);
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

            /** 映射的属性名称-获得日期 */
            static PROPERTY_ACQUIREDDATE_NAME: string = "AcquiredDate";
            /** 获取-获得日期 */
            get acquiredDate(): Date {
                return this.getProperty<Date>(BusinessPartnerAsset.PROPERTY_ACQUIREDDATE_NAME);
            }
            /** 设置-获得日期 */
            set acquiredDate(value: Date) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_ACQUIREDDATE_NAME, value);
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

            /** 映射的属性名称-剩余价值 */
            static PROPERTY_AMOUNT_NAME: string = "Amount";
            /** 获取-剩余价值 */
            get amount(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_AMOUNT_NAME);
            }
            /** 设置-剩余价值 */
            set amount(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_AMOUNT_NAME, value);
            }

            /** 映射的属性名称-剩余次数 */
            static PROPERTY_TIMES_NAME: string = "Times";
            /** 获取-剩余次数 */
            get times(): number {
                return this.getProperty<number>(BusinessPartnerAsset.PROPERTY_TIMES_NAME);
            }
            /** 设置-剩余次数 */
            set times(value: number) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_TIMES_NAME, value);
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

            /** 映射的属性名称-备注 1 */
            static PROPERTY_REMARK1_NAME: string = "Remark1";
            /** 获取-备注 1 */
            get remark1(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_REMARK1_NAME);
            }
            /** 设置-备注 1 */
            set remark1(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_REMARK1_NAME, value);
            }

            /** 映射的属性名称-备注 2 */
            static PROPERTY_REMARK2_NAME: string = "Remark2";
            /** 获取-备注 2 */
            get remark2(): string {
                return this.getProperty<string>(BusinessPartnerAsset.PROPERTY_REMARK2_NAME);
            }
            /** 设置-备注 2 */
            set remark2(value: string) {
                this.setProperty(BusinessPartnerAsset.PROPERTY_REMARK2_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(BusinessPartnerAsset.BUSINESS_OBJECT_CODE);
                this.businessPartnerType = emBusinessPartnerType.CUSTOMER;
                this.activated = ibas.emYesNo.YES;
            }
            /** 重置 */
            reset(): void {
                super.reset();
                this.times = 0;
                this.amount = 0;
            }

            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 清理属性值
                    new BusinessRuleClearValue(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE_NAME, BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME),
                ];
            }
        }

        /** 客户资产 */
        export class CustomerAsset {
            /** 资产编码 */
            code: string;
            /** 资产名称 */
            name: string;
            /** 图片 */
            picture: string;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 可用值 */
            amount: number;
            /** 值单位 */
            unit: string;
            /** 可用次数 */
            times: number;
            /** 折扣 */
            discount: number;
            /** 客户 */
            customer: string;
        }
    }
}

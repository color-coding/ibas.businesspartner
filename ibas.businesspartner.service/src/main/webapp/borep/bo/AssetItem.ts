/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 资产项目 */
        export class AssetItem extends ibas.BOMasterData<AssetItem> implements IAssetItem {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_ASSETITEM;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编号 */
            static PROPERTY_CODE_NAME: string = "Code";
            /** 获取-编号 */
            get code(): string {
                return this.getProperty<string>(AssetItem.PROPERTY_CODE_NAME);
            }
            /** 设置-编号 */
            set code(value: string) {
                this.setProperty(AssetItem.PROPERTY_CODE_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(AssetItem.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(AssetItem.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string = "Activated";
            /** 获取-激活 */
            get activated(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(AssetItem.PROPERTY_ACTIVATED_NAME);
            }
            /** 设置-激活 */
            set activated(value: ibas.emYesNo) {
                this.setProperty(AssetItem.PROPERTY_ACTIVATED_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(AssetItem.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(AssetItem.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(AssetItem.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(AssetItem.PROPERTY_DELETED_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-对象编号 */
            get docEntry(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-对象编号 */
            set docEntry(value: number) {
                this.setProperty(AssetItem.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(AssetItem.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(AssetItem.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(AssetItem.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(AssetItem.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(AssetItem.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(AssetItem.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(AssetItem.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(AssetItem.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-版本 */
            get logInst(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_LOGINST_NAME);
            }
            /** 设置-版本 */
            set logInst(value: number) {
                this.setProperty(AssetItem.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(AssetItem.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(AssetItem.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(AssetItem.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(AssetItem.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(AssetItem.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(AssetItem.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(AssetItem.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(AssetItem.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(AssetItem.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus {
                return this.getProperty<ibas.emApprovalStatus>(AssetItem.PROPERTY_APPROVALSTATUS_NAME);
            }
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus) {
                this.setProperty(AssetItem.PROPERTY_APPROVALSTATUS_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(AssetItem.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(AssetItem.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(AssetItem.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string = "ValidDate";
            /** 获取-生效日期 */
            get validDate(): Date {
                return this.getProperty<Date>(AssetItem.PROPERTY_VALIDDATE_NAME);
            }
            /** 设置-生效日期 */
            set validDate(value: Date) {
                this.setProperty(AssetItem.PROPERTY_VALIDDATE_NAME, value);
            }

            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string = "InvalidDate";
            /** 获取-失效日期 */
            get invalidDate(): Date {
                return this.getProperty<Date>(AssetItem.PROPERTY_INVALIDDATE_NAME);
            }
            /** 设置-失效日期 */
            set invalidDate(value: Date) {
                this.setProperty(AssetItem.PROPERTY_INVALIDDATE_NAME, value);
            }

            /** 映射的属性名称-票面量 */
            static PROPERTY_FACEAMOUNT_NAME: string = "FaceAmount";
            /** 获取-票面量 */
            get faceAmount(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_FACEAMOUNT_NAME);
            }
            /** 设置-票面量 */
            set faceAmount(value: number) {
                this.setProperty(AssetItem.PROPERTY_FACEAMOUNT_NAME, value);
            }

            /** 映射的属性名称-量单位 */
            static PROPERTY_AMOUNTUNIT_NAME: string = "AmountUnit";
            /** 获取-量单位 */
            get amountUnit(): string {
                return this.getProperty<string>(AssetItem.PROPERTY_AMOUNTUNIT_NAME);
            }
            /** 设置-量单位 */
            set amountUnit(value: string) {
                this.setProperty(AssetItem.PROPERTY_AMOUNTUNIT_NAME, value);
            }

            /** 映射的属性名称-量价值 */
            static PROPERTY_AMOUNTVALUE_NAME: string = "AmountValue";
            /** 获取-量价值 */
            get amountValue(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_AMOUNTVALUE_NAME);
            }
            /** 设置-量价值 */
            set amountValue(value: number) {
                this.setProperty(AssetItem.PROPERTY_AMOUNTVALUE_NAME, value);
            }

            /** 映射的属性名称-使用时折扣 */
            static PROPERTY_DISCOUNTUSED_NAME: string = "DiscountUsed";
            /** 获取-使用时折扣 */
            get discountUsed(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_DISCOUNTUSED_NAME);
            }
            /** 设置-使用时折扣 */
            set discountUsed(value: number) {
                this.setProperty(AssetItem.PROPERTY_DISCOUNTUSED_NAME, value);
            }

            /** 映射的属性名称-透支额 */
            static PROPERTY_OVERDRAFT_NAME: string = "Overdraft";
            /** 获取-透支额 */
            get overdraft(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_OVERDRAFT_NAME);
            }
            /** 设置-透支额 */
            set overdraft(value: number) {
                this.setProperty(AssetItem.PROPERTY_OVERDRAFT_NAME, value);
            }

            /** 映射的属性名称-有效期（天） */
            static PROPERTY_VALIDTIME_NAME: string = "ValidTime";
            /** 获取-有效期（天） */
            get validTime(): number {
                return this.getProperty<number>(AssetItem.PROPERTY_VALIDTIME_NAME);
            }
            /** 设置-有效期（天） */
            set validTime(value: number) {
                this.setProperty(AssetItem.PROPERTY_VALIDTIME_NAME, value);
            }



            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(AssetItem.BUSINESS_OBJECT_CODE);
                this.activated = ibas.emYesNo.YES;
                this.discountUsed = 1;
            }
        }


    }
}

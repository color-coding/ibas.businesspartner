/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 内部对账 */
        export class InternalReconciliation extends ibas.BOSimple<InternalReconciliation> implements IInternalReconciliation {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_INTERNALRECONCILIATION;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号 */
            get logInst(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号 */
            set logInst(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(InternalReconciliation.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(InternalReconciliation.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-更新日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(InternalReconciliation.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-更新日期 */
            set updateDate(value: Date) {
                this.setProperty(InternalReconciliation.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-更新时间 */
            get updateTime(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-更新时间 */
            set updateTime(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-更新用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-更新用户 */
            set updateUserSign(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_REMARKS_NAME, value);
            }

            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string = "Canceled";
            /** 获取-取消 */
            get canceled(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(InternalReconciliation.PROPERTY_CANCELED_NAME);
            }
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo) {
                this.setProperty(InternalReconciliation.PROPERTY_CANCELED_NAME, value);
            }

            /** 映射的属性名称-系统 */
            static PROPERTY_SYSTEMED_NAME: string = "Systemed";
            /** 获取-系统 */
            get systemed(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(InternalReconciliation.PROPERTY_SYSTEMED_NAME);
            }
            /** 设置-系统 */
            set systemed(value: ibas.emYesNo) {
                this.setProperty(InternalReconciliation.PROPERTY_SYSTEMED_NAME, value);
            }

            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string = "BaseDocumentType";
            /** 获取-基于类型 */
            get baseDocumentType(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_BASEDOCUMENTTYPE_NAME);
            }
            /** 设置-基于类型 */
            set baseDocumentType(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_BASEDOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string = "BaseDocumentEntry";
            /** 获取-基于标识 */
            get baseDocumentEntry(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_BASEDOCUMENTENTRY_NAME);
            }
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_BASEDOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string = "BaseDocumentLineId";
            /** 获取-基于行号 */
            get baseDocumentLineId(): number {
                return this.getProperty<number>(InternalReconciliation.PROPERTY_BASEDOCUMENTLINEID_NAME);
            }
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number) {
                this.setProperty(InternalReconciliation.PROPERTY_BASEDOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-对账类型 */
            static PROPERTY_RECONCILIATIONTYPE_NAME: string = "ReconciliationType";
            /** 获取-对账类型 */
            get reconciliationType(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_RECONCILIATIONTYPE_NAME);
            }
            /** 设置-对账类型 */
            set reconciliationType(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_RECONCILIATIONTYPE_NAME, value);
            }

            /** 映射的属性名称-对账日期 */
            static PROPERTY_RECONCILIATIONDATE_NAME: string = "ReconciliationDate";
            /** 获取-对账日期 */
            get reconciliationDate(): Date {
                return this.getProperty<Date>(InternalReconciliation.PROPERTY_RECONCILIATIONDATE_NAME);
            }
            /** 设置-对账日期 */
            set reconciliationDate(value: Date) {
                this.setProperty(InternalReconciliation.PROPERTY_RECONCILIATIONDATE_NAME, value);
            }

            /** 映射的属性名称-分支 */
            static PROPERTY_BRANCH_NAME: string = "Branch";
            /** 获取-分支 */
            get branch(): string {
                return this.getProperty<string>(InternalReconciliation.PROPERTY_BRANCH_NAME);
            }
            /** 设置-分支 */
            set branch(value: string) {
                this.setProperty(InternalReconciliation.PROPERTY_BRANCH_NAME, value);
            }

            /** 映射的属性名称-内部对账-行集合 */
            static PROPERTY_INTERNALRECONCILIATIONLINES_NAME: string = "InternalReconciliationLines";
            /** 获取-内部对账-行集合 */
            get internalReconciliationLines(): InternalReconciliationLines {
                return this.getProperty<InternalReconciliationLines>(InternalReconciliation.PROPERTY_INTERNALRECONCILIATIONLINES_NAME);
            }
            /** 设置-内部对账-行集合 */
            set internalReconciliationLines(value: InternalReconciliationLines) {
                this.setProperty(InternalReconciliation.PROPERTY_INTERNALRECONCILIATIONLINES_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.internalReconciliationLines = new InternalReconciliationLines(this);
                this.objectCode = ibas.config.applyVariables(InternalReconciliation.BUSINESS_OBJECT_CODE);
            }
        }

        /** 内部对账-行 集合 */
        export class InternalReconciliationLines extends ibas.BusinessObjects<InternalReconciliationLine, InternalReconciliation> implements IInternalReconciliationLines {
            /** 创建并添加子项 */
            create(): InternalReconciliationLine {
                let item: InternalReconciliationLine = new InternalReconciliationLine();
                this.add(item);
                return item;
            }
        }

        /** 内部对账-行 */
        export class InternalReconciliationLine extends ibas.BOSimpleLine<InternalReconciliationLine> implements IInternalReconciliationLine {
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string = "LineId";
            /** 获取-对象行号 */
            get lineId(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_LINEID_NAME);
            }
            /** 设置-对象行号 */
            set lineId(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_LINEID_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号 */
            get logInst(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号 */
            set logInst(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(InternalReconciliationLine.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(InternalReconciliationLine.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-更新日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(InternalReconciliationLine.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-更新日期 */
            set updateDate(value: Date) {
                this.setProperty(InternalReconciliationLine.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-更新时间 */
            get updateTime(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-更新时间 */
            set updateTime(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-更新用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-更新用户 */
            set updateUserSign(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_REMARKS_NAME, value);
            }

            /** 映射的属性名称-业务伙伴/科目代码 */
            static PROPERTY_SHORTNAME_NAME: string = "ShortName";
            /** 获取-业务伙伴/科目代码 */
            get shortName(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_SHORTNAME_NAME);
            }
            /** 设置-业务伙伴/科目代码 */
            set shortName(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_SHORTNAME_NAME, value);
            }

            /** 映射的属性名称-源单据类型 */
            static PROPERTY_DOCUMENTTYPE_NAME: string = "DocumentType";
            /** 获取-源单据类型 */
            get documentType(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_DOCUMENTTYPE_NAME);
            }
            /** 设置-源单据类型 */
            set documentType(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_DOCUMENTTYPE_NAME, value);
            }

            /** 映射的属性名称-源单据编号 */
            static PROPERTY_DOCUMENTENTRY_NAME: string = "DocumentEntry";
            /** 获取-源单据编号 */
            get documentEntry(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_DOCUMENTENTRY_NAME);
            }
            /** 设置-源单据编号 */
            set documentEntry(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_DOCUMENTENTRY_NAME, value);
            }

            /** 映射的属性名称-源单据行号 */
            static PROPERTY_DOCUMENTLINEID_NAME: string = "DocumentLineId";
            /** 获取-源单据行号 */
            get documentLineId(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_DOCUMENTLINEID_NAME);
            }
            /** 设置-源单据行号 */
            set documentLineId(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_DOCUMENTLINEID_NAME, value);
            }

            /** 映射的属性名称-类别 */
            static PROPERTY_CATEGORY_NAME: string = "Category";
            /** 获取-类别 */
            get category(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_CATEGORY_NAME);
            }
            /** 设置-类别 */
            set category(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_CATEGORY_NAME, value);
            }

            /** 映射的属性名称-金额 */
            static PROPERTY_AMOUNT_NAME: string = "Amount";
            /** 获取-金额 */
            get amount(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_AMOUNT_NAME);
            }
            /** 设置-金额 */
            set amount(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_AMOUNT_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(InternalReconciliationLine.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(InternalReconciliationLine.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string = "Rate";
            /** 获取-汇率 */
            get rate(): number {
                return this.getProperty<number>(InternalReconciliationLine.PROPERTY_RATE_NAME);
            }
            /** 设置-汇率 */
            set rate(value: number) {
                this.setProperty(InternalReconciliationLine.PROPERTY_RATE_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
            }
        }

    }
}

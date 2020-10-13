/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {

        /** 客户 */
        export class Customer extends ibas.BOMasterData<Customer> implements ICustomer {

            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_CUSTOMER;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-编码 */
            static PROPERTY_CODE_NAME: string = "Code";
            /** 获取-编码 */
            get code(): string {
                return this.getProperty<string>(Customer.PROPERTY_CODE_NAME);
            }
            /** 设置-编码 */
            set code(value: string) {
                this.setProperty(Customer.PROPERTY_CODE_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(Customer.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(Customer.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-标识 */
            static PROPERTY_SIGN_NAME: string = "Sign";
            /** 获取-标识 */
            get sign(): string {
                return this.getProperty<string>(Customer.PROPERTY_SIGN_NAME);
            }
            /** 设置-标识 */
            set sign(value: string) {
                this.setProperty(Customer.PROPERTY_SIGN_NAME, value);
            }

            /** 映射的属性名称-组代码 */
            static PROPERTY_GROUP_NAME: string = "Group";
            /** 获取-组代码 */
            get group(): string {
                return this.getProperty<string>(Customer.PROPERTY_GROUP_NAME);
            }
            /** 设置-组代码 */
            set group(value: string) {
                this.setProperty(Customer.PROPERTY_GROUP_NAME, value);
            }

            /** 映射的属性名称-激活 */
            static PROPERTY_ACTIVATED_NAME: string = "Activated";
            /** 获取-激活 */
            get activated(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Customer.PROPERTY_ACTIVATED_NAME);
            }
            /** 设置-激活 */
            set activated(value: ibas.emYesNo) {
                this.setProperty(Customer.PROPERTY_ACTIVATED_NAME, value);
            }

            /** 映射的属性名称-公司/个人 */
            static PROPERTY_COMPANYPRIVATE_NAME: string = "CompanyPrivate";
            /** 获取-公司/个人 */
            get companyPrivate(): emBusinessPartnerNature {
                return this.getProperty<emBusinessPartnerNature>(Customer.PROPERTY_COMPANYPRIVATE_NAME);
            }
            /** 设置-公司/个人 */
            set companyPrivate(value: emBusinessPartnerNature) {
                this.setProperty(Customer.PROPERTY_COMPANYPRIVATE_NAME, value);
            }

            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string = "ContactPerson";
            /** 获取-联系人 */
            get contactPerson(): number {
                return this.getProperty<number>(Customer.PROPERTY_CONTACTPERSON_NAME);
            }
            /** 设置-联系人 */
            set contactPerson(value: number) {
                this.setProperty(Customer.PROPERTY_CONTACTPERSON_NAME, value);
            }

            /** 映射的属性名称-账单地址 */
            static PROPERTY_BILLADDRESS_NAME: string = "BillAddress";
            /** 获取-账单地址 */
            get billAddress(): number {
                return this.getProperty<number>(Customer.PROPERTY_BILLADDRESS_NAME);
            }
            /** 设置-账单地址 */
            set billAddress(value: number) {
                this.setProperty(Customer.PROPERTY_BILLADDRESS_NAME, value);
            }

            /** 映射的属性名称-送货地址 */
            static PROPERTY_SHIPADDRESS_NAME: string = "ShipAddress";
            /** 获取-送货地址 */
            get shipAddress(): number {
                return this.getProperty<number>(Customer.PROPERTY_SHIPADDRESS_NAME);
            }
            /** 设置-送货地址 */
            set shipAddress(value: number) {
                this.setProperty(Customer.PROPERTY_SHIPADDRESS_NAME, value);
            }

            /** 映射的属性名称-注册地址 */
            static PROPERTY_REGISTRATIONADDRESS_NAME: string = "RegistrationAddress";
            /** 获取-注册地址 */
            get registrationAddress(): number {
                return this.getProperty<number>(Customer.PROPERTY_REGISTRATIONADDRESS_NAME);
            }
            /** 设置-注册地址 */
            set registrationAddress(value: number) {
                this.setProperty(Customer.PROPERTY_REGISTRATIONADDRESS_NAME, value);
            }

            /** 映射的属性名称-电话 1 */
            static PROPERTY_TELEPHONE1_NAME: string = "Telephone1";
            /** 获取-电话 1 */
            get telephone1(): string {
                return this.getProperty<string>(Customer.PROPERTY_TELEPHONE1_NAME);
            }
            /** 设置-电话 1 */
            set telephone1(value: string) {
                this.setProperty(Customer.PROPERTY_TELEPHONE1_NAME, value);
            }

            /** 映射的属性名称-电话 2 */
            static PROPERTY_TELEPHONE2_NAME: string = "Telephone2";
            /** 获取-电话 2 */
            get telephone2(): string {
                return this.getProperty<string>(Customer.PROPERTY_TELEPHONE2_NAME);
            }
            /** 设置-电话 2 */
            set telephone2(value: string) {
                this.setProperty(Customer.PROPERTY_TELEPHONE2_NAME, value);
            }

            /** 映射的属性名称-移动电话 */
            static PROPERTY_MOBILEPHONE_NAME: string = "MobilePhone";
            /** 获取-移动电话 */
            get mobilePhone(): string {
                return this.getProperty<string>(Customer.PROPERTY_MOBILEPHONE_NAME);
            }
            /** 设置-移动电话 */
            set mobilePhone(value: string) {
                this.setProperty(Customer.PROPERTY_MOBILEPHONE_NAME, value);
            }

            /** 映射的属性名称-传真号 */
            static PROPERTY_FAXNUMBER_NAME: string = "FaxNumber";
            /** 获取-传真号 */
            get faxNumber(): string {
                return this.getProperty<string>(Customer.PROPERTY_FAXNUMBER_NAME);
            }
            /** 设置-传真号 */
            set faxNumber(value: string) {
                this.setProperty(Customer.PROPERTY_FAXNUMBER_NAME, value);
            }

            /** 映射的属性名称-国税编号 */
            static PROPERTY_TAXID_NAME: string = "TaxId";
            /** 获取-国税编号 */
            get taxId(): string {
                return this.getProperty<string>(Customer.PROPERTY_TAXID_NAME);
            }
            /** 设置-国税编号 */
            set taxId(value: string) {
                this.setProperty(Customer.PROPERTY_TAXID_NAME, value);
            }

            /** 映射的属性名称-开户银行 */
            static PROPERTY_BANK_NAME: string = "Bank";
            /** 获取-开户银行 */
            get bank(): string {
                return this.getProperty<string>(Customer.PROPERTY_BANK_NAME);
            }
            /** 设置-开户银行 */
            set bank(value: string) {
                this.setProperty(Customer.PROPERTY_BANK_NAME, value);
            }

            /** 映射的属性名称-银行账户 */
            static PROPERTY_BANKACCOUNT_NAME: string = "BankAccount";
            /** 获取-银行账户 */
            get bankAccount(): string {
                return this.getProperty<string>(Customer.PROPERTY_BANKACCOUNT_NAME);
            }
            /** 设置-银行账户 */
            set bankAccount(value: string) {
                this.setProperty(Customer.PROPERTY_BANKACCOUNT_NAME, value);
            }

            /** 映射的属性名称-发票抬头 */
            static PROPERTY_INVOICETITLE_NAME: string = "InvoiceTitle";
            /** 获取-发票抬头 */
            get invoiceTitle(): string {
                return this.getProperty<string>(Customer.PROPERTY_INVOICETITLE_NAME);
            }
            /** 设置-发票抬头 */
            set invoiceTitle(value: string) {
                this.setProperty(Customer.PROPERTY_INVOICETITLE_NAME, value);
            }

            /** 映射的属性名称-发票地址 */
            static PROPERTY_INVOICEADDRESS_NAME: string = "InvoiceAddress";
            /** 获取-发票地址 */
            get invoiceAddress(): string {
                return this.getProperty<string>(Customer.PROPERTY_INVOICEADDRESS_NAME);
            }
            /** 设置-发票地址 */
            set invoiceAddress(value: string) {
                this.setProperty(Customer.PROPERTY_INVOICEADDRESS_NAME, value);
            }

            /** 映射的属性名称-发票电话 */
            static PROPERTY_INVOICETELEPHONE_NAME: string = "InvoiceTelephone";
            /** 获取-发票电话 */
            get invoiceTelephone(): string {
                return this.getProperty<string>(Customer.PROPERTY_INVOICETELEPHONE_NAME);
            }
            /** 设置-发票电话 */
            set invoiceTelephone(value: string) {
                this.setProperty(Customer.PROPERTY_INVOICETELEPHONE_NAME, value);
            }

            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string = "PriceList";
            /** 获取-价格清单 */
            get priceList(): number {
                return this.getProperty<number>(Customer.PROPERTY_PRICELIST_NAME);
            }
            /** 设置-价格清单 */
            set priceList(value: number) {
                this.setProperty(Customer.PROPERTY_PRICELIST_NAME, value);
            }

            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string = "Currency";
            /** 获取-货币 */
            get currency(): string {
                return this.getProperty<string>(Customer.PROPERTY_CURRENCY_NAME);
            }
            /** 设置-货币 */
            set currency(value: string) {
                this.setProperty(Customer.PROPERTY_CURRENCY_NAME, value);
            }

            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string = "Warehouse";
            /** 获取-仓库 */
            get warehouse(): string {
                return this.getProperty<string>(Customer.PROPERTY_WAREHOUSE_NAME);
            }
            /** 设置-仓库 */
            set warehouse(value: string) {
                this.setProperty(Customer.PROPERTY_WAREHOUSE_NAME, value);
            }

            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string = "ValidDate";
            /** 获取-生效日期 */
            get validDate(): Date {
                return this.getProperty<Date>(Customer.PROPERTY_VALIDDATE_NAME);
            }
            /** 设置-生效日期 */
            set validDate(value: Date) {
                this.setProperty(Customer.PROPERTY_VALIDDATE_NAME, value);
            }

            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string = "InvalidDate";
            /** 获取-失效日期 */
            get invalidDate(): Date {
                return this.getProperty<Date>(Customer.PROPERTY_INVALIDDATE_NAME);
            }
            /** 设置-失效日期 */
            set invalidDate(value: Date) {
                this.setProperty(Customer.PROPERTY_INVALIDDATE_NAME, value);
            }

            /** 映射的属性名称-底价清单 */
            static PROPERTY_FLOORLIST_NAME: string = "FloorList";
            /** 获取-底价清单 */
            get floorList(): number {
                return this.getProperty<number>(Customer.PROPERTY_FLOORLIST_NAME);
            }
            /** 设置-底价清单 */
            set floorList(value: number) {
                this.setProperty(Customer.PROPERTY_FLOORLIST_NAME, value);
            }

            /** 映射的属性名称-税收组 */
            static PROPERTY_TAXGROUP_NAME: string = "TaxGroup";
            /** 获取-税收组 */
            get taxGroup(): string {
                return this.getProperty<string>(Customer.PROPERTY_TAXGROUP_NAME);
            }
            /** 设置-税收组 */
            set taxGroup(value: string) {
                this.setProperty(Customer.PROPERTY_TAXGROUP_NAME, value);
            }

            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string = "Remarks";
            /** 获取-备注 */
            get remarks(): string {
                return this.getProperty<string>(Customer.PROPERTY_REMARKS_NAME);
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.setProperty(Customer.PROPERTY_REMARKS_NAME, value);
            }

            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string = "Referenced";
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Customer.PROPERTY_REFERENCED_NAME);
            }
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo) {
                this.setProperty(Customer.PROPERTY_REFERENCED_NAME, value);
            }

            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string = "Deleted";
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Customer.PROPERTY_DELETED_NAME);
            }
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo) {
                this.setProperty(Customer.PROPERTY_DELETED_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_DOCENTRY_NAME: string = "DocEntry";
            /** 获取-对象编号 */
            get docEntry(): number {
                return this.getProperty<number>(Customer.PROPERTY_DOCENTRY_NAME);
            }
            /** 设置-对象编号 */
            set docEntry(value: number) {
                this.setProperty(Customer.PROPERTY_DOCENTRY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(Customer.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(Customer.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(Customer.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(Customer.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(Customer.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(Customer.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(Customer.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(Customer.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(Customer.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(Customer.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-版本 */
            get logInst(): number {
                return this.getProperty<number>(Customer.PROPERTY_LOGINST_NAME);
            }
            /** 设置-版本 */
            set logInst(value: number) {
                this.setProperty(Customer.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(Customer.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(Customer.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(Customer.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(Customer.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(Customer.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(Customer.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(Customer.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(Customer.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(Customer.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(Customer.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(Customer.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(Customer.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string = "ApprovalStatus";
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus {
                return this.getProperty<ibas.emApprovalStatus>(Customer.PROPERTY_APPROVALSTATUS_NAME);
            }
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus) {
                this.setProperty(Customer.PROPERTY_APPROVALSTATUS_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(Customer.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(Customer.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(Customer.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(Customer.PROPERTY_ORGANIZATION_NAME, value);
            }

            /** 映射的属性名称-所属渠道 */
            static PROPERTY_CHANNEL_NAME: string = "Channel";
            /** 获取-所属渠道 */
            get channel(): string {
                return this.getProperty<string>(Customer.PROPERTY_CHANNEL_NAME);
            }
            /** 设置-所属渠道 */
            set channel(value: string) {
                this.setProperty(Customer.PROPERTY_CHANNEL_NAME, value);
            }

            /** 映射的属性名称-组织单位 */
            static PROPERTY_ORGANIZATIONALUNIT_NAME: string = "OrganizationalUnit";
            /** 获取-组织单位 */
            get organizationalUnit(): string {
                return this.getProperty<string>(Customer.PROPERTY_ORGANIZATIONALUNIT_NAME);
            }
            /** 设置-组织单位 */
            set organizationalUnit(value: string) {
                this.setProperty(Customer.PROPERTY_ORGANIZATIONALUNIT_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(Customer.BUSINESS_OBJECT_CODE);
                this.activated = ibas.emYesNo.YES;
                this.companyPrivate = emBusinessPartnerNature.COMPANY;
                this.currency = ibas.config.get(ibas.CONFIG_ITEM_DEFAULT_CURRENCY);
            }
        }

    }
}

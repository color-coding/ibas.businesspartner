/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {

        /** 业务伙伴联系人 */
        export class ContactPerson extends ibas.BOSimple<ContactPerson> implements IContactPerson {

            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_CONTACTPERSON;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-业务伙伴 */
            static PROPERTY_BUSINESSPARTNER_NAME: string = "BusinessPartner";
            /** 获取-业务伙伴 */
            get businessPartner(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_BUSINESSPARTNER_NAME);
            }
            /** 设置-业务伙伴 */
            set businessPartner(value: string) {
                this.setProperty(ContactPerson.PROPERTY_BUSINESSPARTNER_NAME, value);
            }

            /** 映射的属性名称-归属类型 */
            static PROPERTY_OWNERTYPE_NAME: string = "OwnerType";
            /** 获取-归属类型 */
            get ownerType(): emBusinessPartnerType {
                return this.getProperty<emBusinessPartnerType>(ContactPerson.PROPERTY_OWNERTYPE_NAME);
            }
            /** 设置-归属类型 */
            set ownerType(value: emBusinessPartnerType) {
                this.setProperty(ContactPerson.PROPERTY_OWNERTYPE_NAME, value);
            }

            /** 映射的属性名称-有效的 */
            static PROPERTY_ACTIVATED_NAME: string = "Activated";
            /** 获取-有效的 */
            get activated(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(ContactPerson.PROPERTY_ACTIVATED_NAME);
            }
            /** 设置-有效的 */
            set activated(value: ibas.emYesNo) {
                this.setProperty(ContactPerson.PROPERTY_ACTIVATED_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(ContactPerson.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-组 */
            static PROPERTY_GROUP_NAME: string = "Group";
            /** 获取-组 */
            get group(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_GROUP_NAME);
            }
            /** 设置-组 */
            set group(value: string) {
                this.setProperty(ContactPerson.PROPERTY_GROUP_NAME, value);
            }

            /** 映射的属性名称-性别 */
            static PROPERTY_GENDER_NAME: string = "Gender";
            /** 获取-性别 */
            get gender(): emGender {
                return this.getProperty<emGender>(ContactPerson.PROPERTY_GENDER_NAME);
            }
            /** 设置-性别 */
            set gender(value: emGender) {
                this.setProperty(ContactPerson.PROPERTY_GENDER_NAME, value);
            }

            /** 映射的属性名称-职位 */
            static PROPERTY_POSITION_NAME: string = "Position";
            /** 获取-职位 */
            get position(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_POSITION_NAME);
            }
            /** 设置-职位 */
            set position(value: string) {
                this.setProperty(ContactPerson.PROPERTY_POSITION_NAME, value);
            }

            /** 映射的属性名称-地址 */
            static PROPERTY_ADDRESS_NAME: string = "Address";
            /** 获取-地址 */
            get address(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_ADDRESS_NAME);
            }
            /** 设置-地址 */
            set address(value: string) {
                this.setProperty(ContactPerson.PROPERTY_ADDRESS_NAME, value);
            }

            /** 映射的属性名称-电话 1 */
            static PROPERTY_TELEPHONE1_NAME: string = "Telephone1";
            /** 获取-电话 1 */
            get telephone1(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_TELEPHONE1_NAME);
            }
            /** 设置-电话 1 */
            set telephone1(value: string) {
                this.setProperty(ContactPerson.PROPERTY_TELEPHONE1_NAME, value);
            }

            /** 映射的属性名称-电话 2 */
            static PROPERTY_TELEPHONE2_NAME: string = "Telephone2";
            /** 获取-电话 2 */
            get telephone2(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_TELEPHONE2_NAME);
            }
            /** 设置-电话 2 */
            set telephone2(value: string) {
                this.setProperty(ContactPerson.PROPERTY_TELEPHONE2_NAME, value);
            }

            /** 映射的属性名称-移动电话 */
            static PROPERTY_MOBILEPHONE_NAME: string = "MobilePhone";
            /** 获取-移动电话 */
            get mobilePhone(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_MOBILEPHONE_NAME);
            }
            /** 设置-移动电话 */
            set mobilePhone(value: string) {
                this.setProperty(ContactPerson.PROPERTY_MOBILEPHONE_NAME, value);
            }

            /** 映射的属性名称-传真 */
            static PROPERTY_FAX_NAME: string = "Fax";
            /** 获取-传真 */
            get fax(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_FAX_NAME);
            }
            /** 设置-传真 */
            set fax(value: string) {
                this.setProperty(ContactPerson.PROPERTY_FAX_NAME, value);
            }

            /** 映射的属性名称-电子邮件 */
            static PROPERTY_MAIL_NAME: string = "Mail";
            /** 获取-电子邮件 */
            get mail(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_MAIL_NAME);
            }
            /** 设置-电子邮件 */
            set mail(value: string) {
                this.setProperty(ContactPerson.PROPERTY_MAIL_NAME, value);
            }

            /** 映射的属性名称-备注 1 */
            static PROPERTY_REMARK1_NAME: string = "Remark1";
            /** 获取-备注 1 */
            get remark1(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_REMARK1_NAME);
            }
            /** 设置-备注 1 */
            set remark1(value: string) {
                this.setProperty(ContactPerson.PROPERTY_REMARK1_NAME, value);
            }

            /** 映射的属性名称-备注 2 */
            static PROPERTY_REMARK2_NAME: string = "Remark2";
            /** 获取-备注 2 */
            get remark2(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_REMARK2_NAME);
            }
            /** 设置-备注 2 */
            set remark2(value: string) {
                this.setProperty(ContactPerson.PROPERTY_REMARK2_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(ContactPerson.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(ContactPerson.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(ContactPerson.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(ContactPerson.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(ContactPerson.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(ContactPerson.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(ContactPerson.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(ContactPerson.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(ContactPerson.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(ContactPerson.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(ContactPerson.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(ContactPerson.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(ContactPerson.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(ContactPerson.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(ContactPerson.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(ContactPerson.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(ContactPerson.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(ContactPerson.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(ContactPerson.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(ContactPerson.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(ContactPerson.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(ContactPerson.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string = "DataOwner";
            /** 获取-数据所有者 */
            get dataOwner(): number {
                return this.getProperty<number>(ContactPerson.PROPERTY_DATAOWNER_NAME);
            }
            /** 设置-数据所有者 */
            set dataOwner(value: number) {
                this.setProperty(ContactPerson.PROPERTY_DATAOWNER_NAME, value);
            }

            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string = "Organization";
            /** 获取-数据所属组织 */
            get organization(): string {
                return this.getProperty<string>(ContactPerson.PROPERTY_ORGANIZATION_NAME);
            }
            /** 设置-数据所属组织 */
            set organization(value: string) {
                this.setProperty(ContactPerson.PROPERTY_ORGANIZATION_NAME, value);
            }


            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(ContactPerson.BUSINESS_OBJECT_CODE);
                this.ownerType = emBusinessPartnerType.CUSTOMER;
                this.activated = ibas.emYesNo.YES;
            }

            protected registerRules(): ibas.IBusinessRule[] {
                return [
                    // 清理属性值
                    new BusinessRuleClearValue(ContactPerson.PROPERTY_OWNERTYPE_NAME, ContactPerson.PROPERTY_BUSINESSPARTNER_NAME),
                ];
            }
        }


    }
}
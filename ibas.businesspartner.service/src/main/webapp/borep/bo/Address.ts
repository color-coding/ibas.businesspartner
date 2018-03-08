/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {

        /** 业务伙伴地址 */
        export class Address extends ibas.BOSimple<Address> implements IAddress {

            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = BO_CODE_ADDRESS;
            /** 构造函数 */
            constructor() {
                super();
            }
            /** 映射的属性名称-业务伙伴 */
            static PROPERTY_BUSINESSPARTNER_NAME: string = "BusinessPartner";
            /** 获取-业务伙伴 */
            get businessPartner(): string {
                return this.getProperty<string>(Address.PROPERTY_BUSINESSPARTNER_NAME);
            }
            /** 设置-业务伙伴 */
            set businessPartner(value: string) {
                this.setProperty(Address.PROPERTY_BUSINESSPARTNER_NAME, value);
            }

            /** 映射的属性名称-归属类型 */
            static PROPERTY_OWNERTYPE_NAME: string = "OwnerType";
            /** 获取-归属类型 */
            get ownerType(): emBusinessPartnerType {
                return this.getProperty<emBusinessPartnerType>(Address.PROPERTY_OWNERTYPE_NAME);
            }
            /** 设置-归属类型 */
            set ownerType(value: emBusinessPartnerType) {
                this.setProperty(Address.PROPERTY_OWNERTYPE_NAME, value);
            }

            /** 映射的属性名称-有效的 */
            static PROPERTY_ACTIVATED_NAME: string = "Activated";
            /** 获取-有效的 */
            get activated(): ibas.emYesNo {
                return this.getProperty<ibas.emYesNo>(Address.PROPERTY_ACTIVATED_NAME);
            }
            /** 设置-有效的 */
            set activated(value: ibas.emYesNo) {
                this.setProperty(Address.PROPERTY_ACTIVATED_NAME, value);
            }

            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string = "Name";
            /** 获取-名称 */
            get name(): string {
                return this.getProperty<string>(Address.PROPERTY_NAME_NAME);
            }
            /** 设置-名称 */
            set name(value: string) {
                this.setProperty(Address.PROPERTY_NAME_NAME, value);
            }

            /** 映射的属性名称-街道 */
            static PROPERTY_STREET_NAME: string = "Street";
            /** 获取-街道 */
            get street(): string {
                return this.getProperty<string>(Address.PROPERTY_STREET_NAME);
            }
            /** 设置-街道 */
            set street(value: string) {
                this.setProperty(Address.PROPERTY_STREET_NAME, value);
            }

            /** 映射的属性名称-县/区 */
            static PROPERTY_DISTRICT_NAME: string = "District";
            /** 获取-县/区 */
            get district(): string {
                return this.getProperty<string>(Address.PROPERTY_DISTRICT_NAME);
            }
            /** 设置-县/区 */
            set district(value: string) {
                this.setProperty(Address.PROPERTY_DISTRICT_NAME, value);
            }

            /** 映射的属性名称-市 */
            static PROPERTY_CITY_NAME: string = "City";
            /** 获取-市 */
            get city(): string {
                return this.getProperty<string>(Address.PROPERTY_CITY_NAME);
            }
            /** 设置-市 */
            set city(value: string) {
                this.setProperty(Address.PROPERTY_CITY_NAME, value);
            }

            /** 映射的属性名称-省 */
            static PROPERTY_PROVINCE_NAME: string = "Province";
            /** 获取-省 */
            get province(): string {
                return this.getProperty<string>(Address.PROPERTY_PROVINCE_NAME);
            }
            /** 设置-省 */
            set province(value: string) {
                this.setProperty(Address.PROPERTY_PROVINCE_NAME, value);
            }

            /** 映射的属性名称-国 */
            static PROPERTY_COUNTRY_NAME: string = "Country";
            /** 获取-国 */
            get country(): string {
                return this.getProperty<string>(Address.PROPERTY_COUNTRY_NAME);
            }
            /** 设置-国 */
            set country(value: string) {
                this.setProperty(Address.PROPERTY_COUNTRY_NAME, value);
            }

            /** 映射的属性名称-邮编 */
            static PROPERTY_ZIPCODE_NAME: string = "ZipCode";
            /** 获取-邮编 */
            get zipCode(): string {
                return this.getProperty<string>(Address.PROPERTY_ZIPCODE_NAME);
            }
            /** 设置-邮编 */
            set zipCode(value: string) {
                this.setProperty(Address.PROPERTY_ZIPCODE_NAME, value);
            }

            /** 映射的属性名称-联系电话 */
            static PROPERTY_MOBILEPHONE_NAME: string = "MobilePhone";
            /** 获取-联系电话 */
            get mobilePhone(): string {
                return this.getProperty<string>(Address.PROPERTY_MOBILEPHONE_NAME);
            }
            /** 设置-联系电话 */
            set mobilePhone(value: string) {
                this.setProperty(Address.PROPERTY_MOBILEPHONE_NAME, value);
            }

            /** 映射的属性名称-电话 1 */
            static PROPERTY_TELEPHONE1_NAME: string = "Telephone1";
            /** 获取-电话 1 */
            get telephone1(): string {
                return this.getProperty<string>(Address.PROPERTY_TELEPHONE1_NAME);
            }
            /** 设置-电话 1 */
            set telephone1(value: string) {
                this.setProperty(Address.PROPERTY_TELEPHONE1_NAME, value);
            }

            /** 映射的属性名称-电话 2 */
            static PROPERTY_TELEPHONE2_NAME: string = "Telephone2";
            /** 获取-电话 2 */
            get telephone2(): string {
                return this.getProperty<string>(Address.PROPERTY_TELEPHONE2_NAME);
            }
            /** 设置-电话 2 */
            set telephone2(value: string) {
                this.setProperty(Address.PROPERTY_TELEPHONE2_NAME, value);
            }

            /** 映射的属性名称-备注 1 */
            static PROPERTY_REMARK1_NAME: string = "Remark1";
            /** 获取-备注 1 */
            get remark1(): string {
                return this.getProperty<string>(Address.PROPERTY_REMARK1_NAME);
            }
            /** 设置-备注 1 */
            set remark1(value: string) {
                this.setProperty(Address.PROPERTY_REMARK1_NAME, value);
            }

            /** 映射的属性名称-备注 2 */
            static PROPERTY_REMARK2_NAME: string = "Remark2";
            /** 获取-备注 2 */
            get remark2(): string {
                return this.getProperty<string>(Address.PROPERTY_REMARK2_NAME);
            }
            /** 设置-备注 2 */
            set remark2(value: string) {
                this.setProperty(Address.PROPERTY_REMARK2_NAME, value);
            }

            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTS_NAME: string = "Contacts";
            /** 获取-联系人 */
            get contacts(): string {
                return this.getProperty<string>(Address.PROPERTY_CONTACTS_NAME);
            }
            /** 设置-联系人 */
            set contacts(value: string) {
                this.setProperty(Address.PROPERTY_CONTACTS_NAME, value);
            }

            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string = "ObjectKey";
            /** 获取-对象编号 */
            get objectKey(): number {
                return this.getProperty<number>(Address.PROPERTY_OBJECTKEY_NAME);
            }
            /** 设置-对象编号 */
            set objectKey(value: number) {
                this.setProperty(Address.PROPERTY_OBJECTKEY_NAME, value);
            }

            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string = "ObjectCode";
            /** 获取-对象类型 */
            get objectCode(): string {
                return this.getProperty<string>(Address.PROPERTY_OBJECTCODE_NAME);
            }
            /** 设置-对象类型 */
            set objectCode(value: string) {
                this.setProperty(Address.PROPERTY_OBJECTCODE_NAME, value);
            }

            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string = "CreateDate";
            /** 获取-创建日期 */
            get createDate(): Date {
                return this.getProperty<Date>(Address.PROPERTY_CREATEDATE_NAME);
            }
            /** 设置-创建日期 */
            set createDate(value: Date) {
                this.setProperty(Address.PROPERTY_CREATEDATE_NAME, value);
            }

            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string = "CreateTime";
            /** 获取-创建时间 */
            get createTime(): number {
                return this.getProperty<number>(Address.PROPERTY_CREATETIME_NAME);
            }
            /** 设置-创建时间 */
            set createTime(value: number) {
                this.setProperty(Address.PROPERTY_CREATETIME_NAME, value);
            }

            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string = "UpdateDate";
            /** 获取-修改日期 */
            get updateDate(): Date {
                return this.getProperty<Date>(Address.PROPERTY_UPDATEDATE_NAME);
            }
            /** 设置-修改日期 */
            set updateDate(value: Date) {
                this.setProperty(Address.PROPERTY_UPDATEDATE_NAME, value);
            }

            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string = "UpdateTime";
            /** 获取-修改时间 */
            get updateTime(): number {
                return this.getProperty<number>(Address.PROPERTY_UPDATETIME_NAME);
            }
            /** 设置-修改时间 */
            set updateTime(value: number) {
                this.setProperty(Address.PROPERTY_UPDATETIME_NAME, value);
            }

            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string = "LogInst";
            /** 获取-实例号（版本） */
            get logInst(): number {
                return this.getProperty<number>(Address.PROPERTY_LOGINST_NAME);
            }
            /** 设置-实例号（版本） */
            set logInst(value: number) {
                this.setProperty(Address.PROPERTY_LOGINST_NAME, value);
            }

            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string = "Series";
            /** 获取-服务系列 */
            get series(): number {
                return this.getProperty<number>(Address.PROPERTY_SERIES_NAME);
            }
            /** 设置-服务系列 */
            set series(value: number) {
                this.setProperty(Address.PROPERTY_SERIES_NAME, value);
            }

            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string = "DataSource";
            /** 获取-数据源 */
            get dataSource(): string {
                return this.getProperty<string>(Address.PROPERTY_DATASOURCE_NAME);
            }
            /** 设置-数据源 */
            set dataSource(value: string) {
                this.setProperty(Address.PROPERTY_DATASOURCE_NAME, value);
            }

            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string = "CreateUserSign";
            /** 获取-创建用户 */
            get createUserSign(): number {
                return this.getProperty<number>(Address.PROPERTY_CREATEUSERSIGN_NAME);
            }
            /** 设置-创建用户 */
            set createUserSign(value: number) {
                this.setProperty(Address.PROPERTY_CREATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string = "UpdateUserSign";
            /** 获取-修改用户 */
            get updateUserSign(): number {
                return this.getProperty<number>(Address.PROPERTY_UPDATEUSERSIGN_NAME);
            }
            /** 设置-修改用户 */
            set updateUserSign(value: number) {
                this.setProperty(Address.PROPERTY_UPDATEUSERSIGN_NAME, value);
            }

            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string = "CreateActionId";
            /** 获取-创建动作标识 */
            get createActionId(): string {
                return this.getProperty<string>(Address.PROPERTY_CREATEACTIONID_NAME);
            }
            /** 设置-创建动作标识 */
            set createActionId(value: string) {
                this.setProperty(Address.PROPERTY_CREATEACTIONID_NAME, value);
            }

            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string = "UpdateActionId";
            /** 获取-更新动作标识 */
            get updateActionId(): string {
                return this.getProperty<string>(Address.PROPERTY_UPDATEACTIONID_NAME);
            }
            /** 设置-更新动作标识 */
            set updateActionId(value: string) {
                this.setProperty(Address.PROPERTY_UPDATEACTIONID_NAME, value);
            }

            /** 初始化数据 */
            protected init(): void {
                this.objectCode = ibas.config.applyVariables(Address.BUSINESS_OBJECT_CODE);
                this.activated = ibas.emYesNo.YES;
                this.ownerType = emBusinessPartnerType.CUSTOMER;
            }
        }
    }
}

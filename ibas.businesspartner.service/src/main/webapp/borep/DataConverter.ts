/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 数据转换者 */
        export class DataConverter extends ibas.DataConverter4j {

            /**
             * 转换业务对象数据
             * @param data 本地类型
             * @param sign 特殊标记
             * @returns 目标类型
             */
            convert(data: any, sign: string): any {
                if (!ibas.strings.isEmpty(sign) && sign.indexOf("fetchCustomerAsset") >= 0) {
                    let newData: bo.IAssetRequest = data;
                    let remote: ibas4j.IAssetRequest = {
                        type: "AssetRequest",
                        BusinessPartner: newData.businessPartner,
                        DocumentType: newData.documentType,
                        DocumentEntry: newData.documentEntry,
                        DocumentLineId: newData.documentLineId,
                        Total: newData.total,
                        Currency: newData.currency,
                    };
                    return remote;
                } else {
                    return super.convert(data, sign);
                }
            }
            /**
             * 解析业务对象数据
             * @param data 目标类型
             * @param sign 特殊标记
             * @returns 本地类型
             */
            parsing(data: any, sign: string): any {
                if (data.type === bo.CustomerAsset.name) {
                    let remote: ibas4j.ICustomerAsset = data;
                    let newData: bo.CustomerAsset = new bo.CustomerAsset();
                    newData.code = remote.Code;
                    newData.name = remote.Name;
                    newData.picture = remote.Picture;
                    newData.validDate = ibas.dates.valueOf(remote.ValidDate);
                    newData.invalidDate = ibas.dates.valueOf(remote.InvalidDate);
                    newData.amount = remote.Amount;
                    newData.unit = remote.Unit;
                    newData.times = remote.Times;
                    newData.discount = remote.Discount;
                    newData.customer = remote.Customer;
                    return newData;
                } else {
                    return super.parsing(data, sign);
                }
            }
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter {
                return new BOConverter;
            }
        }

        /** 模块业务对象工厂 */
        export const boFactory: ibas.BOFactory = new ibas.BOFactory();
        /** 业务对象转换者 */
        class BOConverter extends ibas.BOConverter {
            /** 模块对象工厂 */
            protected factory(): ibas.BOFactory {
                return boFactory;
            }

            /**
             * 自定义解析
             * @param data 远程数据
             * @returns 本地数据
             */
            protected customParsing(data: any): ibas.IBusinessObject {
                return data;
            }

            /**
             * 转换数据
             * @param boName 对象名称
             * @param property 属性名称
             * @param value 值
             * @returns 转换的值
             */
            protected convertData(boName: string, property: string, value: any): any {
                if (boName === bo.Address.name) {
                    if (property === bo.Address.PROPERTY_OWNERTYPE_NAME) {
                        return ibas.enums.toString(emBusinessPartnerType, value);
                    }
                } else if (boName === bo.ContactPerson.name) {
                    if (property === bo.ContactPerson.PROPERTY_GENDER_NAME) {
                        return ibas.enums.toString(emGender, value);
                    }
                    if (property === bo.ContactPerson.PROPERTY_OWNERTYPE_NAME) {
                        return ibas.enums.toString(emBusinessPartnerType, value);
                    }
                } else if (boName === bo.Customer.name) {
                    if (property === bo.Customer.PROPERTY_COMPANYPRIVATE_NAME) {
                        return ibas.enums.toString(emBusinessPartnerNature, value);
                    }
                } else if (boName === bo.Supplier.name) {
                    if (property === bo.Supplier.PROPERTY_COMPANYPRIVATE_NAME) {
                        return ibas.enums.toString(emBusinessPartnerNature, value);
                    }
                } else if (boName === bo.BusinessPartnerAsset.name) {
                    if (property === bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE_NAME) {
                        return ibas.enums.toString(emBusinessPartnerType, value);
                    }
                }
                return super.convertData(boName, property, value);
            }

            /**
             * 解析数据
             * @param boName 对象名称
             * @param property 属性名称
             * @param value 值
             * @returns 解析的值
             */
            protected parsingData(boName: string, property: string, value: any): any {
                if (boName === bo.Address.name) {
                    if (property === bo.Address.PROPERTY_OWNERTYPE_NAME) {
                        return ibas.enums.valueOf(emBusinessPartnerType, value);
                    }
                } else if (boName === bo.ContactPerson.name) {
                    if (property === bo.ContactPerson.PROPERTY_GENDER_NAME) {
                        return ibas.enums.valueOf(emGender, value);
                    }
                    if (property === bo.ContactPerson.PROPERTY_OWNERTYPE_NAME) {
                        return ibas.enums.valueOf(emBusinessPartnerType, value);
                    }
                } else if (boName === bo.Customer.name) {
                    if (property === bo.Customer.PROPERTY_COMPANYPRIVATE_NAME) {
                        return ibas.enums.valueOf(emBusinessPartnerNature, value);
                    }
                } else if (boName === bo.Supplier.name) {
                    if (property === bo.Supplier.PROPERTY_COMPANYPRIVATE_NAME) {
                        return ibas.enums.valueOf(emBusinessPartnerNature, value);
                    }
                } else if (boName === bo.BusinessPartnerAsset.name) {
                    if (property === bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE_NAME) {
                        return ibas.enums.valueOf(emBusinessPartnerType, value);
                    }
                }
                return super.parsingData(boName, property, value);
            }
        }
    }
}

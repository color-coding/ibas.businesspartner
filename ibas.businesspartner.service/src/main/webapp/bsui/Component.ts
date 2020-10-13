/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace ui {
        export namespace component {
            sap.extension.m.ConversionText.extend("businesspartner.ui.component.BusinessPartnerText", {
                metadata: {
                    properties: {
                        /** 业务伙伴类型属性名 */
                        typeProperty: { type: "string" },
                    },
                    events: {
                    },
                },
                renderer: {
                },
                /** 获取-业务伙伴类型属性名 */
                getTypeProperty(this: BusinessPartnerText): string {
                    return this.getProperty("typeProperty");
                },
                /** 设置-业务伙伴类型属性名 */
                setTypeProperty(this: BusinessPartnerText, value: string): BusinessPartnerText {
                    return this.setProperty("typeProperty", value);
                },
                init(this: BusinessPartnerText): void {
                    (<any>sap.extension.m.ConversionText.prototype).init.apply(this, arguments);
                    this.attachConvert(undefined, (event: sap.ui.base.Event) => {
                        let value: string = event.getParameter("value");
                        let done: (newValue: string) => void = event.getParameter("done");
                        let bindingData: any = event.getParameter("bindingData");
                        let type: bo.emBusinessPartnerType = bindingData[this.getTypeProperty()];
                        if (ibas.objects.isNull(type) || ibas.strings.isEmpty(value)) {
                            return;
                        }
                        let criteria: ibas.ICriteria = new ibas.Criteria();
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = "Code";
                        condition.value = value;
                        let fetched: (values: ibas.IList<ibas.KeyText> | Error) => void = (values) => {
                            if (values instanceof Error) {
                                ibas.logger.log(values);
                            } else {
                                let keyBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                keyBudilder.map(null, "");
                                keyBudilder.map(undefined, "");
                                let textBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                textBudilder.map(null, "");
                                textBudilder.map(undefined, "");
                                for (let item of values) {
                                    if (keyBudilder.length > 0) {
                                        keyBudilder.append(ibas.DATA_SEPARATOR);
                                    }
                                    if (textBudilder.length > 0) {
                                        textBudilder.append(ibas.DATA_SEPARATOR);
                                        textBudilder.append(" ");
                                    }
                                    keyBudilder.append(item.key);
                                    textBudilder.append(item.text);
                                }
                                done(textBudilder.toString());
                            }
                        };
                        let boRepository: bo.BORepositoryBusinessPartner = sap.extension.variables.get(BusinessPartnerText, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = new bo.BORepositoryBusinessPartner();
                            sap.extension.variables.set(boRepository, BusinessPartnerText, "repository");
                        }
                        if (type === bo.emBusinessPartnerType.CUSTOMER) {
                            let customerInfo: any = sap.extension.variables.get(BusinessPartnerText, "customerInfo");
                            if (ibas.objects.isNull(customerInfo)) {
                                customerInfo = {
                                    type: bo.Customer,
                                    key: "Code",
                                    text: "Name"
                                };
                                sap.extension.variables.set(customerInfo, BusinessPartnerText, "customerInfo");
                            }
                            sap.extension.repository.batchFetch(boRepository, customerInfo, criteria, fetched);
                        } else if (type === bo.emBusinessPartnerType.SUPPLIER) {
                            let supplierInfo: any = sap.extension.variables.get(BusinessPartnerText, "supplierInfo");
                            if (ibas.objects.isNull(supplierInfo)) {
                                supplierInfo = {
                                    type: bo.Supplier,
                                    key: "Code",
                                    text: "Name"
                                };
                                sap.extension.variables.set(supplierInfo, BusinessPartnerText, "supplierInfo");
                            }
                            sap.extension.repository.batchFetch(boRepository, supplierInfo, criteria, fetched);
                        }
                    });
                }
            });
            sap.extension.m.ConversionObjectAttribute.extend("businesspartner.ui.component.BusinessPartnerAttribute", {
                metadata: {
                    properties: {
                        /** 业务伙伴类型属性名 */
                        typeProperty: { type: "string" },
                    },
                    events: {
                    },
                },
                renderer: {
                },
                /** 获取-业务伙伴类型属性名 */
                getTypeProperty(this: BusinessPartnerAttribute): string {
                    return this.getProperty("typeProperty");
                },
                /** 设置-业务伙伴类型属性名 */
                setTypeProperty(this: BusinessPartnerAttribute, value: string): BusinessPartnerAttribute {
                    return this.setProperty("typeProperty", value);
                },
                init(this: BusinessPartnerAttribute): void {
                    (<any>sap.extension.m.ConversionObjectAttribute.prototype).init.apply(this, arguments);
                    this.attachConvert(undefined, (event: sap.ui.base.Event) => {
                        let value: string = event.getParameter("value");
                        let done: (newValue: string) => void = event.getParameter("done");
                        let bindingData: any = event.getParameter("bindingData");
                        let type: bo.emBusinessPartnerType = bindingData[this.getTypeProperty()];
                        if (ibas.objects.isNull(type) || ibas.strings.isEmpty(value)) {
                            return;
                        }
                        let criteria: ibas.ICriteria = new ibas.Criteria();
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = "Code";
                        condition.value = value;
                        let fetched: (values: ibas.IList<ibas.KeyText> | Error) => void = (values) => {
                            if (values instanceof Error) {
                                ibas.logger.log(values);
                            } else {
                                let keyBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                keyBudilder.map(null, "");
                                keyBudilder.map(undefined, "");
                                let textBudilder: ibas.StringBuilder = new ibas.StringBuilder();
                                textBudilder.map(null, "");
                                textBudilder.map(undefined, "");
                                for (let item of values) {
                                    if (keyBudilder.length > 0) {
                                        keyBudilder.append(ibas.DATA_SEPARATOR);
                                    }
                                    if (textBudilder.length > 0) {
                                        textBudilder.append(ibas.DATA_SEPARATOR);
                                        textBudilder.append(" ");
                                    }
                                    keyBudilder.append(item.key);
                                    textBudilder.append(item.text);
                                }
                                done(textBudilder.toString());
                            }
                        };
                        let boRepository: bo.BORepositoryBusinessPartner = sap.extension.variables.get(BusinessPartnerAttribute, "repository");
                        if (ibas.objects.isNull(boRepository)) {
                            boRepository = new bo.BORepositoryBusinessPartner();
                            sap.extension.variables.set(boRepository, BusinessPartnerAttribute, "repository");
                        }
                        if (type === bo.emBusinessPartnerType.CUSTOMER) {
                            let customerInfo: any = sap.extension.variables.get(BusinessPartnerAttribute, "customerInfo");
                            if (ibas.objects.isNull(customerInfo)) {
                                customerInfo = {
                                    type: bo.Customer,
                                    key: "Code",
                                    text: "Name"
                                };
                                sap.extension.variables.set(customerInfo, BusinessPartnerAttribute, "customerInfo");
                            }
                            sap.extension.repository.batchFetch(boRepository, customerInfo, criteria, fetched);
                        } else if (type === bo.emBusinessPartnerType.SUPPLIER) {
                            let supplierInfo: any = sap.extension.variables.get(BusinessPartnerAttribute, "supplierInfo");
                            if (ibas.objects.isNull(supplierInfo)) {
                                supplierInfo = {
                                    type: bo.Supplier,
                                    key: "Code",
                                    text: "Name"
                                };
                                sap.extension.variables.set(supplierInfo, BusinessPartnerAttribute, "supplierInfo");
                            }
                            sap.extension.repository.batchFetch(boRepository, supplierInfo, criteria, fetched);
                        }
                    });
                }
            });
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace ui {
        export namespace c {
            /** 查看视图-业务伙伴资产 */
            export class BusinessPartnerAssetViewView extends ibas.BOViewView implements app.IBusinessPartnerAssetViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.BusinessPartnerAsset.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            navigationBar: new sap.m.Bar("", {
                                contentLeft: [
                                    new sap.m.Button("", {
                                        text: ibas.i18n.prop("shell_data_edit"),
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://edit",
                                        visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                        press(): void {
                                            that.fireViewEvents(that.editDataEvent);
                                        }
                                    })
                                ],
                                contentRight: [
                                    new sap.m.Button("", {
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://action",
                                        press(event: sap.ui.base.Event): void {
                                            ibas.servicesManager.showServices({
                                                proxy: new ibas.BOServiceProxy({
                                                    data: that.page.getModel().getData(),
                                                    converter: new bo.DataConverter(),
                                                }),
                                                displayServices(services: ibas.IServiceAgent[]): void {
                                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                                        return;
                                                    }
                                                    let actionSheet: sap.m.ActionSheet = new sap.m.ActionSheet("", {
                                                        placement: sap.m.PlacementType.Bottom,
                                                        buttons: {
                                                            path: "/",
                                                            template: new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Transparent,
                                                                text: {
                                                                    path: "name",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                    formatter(data: string): string {
                                                                        return data ? ibas.i18n.prop(data) : "";
                                                                    }
                                                                },
                                                                icon: {
                                                                    path: "icon",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                    formatter(data: string): string {
                                                                        return data ? data : "sap-icon://e-care";
                                                                    }
                                                                },
                                                                press(this: sap.m.Button): void {
                                                                    let service: ibas.IServiceAgent = this.getBindingContext().getObject();
                                                                    if (service) {
                                                                        service.run();
                                                                    }
                                                                }
                                                            })
                                                        }
                                                    });
                                                    actionSheet.setModel(new sap.extension.model.JSONModel(services));
                                                    actionSheet.openBy(event.getSource());
                                                }
                                            });
                                        }
                                    })
                                ]
                            }),
                            actions: [
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_businesspartnerasset_activated"),
                                    enumValue: {
                                        path: "activated",
                                        type: new sap.extension.data.YesNo(),
                                    }
                                }),
                                new sap.extension.m.ObjectNumber("", {
                                    textAlign: sap.ui.core.TextAlign.Right,
                                    number: {
                                        path: "amount",
                                        type: new sap.extension.data.Sum(),
                                    },
                                    unit: {
                                        path: "times",
                                        type: new sap.extension.data.Numeric(),
                                    },
                                }).addStyleClass("sapMObjectNumberLarge"),
                            ]
                        }),
                        headerContent: [
                            new sap.m.FlexBox("", {
                                items: [
                                    // 客户
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        repository: bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: bo.Customer,
                                            key: bo.Customer.PROPERTY_CODE_NAME,
                                            text: bo.Customer.PROPERTY_NAME_NAME,
                                        },
                                        bindingValue: {
                                            path: "businessPartnerCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }).bindProperty("title", {
                                        path: "businessPartnerType",
                                        formatter(data: any): any {
                                            return ibas.enums.describe(bo.emBusinessPartnerType, data);
                                        }
                                    }).bindProperty("visible", {
                                        path: "businessPartnerType",
                                        formatter(data: any): any {
                                            if (data === bo.emBusinessPartnerType.CUSTOMER) {
                                                return true;
                                            }
                                            return false;
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartnerCode",
                                        type: new sap.extension.data.Alphanumeric()
                                    }),
                                    // 供应商
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        repository: bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: bo.Supplier,
                                            key: bo.Supplier.PROPERTY_CODE_NAME,
                                            text: bo.Supplier.PROPERTY_NAME_NAME,
                                        },
                                        bindingValue: {
                                            path: "businessPartnerCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }).bindProperty("title", {
                                        path: "businessPartnerType",
                                        formatter(data: any): any {
                                            return ibas.enums.describe(bo.emBusinessPartnerType, data);
                                        }
                                    }).bindProperty("visible", {
                                        path: "businessPartnerType",
                                        formatter(data: any): any {
                                            if (data === bo.emBusinessPartnerType.SUPPLIER) {
                                                return true;
                                            }
                                            return false;
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartnerCode",
                                        type: new sap.extension.data.Alphanumeric()
                                    }),
                                    // 潜在客户
                                    new sap.extension.m.RepositoryObjectAttribute("", {
                                        repository: bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: bo.Lead,
                                            key: bo.Lead.PROPERTY_CODE_NAME,
                                            text: bo.Lead.PROPERTY_NAME_NAME,
                                        },
                                        bindingValue: {
                                            path: "businessPartnerCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }).bindProperty("title", {
                                        path: "businessPartnerType",
                                        formatter(data: any): any {
                                            return ibas.enums.describe(bo.emBusinessPartnerType, data);
                                        }
                                    }).bindProperty("visible", {
                                        path: "businessPartnerType",
                                        formatter(data: any): any {
                                            if (data === bo.emBusinessPartnerType.LEAD) {
                                                return true;
                                            }
                                            return false;
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartnerCode",
                                        type: new sap.extension.data.Alphanumeric()
                                    }),
                                ]
                            }),
                            new sap.extension.m.RepositoryObjectAttribute("", {
                                title: ibas.i18n.prop("bo_businesspartnerasset_assetcode"),
                                showValueLink: true,
                                repository: bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: bo.AssetItem,
                                    key: bo.AssetItem.PROPERTY_CODE_NAME,
                                    text: bo.AssetItem.PROPERTY_NAME_NAME
                                },
                                bindingValue: {
                                    path: "assetCode",
                                    type: new sap.extension.data.Alphanumeric(),
                                }
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_businesspartnerasset_bankaccount"),
                                                showValueLink: true,
                                                repository: accounting.bo.BORepositoryAccounting,
                                                dataInfo: {
                                                    type: accounting.bo.BankAccount,
                                                    key: accounting.bo.BankAccount.PROPERTY_CODE_NAME,
                                                    text: accounting.bo.BankAccount.PROPERTY_NAME_NAME
                                                },
                                                bindingValue: {
                                                    path: "bankAccount",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_businesspartnerasset_basedocument"),
                                                bindingValue: {
                                                    parts: [
                                                        {
                                                            path: "baseDocumentType",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        },
                                                        {
                                                            path: "baseDocumentEntry",
                                                            type: new sap.extension.data.Numeric(),
                                                        },
                                                        {
                                                            path: "baseDocumentLineId",
                                                            type: new sap.extension.data.Numeric(),
                                                        }
                                                    ],
                                                    formatter(type: string, entry: number, lineId: number): string {
                                                        if (ibas.strings.isEmpty(type)) {
                                                            return "";
                                                        }
                                                        return ibas.businessobjects.describe(ibas.strings.format("{[{0}].[DocEntry = {1}]}", type, entry));
                                                    }
                                                }
                                            }),
                                        ],
                                    }),
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [

                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_businesspartnerasset_acquireddate"),
                                                bindingValue: {
                                                    path: "acquiredDate",
                                                    type: new sap.extension.data.Date(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_businesspartnerasset_validdate"),
                                                bindingValue: {
                                                    path: "validDate",
                                                    type: new sap.extension.data.Date(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_businesspartnerasset_invaliddate"),
                                                bindingValue: {
                                                    path: "invalidDate",
                                                    type: new sap.extension.data.Date(),
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_businesspartnerasset_remark1"),
                                                bindingValue: {
                                                    path: "remark1",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_businesspartnerasset_remark2"),
                                                bindingValue: {
                                                    path: "remark2",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;

                /** 显示数据 */
                showBusinessPartnerAsset(data: bo.BusinessPartnerAsset): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
            }
        }
    }
}

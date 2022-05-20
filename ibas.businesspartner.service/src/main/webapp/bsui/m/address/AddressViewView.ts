/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace ui {
        export namespace m {
            /** 查看视图-业务伙伴地址 */
            export class AddressViewView extends ibas.BOViewView implements app.IAddressViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Address.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: "# {objectKey}",
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
                                    title: ibas.i18n.prop("bo_address_activated"),
                                    enumValue: {
                                        path: "activated",
                                        type: new sap.extension.data.YesNo(),
                                    }
                                }),
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
                                            path: "businessPartner",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }).bindProperty("title", {
                                        path: "ownerType",
                                        formatter(data: any): any {
                                            return ibas.enums.describe(bo.emBusinessPartnerType, data);
                                        }
                                    }).bindProperty("visible", {
                                        path: "ownerType",
                                        formatter(data: any): any {
                                            if (data === bo.emBusinessPartnerType.CUSTOMER) {
                                                return true;
                                            }
                                            return false;
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartner",
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
                                            path: "businessPartner",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }).bindProperty("title", {
                                        path: "ownerType",
                                        formatter(data: any): any {
                                            return ibas.enums.describe(bo.emBusinessPartnerType, data);
                                        }
                                    }).bindProperty("visible", {
                                        path: "ownerType",
                                        formatter(data: any): any {
                                            if (data === bo.emBusinessPartnerType.SUPPLIER) {
                                                return true;
                                            }
                                            return false;
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartner",
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
                                            path: "businessPartner",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }).bindProperty("title", {
                                        path: "ownerType",
                                        formatter(data: any): any {
                                            return ibas.enums.describe(bo.emBusinessPartnerType, data);
                                        }
                                    }).bindProperty("visible", {
                                        path: "ownerType",
                                        formatter(data: any): any {
                                            if (data === bo.emBusinessPartnerType.LEAD) {
                                                return true;
                                            }
                                            return false;
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartner",
                                        type: new sap.extension.data.Alphanumeric()
                                    }),
                                ]
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                showTitle: false,
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_country"),
                                                bindingValue: {
                                                    path: "country",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_province"),
                                                bindingValue: {
                                                    path: "province",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_city"),
                                                bindingValue: {
                                                    path: "city",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_district"),
                                                bindingValue: {
                                                    path: "district",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    }),
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_street"),
                                                bindingValue: {
                                                    path: "street",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_zipcode"),
                                                bindingValue: {
                                                    path: "zipCode",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    }),
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_contacts"),
                                                bindingValue: {
                                                    path: "contacts",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_mobilephone"),
                                                bindingValue: {
                                                    path: "mobilePhone",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_telephone1"),
                                                bindingValue: {
                                                    path: "telephone1",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    }),
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.UserObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_dataowner"),
                                                bindingValue: {
                                                    path: "dataOwner",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                            new sap.extension.m.OrganizationObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_address_organization"),
                                                bindingValue: {
                                                    path: "organization",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    }),
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;

                /** 显示数据 */
                showAddress(data: bo.Address): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
            }
        }
    }
}

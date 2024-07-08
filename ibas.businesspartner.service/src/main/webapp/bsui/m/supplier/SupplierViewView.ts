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
            /** 查看视图-供应商 */
            export class SupplierViewView extends ibas.BOViewView implements app.ISupplierViewView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Supplier.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: {
                                parts: [
                                    {
                                        path: "code",
                                        type: new sap.extension.data.Alphanumeric(),
                                    },
                                    {
                                        path: "sign",
                                        type: new sap.extension.data.Alphanumeric(),
                                    },
                                ]
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
                                new sap.extension.m.ObjectEnumStatus("", {
                                    title: ibas.i18n.prop("bo_supplier_companyprivate"),
                                    text: {
                                        path: "companyPrivate",
                                        type: new sap.extension.data.Enum({
                                            enumType: bo.emBusinessPartnerNature,
                                            describe: true,
                                        }),
                                    }
                                }),
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_supplier_activated"),
                                    enumValue: {
                                        path: "activated",
                                        type: new sap.extension.data.YesNo(),
                                    }
                                }),
                            ]
                        }),
                        headerContent: [
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_group"),
                                                repository: bo.BORepositoryBusinessPartner,
                                                dataInfo: {
                                                    type: bo.BusinessPartnerGroup,
                                                    key: bo.BusinessPartnerGroup.PROPERTY_CODE_NAME,
                                                    text: bo.BusinessPartnerGroup.PROPERTY_NAME_NAME
                                                },
                                                bindingValue: {
                                                    path: "group",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_warehouse"),
                                                repository: materials.bo.BORepositoryMaterials,
                                                dataInfo: {
                                                    type: materials.bo.Warehouse,
                                                    key: materials.bo.Warehouse.PROPERTY_CODE_NAME,
                                                    text: materials.bo.Warehouse.PROPERTY_NAME_NAME
                                                },
                                                bindingValue: {
                                                    path: "warehouse",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_channel"),
                                                bindingValue: {
                                                    path: "channel",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    }),
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_paymentcode"),
                                                bindingValue: {
                                                    path: "paymentCode",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                },
                                                repository: bo.BORepositoryBusinessPartner,
                                                dataInfo: {
                                                    type: bo.PaymentTerm,
                                                    key: bo.PaymentTerm.PROPERTY_CODE_NAME,
                                                    text: bo.PaymentTerm.PROPERTY_NAME_NAME,
                                                },
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_currency"),
                                                bindingValue: {
                                                    path: "currency",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_pricelist"),
                                                repository: materials.bo.BORepositoryMaterials,
                                                dataInfo: {
                                                    type: materials.bo.MaterialPriceList,
                                                    key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                                    text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                                },
                                                bindingValue: {
                                                    path: "priceList",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_floorlist"),
                                                repository: materials.bo.BORepositoryMaterials,
                                                dataInfo: {
                                                    type: materials.bo.MaterialPriceList,
                                                    key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                                    text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                                },
                                                bindingValue: {
                                                    path: "floorList",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_contact"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_contactperson"),
                                                repository: bo.BORepositoryBusinessPartner,
                                                dataInfo: {
                                                    type: bo.ContactPerson,
                                                    key: bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                                    text: bo.ContactPerson.PROPERTY_NAME_NAME
                                                },
                                                bindingValue: {
                                                    path: "contactPerson",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_mobilephone"),
                                                bindingValue: {
                                                    path: "mobilePhone",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_faxnumber"),
                                                bindingValue: {
                                                    path: "faxNumber",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    }),
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_shipaddress"),
                                                repository: bo.BORepositoryBusinessPartner,
                                                dataInfo: {
                                                    type: bo.Address,
                                                    key: bo.Address.PROPERTY_OBJECTKEY_NAME,
                                                    text: bo.Address.PROPERTY_NAME_NAME
                                                },
                                                bindingValue: {
                                                    path: "shipAddress",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                            new sap.extension.m.RepositoryObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_billaddress"),
                                                repository: bo.BORepositoryBusinessPartner,
                                                dataInfo: {
                                                    type: bo.Address,
                                                    key: bo.Address.PROPERTY_OBJECTKEY_NAME,
                                                    text: bo.Address.PROPERTY_NAME_NAME
                                                },
                                                bindingValue: {
                                                    path: "billAddress",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                        ],
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_invoices"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_invoicetitle"),
                                                bindingValue: {
                                                    path: "invoiceTitle",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_taxid"),
                                                bindingValue: {
                                                    path: "taxId",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    }),
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_invoiceaddress"),
                                                bindingValue: {
                                                    path: "invoiceAddress",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_bank"),
                                                bindingValue: {
                                                    path: "bank",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_bankaccount"),
                                                bindingValue: {
                                                    path: "bankAccount",
                                                    type: new sap.extension.data.Alphanumeric(),
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
                                                title: ibas.i18n.prop("bo_supplier_remarks"),
                                                bindingValue: {
                                                    path: "remarks",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.UserObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_dataowner"),
                                                bindingValue: {
                                                    path: "dataOwner",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                            new sap.extension.m.OrganizationObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_supplier_organization"),
                                                bindingValue: {
                                                    path: "organization",
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
                showSupplier(data: bo.Supplier): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
            }
        }
    }
}

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
            /** 编辑视图-客户 */
            export class SupplierEditView extends ibas.BOEditView implements app.ISupplierEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /*** 选择供应商组事件*/
                chooseSupplierGroupEvent: Function;
                /** 选择供应商联系人事件 */
                chooseSupplierContactPersonEvent: Function;
                /** 选择供应商送货地址事件 */
                chooseSupplierShipAddressEvent: Function;
                /** 选择供应商账单地址事件 */
                chooseSupplierBillAddressEvent: Function;
                /** 选择客供应商注册地址事件 */
                chooseSupplierRegistrationAddress: Function;
                /** 选择供应商价格清单事件 */
                chooseSupplierPriceListEvent: Function;
                /** 选择供应商仓库事件 */
                chooseSupplierWarehouseEvent: Function;
                /** 选择供应商底价清单事件 */
                chooseSupplierFloorListEvent: Function;
                /** 创建联系人 */
                createContactPersonEvent: Function;
                /** 创建地址 */
                createAddressEvent: Function;
                /** 选择总账科目事件 */
                chooseLedgerAccountEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Supplier.BUSINESS_OBJECT_CODE,
                        },
                        userFieldsMode: "input",
                        showFooter: false,
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            sideContentButton: new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://save",
                                press(): void {
                                    that.fireViewEvents(that.saveDataEvent);
                                }
                            }),
                            actions: [
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://copy",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    press(): void {
                                        that.fireViewEvents(that.createDataEvent, true);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Low,
                                    press(): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    text: ibas.i18n.prop("shell_data_services"),
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
                                }),
                            ],
                        }).addStyleClass("sapUiNoContentPadding"),
                        headerContent: [
                            new sap.extension.m.ObjectYesNoStatus("", {
                                title: ibas.i18n.prop("bo_supplier_activated"),
                                negative: false,
                                enumValue: {
                                    path: "activated",
                                    type: new sap.extension.data.YesNo(),
                                }
                            }),
                            new sap.extension.m.RepositoryObjectAttribute("", {
                                repository: bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: bo.BusinessPartnerGroup,
                                    key: bo.BusinessPartnerGroup.PROPERTY_CODE_NAME,
                                    text: bo.BusinessPartnerGroup.PROPERTY_NAME_NAME
                                },
                                title: ibas.i18n.prop("bo_supplier_group"),
                                bindingValue: {
                                    path: "group",
                                    type: new sap.extension.data.Alphanumeric(),
                                },
                            }),
                            new sap.extension.m.RepositoryObjectAttribute("", {
                                repository: materials.bo.BORepositoryMaterials,
                                dataInfo: {
                                    type: materials.bo.MaterialPriceList,
                                    key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                    text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                },
                                title: ibas.i18n.prop("bo_supplier_pricelist"),
                                bindingValue: {
                                    path: "priceList",
                                    type: new sap.extension.data.Numeric()
                                },
                                visible: {
                                    path: "priceList",
                                    formatter(data: string): boolean {
                                        return ibas.numbers.valueOf(data) > 0 ? true : false;
                                    }
                                }
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_code") }),
                                                    new sap.extension.m.Input("", {
                                                        type: sap.m.InputType.Text
                                                    }).bindProperty("bindingValue", {
                                                        path: "code",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        })
                                                    }).bindProperty("editable", {
                                                        path: "series",
                                                        formatter(data: any): any {
                                                            return data > 0 ? false : true;
                                                        }
                                                    }),
                                                    new sap.extension.m.SeriesSelect("", {
                                                        objectCode: bo.BO_CODE_CUSTOMER,
                                                    }).bindProperty("bindingValue", {
                                                        path: "series",
                                                        type: new sap.extension.data.Numeric()
                                                    }).bindProperty("editable", {
                                                        path: "isNew",
                                                        formatter(data: any): any {
                                                            return data === false ? false : true;
                                                        }
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_name") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "name",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_sign") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "sign",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 60
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_activated") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: ibas.emYesNo
                                                    }).bindProperty("bindingValue", {
                                                        path: "activated",
                                                        type: new sap.extension.data.YesNo()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_group") }),
                                                    new sap.extension.m.RepositoryInput("", {
                                                        showValueHelp: true,
                                                        repository: bo.BORepositoryBusinessPartner,
                                                        dataInfo: {
                                                            type: bo.BusinessPartnerGroup,
                                                            key: bo.BusinessPartnerGroup.PROPERTY_CODE_NAME,
                                                            text: bo.BusinessPartnerGroup.PROPERTY_NAME_NAME
                                                        },
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.chooseSupplierGroupEvent);
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "group",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_companyprivate") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: bo.emBusinessPartnerNature
                                                    }).bindProperty("bindingValue", {
                                                        path: "companyPrivate",
                                                        type: new sap.extension.data.Enum({
                                                            enumType: bo.emBusinessPartnerNature
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_pricelist") }),
                                                    new sap.extension.m.RepositoryInput("", {
                                                        showValueHelp: true,
                                                        repository: materials.bo.BORepositoryMaterials,
                                                        dataInfo: {
                                                            type: materials.bo.MaterialPriceList,
                                                            key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                                            text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                                        },
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.chooseSupplierPriceListEvent);
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "priceList",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_floorlist") }),
                                                    new sap.extension.m.RepositoryInput("", {
                                                        showValueHelp: true,
                                                        repository: materials.bo.BORepositoryMaterials,
                                                        dataInfo: {
                                                            type: materials.bo.MaterialPriceList,
                                                            key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                                            text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                                        },
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.chooseSupplierFloorListEvent);
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "floorList",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_currency") }),
                                                    new sap.extension.m.CurrencySelect("", {
                                                        editable: true,
                                                    }).bindProperty("bindingValue", {
                                                        path: "currency",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_taxgroup") }),
                                                    new sap.extension.m.SelectionInput("", {
                                                        showValueHelp: true,
                                                        repository: accounting.bo.BORepositoryAccounting,
                                                        dataInfo: {
                                                            type: accounting.bo.TaxGroup,
                                                            key: accounting.bo.TaxGroup.PROPERTY_CODE_NAME,
                                                            text: accounting.bo.TaxGroup.PROPERTY_NAME_NAME,
                                                        },
                                                        criteria: [
                                                            new ibas.Condition(accounting.bo.TaxGroup.PROPERTY_ACTIVATED_NAME,
                                                                ibas.emConditionOperation.EQUAL,
                                                                ibas.emYesNo.YES),
                                                            new ibas.Condition(accounting.bo.TaxGroup.PROPERTY_CATEGORY_NAME,
                                                                ibas.emConditionOperation.EQUAL,
                                                                accounting.bo.emTaxGroupCategory.INPUT)

                                                        ]
                                                    }).bindProperty("bindingValue", {
                                                        path: "taxGroup",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_paymentcode") }),
                                                    new sap.extension.m.SelectionInput("", {
                                                        showValueHelp: true,
                                                        repository: bo.BORepositoryBusinessPartner,
                                                        dataInfo: {
                                                            type: bo.PaymentTerm,
                                                            key: bo.PaymentTerm.PROPERTY_CODE_NAME,
                                                            text: bo.PaymentTerm.PROPERTY_NAME_NAME,
                                                        },
                                                        criteria: [
                                                            new ibas.Condition(bo.PaymentTerm.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES.toString())
                                                        ]
                                                    }).bindProperty("bindingValue", {
                                                        path: "paymentCode",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_warehouse") }),
                                                    new sap.extension.m.RepositoryInput("", {
                                                        showValueHelp: true,
                                                        repository: materials.bo.BORepositoryMaterials,
                                                        dataInfo: {
                                                            type: materials.bo.Warehouse,
                                                            key: materials.bo.Warehouse.PROPERTY_CODE_NAME,
                                                            text: materials.bo.Warehouse.PROPERTY_NAME_NAME
                                                        },
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.chooseSupplierWarehouseEvent);
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "warehouse",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_validdate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "validDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_invaliddate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "invalidDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_contact"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_contactperson") }),
                                                    new sap.m.FlexBox("", {
                                                        width: "100%",
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.extension.m.RepositoryInput("", {
                                                                showValueHelp: true,
                                                                repository: bo.BORepositoryBusinessPartner,
                                                                dataInfo: {
                                                                    type: bo.ContactPerson,
                                                                    key: bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                                                    text: bo.ContactPerson.PROPERTY_NAME_NAME
                                                                },
                                                                valueHelpRequest: function (): void {
                                                                    that.fireViewEvents(that.chooseSupplierContactPersonEvent);
                                                                },
                                                            }).bindProperty("bindingValue", {
                                                                path: "contactPerson",
                                                                type: new sap.extension.data.Numeric()
                                                            }),
                                                            new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Default,
                                                                icon: "sap-icon://create",
                                                                press: function (event: any): void {
                                                                    that.fireViewEvents(that.createContactPersonEvent, bo.Supplier.PROPERTY_CONTACTPERSON_NAME);
                                                                },
                                                                visible: shell.app.privileges.canRun({
                                                                    id: app.ContactPersonFunc.FUNCTION_ID,
                                                                    name: app.ContactPersonFunc.FUNCTION_NAME,
                                                                })
                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_billaddress") }),
                                                    new sap.m.FlexBox("", {
                                                        width: "100%",
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.extension.m.RepositoryInput("", {
                                                                showValueHelp: true,
                                                                repository: bo.BORepositoryBusinessPartner,
                                                                dataInfo: {
                                                                    type: bo.Address,
                                                                    key: bo.Address.PROPERTY_OBJECTKEY_NAME,
                                                                    text: bo.Address.PROPERTY_NAME_NAME,
                                                                },
                                                                valueHelpRequest: function (): void {
                                                                    that.fireViewEvents(that.chooseSupplierBillAddressEvent);
                                                                },
                                                            }).bindProperty("bindingValue", {
                                                                path: "billAddress",
                                                                type: new sap.extension.data.Numeric()
                                                            }),
                                                            new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Default,
                                                                icon: "sap-icon://create",
                                                                press: function (event: any): void {
                                                                    that.fireViewEvents(that.createAddressEvent, bo.Supplier.PROPERTY_BILLADDRESS_NAME);
                                                                },
                                                                visible: shell.app.privileges.canRun({
                                                                    id: app.AddressFunc.FUNCTION_ID,
                                                                    name: app.AddressFunc.FUNCTION_NAME,
                                                                })
                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_shipaddress") }),
                                                    new sap.m.FlexBox("", {
                                                        width: "100%",
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.extension.m.RepositoryInput("", {
                                                                showValueHelp: true,
                                                                repository: bo.BORepositoryBusinessPartner,
                                                                dataInfo: {
                                                                    type: bo.Address,
                                                                    key: bo.Address.PROPERTY_OBJECTKEY_NAME,
                                                                    text: bo.Address.PROPERTY_NAME_NAME,
                                                                },
                                                                valueHelpRequest: function (): void {
                                                                    that.fireViewEvents(that.chooseSupplierShipAddressEvent);
                                                                },
                                                            }).bindProperty("bindingValue", {
                                                                path: "shipAddress",
                                                                type: new sap.extension.data.Numeric()
                                                            }),
                                                            new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Default,
                                                                icon: "sap-icon://create",
                                                                press: function (event: any): void {
                                                                    that.fireViewEvents(that.createAddressEvent, bo.Supplier.PROPERTY_SHIPADDRESS_NAME);
                                                                },
                                                                visible: shell.app.privileges.canRun({
                                                                    id: app.AddressFunc.FUNCTION_ID,
                                                                    name: app.AddressFunc.FUNCTION_NAME,
                                                                })
                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_registrationaddress") }),
                                                    new sap.m.FlexBox("", {
                                                        width: "100%",
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.extension.m.RepositoryInput("", {
                                                                showValueHelp: true,
                                                                repository: bo.BORepositoryBusinessPartner,
                                                                dataInfo: {
                                                                    type: bo.Address,
                                                                    key: bo.Address.PROPERTY_OBJECTKEY_NAME,
                                                                    text: bo.Address.PROPERTY_NAME_NAME,
                                                                },
                                                                valueHelpRequest: function (): void {
                                                                    that.fireViewEvents(that.chooseSupplierRegistrationAddress);
                                                                },
                                                            }).bindProperty("bindingValue", {
                                                                path: "registrationAddress",
                                                                type: new sap.extension.data.Numeric(),
                                                            }),
                                                            new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Default,
                                                                icon: "sap-icon://create",
                                                                press: function (event: any): void {
                                                                    that.fireViewEvents(that.createAddressEvent, bo.Supplier.PROPERTY_REGISTRATIONADDRESS_NAME);
                                                                },
                                                                visible: shell.app.privileges.canRun({
                                                                    id: app.AddressFunc.FUNCTION_ID,
                                                                    name: app.AddressFunc.FUNCTION_NAME,
                                                                })
                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_telephone1") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "telephone1",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_telephone2") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "telephone2",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_mobilephone") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "mobilePhone",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 50
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_faxnumber") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "faxNumber",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_channel") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "channel",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_organizationalunit") }),
                                                    new sap.extension.m.DataOrganizationInput("", {
                                                        showValueHelp: true,
                                                        chooseType: ibas.emChooseType.SINGLE,
                                                    }).bindProperty("bindingValue", {
                                                        path: "organizationalUnit",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_invoices"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_taxid") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "taxId",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 30
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_bank") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "bank",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 60
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_bankaccount") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "bankAccount",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 30
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_invoicetitle") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "invoiceTitle",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        }),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_invoiceaddress") }),
                                                    new sap.m.FlexBox("", {
                                                        width: "100%",
                                                        justifyContent: sap.m.FlexJustifyContent.Start,
                                                        renderType: sap.m.FlexRendertype.Bare,
                                                        items: [
                                                            new sap.extension.m.Input("", {
                                                            }).bindProperty("bindingValue", {
                                                                path: "invoiceAddress",
                                                                type: new sap.extension.data.Alphanumeric({
                                                                    maxLength: 200
                                                                }),
                                                            }),
                                                            new sap.m.Button("", {
                                                                type: sap.m.ButtonType.Default,
                                                                icon: "sap-icon://create",
                                                                press: function (event: any): void {
                                                                    let source: sap.m.Button = <sap.m.Button>event.getSource();
                                                                    if (source instanceof sap.m.Button) {
                                                                        let dialog: sap.m.Dialog = new sap.m.Dialog("", {
                                                                            showHeader: false,
                                                                            type: sap.m.DialogType.Standard,
                                                                            state: sap.ui.core.ValueState.None,
                                                                            content: [
                                                                                new sap.ui.layout.form.SimpleForm("", {
                                                                                    content: [
                                                                                        new sap.extension.m.AddressArea("", {
                                                                                            countryVisible: false,
                                                                                            zipCodeVisible: false,
                                                                                        }),
                                                                                    ]
                                                                                })
                                                                            ],
                                                                            buttons: [
                                                                                new sap.m.Button("", {
                                                                                    text: ibas.i18n.prop("shell_confirm"),
                                                                                    type: sap.m.ButtonType.Transparent,
                                                                                    press(event: sap.ui.base.Event): void {
                                                                                        let address: string = this.getParent().getContent()[0].getContent()[0].getAddress();
                                                                                        if (!ibas.strings.isEmpty(address)) {
                                                                                            (<any>source.getParent()).getItems()[0].setBindingValue(address);
                                                                                        }
                                                                                        dialog.close();
                                                                                    }
                                                                                }),
                                                                                new sap.m.Button("", {
                                                                                    text: ibas.i18n.prop("shell_exit"),
                                                                                    type: sap.m.ButtonType.Transparent,
                                                                                    press(): void {
                                                                                        dialog.close();
                                                                                    }
                                                                                }),
                                                                            ]
                                                                        }).addStyleClass("sapUiNoContentPadding");
                                                                        dialog.open();
                                                                    }
                                                                },
                                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_invoicetelephone") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "invoiceTelephone",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        }),
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_dataowner") }),
                                                    new sap.extension.m.DataOwnerInput("", {
                                                        showValueHelp: true,
                                                        organization: {
                                                            path: "organization",
                                                            type: new sap.extension.data.Alphanumeric({
                                                                maxLength: 8
                                                            })
                                                        }
                                                    }).bindProperty("bindingValue", {
                                                        path: "dataOwner",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_organization") }),
                                                    new sap.extension.m.OrganizationInput("", {
                                                        showValueHelp: true,
                                                    }).bindProperty("bindingValue", {
                                                        path: "organization",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_remarks") }),
                                                    new sap.extension.m.TextArea("", {
                                                        rows: 3,
                                                    }).bindProperty("bindingValue", {
                                                        path: "remarks",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent")
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;

                /** 显示数据 */
                showSupplier(data: bo.Supplier): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
            }
        }
    }
}

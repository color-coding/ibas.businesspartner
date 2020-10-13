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
            /**
             * 编辑视图-业务伙伴地址
             */
            export class AddressEditView extends ibas.BOEditView implements app.IAddressEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /*** 选择业务伙伴事件 */
                chooseBusinessPartnerEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_ownertype") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emBusinessPartnerType
                            }).bindProperty("bindingValue", {
                                path: "ownerType",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emBusinessPartnerType
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_businesspartner") }),
                            new sap.m.FlexBox("", {
                                items: [
                                    // 客户
                                    new sap.extension.m.RepositoryInput("", {
                                        showValueHelp: true,
                                        width: "100%",
                                        layoutData: new sap.m.FlexItemData("", {
                                            growFactor: 1,
                                        }),
                                        repository: bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: bo.Customer,
                                            key: bo.Customer.PROPERTY_CODE_NAME,
                                            text: bo.Customer.PROPERTY_NAME_NAME
                                        },
                                        valueHelpRequest: function (): void {
                                            that.fireViewEvents(that.chooseBusinessPartnerEvent);
                                        }
                                    }).bindProperty("visible", {
                                        path: "ownerType",
                                        formatter(data: any): any {
                                            if (data === bo.emBusinessPartnerType.CUSTOMER) {
                                                return true;
                                            } else if (data === bo.emBusinessPartnerType.SUPPLIER) {
                                                return false;
                                            }
                                            return false;
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartner",
                                        type: new sap.extension.data.Alphanumeric()
                                    }),
                                    // 供应商
                                    new sap.extension.m.RepositoryInput("", {
                                        showValueHelp: true,
                                        width: "100%",
                                        layoutData: new sap.m.FlexItemData("", {
                                            growFactor: 1,
                                        }),
                                        repository: bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: bo.Supplier,
                                            key: bo.Customer.PROPERTY_CODE_NAME,
                                            text: bo.Customer.PROPERTY_NAME_NAME
                                        },
                                        valueHelpRequest: function (): void {
                                            that.fireViewEvents(that.chooseBusinessPartnerEvent);
                                        }
                                    }).bindProperty("visible", {
                                        path: "ownerType",
                                        formatter(data: any): any {
                                            if (data === bo.emBusinessPartnerType.CUSTOMER) {
                                                return false;
                                            } else if (data === bo.emBusinessPartnerType.SUPPLIER) {
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
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 30
                                })
                            }),
                            new sap.extension.m.CheckBox("", {
                                text: ibas.i18n.prop("bo_address_activated"),
                            }).bindProperty("bindingValue", {
                                path: "activated",
                                type: new sap.extension.data.YesNo()
                            }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("bo_address_country") +
                                    "/" + ibas.i18n.prop("bo_address_province") +
                                    "/" + ibas.i18n.prop("bo_address_city") +
                                    "/" + ibas.i18n.prop("bo_address_district")
                            }),
                            new sap.extension.m.AddressArea("", {
                                countryVisible: true,
                                zipCodeVisible: true,
                            }).bindProperty("country", {
                                path: "country",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("province", {
                                path: "province",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("city", {
                                path: "city",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("district", {
                                path: "district",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("street", {
                                path: "street",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }).bindProperty("zipCode", {
                                path: "zipCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 10
                                })
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_contact") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_contacts") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "contacts",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 60
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_mobilephone") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "mobilePhone",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_telephone1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "telephone1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_telephone2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "telephone2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_remark1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "remark1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_address_remark2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "remark2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.Address.BUSINESS_OBJECT_CODE,
                        },
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_new"),
                                                icon: "sap-icon://create",
                                                press: function (): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press: function (): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                            ]
                        }),
                        content: [
                            formTop,
                        ]
                    });
                }
                private page: sap.extension.m.Page;

                /** 显示数据 */
                showAddress(data: bo.Address): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
            }
        }
    }
}
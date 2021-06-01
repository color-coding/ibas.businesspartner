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
            /** 编辑视图-业务伙伴地址 */
            export class AddressEditView extends ibas.BOEditView implements app.IAddressEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;

                chooseBusinessPartnerEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Address.BUSINESS_OBJECT_CODE,
                        },
                        showFooter: false,
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: {
                                path: "contacts",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            actions: [
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    hideText: true,
                                    importance: sap.uxap.Importance.High,
                                    press(): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
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
                            ],
                        }).addStyleClass("sapUiNoContentPadding"),
                        headerContent: [
                            new sap.extension.m.ObjectYesNoStatus("", {
                                title: ibas.i18n.prop("bo_address_activated"),
                                negative: false,
                                text: {
                                    path: "activated",
                                    type: new sap.extension.data.YesNo(true),
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
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_address_dataowner") }),
                                                    new sap.extension.m.DataOwnerInput("", {
                                                        showValueHelp: true,
                                                    }).bindProperty("bindingValue", {
                                                        path: "dataOwner",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_address_remark1") }),
                                                    new sap.extension.m.TextArea("", {
                                                        rows: 2
                                                    }).bindProperty("bindingValue", {
                                                        path: "remark1",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_address_remark2") }),
                                                    new sap.extension.m.TextArea("", {
                                                        rows: 2
                                                    }).bindProperty("bindingValue", {
                                                        path: "remark2",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        })
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
                showAddress(data: bo.Address): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
            }
        }
    }
}

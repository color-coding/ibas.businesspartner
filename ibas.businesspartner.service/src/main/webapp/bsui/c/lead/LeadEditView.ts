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
            /** 编辑视图-潜在客户 */
            export class LeadEditView extends ibas.BOEditView implements app.ILeadEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /*** 选择潜在客户组事件*/
                chooseLeadGroupEvent: Function;
                /** 选择潜在客户联系人事件 */
                chooseLeadContactPersonEvent: Function;
                /** 选择潜在客户送货地址事件 */
                chooseLeadShipAddressEvent: Function;
                /** 选择潜在客户账单地址事件 */
                chooseLeadBillAddressEvent: Function;
                /** 选择潜在客户注册地址事件 */
                chooseLeadRegistrationAddress: Function;
                /** 选择潜在客户价格清单事件 */
                chooseLeadPriceListEvent: Function;
                /** 选择潜在客户底价清单事件 */
                chooseLeadFloorListEvent: Function;
                /** 选择潜在客户仓库事件 */
                chooseLeadWarehouseEvent: Function;
                /** 创建联系人 */
                createContactPersonEvent: Function;
                /** 创建地址 */
                createAddressEvent: Function;
                /** 转为客户 */
                turnToCustomerEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_code") }),
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
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_sign") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "sign",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 60
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_activated") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "activated",
                                type: new sap.extension.data.YesNo()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_group") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: bo.BusinessPartnerGroup,
                                    key: bo.BusinessPartnerGroup.PROPERTY_CODE_NAME,
                                    text: bo.BusinessPartnerGroup.PROPERTY_NAME_NAME
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseLeadGroupEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "group",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_companyprivate") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: bo.emBusinessPartnerNature
                            }).bindProperty("bindingValue", {
                                path: "companyPrivate",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emBusinessPartnerNature
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_pricelist") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: materials.bo.BORepositoryMaterials,
                                dataInfo: {
                                    type: materials.bo.MaterialPriceList,
                                    key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                    text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseLeadPriceListEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "priceList",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_floorlist") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: materials.bo.BORepositoryMaterials,
                                dataInfo: {
                                    type: materials.bo.MaterialPriceList,
                                    key: materials.bo.MaterialPriceList.PROPERTY_OBJECTKEY_NAME,
                                    text: materials.bo.MaterialPriceList.PROPERTY_NAME_NAME
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseLeadFloorListEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "floorList",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_currency") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "currency",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 5
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_taxgroup") }),
                            new sap.extension.m.SelectionInput("", {
                                showValueHelp: true,
                                repository: accounting.bo.BORepositoryAccounting,
                                dataInfo: {
                                    type: accounting.bo.TaxGroup,
                                    key: accounting.bo.TaxGroup.PROPERTY_CODE_NAME,
                                    text: accounting.bo.TaxGroup.PROPERTY_NAME_NAME,
                                },
                                criteria: [
                                    new ibas.Condition(accounting.bo.TaxGroup.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                                    new ibas.Condition(accounting.bo.TaxGroup.PROPERTY_CATEGORY_NAME, ibas.emConditionOperation.EQUAL, accounting.bo.emTaxGroupCategory.OUTPUT)

                                ]
                            }).bindProperty("bindingValue", {
                                path: "taxGroup",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_validdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "validDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_invaliddate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "invalidDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_contact") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_contactperson") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: bo.ContactPerson,
                                    key: bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                    text: bo.ContactPerson.PROPERTY_NAME_NAME
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseLeadContactPersonEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "contactPerson",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_registrationaddress") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: bo.Address,
                                    key: bo.Address.PROPERTY_OBJECTKEY_NAME,
                                    text: bo.Address.PROPERTY_NAME_NAME,
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseLeadRegistrationAddress);
                                },
                            }).bindProperty("bindingValue", {
                                path: "registrationAddress",
                                type: new sap.extension.data.Numeric(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_telephone1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "telephone1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_telephone2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "telephone2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_mobilephone") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "mobilePhone",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 50
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_faxnumber") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "faxNumber",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_channel") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "channel",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_organizationalunit") }),
                            new sap.extension.m.DataOrganizationInput("", {
                                showValueHelp: true,
                                chooseType: ibas.emChooseType.SINGLE,
                            }).bindProperty("bindingValue", {
                                path: "organizationalUnit",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_others") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_dataowner") }),
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
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_organization") }),
                            new sap.extension.m.OrganizationInput("", {
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "organization",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_lead_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "remarks",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.ui.core.Title("", {}),
                        ],
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.Lead.BUSINESS_OBJECT_CODE,
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
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.i18n.prop("shell_data_new") + ibas.i18n.prop("businesspartner_title_contact"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add-coursebook",
                                    buttonMode: sap.m.MenuButtonMode.Regular,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_address"),
                                                icon: "sap-icon://contacts",
                                                press: function (event: any): void {
                                                    that.fireViewEvents(that.createAddressEvent, true);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_contactperson"),
                                                icon: "sap-icon://customer-briefing",
                                                press: function (event: any): void {
                                                    that.fireViewEvents(that.createContactPersonEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("businesspartner_turn_to_customer"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://duplicate",
                                    press(): void {
                                        that.fireViewEvents(that.turnToCustomerEvent);
                                    }
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
                showLead(data: bo.Lead): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
            }
        }
    }
}

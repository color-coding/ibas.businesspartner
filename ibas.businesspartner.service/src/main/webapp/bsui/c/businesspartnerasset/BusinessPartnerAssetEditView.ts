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
            /** 编辑视图-业务伙伴资产 */
            export class BusinessPartnerAssetEditView extends ibas.BOEditView implements app.IBusinessPartnerAssetEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /*** 选择业务伙伴事件 */
                chooseBusinessPartnerEvent: Function;
                /*** 选择资产项目事件 */
                chooseAssetItemEvent: Function;
                /** 查看数据交易记录 */
                viewDataJournalEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_code") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 36
                                })
                            }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                tooltip: ibas.i18n.prop("bo_businesspartnerasset_assetcode"),
                                repository: bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: bo.AssetItem,
                                    key: bo.AssetItem.PROPERTY_CODE_NAME,
                                    text: bo.AssetItem.PROPERTY_NAME_NAME
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseAssetItemEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "assetCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_businesspartnercode") }),
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
                                    new sap.extension.m.RepositoryInput("", {
                                        showValueHelp: true,
                                        width: "100%",
                                        layoutData: new sap.m.FlexItemData("", {
                                            growFactor: 1,
                                        }),
                                        repository: bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: bo.Supplier,
                                            key: bo.Supplier.PROPERTY_CODE_NAME,
                                            text: bo.Supplier.PROPERTY_NAME_NAME
                                        },
                                        valueHelpRequest: function (): void {
                                            that.fireViewEvents(that.chooseBusinessPartnerEvent);
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
                                ]
                            }),
                            new sap.extension.m.EnumSelect("", {
                                items: [
                                    new sap.extension.m.SelectItem("", {
                                        key: bo.emBusinessPartnerType.CUSTOMER,
                                        text: ibas.enums.describe(bo.emBusinessPartnerType, bo.emBusinessPartnerType.CUSTOMER)
                                    }),
                                    new sap.extension.m.SelectItem("", {
                                        key: bo.emBusinessPartnerType.SUPPLIER,
                                        text: ibas.enums.describe(bo.emBusinessPartnerType, bo.emBusinessPartnerType.SUPPLIER)
                                    })
                                ]
                                // enumType: bo.emBusinessPartnerType
                            }).bindProperty("bindingValue", {
                                path: "businessPartnerType",
                                type: new sap.extension.data.Enum({
                                    enumType: bo.emBusinessPartnerType
                                })
                            }),
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_activated") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "activated",
                                type: new sap.extension.data.YesNo()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_validdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "validDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_invaliddate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "invalidDate",
                                type: new sap.extension.data.Date()
                            }),
                        ],
                    });
                    let formMiddle: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.IconTabBar("", {
                                headerBackgroundDesign: sap.m.BackgroundDesign.Transparent,
                                backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                expandable: false,
                                items: [
                                    new sap.m.IconTabFilter("", {
                                        text: ibas.i18n.prop("businesspartner_title_general"),
                                        content: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                content: [
                                                    new sap.m.Toolbar("", { visible: false }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_amount") }),
                                                    new sap.extension.m.Input("", {

                                                    }).bindProperty("bindingValue", {
                                                        path: "amount",
                                                        type: new sap.extension.data.Sum()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_times") }),
                                                    new sap.extension.m.Input("", {

                                                    }).bindProperty("bindingValue", {
                                                        path: "times",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_acquireddate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "acquiredDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                    new sap.m.Toolbar("", { visible: false }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_basedocument") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                        showValueLink: true,
                                                        valueLinkRequest: function (event: sap.ui.base.Event): void {
                                                            let data: any = this.getBindingContext().getObject();
                                                            if (data instanceof bo.BusinessPartnerAsset && data.baseDocumentEntry > 0) {
                                                                ibas.servicesManager.runLinkService({
                                                                    boCode: data.baseDocumentType,
                                                                    linkValue: data.baseDocumentEntry.toString()
                                                                });
                                                            }
                                                        }
                                                    }).bindProperty("bindingValue", {
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
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_tradingamount") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "tradingAmount",
                                                        type: new sap.extension.data.Sum()
                                                    }),
                                                    new sap.m.Input("", {
                                                        type: sap.m.InputType.Text,
                                                        editable: false,
                                                    }).bindProperty("value", {
                                                        path: "tradingCurrency"
                                                    }),
                                                ]
                                            })
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_dataowner") }),
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
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_organization") }),
                            new sap.extension.m.OrganizationInput("", {
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "organization",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_remark1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "remark1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_remark2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "remark2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                            new sap.m.Toolbar("", { visible: false }),
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.BusinessPartnerAsset.BUSINESS_OBJECT_CODE,
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
                            formMiddle,
                            formBottom,
                        ]
                    });
                }
                private page: sap.extension.m.Page;
                /** 显示数据 */
                showBusinessPartnerAsset(data: bo.BusinessPartnerAsset): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
            }
        }
    }
}

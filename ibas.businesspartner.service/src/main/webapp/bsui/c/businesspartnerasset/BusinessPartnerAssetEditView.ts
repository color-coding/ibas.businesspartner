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
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_code") }),
                            new sap.m.Input("", {
                                editable: false,
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "code"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_name") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "name"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_businesspartnertype") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(bo.emBusinessPartnerType)
                            }).bindProperty("selectedKey", {
                                path: "businessPartnerType",
                                type: "sap.ui.model.type.Integer"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_businesspartnercode") }),
                            new sap.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseBusinessPartnerEvent);
                                }
                            }).bindProperty("value", {
                                path: "businessPartnerCode"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_assetcode") }),
                            new sap.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseAssetItemEvent);
                                }
                            }).bindProperty("value", {
                                path: "assetCode"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_amount") }),
                            new sap.m.Input("", {
                                editable: false,
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "amount",
                                type: new openui5.datatype.Sum(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_times") }),
                            new sap.m.Input("", {
                                editable: false,
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "times"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_activated") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emYesNo)
                            }).bindProperty("selectedKey", {
                                path: "activated",
                                type: "sap.ui.model.type.Integer"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_acquireddate") }),
                            new sap.m.DatePicker("", {
                                editable: false,
                                valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                                displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                            }).bindProperty("dateValue", {
                                path: "acquiredDate"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_validdate") }),
                            new sap.m.DatePicker("", {
                                valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                                displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                            }).bindProperty("dateValue", {
                                path: "validDate"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_invaliddate") }),
                            new sap.m.DatePicker("", {
                                valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                                displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                            }).bindProperty("dateValue", {
                                path: "invalidDate"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_remark1") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "remark1"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_remark2") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "remark2"
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_others") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_basedocumenttype") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text,
                                editable: false,
                            }).bindProperty("value", {
                                path: "baseDocumentType"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_basedocumententry") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text,
                                editable: false,
                            }).bindProperty("value", {
                                path: "baseDocumentEntry"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_basedocumentlineid") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text,
                                editable: false,
                            }).bindProperty("value", {
                                path: "baseDocumentLineId"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerasset_tradingamount") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text,
                                editable: false,
                            }).bindProperty("value", {
                                path: "tradingAmount",
                                type: new openui5.datatype.Sum(),
                            }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text,
                                editable: false,
                            }).bindProperty("value", {
                                path: "tradingCurrency"
                            }),
                        ]
                    });
                    this.layoutMain = new sap.ui.layout.VerticalLayout("", {
                        width: "100%",
                        content: [
                            formTop,
                        ]
                    });
                    this.page = new sap.m.Page("", {
                        showHeader: false,
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
                        content: [this.layoutMain]
                    });
                    return this.page;
                }

                private page: sap.m.Page;
                private layoutMain: sap.ui.layout.VerticalLayout;

                /** 改变视图状态 */
                private changeViewStatus(data: bo.BusinessPartnerAsset): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    // 新建时：禁用删除，
                    if (data.isNew) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), true);
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                    } else {

                    }
                }

                /** 显示数据 */
                showBusinessPartnerAsset(data: bo.BusinessPartnerAsset): void {
                    this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
                    this.layoutMain.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.layoutMain, data);
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
            }
        }
    }
}

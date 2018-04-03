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
            /** 编辑视图-业务伙伴资产日记账 */
            export class BusinessPartnerAssetJournalEditView extends ibas.BODialogView implements app.IBusinessPartnerAssetJournalEditView {
                /** 保存数据事件 */
                saveDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.layoutMain = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerassetjournal_servicecode") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text,
                                editable: false,
                            }).bindProperty("value", {
                                path: "serviceCode"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerassetjournal_direction") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emDirection)
                            }).bindProperty("selectedKey", {
                                path: "direction",
                                type: "sap.ui.model.type.Integer"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerassetjournal_amount") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "amount"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerassetjournal_times") }),
                            new sap.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("value", {
                                path: "times"
                            }),
                        ]
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretchOnPhone: true,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [this.layoutMain],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://save",
                                press: function (): void {
                                    that.fireViewEvents(that.saveDataEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://inspect-down",
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ]
                    });
                }
                private layoutMain: sap.ui.layout.form.SimpleForm;
                /** 显示数据 */
                showBusinessPartnerAssetJournal(data: bo.BusinessPartnerAssetJournal): void {
                    this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
                    this.layoutMain.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.layoutMain, data);
                }
            }
        }
    }
}

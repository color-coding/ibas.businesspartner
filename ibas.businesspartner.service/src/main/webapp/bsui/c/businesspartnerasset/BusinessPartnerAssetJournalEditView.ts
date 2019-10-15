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
            export class BusinessPartnerAssetJournalEditView extends ibas.DialogView implements app.IBusinessPartnerAssetJournalEditView {
                /** 保存数据事件 */
                saveDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.formTop = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerassetjournal_servicecode") }),
                            new sap.extension.m.RepositoryInput("", {
                                editable: false,
                                repository: bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: bo.BusinessPartnerAsset,
                                    key: bo.BusinessPartnerAsset.PROPERTY_CODE_NAME,
                                    text: bo.BusinessPartnerAsset.PROPERTY_NAME_NAME
                                },
                            }).bindProperty("bindingValue", {
                                path: "serviceCode",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 36
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerassetjournal_direction") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emDirection
                            }).bindProperty("bindingValue", {
                                path: "direction",
                                type: new sap.extension.data.Direction()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerassetjournal_amount") }),
                            new sap.extension.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("bindingValue", {
                                path: "amount",
                                type: new sap.extension.data.Sum()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerassetjournal_times") }),
                            new sap.extension.m.Input("", {
                                type: sap.m.InputType.Number
                            }).bindProperty("bindingValue", {
                                path: "times",
                                type: new sap.extension.data.Numeric()
                            }),
                        ]
                    });
                    return new sap.extension.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            this.formTop
                        ],
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
                private formTop: sap.ui.layout.form.SimpleForm;
                /** 显示数据 */
                showBusinessPartnerAssetJournal(data: bo.BusinessPartnerAssetJournal): void {
                    this.formTop.bindObject("/");
                    this.formTop.setModel(new sap.ui.model.json.JSONModel(data));
                }
            }
        }
    }
}

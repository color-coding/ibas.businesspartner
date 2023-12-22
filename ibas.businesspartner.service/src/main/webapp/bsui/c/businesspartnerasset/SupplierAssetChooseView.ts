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
            /** 选择视图-供应商资产 */
            export class SupplierAssetChooseView extends ibas.BOChooseView implements app.ISupplierAssetChooseView {
                /** 选择数据事件，参数：选择数据 */
                chooseDataEvent: Function;
                /** 查询数据事件，参数：查询条件 Criteria */
                fetchDataEvent: Function;
                /** 新建数据事件 */
                newDataEvent: Function;
                /** 选择类型 */
                chooseType: ibas.emChooseType;
                /** 视图模式 */
                mode: ibas.emViewMode;
                queryId: string;
                queryPanel(): ibas.IQueryPanel {
                    return undefined;
                }
                query(criteria: ibas.ICriteria): void {
                    this.fireViewEvents(this.fetchDataEvent, criteria);
                }
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.list = new sap.extension.m.List("", {
                        chooseType: this.chooseType,
                        mode: sap.m.ListMode.SingleSelect,
                        items: {
                            path: "/rows",
                            template: new sap.m.StandardListItem("", {
                                avatar: new sap.m.Avatar("", {
                                    displayShape: sap.m.AvatarShape.Circle,
                                    backgroundColor: sap.m.AvatarColor.Random,
                                    src: {
                                        path: "picture",
                                        type: new sap.extension.data.Alphanumeric(),
                                        formatter(data: string): string {
                                            return data ? data : "sap-icon://lead";
                                        }
                                    },
                                }),
                                title: {
                                    path: "name",
                                    type: new sap.extension.data.Alphanumeric(),
                                },
                                description: {
                                    parts: [
                                        {
                                            path: "amount",
                                            type: new sap.extension.data.Sum(),
                                        },
                                        {
                                            path: "unit",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    ]
                                },
                            })
                        }
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            this.list
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_choose"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.chooseDataEvent, that.list.getSelecteds().firstOrDefault());
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ],
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private list: sap.extension.m.List;
                /** 显示数据 */
                showData(datas: bo.SupplierAsset[]): void {
                    this.list.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}

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
            /** 列表视图-业务伙伴资产日记账 */
            export class BusinessPartnerAssetJournalListView extends ibas.BOQueryViewWithPanel implements app.IBusinessPartnerAssetJournalListView {
                /** 返回查询的对象 */
                get queryTarget(): any {
                    return bo.BusinessPartnerAsset;
                }
                /** 新建数据 */
                newDataEvent: Function;
                /** 编辑数据，参数：目标数据 */
                editDataEvent: Function;
                /** 显示数据，参数：目标数据 */
                viewDataEvent: Function;
                /** 新建业务伙伴资产数据 */
                createBusinessPartnerAssetJournalEvent: Function;
                /** 查询业务伙伴资产交易记录 */
                fetchBusinessPartnerAssetJournalEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tableAsset = new sap.extension.m.List("", {
                        chooseType: ibas.emChooseType.SINGLE,
                        growingThreshold: sap.extension.table.visibleRowCount(15),
                        mode: sap.m.ListMode.SingleSelectMaster,
                        items: {
                            path: "/rows",
                            template: new sap.m.ObjectListItem("", {
                                title: "{name}",
                                number: "{times} | {amount}",
                                markers: new sap.m.ObjectMarker("", {
                                    type: {
                                        path: "activated",
                                        formatter(data: any): any {
                                            if (data === ibas.emYesNo.NO) {
                                                return sap.m.ObjectMarkerType.Locked;
                                            } else {
                                                return null;
                                            }
                                        }
                                    }
                                }),
                                attributes: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_businesspartnerasset_businesspartnercode")
                                            + ibas.i18n.prop("bo_businesspartnerasset_code"),
                                        bindingValue: {
                                            path: "businessPartnerCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new component.BusinessPartnerAttribute("", {
                                        title: ibas.i18n.prop("bo_businesspartnerasset_businesspartnercode")
                                            + ibas.i18n.prop("bo_businesspartnerasset_name"),
                                        bindingValue: {
                                            path: "businessPartnerCode",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        typeProperty: "businessPartnerType",
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_businesspartnerasset_code"),
                                        customContent: new sap.m.Text("", {
                                            wrapping: false,
                                            text: {
                                                path: "code",
                                                type: new sap.extension.data.Alphanumeric(),
                                            }
                                        })
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_businesspartnerasset_validdate"),
                                        bindingValue: {
                                            path: "validDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_businesspartnerasset_invaliddate"),
                                        bindingValue: {
                                            path: "invalidDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                ]
                            })
                        },
                        nextDataSet(event: sap.ui.base.Event): void {
                            // 查询下一个数据集
                            let data: any = event.getParameter("data");
                            if (ibas.objects.isNull(data)) {
                                return;
                            }
                            if (ibas.objects.isNull(that.lastCriteria)) {
                                return;
                            }
                            let criteria: ibas.ICriteria = that.lastCriteria.next(data);
                            if (ibas.objects.isNull(criteria)) {
                                return;
                            }
                            ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                            that.fireViewEvents(that.fetchDataEvent, criteria);
                        }
                    });
                    this.pageAsset = new sap.m.Page("", {
                        showHeader: false,
                        floatingFooter: true,
                        footer: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.ToolbarSpacer(""),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("businesspartner_new_businesspartnerassetjournal"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://create",
                                    press: function (): void {
                                        that.fireViewEvents(
                                            that.createBusinessPartnerAssetJournalEvent, that.tableAsset.getSelecteds().firstOrDefault());
                                    }
                                }),
                            ]
                        }),
                        content: [this.tableAsset]
                    });
                    this.tableAssetJournal = new sap.extension.table.Table("", {
                        enableSelectAll: false,
                        visibleRowCount: sap.extension.table.visibleRowCount(15),
                        visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Interactive,
                        rows: "{/rows}",
                        columns: [
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_businesspartnerassetjournal_basedocumenttype"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("text", {
                                    path: "baseDocumentType",
                                    formatter(data: any): any {
                                        return ibas.businessobjects.describe(data);
                                    }
                                }),
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_businesspartnerassetjournal_basedocumententry"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("text", {
                                    path: "baseDocumentEntry",
                                }),
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_businesspartnerassetjournal_basedocumentlineid"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("text", {
                                    path: "baseDocumentLineId",
                                })
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_businesspartnerassetjournal_direction"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("text", {
                                    path: "direction",
                                    type: new sap.extension.data.Direction(true)
                                })
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_businesspartnerassetjournal_amount"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("text", {
                                    path: "amount",
                                    type: new sap.extension.data.Sum(),
                                })
                            }),
                            new sap.extension.table.Column("", {
                                label: ibas.i18n.prop("bo_businesspartnerassetjournal_times"),
                                template: new sap.extension.m.Text("", {
                                }).bindProperty("text", {
                                    path: "times",
                                    type: new sap.extension.data.Numeric(),
                                })
                            }),
                        ],
                        nextDataSet(event: sap.ui.base.Event): void {
                            // 查询下一个数据集
                            let data: any = event.getParameter("data");
                            if (ibas.objects.isNull(data)) {
                                return;
                            }
                            if (ibas.objects.isNull(that.lastJournalCriteria)) {
                                return;
                            }
                            let criteria: ibas.ICriteria = that.lastJournalCriteria.next(data);
                            if (ibas.objects.isNull(criteria)) {
                                return;
                            }
                            ibas.logger.log(ibas.emMessageLevel.DEBUG, "result: {0}", criteria.toString());
                            that.fireViewEvents(that.fetchBusinessPartnerAssetJournalEvent, criteria);
                        }
                    });
                    this.searchAssetJournal = new sap.m.SearchField("", {
                        search(): void {
                            let asset: bo.BusinessPartnerAsset = that.tableAsset.getSelecteds<bo.BusinessPartnerAsset>().firstOrDefault();
                            if (ibas.objects.isNull(asset)) {
                                that.application.viewShower.messages({
                                    title: that.application.description,
                                    message: ibas.i18n.prop("shell_please_chooose_data", ibas.i18n.prop("bo_businesspartnerasset")),
                                    type: ibas.emMessageType.WARNING
                                });
                                return;
                            }
                            let condition: ibas.ICondition;
                            let criteria: ibas.ICriteria = that.getAssetJournalCriteria().clone();
                            let search: string = that.searchAssetJournal.getValue();
                            if (!ibas.strings.isEmpty(search)) {
                                for (let item of criteria.conditions) {
                                    if (ibas.strings.isEmpty(item.alias)) {
                                        item.value = search;
                                    }
                                }
                            }
                            condition = criteria.conditions.create();
                            condition.alias = bo.BusinessPartnerAssetJournal.PROPERTY_SERVICECODE_NAME;
                            condition.operation = ibas.emConditionOperation.EQUAL;
                            condition.value = asset.code;
                            that.fireViewEvents(that.fetchBusinessPartnerAssetJournalEvent, criteria);
                            that.lastJournalCriteria = criteria;
                            that.tableAssetJournal.setFirstVisibleRow(0);
                            that.tableAssetJournal.setModel(null);
                        }
                    });
                    this.pageAssetJournal = new sap.m.Page("", {
                        showHeader: true,
                        customHeader: new sap.m.Toolbar("", {
                            content: [
                                this.searchAssetJournal,
                                new sap.m.Button("", {
                                    icon: "sap-icon://filter",
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (): void {
                                        ibas.servicesManager.runApplicationService<ibas.ICriteriaEditorServiceContract, ibas.ICriteria>({
                                            proxy: new ibas.CriteriaEditorServiceProxy({
                                                target: bo.BusinessPartnerAssetJournal,
                                                criteria: that.getAssetJournalCriteria(),
                                            }),
                                            onCompleted(result: ibas.ICriteria): void {
                                                that.journalCriteria = result;
                                            }
                                        });
                                    }
                                }),
                            ]
                        }),
                        content: [
                            this.tableAssetJournal
                        ]
                    });
                    return new sap.m.SplitContainer("", {
                        masterPages: [
                            this.pageAsset,
                        ],
                        detailPages: [
                            this.pageAssetJournal
                        ],
                    });
                }
                /** 嵌入查询面板 */
                embedded(view: any): void {
                    if (view instanceof sap.m.Toolbar) {
                        view.setDesign(sap.m.ToolbarDesign.Transparent);
                        view.setStyle(sap.m.ToolbarStyle.Clear);
                        view.setHeight("100%");
                    }
                    this.pageAsset.addHeaderContent(view);
                    this.pageAsset.setShowHeader(true);
                }
                private pageAsset: sap.m.Page;
                private tableAsset: sap.extension.m.List;

                /** 显示业务伙伴资产数据 */
                showBusinessPartnerAssets(datas: bo.BusinessPartnerAsset[]): void {
                    let model: sap.ui.model.Model = this.tableAsset.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        this.tableAsset.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.tableAsset.setBusy(false);
                }
                /** 记录上次查询条件，表格滚动时自动触发 */
                query(criteria: ibas.ICriteria): void {
                    super.query(criteria);
                    // 清除历史数据
                    if (this.isDisplayed) {
                        this.tableAsset.setBusy(true);
                        this.tableAsset.setModel(null);
                    }
                }
                private pageAssetJournal: sap.m.Page;
                private searchAssetJournal: sap.m.SearchField;
                private tableAssetJournal: sap.ui.table.Table;
                /** 上一次使用的价格查询 */
                private lastJournalCriteria: ibas.ICriteria;
                /** 基础价格查询 */
                private journalCriteria: ibas.ICriteria;
                private getAssetJournalCriteria(): ibas.ICriteria {
                    if (!ibas.objects.isNull(this.journalCriteria)) {
                        return this.journalCriteria;
                    }
                    let condition: ibas.ICondition;
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    criteria.result = ibas.config.get(ibas.CONFIG_ITEM_CRITERIA_RESULT_COUNT, 30);
                    let sort: ibas.ISort = criteria.sorts.create();
                    sort.alias = bo.BusinessPartnerAssetJournal.PROPERTY_OBJECTKEY_NAME;
                    sort.sortType = ibas.emSortType.DESCENDING;
                    this.journalCriteria = criteria;
                    return this.journalCriteria;
                }
                /** 显示业务伙伴资产交易数据 */
                showBusinessPartnerAssetJournals(datas: bo.BusinessPartnerAssetJournal[]): void {
                    let model: sap.ui.model.Model = this.tableAssetJournal.getModel();
                    if (model instanceof sap.extension.model.JSONModel) {
                        // 已绑定过数据
                        model.addData(datas);
                    } else {
                        // 未绑定过数据
                        this.tableAssetJournal.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                    }
                    this.tableAssetJournal.setBusy(false);
                }
            }
        }
    }
}

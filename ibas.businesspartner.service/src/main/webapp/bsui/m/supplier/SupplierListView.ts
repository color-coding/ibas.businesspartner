/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { ISupplierListView } from "../../../bsapp/supplier/index";
export class SupplierListView extends ibas.BOListView implements ISupplierListView {
    /** 返回查询的对象 */
    get queryTarget(): any {
        return bo.Supplier;
    }
    /** 编辑数据，参数：目标数据 */
    editDataEvent: Function;
    /** 删除数据事件，参数：删除对象集合 */
    deleteDataEvent: Function;
    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.list = new sap.m.List("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.None,
            selectionMode: sap.ui.table.SelectionMode.None,
            swipeContent: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_view"),
                        type: sap.m.ButtonType.Accept,
                        icon: "sap-icon://display",
                        press: function (oEvent:any): void {
                            let parentControl:any = oEvent.getSource().getParent().getParent();
                            that.fireViewEvents(that.viewDataEvent,
                                  parentControl.getSwipedItem().getBindingContext().getObject()
                            );
                            parentControl.swipeOut();
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_edit"),
                        type: sap.m.ButtonType.Accept,
                        icon: "sap-icon://edit",
                        press: function (oEvent:any): void {
                            let parentControl:any = oEvent.getSource().getParent().getParent();
                            that.fireViewEvents(that.editDataEvent,
                                  parentControl.getSwipedItem().getBindingContext().getObject()
                            );
                            parentControl.swipeOut();
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Reject,
                        icon: "sap-icon://delete",
                        press: function (oEvent:any): void {
                             let parentControl:any = oEvent.getSource().getParent().getParent();
                             that.fireViewEvents(that.deleteDataEvent,
                                  parentControl.getSwipedItem().getBindingContext().getObject()
                            );
                            parentControl.swipeOut();
                        }
                    }),
                ],
            }),
            itemPress: function (oEvent:any): void {
                var oItem:any = oEvent.getParameter("listItem");
                that.fireViewEvents(that.viewDataEvent,
                    oItem.getBindingContext().getObject()
                );
            },
        });
        let list_item_object: sap.m.ObjectListItem = new sap.m.ObjectListItem("", {
            title: "{name} ",
            type: sap.m.ListType.Active,
            numberUnit:"{code}",
            attributes: [
                 new sap.m.ObjectAttribute("", {
                }).bindProperty("text", {
                    path: "code",
                    formatter(data: any): any {
                        return ibas.i18n.prop("bo_supplier_code")+":"+data;
                    }
                }),
                new sap.m.ObjectAttribute("", {
                }).bindProperty("text", {
                    path: "Telephone1",
                    formatter(data: any): any {
                        return ibas.i18n.prop("bo_supplier_telephone1")+":"+data;
                    }
                }),
            ],
        });
        this.list.bindItems({
            path: "/rows",
            template: list_item_object,
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        press: function (): void {
                            that.fireViewEvents(that.newDataEvent);
                        }
                    }),
                    new sap.m.ToolbarSpacer(""),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.Button("", {
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://action",
                        press: function (event: any): void {
                            that.fireViewEvents(that.callServicesEvent, {
                                displayServices(services: ibas.IServiceAgent[]): void {
                                    if (ibas.objects.isNull(services) || services.length === 0) {
                                        return;
                                    }
                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                        showHeader: false,
                                        placement: sap.m.PlacementType.Bottom,
                                    });
                                    for (let service of services) {
                                        popover.addContent(new sap.m.Button({
                                            text: ibas.i18n.prop(service.name),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: service.icon,
                                            press: function (): void {
                                                service.run();
                                                popover.close();
                                            }
                                        }));
                                    }
                                    (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                    popover.openBy(event.getSource(), true);
                                }
                            });
                        }
                    })
                ],

            }),
            content: [this.list]
        });
        this.id = this.page.getId();
        openui5.utils.triggerNextResults({
            listener: this.list,
            next(data: any): void {
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
        return this.page;
    }
    /** 嵌入查询面板 */
    embedded(view: any): void {
        this.page.addHeaderContent(view);
        this.page.setShowHeader(true);
    }
    private page: sap.m.Page;
    private form: sap.ui.layout.VerticalLayout;
    private list: sap.m.List;
    /** 显示数据 */
    showData(datas: bo.Supplier[]): void {
        let done: boolean = false;
        let model: sap.ui.model.Model = this.list.getModel(undefined);
        if (!ibas.objects.isNull(model)) {
            // 已存在绑定数据，添加新的
            let hDatas: bo.Supplier[] = (<any>model).getData();
            if (!ibas.objects.isNull(hDatas) && hDatas instanceof Array) {
                for (let item of datas) {
                    hDatas.push(item);
                }
                model.refresh(false);
                done = true;
            }
        }
        if (!done) {
            // 没有显示数据
            this.list.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
        }
        this.list.setBusy(false);
    }

    /** 记录上次查询条件，表格滚动时自动触发 */
    query(criteria: ibas.ICriteria): void {
        super.query(criteria);

        // 清除历史数据
        this.list.setBusy(true);
        this.list.setSelectedItemById("0", true);
        this.list.setModel(null);
    }
    /** 获取选择的数据 */
    getSelecteds(): bo.Supplier[] {
        return null;
    }
}

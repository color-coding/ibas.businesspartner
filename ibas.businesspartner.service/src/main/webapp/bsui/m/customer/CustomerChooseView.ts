/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { utils } from "openui5/typings/ibas.utils";
import * as bo from "../../../borep/bo/index";
import { ICustomerChooseView } from "../../../bsapp/customer/index";
export class CustomerChooseView extends ibas.BOChooseView implements ICustomerChooseView {
    /** 返回查询的对象 */
    get queryTarget(): any {
        return bo.Customer;
    }
    /** 绘制工具条 */
    darwBars(): any {
        let that: this = this;
        return [
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_data_new"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://create",
                press: function (): void {
                    that.fireViewEvents(that.newDataEvent);
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_data_choose"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://accept",
                press: function (): void {
                    that.fireViewEvents(that.chooseDataEvent,
                        // 获取表格选中的对象
                        utils.getSelecteds<bo.Customer>(that.list)
                    );
                }
            }),
            new sap.m.Button("", {
                text: ibas.i18n.prop("sys_shell_exit"),
                type: sap.m.ButtonType.Transparent,
                // icon: "sap-icon://inspect-down",
                press: function (): void {
                    that.fireViewEvents(that.closeEvent);
                }
            }),
        ];
    }
    /** 绘制视图 */
    darw(): any {
       let that: this = this;
        this.list = new sap.m.List("", {
            inset: false,
            growing: true,
            growingThreshold: ibas.config.get(utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 15),
            growingScrollToLoad: true,
            visibleRowCountMode: sap.ui.table.VisibleRowCountMode.Auto,
            mode: sap.m.ListMode.SingleSelectLeft
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
                        return ibas.i18n.prop("bo_customer_code")+data;
                    }
                }),
                new sap.m.ObjectAttribute("", {
                }).bindProperty("text", {
                    path: "Telephone1",
                    formatter(data: any): any {
                        return ibas.i18n.prop("bo_customer_telephone1")+data;
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
            content: [this.list]
        });
        this.page.setShowSubHeader(false);
        this.id = this.page.getId();
        utils.triggerNextResults({
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
    showData(datas: bo.Customer[]): void {
        let done: boolean = false;
        let model: sap.ui.model.Model = this.list.getModel(undefined);
        if (!ibas.objects.isNull(model)) {
            // 已存在绑定数据，添加新的
            let hDatas: any= (<any>model).getData();
            if (!ibas.objects.isNull(hDatas) && hDatas.rows instanceof Array) {
                for (let item of datas) {
                     hDatas.rows.push(item);
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
    getSelecteds(): bo.Customer[] {
        return null;
    }
}
/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as mm from "3rdparty/materials/index";
import * as bo from "../../../borep/bo/index";
import { ISupplierEditView } from "../../../bsapp/supplier/index";

/**
 * 编辑视图-供应商
 */
export class SupplierEditView extends ibas.BOEditView implements ISupplierEditView {

    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /*** 选择供应商组事件*/
    chooseSupplierGroupEvent: Function;
    /** 选择供应商联系人事件 */
    chooseSupplierContactPersonEvent: Function;
    /** 选择供应商送货地址事件 */
    chooseSupplierShipAddressEvent: Function;
    /** 选择供应商账单地址事件 */
    chooseSupplierBillAddressEvent: Function;
    /** 选择供应商价格清单事件 */
    chooseSupplierPriceListEvent: Function;
    /** 创建联系人 */
    createContactPersonEvent: Function;
    /** 创建地址 */
    createAddressEvent: Function;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_general") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_code") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text
                }).bindProperty("value", {
                    path: "code"
                }),
                new sap.m.ex.SeriesSelect("", {
                    objectCode: ibas.config.applyVariables(bo.BO_CODE_SUPPLIER),
                    bindingValue: {
                        path: "series",
                        type: "sap.ui.model.type.Integer",
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_name") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text
                }).bindProperty("value", {
                    path: "name"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_activated") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(ibas.emYesNo)
                }).bindProperty("selectedKey", {
                    path: "activated",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_group") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSupplierGroupEvent);
                    }
                }).bindProperty("value", {
                    path: "group"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_companyprivate") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(bo.emBusinessPartnerNature)
                }).bindProperty("selectedKey", {
                    path: "companyPrivate",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_pricelist") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSupplierPriceListEvent);
                    }
                }).bindProperty("value", {
                    path: "priceList"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_currency") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "currency"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_validdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "validDate"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_invaliddate") }),
                new sap.m.DatePicker("", {
                    valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                    displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                }).bindProperty("dateValue", {
                    path: "invalidDate"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_contact") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_contactperson") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSupplierContactPersonEvent);
                    }
                }).bindProperty("value", {
                    path: "contactPerson"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_billaddress") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSupplierBillAddressEvent);
                    }
                }).bindProperty("value", {
                    path: "billAddress"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_shipaddress") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseSupplierShipAddressEvent);
                    }
                }).bindProperty("value", {
                    path: "shipAddress"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_telephone1") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "telephone1"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_telephone2") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "telephone2"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_mobilephone") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "mobilePhone"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_faxnumber") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "faxNumber"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_taxid") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "taxId",
                }),
            ],
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
                        text: ibas.i18n.prop("shell_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        buttonMode: sap.m.MenuButtonMode.Split,
                        defaultAction: function (): void {
                            // 触发新建对象
                            that.fireViewEvents(that.createDataEvent, false);
                        },
                        menu: new sap.m.Menu("", {
                            items: [
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_new"),
                                    icon: "sap-icon://create",
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    icon: "sap-icon://copy",
                                }),
                            ],
                            itemSelected: function (event: any): void {
                                let item: any = event.getParameter("item");
                                if (item instanceof sap.m.MenuItem) {
                                    if (item.getIcon() === "sap-icon://copy") {
                                        // 触发克隆对象
                                        that.fireViewEvents(that.createDataEvent, true);
                                    } else {
                                        // 触发新建对象
                                        that.fireViewEvents(that.createDataEvent, false);
                                    }
                                }
                            }
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
                ]
            }),
            content: [this.viewTopForm],
        });
        this.id = this.page.getId();
        return this.page;
    }
    private page: sap.m.Page;
    private viewTopForm: sap.ui.layout.form.SimpleForm;
    /** 改变视图状态 */
    private changeViewStatus(data: bo.Supplier): void {
        if (ibas.objects.isNull(data)) {
            return;
        }
        // 新建时：禁用删除，
        if (data.isNew) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
            openui5.utils.changeFormEditable(this.viewTopForm, false);
        }
    }

    /** 显示数据 */
    showSupplier(data: bo.Supplier): void {
        this.viewTopForm.setModel(new sap.ui.model.json.JSONModel(data));
        this.viewTopForm.bindObject("/");
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.viewTopForm, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
}

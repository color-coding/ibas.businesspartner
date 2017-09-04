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
import { ISupplierEditView } from "../../../bsapp/supplier/index";
import {
    IContactPerson,
    BO_CODE_CONTACTPERSON,
    emBusinessPartnerType,
    emBusinessPartnerNature,
    emGender,
} from "../../../api/index";

/**
 * 编辑视图-业务伙伴-供应商
 */
export class SupplierEditView extends ibas.BOEditView implements ISupplierEditView {

    private page: sap.m.Page;
    private viewTopForm: sap.ui.layout.form.SimpleForm;

    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /*** 选择供应商组事件*/
    chooseBusinessPartnerGroupEvent: Function;
    /** 选择供应商联系人事件 */
    chooseBusinessPartnerContactPersonEvent: Function;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
            singleContainerFullSize: false,
            adjustLabelSpan: false,
            labelSpanL: 2,
            labelSpanM: 2,
            labelSpanS: 12,
            columnsXL: 2,
            columnsL: 2,
            columnsM: 1,
            columnsS: 1,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_basis_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_code") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text
                }).bindProperty("value", {
                    path: "code"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_name") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text
                }).bindProperty("value", {
                    path: "name"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_group") }),
                new sap.m.Input("", {
                    placeholder: ibas.i18n.prop("bo_supplier_group"),
                    tooltip: ibas.i18n.prop("bo_supplier_group"),
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseBusinessPartnerGroupEvent);
                    }
                }).bindProperty("value", {
                    path: "group"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_companyprivate") }),
                new sap.m.SegmentedButton("", {
                    items: utils.createSegmentedButtonItems(emBusinessPartnerNature)
                }).bindProperty("selectedKey", {
                    path: "companyPrivate",
                    type: "sap.ui.model.type.Integer"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_contact_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_contactperson") }),
                new sap.m.Input("", {
                    placeholder: ibas.i18n.prop("bo_customer_contactperson"),
                    tooltip: ibas.i18n.prop("bo_customer_contactperson"),
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseBusinessPartnerContactPersonEvent);
                    }
                }).bindProperty("value", {
                    path: "contactPerson"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_telephone1") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "telephone1"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_telephone2") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "telephone2"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_mobilephone") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "mobilePhone"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_faxnumber") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "faxNumber"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_business_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_billtostreet") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "billToStreet"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_billtozipcode") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "billToZipCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_shiptostreet") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "shipToStreet"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_shiptozipcode") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "shipToZipCode"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_account_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_balance") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "balance",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_currency") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "currency"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_taxid") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("value", {
                    path: "taxId",
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_other_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_validdate") }),
                new sap.m.DatePicker("", {
                    valueFormat: "yyyy-MM-dd",
                }).bindProperty("dateValue", {
                    path: "validDate",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_supplier_invaliddate") }),
                new sap.m.DatePicker("", {
                    valueFormat: "yyyy-MM-dd",
                }).bindProperty("dateValue", {
                    path: "invalidDate",
                })
            ],
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_save"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://save",
                        press: function (): void {
                            that.fireViewEvents(that.saveDataEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_delete"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://delete",
                        press: function (): void {
                            that.fireViewEvents(that.deleteDataEvent);
                        }
                    }),
                    new sap.m.ToolbarSeparator(""),
                    new sap.m.MenuButton("", {
                        text: ibas.i18n.prop("sys_shell_data_new"),
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
                                    text: ibas.i18n.prop("sys_shell_data_new"),
                                    icon: "sap-icon://create",
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("sys_shell_data_clone"),
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
                    })
                ]
            }),
            content: [this.viewTopForm],
        });
        this.id = this.page.getId();
        return this.page;
    }
    /** 改变视图状态 */
    private changeViewStatus(data: bo.Supplier): void {
        if (ibas.objects.isNull(data)) {
            return;
        }
        // 新建时：禁用删除，
        if (data.isNew) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
        }
        // 不可编辑：已批准，
        if (data.approvalStatus === ibas.emApprovalStatus.APPROVED) {
            if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
            }
            utils.changeFormEditable(this.viewTopForm, false);
        }
    }

    /** 显示数据 */
    showSupplier(data: bo.Supplier): void {
        this.viewTopForm.setModel(new sap.ui.model.json.JSONModel(data));
        this.viewTopForm.bindObject("/");
        // 监听属性改变，并更新控件
        utils.refreshModelChanged(this.viewTopForm, data);
        // 改变视图状态
        this.changeViewStatus(data);
    }
}

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
import { ICustomerViewView } from "../../../bsapp/customer/index";
import {
    IContactPerson,
    BO_CODE_CONTACTPERSON,
    emBusinessPartnerType,
    emBusinessPartnerNature,
    emGender,
} from "../../../api/index";

/**
 * 查看视图-业务伙伴-客户
 */
export class CustomerViewView extends ibas.BOViewView implements ICustomerViewView {

    private page: sap.m.Page;
    private viewTopForm: sap.ui.layout.form.SimpleForm;

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
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_code") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "code"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_name") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "name"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_group") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "group"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_companyprivate") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "companyPrivate",
                    formatter(data: any): any {
                        return ibas.enums.describe(emBusinessPartnerNature, data);
                    }
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_contact_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_contactperson") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "contactPerson",
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
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_billtostreet") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "billToStreet"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_billtozipcode") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "billToZipCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_shiptostreet") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "shipToStreet"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_shiptozipcode") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "shipToZipCode"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_account_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_balance") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "balance",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_currency") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "currency"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_taxid") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "taxId",
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_other_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_createdate") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "createDate",
                    type: new sap.ui.model.type.Date({
                        pattern: "yyyy-MM-dd",
                        strictParsing: true,
                    }),
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_updatedate") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "updateDate",
                    type: new sap.ui.model.type.Date({
                        pattern: "yyyy-MM-dd",
                        strictParsing: true,
                    }),
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_validdate") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "validDate",
                    type: new sap.ui.model.type.Date({
                        pattern: "yyyy-MM-dd",
                        strictParsing: true,
                    }),
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_customer_invaliddate") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "invalidDate",
                    type: new sap.ui.model.type.Date({
                        pattern: "yyyy-MM-dd",
                        strictParsing: true,
                    }),
                })
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Bar("", {
                contentLeft: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("sys_shell_data_edit"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://edit",
                        press: function (): void {
                            that.fireViewEvents(that.editDataEvent);
                        }
                    })
                ],
                contentRight: [
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
                ]
            }),
            content: [this.viewTopForm]
        });
        this.id = this.page.getId();
        return this.page;
    }

    /** 显示数据 */
    showCustomer(data: bo.Customer): void {
        this.viewTopForm.setModel(new sap.ui.model.json.JSONModel(data));
        this.viewTopForm.bindObject("/");
    }
}

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
import { IBusinessPartnerBalanceJournalViewView } from "../../../bsapp/businesspartnerbalancejournal/index";
import {
    IContactPerson,
    BO_CODE_CONTACTPERSON,
    emBusinessPartnerType,
    emBusinessPartnerNature,
    emGender,
} from "../../../api/index";

/**
 * 查看视图-业务伙伴余额记录
 */
export class BusinessPartnerBalanceJournalViewView extends ibas.BOViewView implements IBusinessPartnerBalanceJournalViewView {

    private page: sap.m.Page;
    private viewTopForm: sap.ui.layout.form.SimpleForm;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: false,
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
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_businesspartner") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "businessPartner"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_businesspartnertype") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "businessPartnerType",
                    formatter(data: any): any {
                        return ibas.enums.describe(emBusinessPartnerType, data);
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_objectkey") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "objectKey"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_account_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_amount") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "amount"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_currency") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "currency"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_bankcode") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "bankCode"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_cardnumber") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "cardNumber"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_origin_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_basedocumenttype") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "baseDocumentType"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_basedocumententry") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "baseDocumentEntry"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_basedocumentlineid") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "baseDocumentLineId"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_originaldocumenttype") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "originalDocumentType"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_originaldocumententry") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "originalDocumentEntry"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_originaldocumentlineid") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "originalDocumentLineId"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_other_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_createdate") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "createDate",
                    type: new sap.ui.model.type.Date({
                        pattern: "yyyy-MM-dd",
                        strictParsing: true,
                    }),
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnerbalancejournal_updatedate") }),
                new sap.m.Text("", {
                }).bindProperty("text", {
                    path: "updateDate",
                    type: new sap.ui.model.type.Date({
                        pattern: "yyyy-MM-dd",
                        strictParsing: true,
                    }),
                }),
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
    showBusinessPartnerBalanceJournal(data: bo.BusinessPartnerBalanceJournal): void {
        this.viewTopForm.setModel(new sap.ui.model.json.JSONModel(data));
        this.viewTopForm.bindObject("/");
    }
}

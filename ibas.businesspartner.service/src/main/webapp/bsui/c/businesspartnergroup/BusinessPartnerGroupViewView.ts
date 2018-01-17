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
import { IBusinessPartnerGroupViewView } from "../../../bsapp/businesspartnergroup/index";

/**
 * 查看视图-业务伙伴组
 */
export class BusinessPartnerGroupViewView extends ibas.BOViewView implements IBusinessPartnerGroupViewView {

    private page: sap.m.Page;
    private viewTopForm: sap.ui.layout.form.SimpleForm;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: false,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_general") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnergroup_code") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "code"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnergroup_name") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "name"
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_title_others") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnergroup_docentry") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "docEntry"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_businesspartnergroup_objectcode") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "objectCode"
                }),
            ]
        });
        this.page = new sap.m.Page("", {
            showHeader: false,
            subHeader: new sap.m.Bar("", {
                contentLeft: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_edit"),
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
    showBusinessPartnerGroup(data: bo.BusinessPartnerGroup): void {
        this.viewTopForm.setModel(new sap.ui.model.json.JSONModel(data));
        this.viewTopForm.bindObject("/");
    }
}

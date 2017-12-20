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
import { IContactPersonViewView } from "../../../bsapp/contactperson/index";

/**
 * 查看视图-业务伙伴联系人
 */
export class ContactPersonViewView extends ibas.BOViewView implements IContactPersonViewView {

    private page: sap.m.Page;
    private viewTopForm: sap.ui.layout.form.SimpleForm;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: false,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_basis_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_ownertype") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "ownerType",
                    formatter(data: any): any {
                        return ibas.enums.describe(bo.emBusinessPartnerType, data);
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_name") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "name"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_gender") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "gender",
                    formatter(data: any): any {
                        return ibas.enums.describe(bo.emGender, data);
                    }
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_position") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "position"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_activated") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text,
                }).bindProperty("text", {
                    path: "activated",
                    formatter(data: any): any {
                        return ibas.enums.describe(ibas.emYesNo, data);
                    }
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("businesspartner_contact_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_address") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "address"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_telephone1") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "telephone1"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_telephone2") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "telephone2"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_mobilephone") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "mobilePhone"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_fax") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "fax"
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_contactperson_mail") }),
                new sap.m.Text("", {
                    type: sap.m.InputType.Text
                }).bindProperty("text", {
                    path: "mail"
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
    showContactPerson(data: bo.ContactPerson): void {
        this.viewTopForm.setModel(new sap.ui.model.json.JSONModel(data));
        this.viewTopForm.bindObject("/");
    }
}

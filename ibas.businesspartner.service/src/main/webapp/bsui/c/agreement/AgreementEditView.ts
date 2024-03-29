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
            /** 编辑视图-协议/合同 */
            export class AgreementEditView extends ibas.BOEditView implements app.IAgreementEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /*** 选择业务伙伴事件 */
                chooseBusinessPartnerEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_code") }),
                            new sap.extension.m.Input("", {
                                type: sap.m.InputType.Text
                            }).bindProperty("bindingValue", {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 36
                                })
                            }).bindProperty("editable", {
                                path: "series",
                                formatter(data: any): any {
                                    return data > 0 ? false : true;
                                }
                            }),
                            new sap.extension.m.SeriesSelect("", {
                                objectCode: bo.BO_CODE_AGREEMENT,
                            }).bindProperty("bindingValue", {
                                path: "series",
                                type: new sap.extension.data.Numeric()
                            }).bindProperty("editable", {
                                path: "isNew",
                                formatter(data: any): any {
                                    return data === false ? false : true;
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_name") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                }),
                            }),
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_activated") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "activated",
                                type: new sap.extension.data.YesNo(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_category") }),
                            new sap.extension.m.PropertySelect("", {
                                dataInfo: {
                                    code: bo.Agreement.BUSINESS_OBJECT_CODE,
                                },
                                propertyName: "category",
                            }).bindProperty("bindingValue", {
                                path: "category",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 30
                                }),
                            }),
                        ]
                    });
                    let formMiddle: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.IconTabBar("", {
                                headerBackgroundDesign: sap.m.BackgroundDesign.Transparent,
                                backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                expandable: false,
                                items: [
                                    new sap.m.IconTabFilter("", {
                                        text: ibas.i18n.prop("businesspartner_title_general"),
                                        content: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: true,
                                                content: [
                                                    new sap.m.Toolbar("", { visible: false }),
                                                    new sap.m.Label("", {
                                                        text: ibas.i18n.prop("bo_agreement_branch"),
                                                        visible: accounting.config.isEnableBranch(),
                                                    }),
                                                    new sap.extension.m.DataBranchInput("", {
                                                        showValueHelp: true,
                                                        visible: accounting.config.isEnableBranch(),
                                                    }).bindProperty("bindingValue", {
                                                        path: "branch",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_businesspartner") }),
                                                    new sap.m.FlexBox("", {
                                                        items: [
                                                            // 客户
                                                            new sap.extension.m.RepositoryInput("", {
                                                                showValueHelp: true,
                                                                width: "100%",
                                                                layoutData: new sap.m.FlexItemData("", {
                                                                    growFactor: 1,
                                                                }),
                                                                repository: bo.BORepositoryBusinessPartner,
                                                                dataInfo: {
                                                                    type: bo.Customer,
                                                                    key: bo.Customer.PROPERTY_CODE_NAME,
                                                                    text: bo.Customer.PROPERTY_NAME_NAME
                                                                },
                                                                valueHelpRequest: function (): void {
                                                                    that.fireViewEvents(that.chooseBusinessPartnerEvent);
                                                                }
                                                            }).bindProperty("visible", {
                                                                path: "businessPartnerType",
                                                                formatter(data: any): any {
                                                                    if (data === bo.emBusinessPartnerType.CUSTOMER) {
                                                                        return true;
                                                                    }
                                                                    return false;
                                                                }
                                                            }).bindProperty("bindingValue", {
                                                                path: "businessPartnerCode",
                                                                type: new sap.extension.data.Alphanumeric()
                                                            }),
                                                            // 供应商
                                                            new sap.extension.m.RepositoryInput("", {
                                                                showValueHelp: true,
                                                                width: "100%",
                                                                layoutData: new sap.m.FlexItemData("", {
                                                                    growFactor: 1,
                                                                }),
                                                                repository: bo.BORepositoryBusinessPartner,
                                                                dataInfo: {
                                                                    type: bo.Supplier,
                                                                    key: bo.Supplier.PROPERTY_CODE_NAME,
                                                                    text: bo.Supplier.PROPERTY_NAME_NAME
                                                                },
                                                                valueHelpRequest: function (): void {
                                                                    that.fireViewEvents(that.chooseBusinessPartnerEvent);
                                                                }
                                                            }).bindProperty("visible", {
                                                                path: "businessPartnerType",
                                                                formatter(data: any): any {
                                                                    if (data === bo.emBusinessPartnerType.SUPPLIER) {
                                                                        return true;
                                                                    }
                                                                    return false;
                                                                }
                                                            }).bindProperty("bindingValue", {
                                                                path: "businessPartnerCode",
                                                                type: new sap.extension.data.Alphanumeric()
                                                            }),
                                                        ]
                                                    }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        items: [
                                                            new sap.extension.m.SelectItem("", {
                                                                key: bo.emBusinessPartnerType.CUSTOMER,
                                                                text: ibas.enums.describe(bo.emBusinessPartnerType, bo.emBusinessPartnerType.CUSTOMER)
                                                            }),
                                                            new sap.extension.m.SelectItem("", {
                                                                key: bo.emBusinessPartnerType.SUPPLIER,
                                                                text: ibas.enums.describe(bo.emBusinessPartnerType, bo.emBusinessPartnerType.SUPPLIER)
                                                            })
                                                        ]
                                                        // enumType: bo.emBusinessPartnerType
                                                    }).bindProperty("bindingValue", {
                                                        path: "businessPartnerType",
                                                        type: new sap.extension.data.Enum({
                                                            enumType: bo.emBusinessPartnerType
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_startdate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "startDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_closedate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "closeDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_signdate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "signDate",
                                                        type: new sap.extension.data.Date(),
                                                    }),
                                                    new sap.m.Toolbar("", { visible: false }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_abstracts") }),
                                                    new sap.extension.m.TextArea("", {
                                                        rows: 6,
                                                    }).bindProperty("bindingValue", {
                                                        path: "abstracts",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        }),
                                                    }),
                                                ]
                                            })
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.m.Toolbar("", { visible: false }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_dataowner") }),
                            new sap.extension.m.DataOwnerInput("", {
                                showValueHelp: true,
                                organization: {
                                    path: "organization",
                                    type: new sap.extension.data.Alphanumeric({
                                        maxLength: 8
                                    })
                                }
                            }).bindProperty("bindingValue", {
                                path: "dataOwner",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_organization") }),
                            new sap.extension.m.DataOrganizationInput("", {
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "organization",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_agreement_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3
                            }).bindProperty("bindingValue", {
                                path: "remarks",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Toolbar("", { visible: false }),
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.Agreement.BUSINESS_OBJECT_CODE,
                        },
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press(): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press(): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_new"),
                                                icon: "sap-icon://create",
                                                press(): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press(): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                                new sap.m.ToolbarSpacer(""),
                                new sap.m.Button("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://action",
                                    press: function (event: any): void {
                                        ibas.servicesManager.showServices({
                                            proxy: new ibas.BOServiceProxy({
                                                data: that.page.getModel().getData(),
                                                converter: new bo.DataConverter(),
                                            }),
                                            displayServices(services: ibas.IServiceAgent[]): void {
                                                if (ibas.objects.isNull(services) || services.length === 0) {
                                                    return;
                                                }
                                                let actionSheet: sap.m.ActionSheet = new sap.m.ActionSheet("", {
                                                    placement: sap.m.PlacementType.Bottom,
                                                    buttons: {
                                                        path: "/",
                                                        template: new sap.m.Button("", {
                                                            type: sap.m.ButtonType.Transparent,
                                                            text: {
                                                                path: "name",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                                formatter(data: string): string {
                                                                    return data ? ibas.i18n.prop(data) : "";
                                                                }
                                                            },
                                                            icon: {
                                                                path: "icon",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                                formatter(data: string): string {
                                                                    return data ? data : "sap-icon://e-care";
                                                                }
                                                            },
                                                            press(this: sap.m.Button): void {
                                                                let service: ibas.IServiceAgent = this.getBindingContext().getObject();
                                                                if (service) {
                                                                    service.run();
                                                                }
                                                            }
                                                        })
                                                    }
                                                });
                                                actionSheet.setModel(new sap.extension.model.JSONModel(services));
                                                actionSheet.openBy(event.getSource());
                                            }
                                        });
                                    }
                                })
                            ]
                        }),
                        content: [
                            formTop,
                            formMiddle,
                            formBottom,
                        ]
                    });
                }

                private page: sap.extension.m.Page;

                /** 显示数据 */
                showAgreement(data: bo.Agreement): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
            }
        }
    }
}

/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace ui {
        export namespace m {
            /** 编辑视图-业务伙伴资产 */
            export class BusinessPartnerAssetEditView extends ibas.BOEditView implements app.IBusinessPartnerAssetEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.pageBusinessPartnerAsset = new sap.m.Page("", {
                        showHeader: false,
                        showfooter: false,
                        content: [
                            new sap.ui.layout.form.SimpleForm("", {
                                editable: true,
                                content: [
                                ]
                            })
                        ]
                    });
                    this.navContainer = new sap.m.NavContainer("", {
                        pages: [
                            this.pageBusinessPartnerAsset,
                        ]
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
                                new sap.m.Button("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (event: any): void {
                                        let popover: sap.m.Popover = new sap.m.Popover("", {
                                            showHeader: false,
                                            placement: sap.m.PlacementType.Bottom,
                                        });
                                        popover.addContent(new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_new"),
                                            icon: "sap-icon://create",
                                            type: sap.m.ButtonType.Transparent,
                                            press: function (): void {
                                                // 创建新的对象
                                                that.fireViewEvents(that.createDataEvent, false);
                                                popover.close();
                                            }
                                        }));
                                        popover.addContent(new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_clone"),
                                            icon: "sap-icon://copy",
                                            type: sap.m.ButtonType.Transparent,
                                            press: function (): void {
                                                // 复制当前对象
                                                that.fireViewEvents(that.createDataEvent, true);
                                                popover.close();
                                            }
                                        }));
                                        popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                        popover.openBy(event.getSource(), true);
                                    }
                                }),
                                new sap.m.ToolbarSpacer(""),
                                this.navButton = new sap.m.Button("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://overflow",
                                    press: function (event: any): void {
                                        let popover: sap.m.Popover = new sap.m.Popover("", {
                                            showHeader: false,
                                            placement: sap.m.PlacementType.Bottom,
                                        });
                                        (<any>popover).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                        popover.openBy(event.getSource(), true);
                                    }
                                }),
                            ]
                        }),
                        content: [this.navContainer]
                    });
                    this.toPage(this.pageBusinessPartnerAsset);
                    return this.page;
                }

                private page: sap.m.Page;
                private pageBusinessPartnerAsset: sap.m.Page;
                private currentPage: sap.m.Page;
                private navContainer: sap.m.NavContainer;
                private navButton: sap.m.Button;
                /** 切换页面 */
                private toPage(page: sap.m.Page, leftToRight?: boolean): void {
                    switch (page) {
                        case this.pageBusinessPartnerAsset:
                            this.navButton.setVisible(true);
                            this.currentPage = this.pageBusinessPartnerAsset;
                            break;
                        default:
                            break;
                    }
                    if (!ibas.objects.isNull(this.currentPage)) {
                        if (leftToRight) {
                            this.navContainer.backToPage(this.currentPage.getId());
                        } else {
                            this.navContainer.to(this.currentPage.getId());
                        }
                    }
                }
                /** 手指触控滑动 */
                onTouchMove(direction: ibas.emTouchMoveDirection, event: TouchEvent): void {
                    if (!ibas.objects.isNull(this.currentPage)
                        && !ibas.objects.isNull(this.currentPage.getFooter())) {
                        if (direction === ibas.emTouchMoveDirection.UP) {
                            this.currentPage.setShowFooter(false);
                        } else if (direction === ibas.emTouchMoveDirection.DOWN) {
                            this.currentPage.setShowFooter(true);
                        }
                    }
                }

                /** 改变视图状态 */
                private changeViewStatus(data: bo.BusinessPartnerAsset): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    // 新建时：禁用删除，
                    if (data.isNew) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                    }
                }

                /** 显示数据 */
                showBusinessPartnerAsset(data: bo.BusinessPartnerAsset): void {
                    this.pageBusinessPartnerAsset.setModel(new sap.ui.model.json.JSONModel(data));
                    this.pageBusinessPartnerAsset.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.pageBusinessPartnerAsset, data);
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
            }
        }
    }
}

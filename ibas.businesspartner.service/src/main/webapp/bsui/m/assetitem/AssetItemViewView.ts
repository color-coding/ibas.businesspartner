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
            /** 查看视图-资产项目 */
            export class AssetItemViewView extends ibas.BOViewView implements app.IAssetItemViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.AssetItem.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "name",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            objectSubtitle: {
                                path: "code",
                                type: new sap.extension.data.Alphanumeric(),
                            },
                            actions: [
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_assetitem_activated"),
                                    enumValue: {
                                        path: "activated",
                                        type: new sap.extension.data.YesNo(),
                                    }
                                }),
                            ]
                        }),
                        headerContent: [
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_assetitem_group"),
                                bindingValue: {
                                    path: "group",
                                    type: new sap.extension.data.Alphanumeric(),
                                }
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_assetitem_validdate"),
                                bindingValue: {
                                    path: "validDate",
                                    type: new sap.extension.data.Date(),
                                }
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_assetitem_invaliddate"),
                                bindingValue: {
                                    path: "invalidDate",
                                    type: new sap.extension.data.Date(),
                                }
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_assetitem_faceamount"),
                                                bindingValue: {
                                                    parts: [
                                                        {
                                                            path: "faceAmount",
                                                            type: new sap.extension.data.Sum(),
                                                        },
                                                        {
                                                            path: "amountUnit",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    ]
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_assetitem_usingtimes"),
                                                bindingValue: {
                                                    path: "usingTimes",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectYesNoStatus("", {
                                                title: ibas.i18n.prop("bo_assetitem_rechargeable"),
                                                enumValue: {
                                                    path: "rechargeable",
                                                    type: new sap.extension.data.YesNo(),
                                                }
                                            }),
                                        ],
                                    }),
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_assetitem_usingdiscount"),
                                                bindingValue: {
                                                    path: "usingDiscount",
                                                    type: new sap.extension.data.Percentage(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_assetitem_overdraft"),
                                                bindingValue: {
                                                    path: "overdraft",
                                                    type: new sap.extension.data.Sum(),
                                                }
                                            }),
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_assetitem_validdays"),
                                                bindingValue: {
                                                    path: "validDays",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("businesspartner_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_assetitem_remarks"),
                                                bindingValue: {
                                                    path: "remarks",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.UserObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_assetitem_dataowner"),
                                                bindingValue: {
                                                    path: "dataOwner",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                            new sap.extension.m.OrganizationObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_assetitem_organization"),
                                                bindingValue: {
                                                    path: "organization",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;

                /** 显示数据 */
                showAssetItem(data: bo.AssetItem): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
            }
        }
    }
}

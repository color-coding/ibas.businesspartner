/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../borep/index.ts" />
/// <reference path="./address/index.ts" />
/// <reference path="./businesspartnergroup/index.ts" />
/// <reference path="./contactperson/index.ts" />
/// <reference path="./customer/index.ts" />
/// <reference path="./supplier/index.ts" />
/// <reference path="./assetitem/index.ts" />
/// <reference path="./businesspartnerasset/index.ts" />
/// <reference path="./lead/index.ts" />
/// <reference path="./paymentterm/index.ts" />
/// <reference path="./agreement/index.ts" />
namespace businesspartner {
    export namespace app {
        /** 属性-导航 */
        const PROPERTY_NAVIGATION: symbol = Symbol("navigation");
        /** 模块控制台 */
        export class Console extends ibas.ModuleConsole {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CONSOLE_ID;
                this.name = CONSOLE_NAME;
                this.version = CONSOLE_VERSION;
                this.copyright = ibas.i18n.prop("shell_license");
            }
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation {
                return this[PROPERTY_NAVIGATION];
            }
            /** 初始化 */
            protected registers(): void {
                // 注册功能
                this.register(new CustomerFunc());
                this.register(new SupplierFunc());
                this.register(new LeadFunc());
                this.register(new ContactPersonFunc());
                this.register(new AddressFunc());
                this.register(new BusinessPartnerAssetFunc());
                // this.register(new BusinessPartnerGroupFunc());
                this.register(new AssetItemFunc());
                this.register(new PaymentTermFunc());
                this.register(new AgreementFunc());

                // 注册服务应用
                this.register(new AddressChooseServiceMapping());
                this.register(new AddressLinkServiceMapping());
                this.register(new BusinessPartnerGroupChooseServiceMapping());
                this.register(new ContactPersonChooseServiceMapping());
                this.register(new ContactPersonLinkServiceMapping());
                this.register(new CustomerChooseServiceMapping());
                this.register(new CustomerLinkServiceMapping());
                this.register(new SupplierChooseServiceMapping());
                this.register(new SupplierLinkServiceMapping());
                this.register(new AssetItemChooseServiceMapping());
                this.register(new AssetItemLinkServiceMapping());
                this.register(new BusinessPartnerAssetChooseServiceMapping());
                this.register(new BusinessPartnerAssetLinkServiceMapping());
                this.register(new LeadChooseServiceMapping());
                this.register(new LeadLinkServiceMapping());
                this.register(new PaymentTermChooseServiceMapping());
                this.register(new PaymentTermLinkServiceMapping());
                this.register(new AgreementChooseServiceMapping());
                this.register(new AgreementLinkServiceMapping());
                this.register(new AgreementEditServiceMapping());
                this.register(new CustomerAssetChooseServiceMapping());
                this.register(new SupplierAssetChooseServiceMapping());
                this.register(new CustomerEditServiceMapping());
                this.register(new SupplierEditServiceMapping());
                this.register(new LeadEditServiceMapping());
                this.register(new ContactPersonEditServiceMapping());
                this.register(new AddressEditServiceMapping());
                // 注册常驻应用

                // 注册权限元素
                this.register(ELEMENT_BUSINESSPARTNER_ASSET_JOURNAL_EDIT);
            }
            /** 运行 */
            run(): void {
                // 加载语言-框架默认
                this.loadResources([
                    "resources/languages/businesspartner.json",
                    "resources/languages/bos.json"
                ], () => {
                    // 设置资源属性
                    this.description = ibas.i18n.prop(this.name.toLowerCase());
                    this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
                    // 先加载ui导航
                    let uiModules: string[] = [];
                    if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)) {
                        if (this.plantform === ibas.emPlantform.PHONE) {
                            // 使用m类型视图
                            uiModules.push("index.ui.m");
                        }
                    }
                    // 默认使用视图
                    if (uiModules.length === 0) {
                        // 使用c类型视图
                        uiModules.push("index.ui.c");
                    }
                    // 加载视图库
                    this.loadUI(uiModules, (ui) => {
                        // 设置导航
                        this[PROPERTY_NAVIGATION] = new ui.Navigation();
                        // 调用初始化
                        this.initialize();
                    });
                    // 保留基类方法
                    super.run();
                });
            }
        }
        /** 模块控制台，手机端 */
        export class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void {
                // 注册功能
                this.register(new CustomerFunc());
                this.register(new SupplierFunc());
                this.register(new LeadFunc());
                this.register(new ContactPersonFunc());
                this.register(new AddressFunc());
                // 注册服务应用
                this.register(new AddressChooseServiceMapping());
                this.register(new AddressLinkServiceMapping());
                this.register(new ContactPersonChooseServiceMapping());
                this.register(new ContactPersonLinkServiceMapping());
                this.register(new CustomerChooseServiceMapping());
                this.register(new CustomerLinkServiceMapping());
                this.register(new SupplierChooseServiceMapping());
                this.register(new SupplierLinkServiceMapping());
                this.register(new BusinessPartnerGroupChooseServiceMapping());
                this.register(new AssetItemChooseServiceMapping());
                this.register(new AssetItemLinkServiceMapping());
                this.register(new BusinessPartnerAssetChooseServiceMapping());
                this.register(new LeadChooseServiceMapping());
                this.register(new LeadLinkServiceMapping());
                this.register(new PaymentTermChooseServiceMapping());
                this.register(new AgreementChooseServiceMapping());
                this.register(new CustomerEditServiceMapping());
                this.register(new SupplierEditServiceMapping());
                this.register(new LeadEditServiceMapping());
                this.register(new ContactPersonEditServiceMapping());
                this.register(new AddressEditServiceMapping());
            }
        }
    }
}
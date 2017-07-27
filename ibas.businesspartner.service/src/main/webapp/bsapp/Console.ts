/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import {
    BusinessPartnerBalanceJournalFunc,
    BusinessPartnerBalanceJournalChooseServiceMapping,
    BusinessPartnerBalanceJournalLinkServiceMapping
} from "./businesspartnerbalancejournal/index";
import {
    BusinessPartnerGroupFunc,
    BusinessPartnerGroupChooseServiceMapping,
    BusinessPartnerGroupLinkServiceMapping
} from "./businesspartnergroup/index";
import { ContactPersonFunc, ContactPersonChooseServiceMapping, ContactPersonLinkServiceMapping } from "./contactperson/index";
import { CustomerFunc, CustomerChooseServiceMapping, CustomerLinkServiceMapping } from "./customer/index";
import { SupplierFunc, SupplierChooseServiceMapping, SupplierLinkServiceMapping } from "./supplier/index";

/** 模块控制台 */
export class Console extends ibas.ModuleConsole {
    /** 模块-标识 */
    static CONSOLE_ID: string = "2bd803fd-975c-4f7c-aa41-1ca2991cc126";
    /** 模块-名称 */
    static CONSOLE_NAME: string = "BusinessPartner";
    /** 构造函数 */
    constructor() {
        super();
        this.id = Console.CONSOLE_ID;
        this.name = Console.CONSOLE_NAME;
    }
    private _navigation: ibas.IViewNavigation;
    /** 创建视图导航 */
    navigation(): ibas.IViewNavigation {
        return this._navigation;
    }
    /** 初始化 */
    protected registers(): void {
        // 注册功能
        this.register(new BusinessPartnerGroupFunc());
        this.register(new ContactPersonFunc());
        this.register(new CustomerFunc());
        this.register(new SupplierFunc());
        // 注册服务应用
        this.register(new BusinessPartnerGroupChooseServiceMapping());
        this.register(new BusinessPartnerGroupLinkServiceMapping());
        this.register(new ContactPersonChooseServiceMapping());
        this.register(new ContactPersonLinkServiceMapping());
        this.register(new CustomerChooseServiceMapping());
        this.register(new CustomerLinkServiceMapping());
        this.register(new SupplierChooseServiceMapping());
        this.register(new SupplierLinkServiceMapping());
        // 注册常驻应用

    }
    /** 运行 */
    run(): void {
        // 加载语言-框架默认
        ibas.i18n.load(this.rootUrl + "resources/languages/businesspartner.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/businesspartnerbalancejournal.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/businesspartnergroup.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/contactperson.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/customer.json");
        ibas.i18n.load(this.rootUrl + "resources/languages/bo/supplier.json");
        // 设置资源属性
        this.description = ibas.i18n.prop(this.name.toLowerCase());
        this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
        // 先加载ui导航
        let uiModules: string[] = [];
        if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)
            && this.plantform === ibas.emPlantform.PHONE) {
            // 使用m类型视图
            uiModules.push("../bsui/m/Navigation");
        } else {
            // 使用c类型视图
            uiModules.push("../bsui/c/Navigation");
        }
        let that: Console = this;
        require(uiModules, function (ui: any): void {
            // 设置导航
            that._navigation = new ui.default();
            // 调用初始化
            that.initialize();
        });
        // 保留基类方法
        super.run();
    }
}

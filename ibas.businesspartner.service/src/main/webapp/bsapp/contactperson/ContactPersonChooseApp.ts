/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryBusinessPartner } from "../../borep/BORepositories";
import { ContactPersonEditApp } from "./ContactPersonEditApp";

/** 选择应用-业务伙伴联系人 */
export class ContactPersonChooseApp extends ibas.BOChooseService<IContactPersonChooseView, bo.ContactPerson> {

    /** 应用标识 */
    static APPLICATION_ID: string = "642668ec-d757-45e7-a08a-82de1a4fa67c";
    /** 应用名称 */
    static APPLICATION_NAME: string = "businesspartner_app_contactperson_choose";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.ContactPerson.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = ContactPersonChooseApp.APPLICATION_ID;
        this.name = ContactPersonChooseApp.APPLICATION_NAME;
        this.boCode = ContactPersonChooseApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria): void {
        this.busy(true);
        let that: this = this;
        let boRepository: BORepositoryBusinessPartner = new BORepositoryBusinessPartner();
        boRepository.fetchContactPerson({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.ContactPerson>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length === 1
                        && ibas.config.get(ibas.CONFIG_ITEM_AUTO_CHOOSE_DATA, true)) {
                        // 仅一条数据，直接选择
                        that.chooseData(opRslt.resultObjects);
                    } else {
                        if (!that.isViewShowed()) {
                            // 没显示视图，先显示
                            that.show();
                        }
                        if (opRslt.resultObjects.length === 0) {
                            that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                        }
                        that.view.showData(opRslt.resultObjects);
                        that.busy(false);
                    }
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
    }
    /** 新建数据 */
    protected newData(): void {
        // 关闭自身
        this.destroy();
        // 调用编辑应用
        let app: ContactPersonEditApp = new ContactPersonEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run();
    }
}
/** 视图-业务伙伴联系人 */
export interface IContactPersonChooseView extends ibas.IBOChooseView {
    /** 显示数据 */
    showData(datas: bo.ContactPerson[]): void;
}
/** 业务伙伴联系人选择服务映射 */
export class ContactPersonChooseServiceMapping extends ibas.BOChooseServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = ContactPersonChooseApp.APPLICATION_ID;
        this.name = ContactPersonChooseApp.APPLICATION_NAME;
        this.boCode = ContactPersonChooseApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务实例 */
    create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.ContactPerson>> {
        return new ContactPersonChooseApp();
    }
}

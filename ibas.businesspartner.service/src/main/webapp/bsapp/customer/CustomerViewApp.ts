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
import { CustomerEditApp } from "./CustomerEditApp";

/** 查看应用-业务伙伴-客户 */
export class CustomerViewApp extends ibas.BOViewService<ICustomerViewView> {

    /** 应用标识 */
    static APPLICATION_ID: string = "4c0313c6-1ff5-4f2f-bfa1-f2500377d205";
    /** 应用名称 */
    static APPLICATION_NAME: string = "businesspartner_app_customer_view";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.Customer.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = CustomerViewApp.APPLICATION_ID;
        this.name = CustomerViewApp.APPLICATION_NAME;
        this.boCode = CustomerViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.editDataEvent = this.editData;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        if (ibas.objects.isNull(this.viewData)) {
            // 创建编辑对象实例
            this.viewData = new bo.Customer();
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("sys_shell_data_created_new"));
        }
        this.view.showCustomer(this.viewData);
    }
    /** 编辑数据，参数：目标数据 */
    protected editData(): void {
        let app: CustomerEditApp = new CustomerEditApp();
        app.navigation = this.navigation;
        app.viewShower = this.viewShower;
        app.run(this.viewData);
    }
    /** 运行,覆盖原方法 */
    run(...args: any[]): void {
        let that: this = this;
        if (ibas.objects.instanceOf(arguments[0], bo.Customer)) {
            // 尝试重新查询编辑对象
            let criteria: ibas.ICriteria = arguments[0].criteria();
            if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                // 有效的查询对象查询
                let boRepository: BORepositoryBusinessPartner = new BORepositoryBusinessPartner();
                boRepository.fetchCustomer({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Customer>): void {
                        let data: bo.Customer;
                        if (opRslt.resultCode === 0) {
                            data = opRslt.resultObjects.firstOrDefault();
                        }
                        if (ibas.objects.instanceOf(data, bo.Customer)) {
                            // 查询到了有效数据
                            that.viewData = data;
                            that.show();
                        } else {
                            // 数据重新检索无效
                            that.messages({
                                type: ibas.emMessageType.WARNING,
                                message: ibas.i18n.prop("sys_shell_data_deleted_and_created"),
                                onCompleted(): void {
                                    that.show();
                                }
                            });
                        }
                    }
                });
                // 开始查询数据
                return;
            }
        }
        super.run();
    }
    private viewData: bo.Customer;
    /** 查询数据 */
    protected fetchData(criteria: ibas.ICriteria | string): void {
        this.busy(true);
        let that: this = this;
        if (typeof criteria === "string") {
            criteria = new ibas.Criteria();
            // 添加查询条件
        }
        let boRepository: BORepositoryBusinessPartner = new BORepositoryBusinessPartner();
        boRepository.fetchCustomer({
            criteria: criteria,
            onCompleted(opRslt: ibas.IOperationResult<bo.Customer>): void {
                try {
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    that.viewData = opRslt.resultObjects.firstOrDefault();
                    that.viewShowed();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("sys_shell_fetching_data"));
    }
    /** 获取服务的契约 */
    protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
        return [];
    }
}
/** 视图-业务伙伴-客户 */
export interface ICustomerViewView extends ibas.IBOViewView {
    showCustomer(viewData: bo.Customer): void;
}
/** 业务伙伴-客户连接服务映射 */
export class CustomerLinkServiceMapping extends ibas.BOLinkServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = CustomerViewApp.APPLICATION_ID;
        this.name = CustomerViewApp.APPLICATION_NAME;
        this.boCode = CustomerViewApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 创建服务并运行 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new CustomerViewApp();
    }
}

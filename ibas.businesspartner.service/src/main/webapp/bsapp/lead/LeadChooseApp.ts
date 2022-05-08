/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 选择应用-潜在客户 */
        export class LeadChooseApp extends ibas.BOChooseService<ILeadChooseView, bo.Lead> {
            /** 应用标识 */
            static APPLICATION_ID: string = "148189ce-d6f1-4d5e-9304-1481f0db050c";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_lead_choose";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Lead.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = LeadChooseApp.APPLICATION_ID;
                this.name = LeadChooseApp.APPLICATION_NAME;
                this.boCode = LeadChooseApp.BUSINESS_OBJECT_CODE;
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
                super.viewShowed();
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchLead({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Lead>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 1
                                && ibas.config.get(ibas.CONFIG_ITEM_AUTO_CHOOSE_DATA, true) && !that.isViewShowed()) {
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
                let app: LeadEditApp = new LeadEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
        }
        /** 视图-潜在客户 */
        export interface ILeadChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Lead[]): void;
        }
        /** 潜在客户选择服务映射 */
        export class LeadChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = LeadChooseApp.APPLICATION_ID;
                this.name = LeadChooseApp.APPLICATION_NAME;
                this.boCode = LeadChooseApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Lead> {
                return new LeadChooseApp();
            }
        }
    }
}

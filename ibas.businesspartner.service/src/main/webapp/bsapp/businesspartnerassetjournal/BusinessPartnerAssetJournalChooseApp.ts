/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 选择应用-业务伙伴资产日记账 */
        export class BusinessPartnerAssetJournalChooseApp extends ibas.BOChooseService<IBusinessPartnerAssetJournalChooseView, bo.BusinessPartnerAssetJournal> {

            /** 应用标识 */
            static APPLICATION_ID: string = "1409e44e-9ab6-4ee5-b50a-b80ac125445e";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_businesspartnerassetjournal_choose";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerAssetJournal.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetJournalChooseApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetJournalChooseApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetJournalChooseApp.BUSINESS_OBJECT_CODE;
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
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchBusinessPartnerAssetJournal({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAssetJournal>): void {
                        try {
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
                let app: BusinessPartnerAssetJournalEditApp = new BusinessPartnerAssetJournalEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
        }
        /** 视图-业务伙伴资产日记账 */
        export interface IBusinessPartnerAssetJournalChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.BusinessPartnerAssetJournal[]): void;
        }
        /** 业务伙伴资产日记账选择服务映射 */
        export class BusinessPartnerAssetJournalChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetJournalChooseApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetJournalChooseApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetJournalChooseApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.BusinessPartnerAssetJournal> {
                return new BusinessPartnerAssetJournalChooseApp();
            }
        }
    }
}

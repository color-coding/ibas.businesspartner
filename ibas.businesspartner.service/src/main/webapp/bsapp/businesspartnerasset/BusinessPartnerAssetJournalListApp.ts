/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 列表应用-业务伙伴资产日记账 */
        export class BusinessPartnerAssetJournalListApp extends ibas.BOListApplication<IBusinessPartnerAssetJournalListView, bo.BusinessPartnerAssetJournal> {

            /** 应用标识 */
            static APPLICATION_ID: string = "f5c698aa-474d-4e1b-bfae-fff99b6c3ad5";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_businesspartnerassetjournal_list";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerAssetJournal.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetJournalListApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetJournalListApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetJournalListApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.fetchBusinessPartnerAssetJournalEvent = this.fetchBusinessPartnerAssetJournal;
                this.view.createBusinessPartnerAssetJournalEvent = this.createBusinessPartnerAssetJournalEvent;
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
                boRepository.fetchBusinessPartnerAsset({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAsset>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (!that.isViewShowed()) {
                                // 没显示视图，先显示
                                that.show();
                            }
                            if (opRslt.resultObjects.length === 0) {
                                that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                            }
                            that.view.showBusinessPartnerAssets(opRslt.resultObjects);
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 新建数据 */
            protected newData(): void {
                let app: BusinessPartnerAssetJournalEditApp = new BusinessPartnerAssetJournalEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.BusinessPartnerAssetJournal): void {
                throw new Error(ibas.i18n.prop("sys_unsupported_operation"));
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.BusinessPartnerAssetJournal): void {
                throw new Error(ibas.i18n.prop("sys_unsupported_operation"));
            }
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.BusinessPartnerAssetJournal | bo.BusinessPartnerAssetJournal[]): void {
                throw new Error(ibas.i18n.prop("sys_unsupported_operation"));
            }
            /** 查询业务伙伴资产交易记录 */
            protected fetchBusinessPartnerAssetJournal(criteria: ibas.ICriteria): void {
                // 检查目标数据
                if (ibas.objects.isNull(criteria) || criteria.conditions.length === 0) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "criteria"));
                }
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchBusinessPartnerAssetJournal({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAssetJournal>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                            }
                            that.view.showBusinessPartnerAssetJournals(opRslt.resultObjects);
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 新建业务伙伴资产数据 */
            protected createBusinessPartnerAssetJournalEvent(data: bo.BusinessPartnerAsset): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_using")
                    ));
                    return;
                }
                let journal: bo.BusinessPartnerAssetJournal = new bo.BusinessPartnerAssetJournal();
                journal.serviceCode = data.code;
                journal.baseDocumentType = "_MANUAL_";
                journal.baseDocumentEntry = parseInt(ibas.dates.toString(ibas.dates.now(), "yyyyMMdd"), 0);
                journal.baseDocumentLineId = parseInt(ibas.dates.toString(ibas.dates.now(), "HHmmss"), 0);
                let app: BusinessPartnerAssetJournalEditApp = new BusinessPartnerAssetJournalEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(journal);
            }
        }
        /** 视图-业务伙伴资产日记账 */
        export interface IBusinessPartnerAssetJournalListView extends ibas.IBOListView {
            /** 显示业务伙伴资产数据 */
            showBusinessPartnerAssets(datas: bo.BusinessPartnerAsset[]): void;
            /** 查询业务伙伴资产交易记录 */
            fetchBusinessPartnerAssetJournalEvent: Function;
            /** 显示业务伙伴资产交易数据 */
            showBusinessPartnerAssetJournals(datas: bo.BusinessPartnerAssetJournal[]): void;
            /** 新建业务伙伴资产数据 */
            createBusinessPartnerAssetJournalEvent: Function;
        }
    }
}

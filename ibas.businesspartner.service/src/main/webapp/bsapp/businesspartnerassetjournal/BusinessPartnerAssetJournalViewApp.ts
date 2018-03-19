/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 查看应用-业务伙伴资产日记账 */
        export class BusinessPartnerAssetJournalViewApp extends ibas.BOViewService<IBusinessPartnerAssetJournalViewView> {

            /** 应用标识 */
            static APPLICATION_ID: string = "807959d5-f09e-4041-a8e5-f193e3c6be6e";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_businesspartnerassetjournal_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerAssetJournal.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetJournalViewApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetJournalViewApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetJournalViewApp.BUSINESS_OBJECT_CODE;
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
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: BusinessPartnerAssetJournalEditApp = new BusinessPartnerAssetJournalEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.BusinessPartnerAssetJournal): void;
            /** 运行 */
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.BusinessPartnerAssetJournal)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            protected viewData: bo.BusinessPartnerAssetJournal;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    criteria = new ibas.Criteria();
                    // 添加查询条件

                }
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchBusinessPartnerAssetJournal({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAssetJournal>): void {
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
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 获取服务的契约 */
            protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
                return [];
            }
        }
        /** 视图-业务伙伴资产日记账 */
        export interface IBusinessPartnerAssetJournalViewView extends ibas.IBOViewView {

        }
        /** 业务伙伴资产日记账连接服务映射 */
        export class BusinessPartnerAssetJournalLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetJournalViewApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetJournalViewApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetJournalViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new BusinessPartnerAssetJournalViewApp();
            }
        }
    }
}

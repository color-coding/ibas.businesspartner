/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 查看应用-业务伙伴资产 */
        export class BusinessPartnerAssetViewApp extends ibas.BOViewService<IBusinessPartnerAssetViewView, bo.BusinessPartnerAsset> {

            /** 应用标识 */
            static APPLICATION_ID: string = "946c4e19-95ad-4272-90ff-9fd0eeb92bb4";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_businesspartnerasset_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerAsset.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetViewApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetViewApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetViewApp.BUSINESS_OBJECT_CODE;
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
                let app: BusinessPartnerAssetEditApp = new BusinessPartnerAssetEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.BusinessPartnerAsset): void;
            /** 运行 */
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.BusinessPartnerAsset)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            protected viewData: bo.BusinessPartnerAsset;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    // 添加查询条件

                }
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchBusinessPartnerAsset({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAsset>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            if (!that.isViewShowed()) {
                                that.show();
                            } else {
                                that.viewShowed();
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
        }
        /** 视图-业务伙伴资产 */
        export interface IBusinessPartnerAssetViewView extends ibas.IBOViewView {

        }
        /** 业务伙伴资产连接服务映射 */
        export class BusinessPartnerAssetLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetViewApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetViewApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new BusinessPartnerAssetViewApp();
            }
        }
    }
}

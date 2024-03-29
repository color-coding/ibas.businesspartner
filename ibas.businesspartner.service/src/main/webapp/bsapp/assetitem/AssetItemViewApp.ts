/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 查看应用-资产项目 */
        export class AssetItemViewApp extends ibas.BOViewService<IAssetItemViewView, bo.AssetItem> {

            /** 应用标识 */
            static APPLICATION_ID: string = "13129929-e9ae-47ce-810a-73e1eaf173f0";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_assetitem_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.AssetItem.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = AssetItemViewApp.APPLICATION_ID;
                this.name = AssetItemViewApp.APPLICATION_NAME;
                this.boCode = AssetItemViewApp.BUSINESS_OBJECT_CODE;
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
                super.viewShowed();
                if (ibas.objects.isNull(this.viewData)) {
                    // 创建编辑对象实例
                    this.viewData = new bo.AssetItem();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showAssetItem(this.viewData);
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: AssetItemEditApp = new AssetItemEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.AssetItem): void;
            /** 运行 */
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.AssetItem)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    // 添加查询条件
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.AssetItem.PROPERTY_CODE_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchAssetItem({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.AssetItem>): void {
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
        /** 视图-资产项目 */
        export interface IAssetItemViewView extends ibas.IBOViewView {
            showAssetItem(viewData: bo.AssetItem): void;

        }
        /** 资产项目连接服务映射 */
        export class AssetItemLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = AssetItemViewApp.APPLICATION_ID;
                this.name = AssetItemViewApp.APPLICATION_NAME;
                this.boCode = AssetItemViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new AssetItemViewApp();
            }
        }
    }
}

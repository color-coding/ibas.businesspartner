/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {

        /** 查看应用-供应商 */
        export class SupplierViewApp extends ibas.BOViewService<ISupplierViewView> {

            /** 应用标识 */
            static APPLICATION_ID: string = "66dda91a-5bdf-4414-affa-e3128f234cd2";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_supplier_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Supplier.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = SupplierViewApp.APPLICATION_ID;
                this.name = SupplierViewApp.APPLICATION_NAME;
                this.boCode = SupplierViewApp.BUSINESS_OBJECT_CODE;
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
                    this.viewData = new bo.Supplier();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showSupplier(this.viewData);
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: SupplierEditApp = new SupplierEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.Supplier): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.Supplier)) {
                    let data: bo.Supplier = arguments[0];
                    // 新对象直接编辑
                    if (data.isNew) {
                        that.viewData = data;
                        that.show();
                        return;
                    }
                    // 尝试重新查询编辑对象
                    let criteria: ibas.ICriteria = data.criteria();
                    if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                        // 有效的查询对象查询
                        let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                        boRepository.fetchSupplier({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.Supplier>): void {
                                let data: bo.Supplier;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.Supplier)) {
                                    // 查询到了有效数据
                                    that.viewData = data;
                                    that.show();
                                } else {
                                    // 数据重新检索无效
                                    that.messages({
                                        type: ibas.emMessageType.WARNING,
                                        message: ibas.i18n.prop("shell_data_deleted_and_created"),
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
                super.run.apply(this, arguments);
            }
            private viewData: bo.Supplier;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    criteria = new ibas.Criteria();
                    // 添加查询条件
                }
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchSupplier({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Supplier>): void {
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
        /** 视图-供应商 */
        export interface ISupplierViewView extends ibas.IBOViewView {
            showSupplier(viewData: bo.Supplier): void;
        }
        /** 供应商连接服务映射 */
        export class SupplierLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = SupplierViewApp.APPLICATION_ID;
                this.name = SupplierViewApp.APPLICATION_NAME;
                this.boCode = SupplierViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller> {
                return new SupplierViewApp();
            }
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 选择应用-业务伙伴资产 */
        export class BusinessPartnerAssetChooseApp extends ibas.BOChooseService<IBusinessPartnerAssetChooseView, bo.BusinessPartnerAsset> {

            /** 应用标识 */
            static APPLICATION_ID: string = "d054aa2b-1868-403c-b02d-65ab5863e9c7";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_businesspartnerasset_choose";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerAsset.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetChooseApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetChooseApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetChooseApp.BUSINESS_OBJECT_CODE;
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
                boRepository.fetchBusinessPartnerAsset({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAsset>): void {
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
                let app: BusinessPartnerAssetEditApp = new BusinessPartnerAssetEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
        }
        /** 视图-业务伙伴资产 */
        export interface IBusinessPartnerAssetChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.BusinessPartnerAsset[]): void;
        }
        /** 业务伙伴资产选择服务映射 */
        export class BusinessPartnerAssetChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetChooseApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetChooseApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetChooseApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.BusinessPartnerAsset> {
                return new BusinessPartnerAssetChooseApp();
            }
        }


        /** 选择应用-客户资产 */
        export class CustomerAssetChooseApp extends ibas.BOChooseService<ICustomerAssetChooseView, bo.CustomerAsset> {
            /** 应用标识 */
            static APPLICATION_ID: string = "7fcb2ccc-9a4e-4ecd-bf06-80246a996122";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_customerasset_choose";
            /** 构造函数 */
            constructor() {
                super();
                this.id = CustomerAssetChooseApp.APPLICATION_ID;
                this.name = CustomerAssetChooseApp.APPLICATION_NAME;
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
                let condition: ibas.ICondition = criteria?.conditions.firstOrDefault(c => c.alias === bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME);
                if (ibas.objects.isNull(condition)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_customer")
                    )); return;
                }
                let that: this = this;
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchCustomerAsset({
                    request: {
                        businessPartner: condition.value,
                        currency: undefined
                    },
                    onCompleted(opRslt: ibas.IOperationResult<bo.CustomerAsset>): void {
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
            protected newData(): void {
                throw new Error("Method not implemented.");
            }
        }
        /** 视图-客户资产 */
        export interface ICustomerAssetChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.CustomerAsset[]): void;
        }
        /** 客户资产选择服务映射 */
        export class CustomerAssetChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CustomerAssetChooseApp.APPLICATION_ID;
                this.name = CustomerAssetChooseApp.APPLICATION_NAME;
                this.boCode = bo.BO_CODE_CUSTOMERASSET;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.CustomerAsset> {
                return new CustomerAssetChooseApp();
            }
        }


        /** 选择应用-供应商资产 */
        export class SupplierAssetChooseApp extends ibas.BOChooseService<ISupplierAssetChooseView, bo.SupplierAsset> {
            /** 应用标识 */
            static APPLICATION_ID: string = "ecbb86dd-bd90-499a-9f20-dd989fdbe9a9";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_supplierasset_choose";
            /** 构造函数 */
            constructor() {
                super();
                this.id = SupplierAssetChooseApp.APPLICATION_ID;
                this.name = SupplierAssetChooseApp.APPLICATION_NAME;
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
                let condition: ibas.ICondition = criteria?.conditions.firstOrDefault(c => c.alias === bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME);
                if (ibas.objects.isNull(condition)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_supplier")
                    )); return;
                }
                let that: this = this;
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchSupplierAsset({
                    request: {
                        businessPartner: condition.value,
                        currency: undefined
                    },
                    onCompleted(opRslt: ibas.IOperationResult<bo.SupplierAsset>): void {
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
            protected newData(): void {
                throw new Error("Method not implemented.");
            }
        }
        /** 视图-供应商资产 */
        export interface ISupplierAssetChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SupplierAsset[]): void;
        }
        /** 供应商资产选择服务映射 */
        export class SupplierAssetChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = SupplierAssetChooseApp.APPLICATION_ID;
                this.name = SupplierAssetChooseApp.APPLICATION_NAME;
                this.boCode = bo.BO_CODE_SUPPLIERASSET;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.SupplierAsset> {
                return new SupplierAssetChooseApp();
            }
        }
    }
}

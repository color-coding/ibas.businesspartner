/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 编辑应用-业务伙伴资产 */
        export class BusinessPartnerAssetEditApp extends ibas.BOEditApplication<IBusinessPartnerAssetEditView, bo.BusinessPartnerAsset> {

            /** 应用标识 */
            static APPLICATION_ID: string = "57de219d-10d7-4505-9d75-11c9f5a23bb1";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_businesspartnerasset_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerAsset.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetEditApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetEditApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.chooseBusinessPartnerEvent = this.chooseBusinessPartner;
                this.view.chooseAssetItemEvent = this.chooseAssetItem;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.BusinessPartnerAsset();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showBusinessPartnerAsset(this.editData);
            }
            run(): void;
            run(data: bo.BusinessPartnerAsset): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.BusinessPartnerAsset)) {
                    let data: bo.BusinessPartnerAsset = arguments[0];
                    // 新对象直接编辑
                    if (data.isNew) {
                        that.editData = data;
                        that.show();
                        return;
                    }
                    // 尝试重新查询编辑对象
                    let criteria: ibas.ICriteria = data.criteria();
                    if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                        // 有效的查询对象查询
                        let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                        boRepository.fetchBusinessPartnerAsset({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAsset>): void {
                                let data: bo.BusinessPartnerAsset;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.BusinessPartnerAsset)) {
                                    // 查询到了有效数据
                                    that.editData = data;
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
                        return; // 退出
                    }
                }
                super.run.apply(this, arguments);
            }
            /** 待编辑的数据 */
            protected editData: bo.BusinessPartnerAsset;
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.saveBusinessPartnerAsset({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAsset>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                // 删除成功，释放当前对象
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                that.editData = undefined;
                            } else {
                                // 替换编辑对象
                                that.editData = opRslt.resultObjects.firstOrDefault();
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                            }
                            // 刷新当前视图
                            that.viewShowed();
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
            /** 删除数据 */
            protected deleteData(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_delete_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
                            that.editData.delete();
                            that.saveData();
                        }
                    }
                });
            }
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.BusinessPartnerAsset();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                        that.viewShowed();
                    }
                };
                if (that.editData.isDirty) {
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        title: ibas.i18n.prop(this.name),
                        message: ibas.i18n.prop("shell_data_not_saved_continue"),
                        actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                        onCompleted(action: ibas.emMessageAction): void {
                            if (action === ibas.emMessageAction.YES) {
                                createData();
                            }
                        }
                    });
                } else {
                    createData();
                }
            }
            private chooseBusinessPartner(): void {
                let that: this = this;
                if (this.editData.businessPartnerType === bo.emBusinessPartnerType.CUSTOMER) {
                    ibas.servicesManager.runChooseService<bo.Customer>({
                        boCode: bo.Customer.BUSINESS_OBJECT_CODE,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(bo.Customer.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES)
                        ],
                        onCompleted(selecteds: ibas.IList<bo.Customer>): void {
                            let selected: bo.Customer = selecteds.firstOrDefault();
                            that.editData.businessPartnerCode = selected.code;
                        }
                    });
                } else if (this.editData.businessPartnerType === bo.emBusinessPartnerType.SUPPLIER) {
                    ibas.servicesManager.runChooseService<bo.Supplier>({
                        boCode: bo.Supplier.BUSINESS_OBJECT_CODE,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(bo.Supplier.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES)
                        ],
                        onCompleted(selecteds: ibas.IList<bo.Supplier>): void {
                            let selected: bo.Supplier = selecteds.firstOrDefault();
                            that.editData.businessPartnerCode = selected.code;
                        }
                    });

                }
            }
            private chooseAssetItem(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.AssetItem>({
                    boCode: bo.AssetItem.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.AssetItem.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES)
                    ],
                    onCompleted(selecteds: ibas.IList<bo.AssetItem>): void {
                        let selected: bo.AssetItem = selecteds.firstOrDefault();
                        that.editData.assetCode = selected.code;
                        that.editData.assetGroup = selected.group;
                        that.editData.name = selected.name;
                        that.editData.code = ibas.uuids.random();
                        that.editData.amount = selected.faceAmount;
                        that.editData.times = selected.usingTimes;
                        that.editData.acquiredDate = ibas.dates.today();
                        that.editData.validDate = ibas.dates.today();
                        if (selected.validDays > 0) {
                            that.editData.invalidDate = ibas.dates.add(ibas.dates.emDifferenceType.DAY, that.editData.acquiredDate, selected.validDays);
                        }
                    }
                });
            }
        }
        /** 视图-业务伙伴资产 */
        export interface IBusinessPartnerAssetEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showBusinessPartnerAsset(data: bo.BusinessPartnerAsset): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /*** 选择业务伙伴事件 */
            chooseBusinessPartnerEvent: Function;
            /*** 选择资产项目事件 */
            chooseAssetItemEvent: Function;
        }
    }
}

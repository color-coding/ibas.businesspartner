/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 编辑应用-业务伙伴地址 */
        export class AddressEditApp extends ibas.BOEditService<IAddressEditView, bo.Address> {

            /** 应用标识 */
            static APPLICATION_ID: string = "dd0ed1eb-e658-4fef-b492-e07dd58827fb";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_address_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Address.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = AddressEditApp.APPLICATION_ID;
                this.name = AddressEditApp.APPLICATION_NAME;
                this.boCode = AddressEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.chooseBusinessPartnerEvent = this.chooseBusinessPartner;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.Address();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showAddress(this.editData);
            }
            run(): void;
            run(data: bo.Address): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.Address)) {
                    let data: bo.Address = arguments[0];
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
                        boRepository.fetchAddress({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.Address>): void {
                                let data: bo.Address;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.Address)) {
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
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.saveAddress({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Address>): void {
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
                        that.editData = new bo.Address();
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
                if (this.editData.ownerType === bo.emBusinessPartnerType.CUSTOMER) {
                    ibas.servicesManager.runChooseService<bo.Customer>({
                        boCode: bo.Customer.BUSINESS_OBJECT_CODE,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(bo.Customer.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES)
                        ],
                        onCompleted(selecteds: ibas.IList<bo.Customer>): void {
                            let selected: bo.Customer = selecteds.firstOrDefault();
                            that.editData.businessPartner = selected.code;
                        }
                    });
                } else if (this.editData.ownerType === bo.emBusinessPartnerType.SUPPLIER) {
                    ibas.servicesManager.runChooseService<bo.Supplier>({
                        boCode: bo.Supplier.BUSINESS_OBJECT_CODE,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(bo.Supplier.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES)
                        ],
                        onCompleted(selecteds: ibas.IList<bo.Supplier>): void {
                            let selected: bo.Supplier = selecteds.firstOrDefault();
                            that.editData.businessPartner = selected.code;
                        }
                    });
                } else if (this.editData.ownerType === bo.emBusinessPartnerType.LEAD) {
                    ibas.servicesManager.runChooseService<bo.Lead>({
                        boCode: bo.Lead.BUSINESS_OBJECT_CODE,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(bo.Lead.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES)
                        ],
                        onCompleted(selecteds: ibas.IList<bo.Lead>): void {
                            let selected: bo.Lead = selecteds.firstOrDefault();
                            that.editData.businessPartner = selected.code;
                        }
                    });
                }
            }
        }
        /** 视图-业务伙伴地址 */
        export interface IAddressEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showAddress(data: bo.Address): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /*** 选择业务伙伴事件 */
            chooseBusinessPartnerEvent: Function;
        }
        /** 业务伙伴地址服务映射 */
        export class AddressEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = AddressEditApp.APPLICATION_ID;
                this.name = AddressEditApp.APPLICATION_NAME;
                this.boCode = AddressEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.Address>> {
                return new AddressEditApp();
            }
        }
    }
}
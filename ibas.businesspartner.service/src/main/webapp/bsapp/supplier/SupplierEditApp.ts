/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {

        /** 编辑应用-供应商 */
        export class SupplierEditApp extends ibas.BOEditApplication<ISupplierEditView, bo.Supplier> {

            /** 应用标识 */
            static APPLICATION_ID: string = "6b19cac9-0ff3-4408-8a19-a6bedabb4fc6";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_supplier_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Supplier.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = SupplierEditApp.APPLICATION_ID;
                this.name = SupplierEditApp.APPLICATION_NAME;
                this.boCode = SupplierEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.chooseSupplierGroupEvent = this.chooseSupplierGroup;
                this.view.chooseSupplierContactPersonEvent = this.chooseSupplierContactPerson;
                this.view.chooseSupplierBillAddressEvent = this.chooseSupplierBillAddress;
                this.view.chooseSupplierShipAddressEvent = this.chooseSupplierShipAddress;
                this.view.chooseSupplierRegistrationAddress = this.chooseSupplierRegistrationAddress;
                this.view.chooseSupplierPriceListEvent = this.chooseSupplierPriceList;
                this.view.chooseSupplierWarehouseEvent = this.chooseSupplierWarehouse;
                this.view.chooseSupplierFloorListEvent = this.chooseSupplierFloorList;
                this.view.createAddressEvent = this.createAddress;
                this.view.createContactPersonEvent = this.createContactPerson;
                this.view.chooseLedgerAccountEvent = this.chooseLedgerAccount;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.Supplier();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showSupplier(this.editData);
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
                        that.editData = data;
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
                        // 开始查询数据
                        return;
                    }
                }
                super.run.apply(this, arguments);
            }
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.saveSupplier({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Supplier>): void {
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
                        that.editData = new bo.Supplier();
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
            private chooseSupplierGroup(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.BusinessPartnerGroup>({
                    boCode: bo.BusinessPartnerGroup.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.BusinessPartnerGroup.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.BusinessPartnerGroup.PROPERTY_PHANTOM_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES)
                    ],
                    onCompleted(selecteds: ibas.IList<bo.BusinessPartnerGroup>): void {
                        let selected: bo.BusinessPartnerGroup = selecteds.firstOrDefault();
                        that.editData.group = selected.code;
                    }
                });
            }
            private chooseSupplierContactPerson(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.ContactPerson>({
                    boCode: bo.ContactPerson.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.ContactPerson.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.ContactPerson.PROPERTY_OWNERTYPE_NAME, ibas.emConditionOperation.EQUAL, bo.emBusinessPartnerType.SUPPLIER),
                        new ibas.Condition(bo.ContactPerson.PROPERTY_BUSINESSPARTNER_NAME, ibas.emConditionOperation.EQUAL, this.editData.code),
                    ],
                    onCompleted(selecteds: ibas.IList<bo.ContactPerson>): void {
                        let selected: bo.ContactPerson = selecteds.firstOrDefault();
                        that.editData.contactPerson = selected.objectKey;
                        that.editData.telephone1 = selected.telephone1;
                        that.editData.telephone2 = selected.telephone2;
                        that.editData.mobilePhone = selected.mobilePhone;
                        that.editData.faxNumber = selected.fax;
                    }
                });
            }
            private chooseSupplierShipAddress(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.Address>({
                    boCode: bo.Address.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.Address.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.Address.PROPERTY_OWNERTYPE_NAME, ibas.emConditionOperation.EQUAL, bo.emBusinessPartnerType.SUPPLIER),
                        new ibas.Condition(bo.Address.PROPERTY_BUSINESSPARTNER_NAME, ibas.emConditionOperation.EQUAL, this.editData.code),
                    ],
                    onCompleted(selecteds: ibas.IList<bo.Address>): void {
                        let selected: bo.Address = selecteds.firstOrDefault();
                        that.editData.shipAddress = selected.objectKey;
                    }
                });
            }
            private chooseSupplierBillAddress(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.Address>({
                    boCode: bo.Address.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.Address.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.Address.PROPERTY_OWNERTYPE_NAME, ibas.emConditionOperation.EQUAL, bo.emBusinessPartnerType.SUPPLIER),
                        new ibas.Condition(bo.Address.PROPERTY_BUSINESSPARTNER_NAME, ibas.emConditionOperation.EQUAL, this.editData.code),
                    ],
                    onCompleted(selecteds: ibas.IList<bo.Address>): void {
                        let selected: bo.Address = selecteds.firstOrDefault();
                        that.editData.billAddress = selected.objectKey;
                    }
                });
            }
            private chooseSupplierRegistrationAddress(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.Address>({
                    boCode: bo.Address.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.Address.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.Address.PROPERTY_OWNERTYPE_NAME, ibas.emConditionOperation.EQUAL, bo.emBusinessPartnerType.SUPPLIER),
                        new ibas.Condition(bo.Address.PROPERTY_BUSINESSPARTNER_NAME, ibas.emConditionOperation.EQUAL, this.editData.code),
                    ],
                    onCompleted(selecteds: ibas.IList<bo.Address>): void {
                        let selected: bo.Address = selecteds.firstOrDefault();
                        that.editData.registrationAddress = selected.objectKey;
                    }
                });
            }
            private chooseSupplierPriceList(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IMaterialPriceList>({
                    boCode: materials.bo.BO_CODE_MATERIALPRICELIST,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.materialpricelist.create(),
                    onCompleted(selecteds: ibas.IList<materials.bo.IMaterialPriceList>): void {
                        let selected: materials.bo.IMaterialPriceList = selecteds.firstOrDefault();
                        that.editData.priceList = selected.objectKey;
                        that.editData.currency = selected.currency;
                    }
                });
            }
            private chooseSupplierWarehouse(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IWarehouse>({
                    boCode: materials.bo.BO_CODE_WAREHOUSE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.warehouse.create(),
                    onCompleted(selecteds: ibas.IList<materials.bo.IWarehouse>): void {
                        let selected: materials.bo.IWarehouse = selecteds.firstOrDefault();
                        that.editData.warehouse = selected.code;
                    }
                });
            }
            private chooseSupplierFloorList(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<materials.bo.IMaterialPriceList>({
                    boCode: materials.bo.BO_CODE_MATERIALPRICELIST,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: materials.app.conditions.materialpricelist.create(),
                    onCompleted(selecteds: ibas.IList<materials.bo.IMaterialPriceList>): void {
                        let selected: materials.bo.IMaterialPriceList = selecteds.firstOrDefault();
                        that.editData.floorList = selected.objectKey;
                    }
                });
            }
            private createContactPerson(): void {
                if (this.editData.isNew) {
                    this.messages({
                        title: this.description,
                        type: ibas.emMessageType.WARNING,
                        message: ibas.i18n.prop("shell_data_saved_first"),
                    });
                    return;
                }
                let person: bo.ContactPerson = new bo.ContactPerson();
                person.ownerType = bo.emBusinessPartnerType.SUPPLIER;
                person.businessPartner = this.editData.code;
                let app: ContactPersonEditApp = new ContactPersonEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(person);
            }
            private createAddress(): void {
                if (this.editData.isNew) {
                    this.messages({
                        title: this.description,
                        type: ibas.emMessageType.WARNING,
                        message: ibas.i18n.prop("shell_data_saved_first"),
                    });
                    return;
                }
                let address: bo.Address = new bo.Address();
                address.ownerType = bo.emBusinessPartnerType.SUPPLIER;
                address.businessPartner = this.editData.code;
                let app: AddressEditApp = new AddressEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(address);
            }
            /** 选择总账科目事件 */
            private chooseLedgerAccount(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty) {
                    throw new Error(ibas.i18n.prop("shell_data_saved_first"));
                }
                ibas.servicesManager.runApplicationService<accounting.app.ILedgerAccountSettingContract>({
                    proxy: new accounting.app.LedgerAccountSettingServiceProxy({
                        objectCode: this.editData.objectCode,
                        description: ibas.strings.format("{0} - {1}", this.editData.code, this.editData.name),
                        settings: {
                            category: ibas.objects.nameOf(this.editData),
                            conditions: [
                                new ibas.Condition(accounting.app.emLedgerAccountConditionProperty.Supplier, ibas.emConditionOperation.EQUAL, this.editData.code)
                            ]
                        }
                    }),
                });
            }

        }
        /** 视图-供应商 */
        export interface ISupplierEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSupplier(data: bo.Supplier): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择供应商组事件 */
            chooseSupplierGroupEvent: Function;
            /** 选择供应商联系人事件 */
            chooseSupplierContactPersonEvent: Function;
            /** 选择供应商送货地址事件 */
            chooseSupplierShipAddressEvent: Function;
            /** 选择供应商账单地址事件 */
            chooseSupplierBillAddressEvent: Function;
            /** 选择客供应商注册地址事件 */
            chooseSupplierRegistrationAddress: Function;
            /** 选择供应商价格清单事件 */
            chooseSupplierPriceListEvent: Function;
            /** 选择供应商仓库事件 */
            chooseSupplierWarehouseEvent: Function;
            /** 选择客户底价清单事件 */
            chooseSupplierFloorListEvent: Function;
            /** 创建联系人 */
            createContactPersonEvent: Function;
            /** 创建地址 */
            createAddressEvent: Function;
            /** 选择总账科目事件 */
            chooseLedgerAccountEvent: Function;
        }
    }
}
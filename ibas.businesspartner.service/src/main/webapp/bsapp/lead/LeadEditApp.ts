/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 编辑应用-潜在潜在客户 */
        export class LeadEditApp extends ibas.BOEditService<ILeadEditView, bo.Lead> {
            /** 应用标识 */
            static APPLICATION_ID: string = "6902ff4c-ab5a-432e-9375-4de367111ba5";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_lead_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Lead.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = LeadEditApp.APPLICATION_ID;
                this.name = LeadEditApp.APPLICATION_NAME;
                this.boCode = LeadEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.chooseLeadGroupEvent = this.chooseLeadGroup;
                this.view.chooseLeadContactPersonEvent = this.chooseLeadContactPerson;
                this.view.chooseLeadBillAddressEvent = this.chooseLeadBillAddress;
                this.view.chooseLeadShipAddressEvent = this.chooseLeadShipAddress;
                this.view.chooseLeadRegistrationAddress = this.chooseLeadRegistrationAddress;
                this.view.chooseLeadPriceListEvent = this.chooseLeadPriceList;
                this.view.chooseLeadFloorListEvent = this.chooseLeadFloorList;
                this.view.createAddressEvent = this.createAddress;
                this.view.createContactPersonEvent = this.createContactPerson;
                this.view.turnToCustomerEvent = this.turnToCustomer;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.Lead();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showLead(this.editData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.Lead): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.Lead)) {
                    let data: bo.Lead = arguments[0];
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
                        boRepository.fetchLead({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.Lead>): void {
                                let data: bo.Lead;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.Lead)) {
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
                boRepository.saveLead({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Lead>): void {
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
                        that.editData = new bo.Lead();
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
            private chooseLeadGroup(): void {
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
            private chooseLeadContactPerson(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.ContactPerson>({
                    boCode: bo.ContactPerson.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.ContactPerson.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.ContactPerson.PROPERTY_OWNERTYPE_NAME, ibas.emConditionOperation.EQUAL, bo.emBusinessPartnerType.LEAD),
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
            private chooseLeadShipAddress(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.Address>({
                    boCode: bo.Address.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.Address.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.Address.PROPERTY_OWNERTYPE_NAME, ibas.emConditionOperation.EQUAL, bo.emBusinessPartnerType.LEAD),
                        new ibas.Condition(bo.Address.PROPERTY_BUSINESSPARTNER_NAME, ibas.emConditionOperation.EQUAL, this.editData.code),
                    ],
                    onCompleted(selecteds: ibas.IList<bo.Address>): void {
                        let selected: bo.Address = selecteds.firstOrDefault();
                        that.editData.shipAddress = selected.objectKey;
                    }
                });
            }
            private chooseLeadBillAddress(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.Address>({
                    boCode: bo.Address.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.Address.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.Address.PROPERTY_OWNERTYPE_NAME, ibas.emConditionOperation.EQUAL, bo.emBusinessPartnerType.LEAD),
                        new ibas.Condition(bo.Address.PROPERTY_BUSINESSPARTNER_NAME, ibas.emConditionOperation.EQUAL, this.editData.code),
                    ],
                    onCompleted(selecteds: ibas.IList<bo.Address>): void {
                        let selected: bo.Address = selecteds.firstOrDefault();
                        that.editData.billAddress = selected.objectKey;
                    }
                });
            }
            private chooseLeadRegistrationAddress(): void {
                let that: this = this;
                ibas.servicesManager.runChooseService<bo.Address>({
                    boCode: bo.Address.BUSINESS_OBJECT_CODE,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: [
                        new ibas.Condition(bo.Address.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        new ibas.Condition(bo.Address.PROPERTY_OWNERTYPE_NAME, ibas.emConditionOperation.EQUAL, bo.emBusinessPartnerType.LEAD),
                        new ibas.Condition(bo.Address.PROPERTY_BUSINESSPARTNER_NAME, ibas.emConditionOperation.EQUAL, this.editData.code),
                    ],
                    onCompleted(selecteds: ibas.IList<bo.Address>): void {
                        let selected: bo.Address = selecteds.firstOrDefault();
                        that.editData.registrationAddress = selected.objectKey;
                    }
                });
            }
            private chooseLeadPriceList(): void {
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
            private chooseLeadFloorList(): void {
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
            private createContactPerson(property?: string): void {
                if (this.editData.isNew) {
                    this.messages({
                        title: this.description,
                        type: ibas.emMessageType.WARNING,
                        message: ibas.i18n.prop("shell_data_saved_first"),
                    });
                    return;
                }
                let person: bo.ContactPerson = new bo.ContactPerson();
                person.ownerType = bo.emBusinessPartnerType.LEAD;
                person.businessPartner = this.editData.code;
                ibas.servicesManager.runEditService<bo.ContactPerson>({
                    boCode: person.objectCode,
                    editData: person,
                    onCompleted: (data: any) => {
                        if (data instanceof bo.ContactPerson) {
                            if (bo.Customer.PROPERTY_CONTACTPERSON_NAME === property) {
                                this.editData.contactPerson = data.objectKey;
                            }
                        }
                    }
                });
            }
            private createAddress(property?: string): void {
                if (this.editData.isNew) {
                    this.messages({
                        title: this.description,
                        type: ibas.emMessageType.WARNING,
                        message: ibas.i18n.prop("shell_data_saved_first"),
                    });
                    return;
                }
                let address: bo.Address = new bo.Address();
                address.ownerType = bo.emBusinessPartnerType.LEAD;
                address.businessPartner = this.editData.code;
                ibas.servicesManager.runEditService<bo.Address>({
                    boCode: address.objectCode,
                    editData: address,
                    onCompleted: (data: any) => {
                        if (data instanceof bo.Address) {
                            if (bo.Customer.PROPERTY_BILLADDRESS_NAME === property) {
                                this.editData.billAddress = data.objectKey;
                            } else if (bo.Customer.PROPERTY_REGISTRATIONADDRESS_NAME === property) {
                                this.editData.registrationAddress = data.objectKey;
                            } else if (bo.Customer.PROPERTY_SHIPADDRESS_NAME === property) {
                                this.editData.shipAddress = data.objectKey;
                            }
                        }
                    }
                });
            }
            /** 转为客户 */
            private turnToCustomer(): void {
                let customer: bo.Customer = new bo.Customer();
                customer.code = this.editData.code;
                customer.lead = this.editData.code;
                ibas.businessobjects.properties.copy(this.editData, customer, [
                    "CreateDate", "CreateTime", "UpdateDate", "UpdateTime", "LogInst", "CreateUserSign",
                    "UpdateUserSign", "CreateActionId", "UpdateActionId", "Referenced", "Canceled",
                    "Deleted", "ApprovalStatus", "LineStatus", "Status", "DocumentStatus", "DataSource",
                    "Period", "DataOwner", "Organization", "Series"
                ]);
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.result = 1;
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = initialfantasy.bo.BOInformation.PROPERTY_CODE_NAME;
                condition.value = customer.objectCode;
                let boRepository: initialfantasy.bo.BORepositoryInitialFantasy = new initialfantasy.bo.BORepositoryInitialFantasy();
                boRepository.fetchBOInformation({
                    criteria: criteria,
                    onCompleted: (opRslt) => {
                        for (let boItem of opRslt.resultObjects) {
                            for (let ptyItem of boItem.boPropertyInformations) {
                                if (ibas.strings.isWith(ptyItem.property, "U_", undefined)) {
                                    let field: ibas.IUserField = this.editData.userFields.get(ptyItem.property);
                                    if (!ibas.objects.isNull(field)) {
                                        customer.userFields.register(field.name, field.valueType).value = field.value;
                                    }
                                }
                            }
                        }
                        let app: CustomerEditApp = new CustomerEditApp();
                        app.navigation = this.navigation;
                        app.viewShower = this.viewShower;
                        app.run(customer);
                    }
                });
            }
        }
        /** 视图-潜在客户 */
        export interface ILeadEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showLead(data: bo.Lead): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择潜在客户组事件 */
            chooseLeadGroupEvent: Function;
            /** 选择潜在客户联系人事件 */
            chooseLeadContactPersonEvent: Function;
            /** 选择潜在客户送货地址事件 */
            chooseLeadShipAddressEvent: Function;
            /** 选择潜在客户账单地址事件 */
            chooseLeadBillAddressEvent: Function;
            /** 选择潜在客户注册地址事件 */
            chooseLeadRegistrationAddress: Function;
            /** 选择潜在客户价格清单事件 */
            chooseLeadPriceListEvent: Function;
            /** 选择潜在客户底价清单事件 */
            chooseLeadFloorListEvent: Function;
            /** 选择潜在客户仓库事件 */
            chooseLeadWarehouseEvent: Function;
            /** 创建联系人 */
            createContactPersonEvent: Function;
            /** 创建地址 */
            createAddressEvent: Function;
            /** 转为客户 */
            turnToCustomerEvent: Function;
        }
        /** 潜在潜在客户辑服务映射 */
        export class LeadEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = LeadEditApp.APPLICATION_ID;
                this.name = LeadEditApp.APPLICATION_NAME;
                this.boCode = LeadEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.Lead>> {
                return new LeadEditApp();
            }
        }
    }
}
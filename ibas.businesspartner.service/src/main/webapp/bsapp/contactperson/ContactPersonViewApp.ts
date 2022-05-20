/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 查看应用-业务伙伴联系人 */
        export class ContactPersonViewApp extends ibas.BOViewService<IContactPersonViewView, bo.ContactPerson> {
            /** 应用标识 */
            static APPLICATION_ID: string = "1c6bb429-b7c0-450f-8395-afe113c12f66";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_contactperson_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.ContactPerson.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = ContactPersonViewApp.APPLICATION_ID;
                this.name = ContactPersonViewApp.APPLICATION_NAME;
                this.boCode = ContactPersonViewApp.BUSINESS_OBJECT_CODE;
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
                // 视图加载完成，基类方法更新地址
                super.viewShowed();
                if (ibas.objects.isNull(this.viewData)) {
                    // 创建编辑对象实例
                    this.viewData = new bo.ContactPerson();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showContactPerson(this.viewData);
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: ContactPersonEditApp = new ContactPersonEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.ContactPerson): void;
            /** 运行 */
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.ContactPerson)) {
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
                    let condition: ibas.ICondition;
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    condition = criteria.conditions.create();
                    condition.alias = bo.ContactPerson.PROPERTY_OBJECTKEY_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchContactPerson({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.ContactPerson>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            if (!that.isViewShowed()) {
                                // 没显示视图，先显示
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
        /** 视图-业务伙伴联系人 */
        export interface IContactPersonViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showContactPerson(data: bo.ContactPerson): void;

        }
        /** 业务伙伴联系人连接服务映射 */
        export class ContactPersonLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = ContactPersonViewApp.APPLICATION_ID;
                this.name = ContactPersonViewApp.APPLICATION_NAME;
                this.boCode = ContactPersonViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new ContactPersonViewApp();
            }
        }
    }
}

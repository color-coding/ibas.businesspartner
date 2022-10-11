/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 查看应用-付款条款 */
        export class PaymentTermViewApp extends ibas.BOViewService<IPaymentTermViewView, bo.PaymentTerm> {
            /** 应用标识 */
            static APPLICATION_ID: string = "82f3249a-3711-4a78-bcfc-6705b5359e89";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_paymentterm_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.PaymentTerm.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = PaymentTermViewApp.APPLICATION_ID;
                this.name = PaymentTermViewApp.APPLICATION_NAME;
                this.boCode = PaymentTermViewApp.BUSINESS_OBJECT_CODE;
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
                    this.viewData = new bo.PaymentTerm();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showPaymentTerm(this.viewData);
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: PaymentTermEditApp = new PaymentTermEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.PaymentTerm): void;
            /** 运行 */
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.PaymentTerm)) {
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
                    condition.alias = bo.PaymentTerm.PROPERTY_CODE_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchPaymentTerm({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.PaymentTerm>): void {
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
        /** 视图-付款条款 */
        export interface IPaymentTermViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showPaymentTerm(data: bo.PaymentTerm): void;

        }
        /** 付款条款连接服务映射 */
        export class PaymentTermLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PaymentTermViewApp.APPLICATION_ID;
                this.name = PaymentTermViewApp.APPLICATION_NAME;
                this.boCode = PaymentTermViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new PaymentTermViewApp();
            }
        }
    }
}

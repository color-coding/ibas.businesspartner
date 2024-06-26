/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 编辑应用-业务伙伴资产日记账 */
        export class BusinessPartnerAssetJournalEditApp extends ibas.BOEditApplication<IBusinessPartnerAssetJournalEditView, bo.BusinessPartnerAssetJournal> {

            /** 应用标识 */
            static APPLICATION_ID: string = "a6e746d4-7dea-4067-baa0-2dcbbf29bbf8";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_businesspartnerassetjournal_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerAssetJournal.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetJournalEditApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetJournalEditApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetJournalEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
                this.warningClose = false;
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
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.BusinessPartnerAssetJournal();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showBusinessPartnerAssetJournal(this.editData);
            }
            run(): void;
            run(data: bo.BusinessPartnerAssetJournal): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.BusinessPartnerAssetJournal)) {
                    let data: bo.BusinessPartnerAssetJournal = arguments[0];
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
                        boRepository.fetchBusinessPartnerAssetJournal({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAssetJournal>): void {
                                let data: bo.BusinessPartnerAssetJournal;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.BusinessPartnerAssetJournal)) {
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
                boRepository.saveBusinessPartnerAssetJournal({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAssetJournal>): void {
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
        }
        /** 视图-业务伙伴资产日记账 */
        export interface IBusinessPartnerAssetJournalEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showBusinessPartnerAssetJournal(data: bo.BusinessPartnerAssetJournal): void;
        }
        /** 权限元素-业务伙伴资产日记账编辑 */
        export const ELEMENT_BUSINESSPARTNER_ASSET_JOURNAL_EDIT: ibas.IElement = {
            id: BusinessPartnerAssetJournalEditApp.APPLICATION_ID,
            name: BusinessPartnerAssetJournalEditApp.APPLICATION_NAME,
        };
    }
}

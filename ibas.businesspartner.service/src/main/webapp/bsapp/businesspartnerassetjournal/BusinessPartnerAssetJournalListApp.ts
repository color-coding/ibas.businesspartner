/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        /** 列表应用-业务伙伴资产日记账 */
        export class BusinessPartnerAssetJournalListApp extends ibas.BOListApplication<IBusinessPartnerAssetJournalListView, bo.BusinessPartnerAssetJournal> {

            /** 应用标识 */
            static APPLICATION_ID: string = "f5c698aa-474d-4e1b-bfae-fff99b6c3ad5";
            /** 应用名称 */
            static APPLICATION_NAME: string = "businesspartner_app_businesspartnerassetjournal_list";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.BusinessPartnerAssetJournal.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetJournalListApp.APPLICATION_ID;
                this.name = BusinessPartnerAssetJournalListApp.APPLICATION_NAME;
                this.boCode = BusinessPartnerAssetJournalListApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
                this.view.deleteDataEvent = this.deleteData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                boRepository.fetchBusinessPartnerAssetJournal({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAssetJournal>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (!that.isViewShowed()) {
                                // 没显示视图，先显示
                                that.show();
                            }
                            if (opRslt.resultObjects.length === 0) {
                                that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                            }
                            that.view.showData(opRslt.resultObjects);
                            that.busy(false);
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 新建数据 */
            protected newData(): void {
                let app: BusinessPartnerAssetJournalEditApp = new BusinessPartnerAssetJournalEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run();
            }
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.BusinessPartnerAssetJournal): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_view")
                    ));
                    return;
                }
                let app: BusinessPartnerAssetJournalViewApp = new BusinessPartnerAssetJournalViewApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data);

            }
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.BusinessPartnerAssetJournal): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_edit")
                    ));
                    return;
                }
                let app: BusinessPartnerAssetJournalEditApp = new BusinessPartnerAssetJournalEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(data);
            }
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.BusinessPartnerAssetJournal | bo.BusinessPartnerAssetJournal[]): void {
                // 检查目标数据
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_delete")
                    ));
                    return;
                }
                let beDeleteds: ibas.ArrayList<bo.BusinessPartnerAssetJournal> = new ibas.ArrayList<bo.BusinessPartnerAssetJournal>();
                if (data instanceof Array ) {
                    for (let item of data) {
                        item.delete();
                        beDeleteds.add(item);
                    }
                } else {
                    data.delete();
                    beDeleteds.add(data);
                }
                // 没有选择删除的对象
                if (beDeleteds.length === 0) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("shell_data_delete")
                    ));
                    return;
                }
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_whether_to_delete", beDeleteds.length),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
                            try {
                                let boRepository: bo.BORepositoryBusinessPartner = new bo.BORepositoryBusinessPartner();
                                let saveMethod: Function = function(beSaved: bo.BusinessPartnerAssetJournal):void {
                                    boRepository.saveBusinessPartnerAssetJournal({
                                        beSaved: beSaved,
                                        onCompleted(opRslt: ibas.IOperationResult<bo.BusinessPartnerAssetJournal>): void {
                                            try {
                                                if (opRslt.resultCode !== 0) {
                                                    throw new Error(opRslt.message);
                                                }
                                                // 保存下一个数据
                                                let index: number = beDeleteds.indexOf(beSaved) + 1;
                                                if (index > 0 && index < beDeleteds.length) {
                                                    saveMethod(beDeleteds[index]);
                                                } else {
                                                    // 处理完成
                                                    that.busy(false);
                                                    that.messages(ibas.emMessageType.SUCCESS,
                                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                                }
                                            } catch (error) {
                                                that.messages(ibas.emMessageType.ERROR,
                                                    ibas.i18n.prop("shell_data_delete_error", beSaved, error.message));
                                            }
                                        }
                                    });
                                    that.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_deleting", beSaved));
                                };
                                that.busy(true);
                                // 开始保存
                                saveMethod(beDeleteds.firstOrDefault());
                            } catch (error) {
                                that.busy(false);
                                that.messages(error);
                            }
                        }
                    }
                });
            }
            /** 获取服务的契约 */
            protected getServiceProxies(): ibas.IServiceProxy<ibas.IServiceContract>[] {
                return [
                    new ibas.BOListServiceProxy({
                        data: this.view.getSelecteds(),
                        converter: new bo.DataConverter()
                    })
                ];
            }
        }
        /** 视图-业务伙伴资产日记账 */
        export interface IBusinessPartnerAssetJournalListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.BusinessPartnerAssetJournal[]): void;
            /** 获取选择的数据 */
            getSelecteds(): bo.BusinessPartnerAssetJournal[];
        }
    }
}
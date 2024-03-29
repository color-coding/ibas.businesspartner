/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 业务仓库 */
        export interface IBORepositoryBusinessPartner extends ibas.IBORepositoryApplication {

            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            /**
             * 查询 业务伙伴地址
             * @param fetcher 查询者
             */
            fetchAddress(fetcher: ibas.IFetchCaller<bo.IAddress>): void;
            /**
             * 保存 业务伙伴地址
             * @param saver 保存者
             */
            saveAddress(saver: ibas.ISaveCaller<bo.IAddress>): void;
            /**
             * 查询 业务伙伴组
             * @param fetcher 查询者
             */
            fetchBusinessPartnerGroup(fetcher: ibas.IFetchCaller<bo.IBusinessPartnerGroup>): void;
            /**
             * 保存 业务伙伴组
             * @param saver 保存者
             */
            saveBusinessPartnerGroup(saver: ibas.ISaveCaller<bo.IBusinessPartnerGroup>): void;

            /**
             * 查询 业务伙伴联系人
             * @param fetcher 查询者
             */
            fetchContactPerson(fetcher: ibas.IFetchCaller<bo.IContactPerson>): void;
            /**
             * 保存 业务伙伴联系人
             * @param saver 保存者
             */
            saveContactPerson(saver: ibas.ISaveCaller<bo.IContactPerson>): void;

            /**
             * 查询 客户
             * @param fetcher 查询者
             */
            fetchCustomer(fetcher: ibas.IFetchCaller<bo.ICustomer>): void;
            /**
             * 保存 客户
             * @param saver 保存者
             */
            saveCustomer(saver: ibas.ISaveCaller<bo.ICustomer>): void;

            /**
             * 查询 供应商
             * @param fetcher 查询者
             */
            fetchSupplier(fetcher: ibas.IFetchCaller<bo.ISupplier>): void;
            /**
             * 保存 供应商
             * @param saver 保存者
             */
            saveSupplier(saver: ibas.ISaveCaller<bo.ISupplier>): void;
            /**
             * 查询 资产项目
             * @param fetcher 查询者
             */
            fetchAssetItem(fetcher: ibas.IFetchCaller<bo.IAssetItem>): void;
            /**
             * 保存 资产项目
             * @param saver 保存者
             */
            saveAssetItem(saver: ibas.ISaveCaller<bo.IAssetItem>): void;
            /**
             * 查询 业务伙伴资产
             * @param fetcher 查询者
             */
            fetchBusinessPartnerAsset(fetcher: ibas.IFetchCaller<bo.IBusinessPartnerAsset>): void;
            /**
             * 保存 业务伙伴资产
             * @param saver 保存者
             */
            saveBusinessPartnerAsset(saver: ibas.ISaveCaller<bo.IBusinessPartnerAsset>): void;
            /**
             * 查询 业务伙伴资产日记账
             * @param fetcher 查询者
             */
            fetchBusinessPartnerAssetJournal(fetcher: ibas.IFetchCaller<bo.IBusinessPartnerAssetJournal>): void;
            /**
             * 保存 业务伙伴资产日记账
             * @param saver 保存者
             */
            saveBusinessPartnerAssetJournal(saver: ibas.ISaveCaller<bo.IBusinessPartnerAssetJournal>): void;

            /**
             * 查询 客户资产
             * @param fetcher 查询者
             */
            fetchCustomerAsset(fetcher: IAssetRequester<ICustomerAsset>): void;

            /**
             * 查询 供应商资产
             * @param fetcher 查询者
             */
            fetchSupplierAsset(fetcher: IAssetRequester<ISupplierAsset>): void;
            /**
             * 查询 潜在客户
             * @param fetcher 查询者
             */
            fetchLead(fetcher: ibas.IFetchCaller<bo.ILead>): void;
            /**
             * 保存 潜在客户
             * @param saver 保存者
             */
            saveLead(saver: ibas.ISaveCaller<bo.ILead>): void;
            /**
             * 查询 付款条款
             * @param fetcher 查询者
             */
            fetchPaymentTerm(fetcher: ibas.IFetchCaller<bo.IPaymentTerm>): void;
            /**
             * 保存 付款条款
             * @param saver 保存者
             */
            savePaymentTerm(saver: ibas.ISaveCaller<bo.IPaymentTerm>): void;
            /**
             * 查询 合同/协议
             * @param fetcher 查询者
             */
            fetchAgreement(fetcher: ibas.IFetchCaller<bo.IAgreement>): void;
            /**
             * 保存 合同/协议
             * @param saver 保存者
             */
            saveAgreement(saver: ibas.ISaveCaller<bo.IAgreement>): void;
        }

        /**
         * 查询调用者
         */
        export interface IAssetRequester<T extends bo.ICustomerAsset | bo.ISupplierAsset> extends ibas.IMethodCaller<T> {
            /** 请求 */
            request: IAssetRequest;
        }
    }
}

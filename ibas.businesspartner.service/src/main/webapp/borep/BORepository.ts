/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 业务对象仓库 */
        export class BORepositoryBusinessPartner extends ibas.BORepositoryApplication implements IBORepositoryBusinessPartner {

            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter {
                return new DataConverter;
            }
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryUploadAjax = new ibas.FileRepositoryUploadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.upload("upload", caller);
            }
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void {
                if (!this.address.endsWith("/")) { this.address += "/"; }
                let fileRepository: ibas.FileRepositoryDownloadAjax = new ibas.FileRepositoryDownloadAjax();
                fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
                fileRepository.token = this.token;
                fileRepository.converter = this.createConverter();
                fileRepository.download("download", caller);
            }

            /**
             * 查询 业务伙伴地址
             * @param fetcher 查询者
             */
            fetchAddress(fetcher: ibas.IFetchCaller<bo.Address>): void {
                super.fetch(bo.Address.name, fetcher);
            }
            /**
             * 保存 业务伙伴地址
             * @param saver 保存者
             */
            saveAddress(saver: ibas.ISaveCaller<bo.Address>): void {
                super.save(bo.Address.name, saver);
            }
            /**
             * 查询 业务伙伴组
             * @param fetcher 查询者
             */
            fetchBusinessPartnerGroup(fetcher: ibas.IFetchCaller<bo.BusinessPartnerGroup>): void {
                super.fetch(bo.BusinessPartnerGroup.name, fetcher);
            }
            /**
             * 保存 业务伙伴组
             * @param saver 保存者
             */
            saveBusinessPartnerGroup(saver: ibas.ISaveCaller<bo.BusinessPartnerGroup>): void {
                super.save(bo.BusinessPartnerGroup.name, saver);
            }

            /**
             * 查询 业务伙伴联系人
             * @param fetcher 查询者
             */
            fetchContactPerson(fetcher: ibas.IFetchCaller<bo.ContactPerson>): void {
                super.fetch(bo.ContactPerson.name, fetcher);
            }
            /**
             * 保存 业务伙伴联系人
             * @param saver 保存者
             */
            saveContactPerson(saver: ibas.ISaveCaller<bo.ContactPerson>): void {
                super.save(bo.ContactPerson.name, saver);
            }

            /**
             * 查询 客户
             * @param fetcher 查询者
             */
            fetchCustomer(fetcher: ibas.IFetchCaller<bo.Customer>): void {
                super.fetch(bo.Customer.name, fetcher);
            }
            /**
             * 保存 客户
             * @param saver 保存者
             */
            saveCustomer(saver: ibas.ISaveCaller<bo.Customer>): void {
                super.save(bo.Customer.name, saver);
            }

            /**
             * 查询 供应商
             * @param fetcher 查询者
             */
            fetchSupplier(fetcher: ibas.IFetchCaller<bo.Supplier>): void {
                super.fetch(bo.Supplier.name, fetcher);
            }
            /**
             * 保存 供应商
             * @param saver 保存者
             */
            saveSupplier(saver: ibas.ISaveCaller<bo.Supplier>): void {
                super.save(bo.Supplier.name, saver);
            }

            /**
             * 查询 资产项目
             * @param fetcher 查询者
             */
            fetchAssetItem(fetcher: ibas.IFetchCaller<bo.AssetItem>): void {
                super.fetch(bo.AssetItem.name, fetcher);
            }
            /**
             * 保存 资产项目
             * @param saver 保存者
             */
            saveAssetItem(saver: ibas.ISaveCaller<bo.AssetItem>): void {
                super.save(bo.AssetItem.name, saver);
            }

            /**
             * 查询 业务伙伴资产
             * @param fetcher 查询者
             */
            fetchBusinessPartnerAsset(fetcher: ibas.IFetchCaller<bo.BusinessPartnerAsset>): void {
                super.fetch(bo.BusinessPartnerAsset.name, fetcher);
            }
            /**
             * 保存 业务伙伴资产
             * @param saver 保存者
             */
            saveBusinessPartnerAsset(saver: ibas.ISaveCaller<bo.BusinessPartnerAsset>): void {
                super.save(bo.BusinessPartnerAsset.name, saver);
            }

            /**
             * 查询 业务伙伴资产日记账
             * @param fetcher 查询者
             */
            fetchBusinessPartnerAssetJournal(fetcher: ibas.IFetchCaller<bo.BusinessPartnerAssetJournal>): void {
                super.fetch(bo.BusinessPartnerAssetJournal.name, fetcher);
            }
            /**
             * 保存 业务伙伴资产日记账
             * @param saver 保存者
             */
            saveBusinessPartnerAssetJournal(saver: ibas.ISaveCaller<bo.BusinessPartnerAssetJournal>): void {
                super.save(bo.BusinessPartnerAssetJournal.name, saver);
            }

            /**
             * 查询 业务伙伴资产
             * @param fetcher 查询者
             */
            fetchCustomerAsset(fetcher: IAssetRequester): void {
                let boRepository: ibas.BORepositoryAjax = new ibas.BORepositoryAjax();
                boRepository.address = this.address;
                boRepository.token = this.token;
                boRepository.converter = this.createConverter();
                let method: string =
                    ibas.strings.format("fetchCustomerAsset?token={0}", this.token);
                let data: string = JSON.stringify(this.createConverter().convert(fetcher.request, method));
                boRepository.callRemoteMethod(method, data, (opRslt) => {
                    fetcher.onCompleted.call(ibas.objects.isNull(fetcher.caller) ? fetcher : fetcher.caller, opRslt);
                });
            }
            /**
             * 查询 潜在客户
             * @param fetcher 查询者
             */
            fetchLead(fetcher: ibas.IFetchCaller<bo.Lead>): void {
                super.fetch(bo.Lead.name, fetcher);
            }
            /**
             * 保存 潜在客户
             * @param saver 保存者
             */
            saveLead(saver: ibas.ISaveCaller<bo.Lead>): void {
                super.save(bo.Lead.name, saver);
            }
            /**
             * 查询 付款条款
             * @param fetcher 查询者
             */
            fetchPaymentTerm(fetcher: ibas.IFetchCaller<bo.PaymentTerm>): void {
                super.fetch(bo.PaymentTerm.name, fetcher);
            }
            /**
             * 保存 付款条款
             * @param saver 保存者
             */
            savePaymentTerm(saver: ibas.ISaveCaller<bo.PaymentTerm>): void {
                super.save(bo.PaymentTerm.name, saver);
            }
            /**
             * 查询 合同/协议
             * @param fetcher 查询者
             */
            fetchAgreement(fetcher: ibas.IFetchCaller<bo.Agreement>): void {
                super.fetch(bo.Agreement.name, fetcher);
            }
            /**
             * 保存 合同/协议
             * @param saver 保存者
             */
            saveAgreement(saver: ibas.ISaveCaller<bo.Agreement>): void {
                super.save(bo.Agreement.name, saver);
            }
        }
    }
}
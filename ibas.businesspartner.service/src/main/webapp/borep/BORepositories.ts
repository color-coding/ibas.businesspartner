/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import { IBORepositoryBusinessPartner, BO_REPOSITORY_BUSINESSPARTNER } from "../api/index";
import { DataConverter4bp } from "./DataConverters";

/** 业务对象仓库 */
export class BORepositoryBusinessPartner extends ibas.BORepositoryApplication implements IBORepositoryBusinessPartner {

    /** 创建此模块的后端与前端数据的转换者 */
    protected createConverter(): ibas.IDataConverter {
        return new DataConverter4bp;
    }
    /**
     * 上传文件
     * @param caller 调用者
     */
    upload(caller: ibas.UploadFileCaller<ibas.FileData>): void {
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
    download(caller: ibas.DownloadFileCaller<Blob>): void {
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
    fetchAddress(fetcher: ibas.FetchCaller<bo.Address>): void {
        super.fetch(bo.Address.name, fetcher);
    }
    /**
     * 保存 业务伙伴地址
     * @param saver 保存者
     */
    saveAddress(saver: ibas.SaveCaller<bo.Address>): void {
        super.save(bo.Address.name, saver);
    }
    /**
     * 查询 业务伙伴组
     * @param fetcher 查询者
     */
    fetchBusinessPartnerGroup(fetcher: ibas.FetchCaller<bo.BusinessPartnerGroup>): void {
        super.fetch(bo.BusinessPartnerGroup.name, fetcher);
    }
    /**
     * 保存 业务伙伴组
     * @param saver 保存者
     */
    saveBusinessPartnerGroup(saver: ibas.SaveCaller<bo.BusinessPartnerGroup>): void {
        super.save(bo.BusinessPartnerGroup.name, saver);
    }

    /**
     * 查询 业务伙伴联系人
     * @param fetcher 查询者
     */
    fetchContactPerson(fetcher: ibas.FetchCaller<bo.ContactPerson>): void {
        super.fetch(bo.ContactPerson.name, fetcher);
    }
    /**
     * 保存 业务伙伴联系人
     * @param saver 保存者
     */
    saveContactPerson(saver: ibas.SaveCaller<bo.ContactPerson>): void {
        super.save(bo.ContactPerson.name, saver);
    }

    /**
     * 查询 客户
     * @param fetcher 查询者
     */
    fetchCustomer(fetcher: ibas.FetchCaller<bo.Customer>): void {
        super.fetch(bo.Customer.name, fetcher);
    }
    /**
     * 保存 客户
     * @param saver 保存者
     */
    saveCustomer(saver: ibas.SaveCaller<bo.Customer>): void {
        super.save(bo.Customer.name, saver);
    }

    /**
     * 查询 供应商
     * @param fetcher 查询者
     */
    fetchSupplier(fetcher: ibas.FetchCaller<bo.Supplier>): void {
        super.fetch(bo.Supplier.name, fetcher);
    }
    /**
     * 保存 供应商
     * @param saver 保存者
     */
    saveSupplier(saver: ibas.SaveCaller<bo.Supplier>): void {
        super.save(bo.Supplier.name, saver);
    }

}
// 注册业务对象仓库到工厂
ibas.boFactory.register(BO_REPOSITORY_BUSINESSPARTNER, BORepositoryBusinessPartner);

package org.colorcoding.ibas.businesspartner.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.*;
import org.colorcoding.ibas.businesspartner.bo.contactperson.*;
import org.colorcoding.ibas.businesspartner.bo.customer.*;
import org.colorcoding.ibas.businesspartner.bo.supplier.*;

/**
* BusinessPartner仓库应用
*/
public interface IBORepositoryBusinessPartnerApp extends IBORepositoryApplication {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴组
     * @param criteria 查询
     * @return 操作结果
     */
    IOperationResult<IBusinessPartnerGroup> fetchBusinessPartnerGroup(ICriteria criteria);

    /**
     * 保存-业务伙伴组
     * @param bo 对象实例
     * @return 操作结果
     */
    IOperationResult<IBusinessPartnerGroup> saveBusinessPartnerGroup(IBusinessPartnerGroup bo);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴联系人
     * @param criteria 查询
     * @return 操作结果
     */
    IOperationResult<IContactPerson> fetchContactPerson(ICriteria criteria);

    /**
     * 保存-业务伙伴联系人
     * @param bo 对象实例
     * @return 操作结果
     */
    IOperationResult<IContactPerson> saveContactPerson(IContactPerson bo);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴-客户
     * @param criteria 查询
     * @return 操作结果
     */
    IOperationResult<ICustomer> fetchCustomer(ICriteria criteria);

    /**
     * 保存-业务伙伴-客户
     * @param bo 对象实例
     * @return 操作结果
     */
    IOperationResult<ICustomer> saveCustomer(ICustomer bo);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴-供应商
     * @param criteria 查询
     * @return 操作结果
     */
    IOperationResult<ISupplier> fetchSupplier(ICriteria criteria);

    /**
     * 保存-业务伙伴-供应商
     * @param bo 对象实例
     * @return 操作结果
     */
    IOperationResult<ISupplier> saveSupplier(ISupplier bo);

    //--------------------------------------------------------------------------------------------//

}

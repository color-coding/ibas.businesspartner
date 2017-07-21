package org.colorcoding.ibas.businesspartner.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.*;
import org.colorcoding.ibas.businesspartner.bo.contactperson.*;
import org.colorcoding.ibas.businesspartner.bo.customer.*;
import org.colorcoding.ibas.businesspartner.bo.supplier.*;

/**
* BusinessPartner仓库服务
*/
public interface IBORepositoryBusinessPartnerSvc extends IBORepositorySmartService {


    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴组
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<BusinessPartnerGroup> fetchBusinessPartnerGroup(ICriteria criteria, String token);

    /**
     * 保存-业务伙伴组
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<BusinessPartnerGroup> saveBusinessPartnerGroup(BusinessPartnerGroup bo, String token);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴联系人
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<ContactPerson> fetchContactPerson(ICriteria criteria, String token);

    /**
     * 保存-业务伙伴联系人
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<ContactPerson> saveContactPerson(ContactPerson bo, String token);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴-客户
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Customer> fetchCustomer(ICriteria criteria, String token);

    /**
     * 保存-业务伙伴-客户
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Customer> saveCustomer(Customer bo, String token);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴-供应商
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Supplier> fetchSupplier(ICriteria criteria, String token);

    /**
     * 保存-业务伙伴-供应商
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Supplier> saveSupplier(Supplier bo, String token);

    //--------------------------------------------------------------------------------------------//

}

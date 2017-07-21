package org.colorcoding.ibas.businesspartner.service.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.cxf.WebServicePath;
import org.colorcoding.ibas.businesspartner.repository.*;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.*;
import org.colorcoding.ibas.businesspartner.bo.contactperson.*;
import org.colorcoding.ibas.businesspartner.bo.customer.*;
import org.colorcoding.ibas.businesspartner.bo.supplier.*;

/**
* BusinessPartner 数据服务JSON
*/
@WebService
@WebServicePath("data")
public class DataService extends BORepositoryBusinessPartner {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴组
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<BusinessPartnerGroup> fetchBusinessPartnerGroup(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchBusinessPartnerGroup(criteria, token);
    }

    /**
     * 保存-业务伙伴组
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<BusinessPartnerGroup> saveBusinessPartnerGroup(@WebParam(name = "bo") BusinessPartnerGroup bo, @WebParam(name = "token") String token) {
        return super.saveBusinessPartnerGroup(bo, token);
    }

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴联系人
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<ContactPerson> fetchContactPerson(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchContactPerson(criteria, token);
    }

    /**
     * 保存-业务伙伴联系人
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<ContactPerson> saveContactPerson(@WebParam(name = "bo") ContactPerson bo, @WebParam(name = "token") String token) {
        return super.saveContactPerson(bo, token);
    }

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴-客户
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Customer> fetchCustomer(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchCustomer(criteria, token);
    }

    /**
     * 保存-业务伙伴-客户
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Customer> saveCustomer(@WebParam(name = "bo") Customer bo, @WebParam(name = "token") String token) {
        return super.saveCustomer(bo, token);
    }

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-业务伙伴-供应商
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Supplier> fetchSupplier(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchSupplier(criteria, token);
    }

    /**
     * 保存-业务伙伴-供应商
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Supplier> saveSupplier(@WebParam(name = "bo") Supplier bo, @WebParam(name = "token") String token) {
        return super.saveSupplier(bo, token);
    }

    //--------------------------------------------------------------------------------------------//

}

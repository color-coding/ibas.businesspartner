package org.colorcoding.ibas.businesspartner.service.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.businesspartner.MyConfiguration;
import org.colorcoding.ibas.businesspartner.bo.address.Address;
import org.colorcoding.ibas.businesspartner.bo.agreement.Agreement;
import org.colorcoding.ibas.businesspartner.bo.assetitem.AssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.BusinessPartnerGroup;
import org.colorcoding.ibas.businesspartner.bo.contactperson.ContactPerson;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.lead.Lead;
import org.colorcoding.ibas.businesspartner.bo.paymentterm.PaymentTerm;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.data.AssetRequest;
import org.colorcoding.ibas.businesspartner.data.CustomerAsset;
import org.colorcoding.ibas.businesspartner.data.SupplierAsset;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;

/**
 * BusinessPartner 数据服务JSON
 */
@Path("data")
public class DataService extends BORepositoryBusinessPartner {
	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴地址
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchAddress")
	public OperationResult<Address> fetchAddress(Criteria criteria, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.fetchAddress(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-业务伙伴地址
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveAddress")
	public OperationResult<Address> saveAddress(Address bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveAddress(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴组
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBusinessPartnerGroup")
	public OperationResult<BusinessPartnerGroup> fetchBusinessPartnerGroup(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchBusinessPartnerGroup(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-业务伙伴组
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBusinessPartnerGroup")
	public OperationResult<BusinessPartnerGroup> saveBusinessPartnerGroup(BusinessPartnerGroup bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveBusinessPartnerGroup(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴联系人
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchContactPerson")
	public OperationResult<ContactPerson> fetchContactPerson(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchContactPerson(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-业务伙伴联系人
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveContactPerson")
	public OperationResult<ContactPerson> saveContactPerson(ContactPerson bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveContactPerson(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-客户
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCustomer")
	public OperationResult<Customer> fetchCustomer(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchCustomer(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-客户
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveCustomer")
	public OperationResult<Customer> saveCustomer(Customer bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveCustomer(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-供应商
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchSupplier")
	public OperationResult<Supplier> fetchSupplier(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchSupplier(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-供应商
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveSupplier")
	public OperationResult<Supplier> saveSupplier(Supplier bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveSupplier(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-资产项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchAssetItem")
	public OperationResult<AssetItem> fetchAssetItem(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchAssetItem(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-资产项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveAssetItem")
	public OperationResult<AssetItem> saveAssetItem(AssetItem bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveAssetItem(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴资产
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBusinessPartnerAsset")
	public OperationResult<BusinessPartnerAsset> fetchBusinessPartnerAsset(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchBusinessPartnerAsset(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-业务伙伴资产
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBusinessPartnerAsset")
	public OperationResult<BusinessPartnerAsset> saveBusinessPartnerAsset(BusinessPartnerAsset bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveBusinessPartnerAsset(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴资产日记账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBusinessPartnerAssetJournal")
	public OperationResult<BusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchBusinessPartnerAssetJournal(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-业务伙伴资产日记账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBusinessPartnerAssetJournal")
	public OperationResult<BusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(BusinessPartnerAssetJournal bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveBusinessPartnerAssetJournal(bo, MyConfiguration.optToken(authorization, token));
	}
	// --------------------------------------------------------------------------------------------//

	/**
	 * 查询-客户资产
	 * 
	 * @param request 请求
	 * @param token   口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCustomerAsset")
	public OperationResult<CustomerAsset> fetchCustomerAsset(AssetRequest request,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchCustomerAsset(request, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 查询-供应商资产
	 * 
	 * @param request 请求
	 * @param token   口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchSupplierAsset")
	public OperationResult<SupplierAsset> fetchSupplierAsset(AssetRequest request,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchSupplierAsset(request, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-潜在客户
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchLead")
	public OperationResult<Lead> fetchLead(Criteria criteria, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.fetchLead(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-潜在客户
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveLead")
	public OperationResult<Lead> saveLead(Lead bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveLead(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-付款条款
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPaymentTerm")
	public OperationResult<PaymentTerm> fetchPaymentTerm(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchPaymentTerm(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-付款条款
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePaymentTerm")
	public OperationResult<PaymentTerm> savePaymentTerm(PaymentTerm bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.savePaymentTerm(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-合同/协议
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchAgreement")
	public OperationResult<Agreement> fetchAgreement(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchAgreement(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-合同/协议
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveAgreement")
	public OperationResult<Agreement> saveAgreement(Agreement bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveAgreement(bo, MyConfiguration.optToken(authorization, token));
	}
	// --------------------------------------------------------------------------------------------//

}

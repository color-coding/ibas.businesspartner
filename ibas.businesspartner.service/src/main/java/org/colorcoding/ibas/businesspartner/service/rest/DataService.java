package org.colorcoding.ibas.businesspartner.service.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.businesspartner.bo.address.Address;
import org.colorcoding.ibas.businesspartner.bo.assetitem.AssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.BusinessPartnerGroup;
import org.colorcoding.ibas.businesspartner.bo.contactperson.ContactPerson;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.data.AssetRequest;
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
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchAddress")
	public OperationResult<Address> fetchAddress(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchAddress(criteria, token);
	}

	/**
	 * 保存-业务伙伴地址
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveAddress")
	public OperationResult<Address> saveAddress(Address bo, @QueryParam("token") String token) {
		return super.saveAddress(bo, token);
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴组
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBusinessPartnerGroup")
	public OperationResult<BusinessPartnerGroup> fetchBusinessPartnerGroup(Criteria criteria,
			@QueryParam("token") String token) {
		return super.fetchBusinessPartnerGroup(criteria, token);
	}

	/**
	 * 保存-业务伙伴组
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBusinessPartnerGroup")
	public OperationResult<BusinessPartnerGroup> saveBusinessPartnerGroup(BusinessPartnerGroup bo,
			@QueryParam("token") String token) {
		return super.saveBusinessPartnerGroup(bo, token);
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴联系人
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchContactPerson")
	public OperationResult<ContactPerson> fetchContactPerson(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchContactPerson(criteria, token);
	}

	/**
	 * 保存-业务伙伴联系人
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveContactPerson")
	public OperationResult<ContactPerson> saveContactPerson(ContactPerson bo, @QueryParam("token") String token) {
		return super.saveContactPerson(bo, token);
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-客户
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCustomer")
	public OperationResult<Customer> fetchCustomer(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchCustomer(criteria, token);
	}

	/**
	 * 保存-客户
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveCustomer")
	public OperationResult<Customer> saveCustomer(Customer bo, @QueryParam("token") String token) {
		return super.saveCustomer(bo, token);
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-供应商
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchSupplier")
	public OperationResult<Supplier> fetchSupplier(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchSupplier(criteria, token);
	}

	/**
	 * 保存-供应商
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveSupplier")
	public OperationResult<Supplier> saveSupplier(Supplier bo, @QueryParam("token") String token) {
		return super.saveSupplier(bo, token);
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-资产项目
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchAssetItem")
	public OperationResult<AssetItem> fetchAssetItem(Criteria criteria, @QueryParam("token") String token) {
		return super.fetchAssetItem(criteria, token);
	}

	/**
	 * 保存-资产项目
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveAssetItem")
	public OperationResult<AssetItem> saveAssetItem(AssetItem bo, @QueryParam("token") String token) {
		return super.saveAssetItem(bo, token);
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴资产
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBusinessPartnerAsset")
	public OperationResult<BusinessPartnerAsset> fetchBusinessPartnerAsset(Criteria criteria,
			@QueryParam("token") String token) {
		return super.fetchBusinessPartnerAsset(criteria, token);
	}

	/**
	 * 保存-业务伙伴资产
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBusinessPartnerAsset")
	public OperationResult<BusinessPartnerAsset> saveBusinessPartnerAsset(BusinessPartnerAsset bo,
			@QueryParam("token") String token) {
		return super.saveBusinessPartnerAsset(bo, token);
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴资产日记账
	 * 
	 * @param criteria
	 *            查询
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchBusinessPartnerAssetJournal")
	public OperationResult<BusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(Criteria criteria,
			@QueryParam("token") String token) {
		return super.fetchBusinessPartnerAssetJournal(criteria, token);
	}

	/**
	 * 保存-业务伙伴资产日记账
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveBusinessPartnerAssetJournal")
	public OperationResult<BusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(BusinessPartnerAssetJournal bo,
			@QueryParam("token") String token) {
		return super.saveBusinessPartnerAssetJournal(bo, token);
	}
	// --------------------------------------------------------------------------------------------//

	/**
	 * 查询-客户资产
	 * 
	 * @param request
	 *            请求
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchCustomerAsset")
	public OperationResult<BusinessPartnerAsset> fetchCustomerAsset(AssetRequest request,
			@QueryParam("token") String token) {
		return super.fetchCustomerAsset(request, token);
	}
	// --------------------------------------------------------------------------------------------//

}

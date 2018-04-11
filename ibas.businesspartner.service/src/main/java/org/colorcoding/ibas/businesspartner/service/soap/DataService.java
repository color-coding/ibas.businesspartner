package org.colorcoding.ibas.businesspartner.service.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.cxf.WebServicePath;
import org.colorcoding.ibas.businesspartner.bo.address.Address;
import org.colorcoding.ibas.businesspartner.bo.assetitem.AssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.BusinessPartnerGroup;
import org.colorcoding.ibas.businesspartner.bo.contactperson.ContactPerson;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.data.AssetRequest;
import org.colorcoding.ibas.businesspartner.data.CustomerAsset;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;

/**
 * BusinessPartner 数据服务JSON
 */
@WebService
@WebServicePath("data")
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
	@WebMethod
	public OperationResult<Address> fetchAddress(@WebParam(name = "criteria") Criteria criteria,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<Address> saveAddress(@WebParam(name = "bo") Address bo,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<BusinessPartnerGroup> fetchBusinessPartnerGroup(
			@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<BusinessPartnerGroup> saveBusinessPartnerGroup(
			@WebParam(name = "bo") BusinessPartnerGroup bo, @WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<ContactPerson> fetchContactPerson(@WebParam(name = "criteria") Criteria criteria,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<ContactPerson> saveContactPerson(@WebParam(name = "bo") ContactPerson bo,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<Customer> fetchCustomer(@WebParam(name = "criteria") Criteria criteria,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<Customer> saveCustomer(@WebParam(name = "bo") Customer bo,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<Supplier> fetchSupplier(@WebParam(name = "criteria") Criteria criteria,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<Supplier> saveSupplier(@WebParam(name = "bo") Supplier bo,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<AssetItem> fetchAssetItem(@WebParam(name = "criteria") Criteria criteria,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<AssetItem> saveAssetItem(@WebParam(name = "bo") AssetItem bo,
			@WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<BusinessPartnerAsset> fetchBusinessPartnerAsset(
			@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<BusinessPartnerAsset> saveBusinessPartnerAsset(
			@WebParam(name = "bo") BusinessPartnerAsset bo, @WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<BusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(
			@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<BusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(
			@WebParam(name = "bo") BusinessPartnerAssetJournal bo, @WebParam(name = "token") String token) {
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
	@WebMethod
	public OperationResult<CustomerAsset> fetchCustomerAsset(@WebParam(name = "request") AssetRequest request,
			@WebParam(name = "token") String token) {
		return super.fetchCustomerAsset(request, token);
	}
	// --------------------------------------------------------------------------------------------//
}

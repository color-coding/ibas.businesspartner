package org.colorcoding.ibas.businesspartner.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositorySmartService;
import org.colorcoding.ibas.businesspartner.bo.address.Address;
import org.colorcoding.ibas.businesspartner.bo.assetitem.AssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.BusinessPartnerGroup;
import org.colorcoding.ibas.businesspartner.bo.contactperson.ContactPerson;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;

/**
 * BusinessPartner仓库服务
 */
public interface IBORepositoryBusinessPartnerSvc extends IBORepositorySmartService {

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
	OperationResult<Address> fetchAddress(ICriteria criteria, String token);

	/**
	 * 保存-业务伙伴地址
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<Address> saveAddress(Address bo, String token);

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
	OperationResult<BusinessPartnerGroup> fetchBusinessPartnerGroup(ICriteria criteria, String token);

	/**
	 * 保存-业务伙伴组
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<BusinessPartnerGroup> saveBusinessPartnerGroup(BusinessPartnerGroup bo, String token);

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
	OperationResult<ContactPerson> fetchContactPerson(ICriteria criteria, String token);

	/**
	 * 保存-业务伙伴联系人
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<ContactPerson> saveContactPerson(ContactPerson bo, String token);

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
	OperationResult<Customer> fetchCustomer(ICriteria criteria, String token);

	/**
	 * 保存-客户
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<Customer> saveCustomer(Customer bo, String token);

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
	OperationResult<Supplier> fetchSupplier(ICriteria criteria, String token);

	/**
	 * 保存-供应商
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<Supplier> saveSupplier(Supplier bo, String token);

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
	OperationResult<AssetItem> fetchAssetItem(ICriteria criteria, String token);

	/**
	 * 保存-资产项目
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<AssetItem> saveAssetItem(AssetItem bo, String token);

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
	OperationResult<BusinessPartnerAsset> fetchBusinessPartnerAsset(ICriteria criteria, String token);

	/**
	 * 保存-业务伙伴资产
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<BusinessPartnerAsset> saveBusinessPartnerAsset(BusinessPartnerAsset bo, String token);

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
	OperationResult<BusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(ICriteria criteria, String token);

	/**
	 * 保存-业务伙伴资产日记账
	 * 
	 * @param bo
	 *            对象实例
	 * @param token
	 *            口令
	 * @return 操作结果
	 */
	OperationResult<BusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(BusinessPartnerAssetJournal bo,
			String token);

	// --------------------------------------------------------------------------------------------//

}

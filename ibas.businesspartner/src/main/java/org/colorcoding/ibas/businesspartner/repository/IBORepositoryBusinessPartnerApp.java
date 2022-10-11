package org.colorcoding.ibas.businesspartner.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositoryApplication;
import org.colorcoding.ibas.businesspartner.bo.address.IAddress;
import org.colorcoding.ibas.businesspartner.bo.assetitem.IAssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.IBusinessPartnerGroup;
import org.colorcoding.ibas.businesspartner.bo.contactperson.IContactPerson;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.lead.ILead;
import org.colorcoding.ibas.businesspartner.bo.paymentterm.IPaymentTerm;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.data.AssetRequest;
import org.colorcoding.ibas.businesspartner.data.CustomerAsset;

/**
 * BusinessPartner仓库应用
 */
public interface IBORepositoryBusinessPartnerApp extends IBORepositoryApplication {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴地址
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IAddress> fetchAddress(ICriteria criteria);

	/**
	 * 保存-业务伙伴地址
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IAddress> saveAddress(IAddress bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴组
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IBusinessPartnerGroup> fetchBusinessPartnerGroup(ICriteria criteria);

	/**
	 * 保存-业务伙伴组
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IBusinessPartnerGroup> saveBusinessPartnerGroup(IBusinessPartnerGroup bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴联系人
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IContactPerson> fetchContactPerson(ICriteria criteria);

	/**
	 * 保存-业务伙伴联系人
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IContactPerson> saveContactPerson(IContactPerson bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-客户
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ICustomer> fetchCustomer(ICriteria criteria);

	/**
	 * 保存-客户
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ICustomer> saveCustomer(ICustomer bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-供应商
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ISupplier> fetchSupplier(ICriteria criteria);

	/**
	 * 保存-供应商
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ISupplier> saveSupplier(ISupplier bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-资产项目
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IAssetItem> fetchAssetItem(ICriteria criteria);

	/**
	 * 保存-资产项目
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IAssetItem> saveAssetItem(IAssetItem bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴资产
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IBusinessPartnerAsset> fetchBusinessPartnerAsset(ICriteria criteria);

	/**
	 * 保存-业务伙伴资产
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IBusinessPartnerAsset> saveBusinessPartnerAsset(IBusinessPartnerAsset bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴资产日记账
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IBusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(ICriteria criteria);

	/**
	 * 保存-业务伙伴资产日记账
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IBusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(IBusinessPartnerAssetJournal bo);

	// --------------------------------------------------------------------------------------------//

	/**
	 * 查询-客户资产
	 * 
	 * @param request 请求
	 * @return 操作结果
	 */
	IOperationResult<CustomerAsset> fetchCustomerAsset(AssetRequest request);

	// --------------------------------------------------------------------------------------------//

	/**
	 * 查询-潜在客户
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<ILead> fetchLead(ICriteria criteria);

	/**
	 * 保存-潜在客户
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<ILead> saveLead(ILead bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-付款条款
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPaymentTerm> fetchPaymentTerm(ICriteria criteria);

	/**
	 * 保存-付款条款
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPaymentTerm> savePaymentTerm(IPaymentTerm bo);

	// --------------------------------------------------------------------------------------------//
}

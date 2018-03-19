package org.colorcoding.ibas.businesspartner.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.repository.BORepositoryServiceApplication;
import org.colorcoding.ibas.businesspartner.bo.address.Address;
import org.colorcoding.ibas.businesspartner.bo.address.IAddress;
import org.colorcoding.ibas.businesspartner.bo.assetitem.AssetItem;
import org.colorcoding.ibas.businesspartner.bo.assetitem.IAssetItem;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAssetJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.BusinessPartnerGroup;
import org.colorcoding.ibas.businesspartner.bo.businesspartnergroup.IBusinessPartnerGroup;
import org.colorcoding.ibas.businesspartner.bo.contactperson.ContactPerson;
import org.colorcoding.ibas.businesspartner.bo.contactperson.IContactPerson;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;

/**
 * BusinessPartner仓库
 */
public class BORepositoryBusinessPartner extends BORepositoryServiceApplication
		implements IBORepositoryBusinessPartnerSvc, IBORepositoryBusinessPartnerApp {
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
	public OperationResult<Address> fetchAddress(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Address.class);
	}

	/**
	 * 查询-业务伙伴地址（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IAddress> fetchAddress(ICriteria criteria) {
		return new OperationResult<IAddress>(this.fetchAddress(criteria, this.getUserToken()));
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
	public OperationResult<Address> saveAddress(Address bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴地址（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IAddress> saveAddress(IAddress bo) {
		return new OperationResult<IAddress>(this.saveAddress((Address) bo, this.getUserToken()));
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
	public OperationResult<BusinessPartnerGroup> fetchBusinessPartnerGroup(ICriteria criteria, String token) {
		return super.fetch(criteria, token, BusinessPartnerGroup.class);
	}

	/**
	 * 查询-业务伙伴组（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerGroup> fetchBusinessPartnerGroup(ICriteria criteria) {
		return new OperationResult<IBusinessPartnerGroup>(
				this.fetchBusinessPartnerGroup(criteria, this.getUserToken()));
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
	public OperationResult<BusinessPartnerGroup> saveBusinessPartnerGroup(BusinessPartnerGroup bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴组（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerGroup> saveBusinessPartnerGroup(IBusinessPartnerGroup bo) {
		return new OperationResult<IBusinessPartnerGroup>(
				this.saveBusinessPartnerGroup((BusinessPartnerGroup) bo, this.getUserToken()));
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
	public OperationResult<ContactPerson> fetchContactPerson(ICriteria criteria, String token) {
		return super.fetch(criteria, token, ContactPerson.class);
	}

	/**
	 * 查询-业务伙伴联系人（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IContactPerson> fetchContactPerson(ICriteria criteria) {
		return new OperationResult<IContactPerson>(this.fetchContactPerson(criteria, this.getUserToken()));
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
	public OperationResult<ContactPerson> saveContactPerson(ContactPerson bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴联系人（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IContactPerson> saveContactPerson(IContactPerson bo) {
		return new OperationResult<IContactPerson>(this.saveContactPerson((ContactPerson) bo, this.getUserToken()));
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
	public OperationResult<Customer> fetchCustomer(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Customer.class);
	}

	/**
	 * 查询-客户（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<ICustomer> fetchCustomer(ICriteria criteria) {
		return new OperationResult<ICustomer>(this.fetchCustomer(criteria, this.getUserToken()));
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
	public OperationResult<Customer> saveCustomer(Customer bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-客户（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICustomer> saveCustomer(ICustomer bo) {
		return new OperationResult<ICustomer>(this.saveCustomer((Customer) bo, this.getUserToken()));
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
	public OperationResult<Supplier> fetchSupplier(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Supplier.class);
	}

	/**
	 * 查询-供应商（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<ISupplier> fetchSupplier(ICriteria criteria) {
		return new OperationResult<ISupplier>(this.fetchSupplier(criteria, this.getUserToken()));
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
	public OperationResult<Supplier> saveSupplier(Supplier bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-供应商（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ISupplier> saveSupplier(ISupplier bo) {
		return new OperationResult<ISupplier>(this.saveSupplier((Supplier) bo, this.getUserToken()));
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
	public OperationResult<AssetItem> fetchAssetItem(ICriteria criteria, String token) {
		return super.fetch(criteria, token, AssetItem.class);
	}

	/**
	 * 查询-资产项目（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IAssetItem> fetchAssetItem(ICriteria criteria) {
		return new OperationResult<IAssetItem>(this.fetchAssetItem(criteria, this.getUserToken()));
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
	public OperationResult<AssetItem> saveAssetItem(AssetItem bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-资产项目（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IAssetItem> saveAssetItem(IAssetItem bo) {
		return new OperationResult<IAssetItem>(this.saveAssetItem((AssetItem) bo, this.getUserToken()));
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
	public OperationResult<BusinessPartnerAsset> fetchBusinessPartnerAsset(ICriteria criteria, String token) {
		return super.fetch(criteria, token, BusinessPartnerAsset.class);
	}

	/**
	 * 查询-业务伙伴资产（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerAsset> fetchBusinessPartnerAsset(ICriteria criteria) {
		return new OperationResult<IBusinessPartnerAsset>(
				this.fetchBusinessPartnerAsset(criteria, this.getUserToken()));
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
	public OperationResult<BusinessPartnerAsset> saveBusinessPartnerAsset(BusinessPartnerAsset bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴资产（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerAsset> saveBusinessPartnerAsset(IBusinessPartnerAsset bo) {
		return new OperationResult<IBusinessPartnerAsset>(
				this.saveBusinessPartnerAsset((BusinessPartnerAsset) bo, this.getUserToken()));
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
	public OperationResult<BusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(ICriteria criteria,
			String token) {
		return super.fetch(criteria, token, BusinessPartnerAssetJournal.class);
	}

	/**
	 * 查询-业务伙伴资产日记账（提前设置用户口令）
	 * 
	 * @param criteria
	 *            查询
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(ICriteria criteria) {
		return new OperationResult<IBusinessPartnerAssetJournal>(
				this.fetchBusinessPartnerAssetJournal(criteria, this.getUserToken()));
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
	public OperationResult<BusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(BusinessPartnerAssetJournal bo,
			String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴资产日记账（提前设置用户口令）
	 * 
	 * @param bo
	 *            对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(
			IBusinessPartnerAssetJournal bo) {
		return new OperationResult<IBusinessPartnerAssetJournal>(
				this.saveBusinessPartnerAssetJournal((BusinessPartnerAssetJournal) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//

}

package org.colorcoding.ibas.businesspartner.repository;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.common.ISort;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.repository.BORepositoryServiceApplication;
import org.colorcoding.ibas.businesspartner.bo.address.Address;
import org.colorcoding.ibas.businesspartner.bo.address.IAddress;
import org.colorcoding.ibas.businesspartner.bo.agreement.Agreement;
import org.colorcoding.ibas.businesspartner.bo.agreement.IAgreement;
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
import org.colorcoding.ibas.businesspartner.bo.internalreconciliation.IInternalReconciliation;
import org.colorcoding.ibas.businesspartner.bo.internalreconciliation.InternalReconciliation;
import org.colorcoding.ibas.businesspartner.bo.lead.ILead;
import org.colorcoding.ibas.businesspartner.bo.lead.Lead;
import org.colorcoding.ibas.businesspartner.bo.paymentterm.IPaymentTerm;
import org.colorcoding.ibas.businesspartner.bo.paymentterm.PaymentTerm;
import org.colorcoding.ibas.businesspartner.bo.supplier.ISupplier;
import org.colorcoding.ibas.businesspartner.bo.supplier.Supplier;
import org.colorcoding.ibas.businesspartner.data.AssetRequest;
import org.colorcoding.ibas.businesspartner.data.CustomerAsset;
import org.colorcoding.ibas.businesspartner.data.SupplierAsset;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * BusinessPartner仓库
 */
public class BORepositoryBusinessPartner extends BORepositoryServiceApplication
		implements IBORepositoryBusinessPartnerSvc, IBORepositoryBusinessPartnerApp {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询条件字段-业务伙伴编码
	 */
	public static final String CONDITION_ALIAS_BUSINESS_PARTNER_CODE = "BusinessPartnerCode";
	/**
	 * 查询条件字段-业务伙伴名称
	 */
	public static final String CONDITION_ALIAS_BUSINESS_PARTNER_NAME = "BusinessPartnerName";

	/**
	 * 替换业务伙伴查询条件
	 * 
	 * @param criteria
	 */
	private ICriteria flushBusinessPartnerCriteria(ICriteria criteria, String token) {
		if (criteria == null) {
			return criteria;
		}
		ICondition condition;
		Criteria bpCriteria = new Criteria();
		for (ICondition item : criteria.getConditions()) {
			if (CONDITION_ALIAS_BUSINESS_PARTNER_CODE.equalsIgnoreCase(item.getAlias())) {
				condition = bpCriteria.getConditions().create();
				condition.setAlias(Customer.PROPERTY_CODE.getName());
				condition.setOperation(item.getOperation());
				condition.setValue(item.getValue());
				condition.setRelationship(item.getRelationship());
			} else if (CONDITION_ALIAS_BUSINESS_PARTNER_NAME.equalsIgnoreCase(item.getAlias())) {
				condition = bpCriteria.getConditions().create();
				condition.setAlias(Customer.PROPERTY_NAME.getName());
				condition.setOperation(item.getOperation());
				condition.setValue(item.getValue());
				condition.setRelationship(item.getRelationship());
			}
		}
		if (!bpCriteria.getConditions().isEmpty()) {
			Criteria cCriteria = new Criteria();
			for (Customer item : this.fetchCustomer(bpCriteria, token).getResultObjects()) {
				condition = cCriteria.getConditions().create();
				condition.setAlias("CardCode");
				condition.setValue(item.getCode());
				if (cCriteria.getConditions().size() > 1) {
					condition.setRelationship(ConditionRelationship.OR);
				}
			}
			for (Supplier item : this.fetchSupplier(bpCriteria, token).getResultObjects()) {
				condition = cCriteria.getConditions().create();
				condition.setAlias("CardCode");
				condition.setValue(item.getCode());
				if (cCriteria.getConditions().size() > 1) {
					condition.setRelationship(ConditionRelationship.OR);
				}
			}
			if (cCriteria.getConditions().size() > 1) {
				condition = cCriteria.getConditions().firstOrDefault();
				condition.setBracketOpen(condition.getBracketOpen() + 1);
				condition = cCriteria.getConditions().lastOrDefault();
				condition.setBracketClose(condition.getBracketClose() + 1);
			}
			if (cCriteria.getConditions().isEmpty()) {
				// 没有条件则替换为常满足
				condition = cCriteria.getConditions().create();
				condition.setAlias("CardCode");
				condition.setOperation(ConditionOperation.IS_NULL);
			}
			// 替换业务伙伴查询为编码
			Criteria nCriteria = new Criteria();
			nCriteria.setResultCount(criteria.getResultCount());
			for (ICondition item : criteria.getConditions()) {
				if (CONDITION_ALIAS_BUSINESS_PARTNER_CODE.equalsIgnoreCase(item.getAlias())
						|| CONDITION_ALIAS_BUSINESS_PARTNER_NAME.equalsIgnoreCase(item.getAlias())) {
					ICriteria tCriteria = cCriteria.clone();
					// 处理括号
					ICondition tCondition = tCriteria.getConditions().firstOrDefault();
					tCondition.setRelationship(item.getRelationship());
					tCondition.setBracketOpen(tCondition.getBracketOpen() + item.getBracketOpen());
					tCondition = tCriteria.getConditions().lastOrDefault();
					tCondition.setBracketClose(tCondition.getBracketClose() + item.getBracketClose());
					// 替换
					for (ICondition tItem : tCriteria.getConditions()) {
						nCriteria.getConditions().add(tItem);
					}
				} else {
					nCriteria.getConditions().add(item);
				}
			}
			for (ISort item : criteria.getSorts()) {
				if (CONDITION_ALIAS_BUSINESS_PARTNER_CODE.equalsIgnoreCase(item.getAlias())
						|| CONDITION_ALIAS_BUSINESS_PARTNER_NAME.equalsIgnoreCase(item.getAlias())) {
					ISort tSort = nCriteria.getSorts().create();
					tSort.setAlias("CardCode");
					tSort.setSortType(item.getSortType());
				} else {
					nCriteria.getSorts().add(item);
				}
			}
			return nCriteria;
		}
		return criteria;
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴地址
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Address> fetchAddress(ICriteria criteria, String token) {
		return super.fetch(this.flushBusinessPartnerCriteria(criteria, token), token, Address.class);
	}

	/**
	 * 查询-业务伙伴地址（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IAddress> fetchAddress(ICriteria criteria) {
		return new OperationResult<IAddress>(this.fetchAddress(criteria, this.getUserToken()));
	}

	/**
	 * 保存-业务伙伴地址
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Address> saveAddress(Address bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴地址（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IAddress> saveAddress(IAddress bo) {
		return new OperationResult<IAddress>(this.saveAddress((Address) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴组
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<BusinessPartnerGroup> fetchBusinessPartnerGroup(ICriteria criteria, String token) {
		return super.fetch(criteria, token, BusinessPartnerGroup.class);
	}

	/**
	 * 查询-业务伙伴组（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerGroup> fetchBusinessPartnerGroup(ICriteria criteria) {
		return new OperationResult<IBusinessPartnerGroup>(
				this.fetchBusinessPartnerGroup(criteria, this.getUserToken()));
	}

	/**
	 * 保存-业务伙伴组
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<BusinessPartnerGroup> saveBusinessPartnerGroup(BusinessPartnerGroup bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴组（提前设置用户口令）
	 * 
	 * @param bo 对象实例
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
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<ContactPerson> fetchContactPerson(ICriteria criteria, String token) {
		return super.fetch(this.flushBusinessPartnerCriteria(criteria, token), token, ContactPerson.class);
	}

	/**
	 * 查询-业务伙伴联系人（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IContactPerson> fetchContactPerson(ICriteria criteria) {
		return new OperationResult<IContactPerson>(this.fetchContactPerson(criteria, this.getUserToken()));
	}

	/**
	 * 保存-业务伙伴联系人
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<ContactPerson> saveContactPerson(ContactPerson bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴联系人（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IContactPerson> saveContactPerson(IContactPerson bo) {
		return new OperationResult<IContactPerson>(this.saveContactPerson((ContactPerson) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-客户
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Customer> fetchCustomer(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Customer.class);
	}

	/**
	 * 查询-客户（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ICustomer> fetchCustomer(ICriteria criteria) {
		return new OperationResult<ICustomer>(this.fetchCustomer(criteria, this.getUserToken()));
	}

	/**
	 * 保存-客户
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Customer> saveCustomer(Customer bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-客户（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ICustomer> saveCustomer(ICustomer bo) {
		return new OperationResult<ICustomer>(this.saveCustomer((Customer) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-供应商
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Supplier> fetchSupplier(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Supplier.class);
	}

	/**
	 * 查询-供应商（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ISupplier> fetchSupplier(ICriteria criteria) {
		return new OperationResult<ISupplier>(this.fetchSupplier(criteria, this.getUserToken()));
	}

	/**
	 * 保存-供应商
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Supplier> saveSupplier(Supplier bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-供应商（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ISupplier> saveSupplier(ISupplier bo) {
		return new OperationResult<ISupplier>(this.saveSupplier((Supplier) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-资产项目
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<AssetItem> fetchAssetItem(ICriteria criteria, String token) {
		return super.fetch(criteria, token, AssetItem.class);
	}

	/**
	 * 查询-资产项目（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IAssetItem> fetchAssetItem(ICriteria criteria) {
		return new OperationResult<IAssetItem>(this.fetchAssetItem(criteria, this.getUserToken()));
	}

	/**
	 * 保存-资产项目
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<AssetItem> saveAssetItem(AssetItem bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-资产项目（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IAssetItem> saveAssetItem(IAssetItem bo) {
		return new OperationResult<IAssetItem>(this.saveAssetItem((AssetItem) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-业务伙伴资产
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<BusinessPartnerAsset> fetchBusinessPartnerAsset(ICriteria criteria, String token) {
		return super.fetch(this.flushBusinessPartnerCriteria(criteria, token), token, BusinessPartnerAsset.class);
	}

	/**
	 * 查询-业务伙伴资产（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerAsset> fetchBusinessPartnerAsset(ICriteria criteria) {
		return new OperationResult<IBusinessPartnerAsset>(
				this.fetchBusinessPartnerAsset(criteria, this.getUserToken()));
	}

	/**
	 * 保存-业务伙伴资产
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<BusinessPartnerAsset> saveBusinessPartnerAsset(BusinessPartnerAsset bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴资产（提前设置用户口令）
	 * 
	 * @param bo 对象实例
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
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<BusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(ICriteria criteria,
			String token) {
		return super.fetch(criteria, token, BusinessPartnerAssetJournal.class);
	}

	/**
	 * 查询-业务伙伴资产日记账（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerAssetJournal> fetchBusinessPartnerAssetJournal(ICriteria criteria) {
		return new OperationResult<IBusinessPartnerAssetJournal>(
				this.fetchBusinessPartnerAssetJournal(criteria, this.getUserToken()));
	}

	/**
	 * 保存-业务伙伴资产日记账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<BusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(BusinessPartnerAssetJournal bo,
			String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-业务伙伴资产日记账（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IBusinessPartnerAssetJournal> saveBusinessPartnerAssetJournal(
			IBusinessPartnerAssetJournal bo) {
		return new OperationResult<IBusinessPartnerAssetJournal>(
				this.saveBusinessPartnerAssetJournal((BusinessPartnerAssetJournal) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	@Override
	public IOperationResult<CustomerAsset> fetchCustomerAsset(AssetRequest request) {
		return this.fetchCustomerAsset(request, this.getUserToken());
	}

	@Override
	public OperationResult<CustomerAsset> fetchCustomerAsset(AssetRequest request, String token) {
		try {
			this.setCurrentUser(token);
			if (request == null) {
				throw new Exception(I18N.prop("msg_bobas_invalid_data"));
			}
			if (request.getBusinessPartner() == null || request.getBusinessPartner().isEmpty()) {
				throw new Exception(I18N.prop("msg_bobas_invalid_data"));
			}
			// 查询客户
			ICriteria criteria = new Criteria();
			ICondition condition = criteria.getConditions().create();
			condition.setAlias(Customer.PROPERTY_CODE.getName());
			condition.setValue(request.getBusinessPartner());
			condition = criteria.getConditions().create();
			condition.setAlias(Customer.PROPERTY_ACTIVATED.getName());
			condition.setValue(emYesNo.YES);
			condition = criteria.getConditions().create();
			condition.setAlias(Customer.PROPERTY_DELETED.getName());
			condition.setValue(emYesNo.NO);
			IOperationResult<ICustomer> opRsltCustomer = this.fetchCustomer(criteria);
			ICustomer customer = opRsltCustomer.getResultObjects().firstOrDefault();
			if (customer == null) {
				throw new Exception(I18N.prop("msg_bp_customer_is_not_exist", request.getBusinessPartner()));
			}
			// 查询客户的资产
			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE.getName());
			condition.setValue(emBusinessPartnerType.CUSTOMER);
			condition = criteria.getConditions().create();
			condition.setAlias(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE.getName());
			condition.setValue(request.getBusinessPartner());
			condition = criteria.getConditions().create();
			condition.setAlias(BusinessPartnerAsset.PROPERTY_ACTIVATED.getName());
			condition.setValue(emYesNo.YES);
			condition = criteria.getConditions().create();
			condition.setAlias(BusinessPartnerAsset.PROPERTY_DELETED.getName());
			condition.setValue(emYesNo.NO);
			condition = criteria.getConditions().create();
			condition.setAlias(BusinessPartnerAsset.PROPERTY_TIMES.getName());
			condition.setOperation(ConditionOperation.GRATER_THAN);
			condition.setValue(0);
			condition.setBracketClose(1);
			// 有效日期
			DateTime today = DateTime.getToday();
			condition = criteria.getConditions().create();
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_VALIDDATE.getName());
			condition.setOperation(ConditionOperation.IS_NULL);
			condition = criteria.getConditions().create();
			condition.setRelationship(ConditionRelationship.OR);
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_VALIDDATE.getName());
			condition.setOperation(ConditionOperation.NOT_NULL);
			condition = criteria.getConditions().create();
			condition.setBracketClose(2);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_VALIDDATE.getName());
			condition.setOperation(ConditionOperation.LESS_EQUAL);
			condition.setValue(today);
			// 失效日期
			condition = criteria.getConditions().create();
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_INVALIDDATE.getName());
			condition.setOperation(ConditionOperation.IS_NULL);
			condition = criteria.getConditions().create();
			condition.setRelationship(ConditionRelationship.OR);
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_INVALIDDATE.getName());
			condition.setOperation(ConditionOperation.NOT_NULL);
			condition = criteria.getConditions().create();
			condition.setBracketClose(2);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_INVALIDDATE.getName());
			condition.setOperation(ConditionOperation.GRATER_EQUAL);
			condition.setValue(today);
			OperationResult<CustomerAsset> operationResult = new OperationResult<CustomerAsset>();
			for (IBusinessPartnerAsset businessPartnerAsset : this.fetchBusinessPartnerAsset(criteria)
					.getResultObjects()) {
				// 查询资产项目
				criteria = new Criteria();
				condition = criteria.getConditions().create();
				condition.setAlias(AssetItem.PROPERTY_CODE.getName());
				condition.setValue(businessPartnerAsset.getAssetCode());
				condition = criteria.getConditions().create();
				condition.setAlias(AssetItem.PROPERTY_ACTIVATED.getName());
				condition.setValue(emYesNo.YES);
				condition = criteria.getConditions().create();
				condition.setAlias(AssetItem.PROPERTY_DELETED.getName());
				condition.setValue(emYesNo.NO);
				IOperationResult<IAssetItem> opRsltAsset = this.fetchAssetItem(criteria);
				IAssetItem assetItem = opRsltAsset.getResultObjects().firstOrDefault();
				// 资产项目不可用
				if (assetItem == null) {
					continue;
				}
				// 货币不匹配
				if (request.getCurrency() != null && !request.getCurrency().isEmpty()
						&& !request.getCurrency().equals(assetItem.getAmountUnit())) {
					continue;
				}
				CustomerAsset customerAsset = new CustomerAsset();
				customerAsset.setCustomer(String.format("%s - %s", customer.getCode(), customer.getName()));
				customerAsset.setCode(businessPartnerAsset.getCode());
				customerAsset.setName(businessPartnerAsset.getName());
				customerAsset.setValidDate(businessPartnerAsset.getValidDate());
				customerAsset.setInvalidDate(businessPartnerAsset.getInvalidDate());
				customerAsset.setTimes(businessPartnerAsset.getTimes());
				customerAsset.setUnit(assetItem.getAmountUnit());
				customerAsset.setDiscount(assetItem.getUsingDiscount());
				// 可用价值 = 当前价值 + 可透支值
				customerAsset.setAmount(businessPartnerAsset.getAmount().add(assetItem.getOverdraft()));
				// 可用价值 不足
				if (customerAsset.getAmount().compareTo(Decimal.ZERO) <= 0) {
					continue;
				}
				operationResult.addResultObjects(customerAsset);
			}
			return operationResult;
		} catch (Exception e) {
			return new OperationResult<CustomerAsset>(e);
		}
	}

	@Override
	public IOperationResult<SupplierAsset> fetchSupplierAsset(AssetRequest request) {
		return this.fetchSupplierAsset(request, this.getUserToken());
	}

	@Override
	public OperationResult<SupplierAsset> fetchSupplierAsset(AssetRequest request, String token) {
		try {
			this.setCurrentUser(token);
			if (request == null) {
				throw new Exception(I18N.prop("msg_bobas_invalid_data"));
			}
			if (request.getBusinessPartner() == null || request.getBusinessPartner().isEmpty()) {
				throw new Exception(I18N.prop("msg_bobas_invalid_data"));
			}
			// 查询供应商
			ICriteria criteria = new Criteria();
			ICondition condition = criteria.getConditions().create();
			condition.setAlias(Supplier.PROPERTY_CODE.getName());
			condition.setValue(request.getBusinessPartner());
			condition = criteria.getConditions().create();
			condition.setAlias(Supplier.PROPERTY_ACTIVATED.getName());
			condition.setValue(emYesNo.YES);
			condition = criteria.getConditions().create();
			condition.setAlias(Supplier.PROPERTY_DELETED.getName());
			condition.setValue(emYesNo.NO);
			IOperationResult<ISupplier> opRsltSupplier = this.fetchSupplier(criteria);
			ISupplier supplier = opRsltSupplier.getResultObjects().firstOrDefault();
			if (supplier == null) {
				throw new Exception(I18N.prop("msg_bp_supplier_is_not_exist", request.getBusinessPartner()));
			}
			// 查询供应商的资产
			criteria = new Criteria();
			condition = criteria.getConditions().create();
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE.getName());
			condition.setValue(emBusinessPartnerType.SUPPLIER);
			condition = criteria.getConditions().create();
			condition.setAlias(BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE.getName());
			condition.setValue(request.getBusinessPartner());
			condition = criteria.getConditions().create();
			condition.setAlias(BusinessPartnerAsset.PROPERTY_ACTIVATED.getName());
			condition.setValue(emYesNo.YES);
			condition = criteria.getConditions().create();
			condition.setAlias(BusinessPartnerAsset.PROPERTY_DELETED.getName());
			condition.setValue(emYesNo.NO);
			condition = criteria.getConditions().create();
			condition.setAlias(BusinessPartnerAsset.PROPERTY_TIMES.getName());
			condition.setOperation(ConditionOperation.GRATER_THAN);
			condition.setValue(0);
			condition.setBracketClose(1);
			// 有效日期
			DateTime today = DateTime.getToday();
			condition = criteria.getConditions().create();
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_VALIDDATE.getName());
			condition.setOperation(ConditionOperation.IS_NULL);
			condition = criteria.getConditions().create();
			condition.setRelationship(ConditionRelationship.OR);
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_VALIDDATE.getName());
			condition.setOperation(ConditionOperation.NOT_NULL);
			condition = criteria.getConditions().create();
			condition.setBracketClose(2);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_VALIDDATE.getName());
			condition.setOperation(ConditionOperation.LESS_EQUAL);
			condition.setValue(today);
			// 失效日期
			condition = criteria.getConditions().create();
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_INVALIDDATE.getName());
			condition.setOperation(ConditionOperation.IS_NULL);
			condition = criteria.getConditions().create();
			condition.setRelationship(ConditionRelationship.OR);
			condition.setBracketOpen(1);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_INVALIDDATE.getName());
			condition.setOperation(ConditionOperation.NOT_NULL);
			condition = criteria.getConditions().create();
			condition.setBracketClose(2);
			condition.setAlias(BusinessPartnerAsset.PROPERTY_INVALIDDATE.getName());
			condition.setOperation(ConditionOperation.GRATER_EQUAL);
			condition.setValue(today);
			OperationResult<SupplierAsset> operationResult = new OperationResult<SupplierAsset>();
			for (IBusinessPartnerAsset businessPartnerAsset : this.fetchBusinessPartnerAsset(criteria)
					.getResultObjects()) {
				// 查询资产项目
				criteria = new Criteria();
				condition = criteria.getConditions().create();
				condition.setAlias(AssetItem.PROPERTY_CODE.getName());
				condition.setValue(businessPartnerAsset.getAssetCode());
				condition = criteria.getConditions().create();
				condition.setAlias(AssetItem.PROPERTY_ACTIVATED.getName());
				condition.setValue(emYesNo.YES);
				condition = criteria.getConditions().create();
				condition.setAlias(AssetItem.PROPERTY_DELETED.getName());
				condition.setValue(emYesNo.NO);
				IOperationResult<IAssetItem> opRsltAsset = this.fetchAssetItem(criteria);
				IAssetItem assetItem = opRsltAsset.getResultObjects().firstOrDefault();
				// 资产项目不可用
				if (assetItem == null) {
					continue;
				}
				// 货币不匹配
				if (request.getCurrency() != null && !request.getCurrency().isEmpty()
						&& !request.getCurrency().equals(assetItem.getAmountUnit())) {
					continue;
				}
				SupplierAsset supplierAsset = new SupplierAsset();
				supplierAsset.setSupplier(String.format("%s - %s", supplier.getCode(), supplier.getName()));
				supplierAsset.setCode(businessPartnerAsset.getCode());
				supplierAsset.setName(businessPartnerAsset.getName());
				supplierAsset.setValidDate(businessPartnerAsset.getValidDate());
				supplierAsset.setInvalidDate(businessPartnerAsset.getInvalidDate());
				supplierAsset.setTimes(businessPartnerAsset.getTimes());
				supplierAsset.setUnit(assetItem.getAmountUnit());
				supplierAsset.setDiscount(assetItem.getUsingDiscount());
				// 可用价值 = 当前价值 + 可透支值
				supplierAsset.setAmount(businessPartnerAsset.getAmount().add(assetItem.getOverdraft()));
				// 可用价值 不足
				if (supplierAsset.getAmount().compareTo(Decimal.ZERO) <= 0) {
					continue;
				}
				operationResult.addResultObjects(supplierAsset);
			}
			return operationResult;
		} catch (Exception e) {
			return new OperationResult<SupplierAsset>(e);
		}
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-潜在客户
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Lead> fetchLead(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Lead.class);
	}

	/**
	 * 查询-潜在客户（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<ILead> fetchLead(ICriteria criteria) {
		return new OperationResult<ILead>(this.fetchLead(criteria, this.getUserToken()));
	}

	/**
	 * 保存-潜在客户
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Lead> saveLead(Lead bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-潜在客户（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<ILead> saveLead(ILead bo) {
		return new OperationResult<ILead>(this.saveLead((Lead) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//

	/**
	 * 查询-付款条款
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<PaymentTerm> fetchPaymentTerm(ICriteria criteria, String token) {
		return super.fetch(criteria, token, PaymentTerm.class);
	}

	/**
	 * 查询-付款条款（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IPaymentTerm> fetchPaymentTerm(ICriteria criteria) {
		return new OperationResult<IPaymentTerm>(this.fetchPaymentTerm(criteria, this.getUserToken()));
	}

	/**
	 * 保存-付款条款
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<PaymentTerm> savePaymentTerm(PaymentTerm bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-付款条款（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IPaymentTerm> savePaymentTerm(IPaymentTerm bo) {
		return new OperationResult<IPaymentTerm>(this.savePaymentTerm((PaymentTerm) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-合同/协议
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<Agreement> fetchAgreement(ICriteria criteria, String token) {
		return super.fetch(criteria, token, Agreement.class);
	}

	/**
	 * 查询-合同/协议（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IAgreement> fetchAgreement(ICriteria criteria) {
		return new OperationResult<IAgreement>(this.fetchAgreement(criteria, this.getUserToken()));
	}

	/**
	 * 保存-合同/协议
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	public OperationResult<Agreement> saveAgreement(Agreement bo, String token) {
		return super.save(bo, token);
	}

	/**
	 * 保存-合同/协议（提前设置用户口令）
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	public IOperationResult<IAgreement> saveAgreement(IAgreement bo) {
		return new OperationResult<IAgreement>(this.saveAgreement((Agreement) bo, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-内部对账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	public OperationResult<InternalReconciliation> fetchInternalReconciliation(ICriteria criteria, String token) {
		return super.fetch(criteria, token, InternalReconciliation.class);
	}

	/**
	 * 查询-内部对账（提前设置用户口令）
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	public IOperationResult<IInternalReconciliation> fetchInternalReconciliation(ICriteria criteria) {
		return new OperationResult<IInternalReconciliation>(
				this.fetchInternalReconciliation(criteria, this.getUserToken()));
	}

	// --------------------------------------------------------------------------------------------//

}

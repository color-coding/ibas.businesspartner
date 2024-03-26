package org.colorcoding.ibas.businesspartner.data;

public class Ledgers extends org.colorcoding.ibas.accounting.data.Ledgers {

	/**
	 * 国内应付账款
	 */
	public static final String LEDGER_PURCHASE_DOMESTIC_ACCOUNTS_PAYABLE = "GL-BP-P1";
	/**
	 * 应付预付款
	 */
	public static final String LEDGER_PURCHASE_DOWN_PAYMENT_PAYABLES = "GL-BP-P2";
	/**
	 * 国外应付账款
	 */
	public static final String LEDGER_PURCHASE_FOREIGN_ACCOUNTS_PAYABLE = "";
	/**
	 * 汇兑收益
	 */
	public static final String LEDGER_PURCHASE_REALIZED_EXCHANGE_DIFF_GAIN = "";
	/**
	 * 汇兑损失
	 */
	public static final String LEDGER_PURCHASE_REALIZED_EXCHANGE_DIFF_LOSS = "";
	/**
	 * 银行转帐
	 */
	public static final String LEDGER_PURCHASE_BANK_TRANSFER = "GL-BP-P3";
	/**
	 * 现金折扣
	 */
	public static final String LEDGER_PURCHASE_CASH_DISCOUNT = "";
	/**
	 * 在途库存科目
	 */
	public static final String LEDGER_PURCHASE_STOCK_IN_TRANSIT_ACCOUNT = "GL-BP-P4";
	/**
	 * 分配科目
	 */
	public static final String LEDGER_PURCHASE_ALLOCATION_ACCOUNT = "GL-BP-P5";
	/**
	 * 货物清算科目
	 */
	public static final String LEDGER_PURCHASE_GOODS_CLEARING_ACCOUNT = "GL-BP-P6";
	/**
	 * 费用清算科目
	 */
	public static final String LEDGER_PURCHASE_EXPENSE_CLEARING_ACCOUNT = "GL-BP-P7";
	/**
	 * 费用科目_外国
	 */
	public static final String LEDGER_PURCHASE_EXPENSE_ACCOUNT_FOREIGN = "";
	/**
	 * 采购贷方科目
	 */
	public static final String LEDGER_PURCHASE_PURCHASE_CREDIT_ACCOUNT = "";
	/**
	 * 采购贷方科目_外国
	 */
	public static final String LEDGER_PURCHASE_PURCHASE_CREDIT_ACCT_FOREIGN = "";
	/**
	 * 多付应付科目
	 */
	public static final String LEDGER_PURCHASE_OVERPAYMENT_AP_ACCOUNT = "";
	/**
	 * 付款不足应付科目
	 */
	public static final String LEDGER_PURCHASE_UNDERPAYMENT_AP_ACCOUNT = "";
	/**
	 * 预付款结算科目
	 */
	public static final String LEDGER_PURCHASE_DOWN_PAYMENT_CLEARING_ACCOUNT = "";
	/**
	 * 费用和库存科目
	 */
	public static final String LEDGER_PURCHASE_EXPENSE_AND_INVENTORY_ACCOUNT = "";

	/**
	 * 国内应收账款
	 */
	public static final String LEDGER_SALES_DOMESTIC_ACCOUNTS_RECEIVABLE = "GL-BP-S1";
	/**
	 * 应收预付款
	 */
	public static final String LEDGER_SALES_DOWN_PAYMENT_RECEIVABLES = "GL-BP-S2";
	/**
	 * 国外应收账款
	 */
	public static final String LEDGER_SALES_FOREIGN_ACCOUNTS_RECEIVABLE = "";
	/**
	 * 已收支票
	 */
	public static final String LEDGER_SALES_CHECKS_RECEIVED = "GL-BP-S3";
	/**
	 * 库存现金
	 */
	public static final String LEDGER_SALES_CASH_ON_HAND = "GL-BP-S4";
	/**
	 * 已折扣汇票
	 */
	public static final String LEDGER_SALES_BILL_OF_EXCHANGE_DISCOUNTED = "";
	/**
	 * 汇票托收
	 */
	public static final String LEDGER_SALES_BILL_OF_EXCHANGE_ON_COLLECTION = "";
	/**
	 * 未付汇票
	 */
	public static final String LEDGER_SALES_UNPAID_BILL_OF_EXCHANGE = "";
	/**
	 * 多付应收科目
	 */
	public static final String LEDGER_SALES_OVERPAYMENT_AR_ACCOUNT = "";
	/**
	 * 付款不足应收科目
	 */
	public static final String LEDGER_SALES_UNDERPAYMENT_AR_ACCOUNT = "";
	/**
	 * 预付款结算科目
	 */
	public static final String LEDGER_SALES_DOWN_PAYMENT_CLEARING_ACCOUNT = "";
	/**
	 * 汇兑收益
	 */
	public static final String LEDGER_SALES_REALIZED_EXCHANGE_DIFF_GAIN = "";
	/**
	 * 汇兑损失
	 */
	public static final String LEDGER_SALES_REALIZED_EXCHANGE_DIFF_LOSS = "";
	/**
	 * 现金折扣
	 */
	public static final String LEDGER_SALES_CASH_DISCOUNT = "";
	/**
	 * 收入科目
	 */
	public static final String LEDGER_SALES_REVENUE_ACCOUNT = "GL-BP-S5";
	/**
	 * 收入科目_外国
	 */
	public static final String LEDGER_SALES_REVENUE_ACCOUNT_FOREIGN = "";
	/**
	 * 销售贷方科目
	 */
	public static final String LEDGER_SALES_SALES_CREDIT_ACCOUNT = "GL-BP-S6";
	/**
	 * 销售贷方科目_国外
	 */
	public static final String LEDGER_SALES_SALES_CREDIT_ACCOUNT_FOREIGN = "";
	/**
	 * 催款利息
	 */
	public static final String LEDGER_SALES_DUNNING_INTEREST = "";
	/**
	 * 催款费用
	 */
	public static final String LEDGER_SALES_DUNNING_FEE = "";
	/**
	 * 销货成本科目
	 */
	public static final String LEDGER_SALES_COST_OF_GOODS_SOLD_ACCOUNT = "GL-BP-S7";
	/**
	 * 销售退货科目
	 */
	public static final String LEDGER_SALES_SALES_RETURNS_ACCOUNT = "GL-BP-S8";
	/**
	 * 已装运货物科目
	 */
	public static final String LEDGER_SALES_SHIPPED_GOODS_ACCOUNT = "GL-BP-S9";

	/**
	 * 收款方式科目
	 */
	public static final String LEDGER_PAYMENT_RECEIPT_METHOD_ACCOUNT = "GL-BP-M1";
	/**
	 * 付款方式科目
	 */
	public static final String LEDGER_PAYMENT_PAYMENT_METHOD_ACCOUNT = "GL-BP-M2";
	/**
	 * 资产充值科目
	 */
	public static final String LEDGER_PAYMENT_ASSET_ITEM_ACCOUNT = "GL-BP-M3";

	/**
	 * 客户
	 */
	public static final String CONDITION_PROPERTY_CUSTOMER = "Customer";
	/**
	 * 供应商
	 */
	public static final String CONDITION_PROPERTY_SUPPLIER = "Supplier";
	/**
	 * 客户组
	 */
	public static final String CONDITION_PROPERTY_CUSTOMER_GROUP = "CustomerGroup";
	/**
	 * 供应商组
	 */
	public static final String CONDITION_PROPERTY_SUPPLIER_GROUP = "SupplierGroup";
	/**
	 * 资产项目
	 */
	public static final String CONDITION_PROPERTY_ASSET_ITEM = "AssetItem";
}

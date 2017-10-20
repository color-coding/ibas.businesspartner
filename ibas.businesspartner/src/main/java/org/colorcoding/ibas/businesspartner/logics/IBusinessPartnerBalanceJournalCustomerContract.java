package org.colorcoding.ibas.businesspartner.logics;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.logics.IBusinessLogicContract;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;

/**
 * 获取业务伙伴余额记录影响客户余额的契约
 * @author Allen.Zhang
 *
 */
public interface IBusinessPartnerBalanceJournalCustomerContract extends IBusinessLogicContract {

	 /**
     * 获取客户编号
     * @return
     */
	String getCustomerCode();

	/***
	 * 获取付款业务伙伴类型
	 * @return
	 */
	emBusinessPartnerType getBusinessPartnerType();

	/**
	 * 获取收付款金额
	 * @return
	 */
	Decimal getAmount();
	
	/**
	 * 获取收付款方向
	 * @return
	 */
	emDirection getDirection();
}

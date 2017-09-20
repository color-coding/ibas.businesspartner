package org.colorcoding.ibas.businesspartner.logics;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.logics.IBusinessLogicContract;
/**
 * 获取业务伙伴余额记录的契约
 * @author Allen.Zhang
 *
 */
public interface IBusinessPartnerBalanceJournalContract extends IBusinessLogicContract {

	 /**
     * 获取业务伙伴编号
     * @return
     */
	String getBusinessPartnerCode();
	
	/**
	 * 获取收付款金额
	 * @return
	 */
	Decimal getReciptAndPaymentAmount();
	
	/**
	 * 获取收付款方向
	 * @return
	 */
	emDirection getReciptAndPaymentDirection();
}

package org.colorcoding.ibas.document;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.bo.IBODocument;
import org.colorcoding.ibas.bobas.bo.IBOTagCanceled;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.rule.BusinessRuleException;
import org.colorcoding.ibas.bobas.rule.ICheckRules;

/**
 * 单据付款总计操作者
 * 
 * @author Niuren.Zhu
 *
 */
public interface IDocumentPaidTotalOperator extends IDocumentOperatingTarget, IBODocument, ICheckRules {

	/**
	 * 自动处理单据状态
	 * 付款金额大于付款总计，完成订单
	 * @return
	 */
	default boolean isSmartDocumentStatus() {
		return false;
	}

	/**
	 * 检查逻辑，已付款单据，不可删除
	 * （注意：重复继承ICheckRules时，需要手动调用）
	 * @throws BusinessRuleException
	 */
	default void check() throws BusinessRuleException {
		if (this.isDeleted() == true) {
			// 被删除
			if (Decimal.ZERO.compareTo(this.getPaidTotal()) < 0) {
				throw new BusinessRuleException(I18N.prop("msg_bp_document_paided_not_allowed_deleted",
						String.format("{[%s].[DocEntry = %s]%s}", this.getObjectCode(), this.getDocEntry())));
			}
		} else if (this instanceof IBOTagCanceled && ((IBOTagCanceled) this).getCanceled() == emYesNo.YES) {
			// 被取消
			if (Decimal.ZERO.compareTo(this.getPaidTotal()) < 0) {
				throw new BusinessRuleException(I18N.prop("msg_bp_document_paided_not_allowed_canceled",
						String.format("{[%s].[DocEntry = %s]%s}", this.getObjectCode(), this.getDocEntry())));
			}
		}
	}

	/**
	 * 获取单据总计
	 * 
	 * @return
	 */
	BigDecimal getDocumentTotal();

	/**
	 * 获取单据货币
	 * 
	 * @return
	 */
	String getDocumentCurrency();

	/**
	 * 获取单据货币汇率
	 * 
	 * @return
	 */
	BigDecimal getDocumentRate();

	/**
	 * 获取已付金额
	 * 
	 * @return
	 */
	BigDecimal getPaidTotal();

	/**
	 * 设置已付金额
	 * 
	 * @param value
	 */
	void setPaidTotal(BigDecimal value);
}

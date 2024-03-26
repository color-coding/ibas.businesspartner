package org.colorcoding.ibas.businesspartner.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.document.DocumentFetcherManager;
import org.colorcoding.ibas.document.IDocumentFetcher;
import org.colorcoding.ibas.document.IDocumentPaidTotalOperator;

@LogicContract(IDocumentPaidTotalContract.class)
public class DocumentPaidTotalService extends BusinessLogic<IDocumentPaidTotalContract, IDocumentPaidTotalOperator> {

	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof IDocumentPaidTotalContract) {
			IDocumentPaidTotalContract contract = (IDocumentPaidTotalContract) data;
			if (contract.getBaseDocumentType() == null || contract.getBaseDocumentType().isEmpty()) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						"BaseDocumentType", "NULL or Empty");
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IDocumentPaidTotalOperator fetchBeAffected(IDocumentPaidTotalContract contract) {
		try {
			ICriteria criteria = new Criteria();
			// 必须查询类型，否则不能唯一
			ICondition condition = criteria.getConditions().create();
			condition.setAlias("ObjectCode");
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(contract.getBaseDocumentType());
			condition = criteria.getConditions().create();
			condition.setRelationship(ConditionRelationship.AND);
			condition.setAlias("DocEntry");
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(contract.getBaseDocumentEntry());
			IDocumentPaidTotalOperator document = this.fetchBeAffected(criteria, IDocumentPaidTotalOperator.class);
			if (document == null) {
				IDocumentFetcher<IDocumentPaidTotalOperator> fetcher = DocumentFetcherManager.create()
						.newFetcher(contract.getBaseDocumentType());
				if (fetcher == null) {
					throw new BusinessLogicException(
							I18N.prop("msg_rp_not_found_document_fether", contract.getBaseDocumentType()));
				}
				fetcher.setRepository(this.getRepository());
				document = fetcher.fetch(contract.getBaseDocumentEntry());
			}
			if (document instanceof IDocumentPaidTotalOperator) {
				return (IDocumentPaidTotalOperator) document;
			}
			throw new BusinessLogicException(I18N.prop("msg_rp_not_found_document", contract.getBaseDocumentType(),
					contract.getBaseDocumentEntry()));
		} catch (BusinessLogicException e) {
			throw e;
		} catch (Exception e) {
			throw new BusinessLogicException(e);
		}
	}

	@Override
	protected void impact(IDocumentPaidTotalContract contract) {
		if (contract.getCurrency() != null && !contract.getCurrency().isEmpty()) {
			if (!contract.getCurrency().equals(this.getBeAffected().getDocumentCurrency())) {
				throw new BusinessLogicException(I18N.prop("msg_rp_payment_currency_mismatch", this.getBeAffected()));
			}
		}
		if (contract.getAmount() == null || Decimal.isZero(contract.getAmount())) {
			return;
		}
		BigDecimal total = this.getBeAffected().getPaidTotal();
		if (total == null) {
			total = Decimal.ZERO;
		}
		this.getBeAffected().setPaidTotal(total.add(contract.getAmount()));
	}

	@Override
	protected void revoke(IDocumentPaidTotalContract contract) {
		if (contract.getAmount() == null || Decimal.isZero(contract.getAmount())) {
			return;
		}
		BigDecimal total = this.getBeAffected().getPaidTotal();
		if (total == null) {
			total = Decimal.ZERO;
		}
		this.getBeAffected().setPaidTotal(total.subtract(contract.getAmount()));

	}
}

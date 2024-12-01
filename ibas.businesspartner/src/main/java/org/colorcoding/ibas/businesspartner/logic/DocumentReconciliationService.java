package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.internalreconciliation.IInternalReconciliation;
import org.colorcoding.ibas.businesspartner.bo.internalreconciliation.IInternalReconciliationLine;
import org.colorcoding.ibas.businesspartner.bo.internalreconciliation.InternalReconciliation;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;

@LogicContract(IDocumentReconciliationContract.class)
public class DocumentReconciliationService
		extends BusinessLogic<IDocumentReconciliationContract, IInternalReconciliation> {

	@Override
	protected IInternalReconciliation fetchBeAffected(IDocumentReconciliationContract contract) {
		// 必须要差完整对象，不然业务逻辑会出错
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(InternalReconciliation.PROPERTY_BASEDOCUMENTTYPE.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentType());
		condition = criteria.getConditions().create();
		condition.setRelationship(ConditionRelationship.AND);
		condition.setAlias(InternalReconciliation.PROPERTY_BASEDOCUMENTENTRY.getName());
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setValue(contract.getBaseDocumentEntry());

		IInternalReconciliation reconciliation = this.fetchBeAffected(criteria, IInternalReconciliation.class);
		if (reconciliation == null) {
			BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
			boRepository.setRepository(super.getRepository());
			IOperationResult<IInternalReconciliation> operationResult = boRepository
					.fetchInternalReconciliation(criteria);
			if (operationResult.getError() != null) {
				throw new BusinessLogicException(operationResult.getError());
			}
			reconciliation = operationResult.getResultObjects().firstOrDefault();
		}
		if (reconciliation == null) {
			reconciliation = new InternalReconciliation();
			reconciliation.setBaseDocumentType(contract.getBaseDocumentType());
			reconciliation.setBaseDocumentEntry(contract.getBaseDocumentEntry());
			reconciliation.setSystemed(emYesNo.YES);
		}
		return reconciliation;
	}

	@Override
	protected void impact(IDocumentReconciliationContract contract) {
		IInternalReconciliation reconciliation = this.getBeAffected();
		IInternalReconciliationLine reconciliationLine = null;
		IDocumentReconciliationContent content = null;
		for (int i = 0; i < contract.getContents().length; i++) {
			content = contract.getContents()[i];
			if (content == null) {
				continue;
			}
			if (i >= reconciliation.getInternalReconciliationLines().size()) {
				reconciliationLine = reconciliation.getInternalReconciliationLines().create();
			} else {
				reconciliationLine = reconciliation.getInternalReconciliationLines().get(i);
			}
			reconciliationLine.setShortName(content.getShortName());
			reconciliationLine.setDocumentType(content.getBaseDocumentType());
			reconciliationLine.setDocumentEntry(content.getBaseDocumentEntry());
			reconciliationLine.setDocumentLineId(content.getBaseDocumentLineId());
			reconciliationLine.setAmount(content.getAmount());
			reconciliationLine.setCurrency(content.getCurrency());
		}
		// 清理超过的，移到此处
		if (reconciliation.getInternalReconciliationLines().size() > contract.getContents().length) {
			for (int i = contract.getContents().length; i < reconciliation.getInternalReconciliationLines()
					.size(); i++) {
				reconciliation.getInternalReconciliationLines().get(i).delete();
			}
		}
		// 无子项处理
		if (reconciliation.getInternalReconciliationLines().where(c -> !c.isDeleted()).isEmpty()) {
			if (!reconciliation.isNew()) {
				reconciliation.delete();
			} else {
				((BusinessObject<?>) reconciliation).unsavable();
			}
		}
	}

	@Override
	protected void revoke(IDocumentReconciliationContract contract) {
		IInternalReconciliation reconciliation = this.getBeAffected();
		if (reconciliation.getReferenced() == emYesNo.YES) {
			reconciliation.setReferenced(emYesNo.NO);
		}
		reconciliation.delete();
	}

}

package org.colorcoding.ibas.businesspartner.logic;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.lead.ILead;
import org.colorcoding.ibas.businesspartner.bo.lead.Lead;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;

/**
 * 潜在客户检查服务
 * 
 * @author Niuren.Zhu
 *
 */
@LogicContract(ILeadCheckContract.class)
public class LeadCheckService extends BusinessPartnerLogic<ILeadCheckContract, ILead> {

	@Override
	protected ILead fetchBeAffected(ILeadCheckContract contract) {
		return this.checkLead(contract.getLeadCode());
	}

	protected ILead checkLead(String bpCode) {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(Lead.PROPERTY_CODE.getName());
		condition.setValue(bpCode);
		condition.setOperation(ConditionOperation.EQUAL);
		condition = criteria.getConditions().create();
		condition.setBracketOpen(1);
		condition.setAlias(Lead.PROPERTY_DELETED.getName());
		condition.setValue(emYesNo.YES);
		condition.setOperation(ConditionOperation.EQUAL);
		condition = criteria.getConditions().create();
		condition.setAlias(Lead.PROPERTY_DELETED.getName());
		condition.setValue(emYesNo.NO);
		condition.setOperation(ConditionOperation.EQUAL);
		condition.setRelationship(ConditionRelationship.OR);
		condition = criteria.getConditions().create();
		condition.setBracketClose(1);
		condition.setAlias(Lead.PROPERTY_DELETED.getName());
		condition.setOperation(ConditionOperation.IS_NULL);
		condition.setRelationship(ConditionRelationship.OR);
		ILead lead = this.fetchBeAffected(ILead.class, criteria);
		if (lead == null) {
			try (BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner()) {
				boRepository.setTransaction(this.getTransaction());
				IOperationResult<ILead> operationResult = boRepository.fetchLead(criteria);
				if (operationResult.getError() != null) {
					throw new BusinessLogicException(operationResult.getError());
				}
				lead = operationResult.getResultObjects().firstOrDefault();
			}
		}
		// 客户不存在
		if (lead == null) {
			throw new BusinessLogicException(I18N.prop("msg_bp_lead_is_not_exist", bpCode == null ? "" : bpCode));
		}
		// 客户是否可用
		if (lead.getActivated() == emYesNo.NO) {
			throw new BusinessLogicException(I18N.prop("msg_bp_lead_is_unavailable", lead.getCode(), lead.getName()));
		}
		if (lead.getDeleted() == emYesNo.YES) {
			throw new BusinessLogicException(I18N.prop("msg_bp_lead_is_unavailable", lead.getCode(), lead.getName()));
		}
		return lead;
	}

	@Override
	protected void impact(ILeadCheckContract contract) {
		if (this.getBeAffected().getReferenced() == emYesNo.NO) {
			this.getBeAffected().setReferenced(emYesNo.YES);
		}
	}

	@Override
	protected void revoke(ILeadCheckContract contract) {
	}

}

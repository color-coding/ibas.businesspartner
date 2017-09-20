package org.colorcoding.ibas.businesspartner.logics;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.logics.BusinessLogic;
import org.colorcoding.ibas.bobas.logics.BusinessLogicsException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerbalancejournal.BusinessPartnerBalanceJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerbalancejournal.IBusinessPartnerBalanceJournal;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.businesspartner.repository.IBORepositoryBusinessPartnerApp;

@LogicContract(IBusinessPartnerBalancePaymentContract.class)
public class BusinessPartnerBalancePaymentContract extends BusinessLogic<IBusinessPartnerBalancePaymentContract, IBusinessPartnerBalanceJournal> {
    /**
     * 查找被付款影响的业务伙伴余额记录
     * @param Contract
     * @return
     */
    @Override
    protected IBusinessPartnerBalanceJournal fetchBeAffected(IBusinessPartnerBalancePaymentContract Contract) {

        //region 查询条件
        ICriteria criteria = Criteria.create();
        ICondition condition = criteria.getConditions().create();
        // 来源单据类型
        condition.setAlias(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTTYPE.getName());
        condition.setValue(Contract.getPaymentBaseDocumentType());
        condition.setOperation(ConditionOperation.EQUAL);
        //来源单据编号
        condition = criteria.getConditions().create();
        condition.setAlias(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTENTRY.getName());
        condition.setValue(Contract.getPaymentBaseDocumentEntry());
        condition.setOperation(ConditionOperation.EQUAL);
        //来源单据行号
        condition = criteria.getConditions().create();
        condition.setAlias(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTLINEID.getName());
        condition.setValue(Contract.getPaymentBaseDocumentLineId());
        condition.setOperation(ConditionOperation.EQUAL);
        //方向
        condition = criteria.getConditions().create();
        condition.setAlias(BusinessPartnerBalanceJournal.PROPERTY_DIRECTION.getName());
        condition.setValue(emDirection.OUT );
        condition.setOperation(ConditionOperation.EQUAL);
        //endregion

        IBORepositoryBusinessPartnerApp boRepository = new BORepositoryBusinessPartner();
        boRepository.setRepository(this.getRepository());
        IOperationResult<IBusinessPartnerBalanceJournal> operationResult = boRepository.fetchBusinessPartnerBalanceJournal(criteria);
        if (operationResult.getError() != null) {
            throw new BusinessLogicsException(operationResult.getError());
        }
        if (operationResult.getResultCode() != 0) {
            throw new BusinessLogicsException(operationResult.getMessage());
        }
        IBusinessPartnerBalanceJournal businessPartnerBalanceJournal = operationResult.getResultObjects().firstOrDefault();
        if(businessPartnerBalanceJournal==null) {
            businessPartnerBalanceJournal = BusinessPartnerBalanceJournal.Create(Contract);
        }
        return businessPartnerBalanceJournal;
    }

    /**
     * 正向逻辑
     * @param Contract
     */
    @Override
    protected void impact(IBusinessPartnerBalancePaymentContract Contract) {
        IBusinessPartnerBalanceJournal businessPartnerBalanceJournal = this.getBeAffected();
        businessPartnerBalanceJournal.setBusinessPartner(Contract.getPaymentBusinessPartnerCode());
        Decimal Amount=businessPartnerBalanceJournal.getAmount();
        Decimal PaymentAmount=Contract.getPaymentAmount();
        if(PaymentAmount.abs().compareTo(new Decimal(0))==1){
            Amount=Amount.add(PaymentAmount);
        }
    }

    /**
     * 反向逻辑
     * @param Contract
     */
    @Override
    protected void revoke(IBusinessPartnerBalancePaymentContract Contract) {
        IBusinessPartnerBalanceJournal businessPartnerBalanceJournal = this.getBeAffected();
        Decimal Amount=businessPartnerBalanceJournal.getAmount();
        Decimal PaymentAmount=Contract.getPaymentAmount();
        if(PaymentAmount.abs().compareTo(new Decimal(0))==1){
            Amount=Amount.subtract(PaymentAmount);
        }
    }
}

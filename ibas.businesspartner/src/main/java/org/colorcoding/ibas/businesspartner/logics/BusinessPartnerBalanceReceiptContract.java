package org.colorcoding.ibas.businesspartner.logics;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDirection;
import org.colorcoding.ibas.bobas.logics.BusinessLogic;
import org.colorcoding.ibas.bobas.logics.BusinessLogicsException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerbalancejournal.BusinessPartnerBalanceJournal;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerbalancejournal.IBusinessPartnerBalanceJournal;
import org.colorcoding.ibas.businesspartner.bo.customer.Customer;
import org.colorcoding.ibas.businesspartner.bo.customer.ICustomer;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.businesspartner.repository.IBORepositoryBusinessPartnerApp;

@LogicContract(IBusinessPartnerBalanceReceiptContract.class)
public class BusinessPartnerBalanceReceiptContract extends BusinessLogic<IBusinessPartnerBalanceReceiptContract, IBusinessPartnerBalanceJournal> {
    /**
     * 查找被收款影响的业务伙伴余额记录
     * @return
     */
    @Override
    protected IBusinessPartnerBalanceJournal fetchBeAffected(IBusinessPartnerBalanceReceiptContract Contract) {
        //region 查询条件
        ICriteria criteria = Criteria.create();
        ICondition condition = criteria.getConditions().create();
        // 来源单据类型
        condition.setAlias(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTTYPE.getName());
        condition.setValue(Contract.getReceiptBaseDocumentType());
        condition.setOperation(ConditionOperation.EQUAL);
        //来源单据编号
        condition = criteria.getConditions().create();
        condition.setAlias(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTENTRY.getName());
        condition.setValue(Contract.getReceiptBaseDocumentEntry());
        condition.setOperation(ConditionOperation.EQUAL);
        //来源单据行号
        condition = criteria.getConditions().create();
        condition.setAlias(BusinessPartnerBalanceJournal.PROPERTY_BASEDOCUMENTLINEID.getName());
        condition.setValue(Contract.getReceiptBaseDocumentLineId());
        condition.setOperation(ConditionOperation.EQUAL);
        //方向
        condition = criteria.getConditions().create();
        condition.setAlias(BusinessPartnerBalanceJournal.PROPERTY_DIRECTION.getName());
        condition.setValue(emDirection.IN );
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
    protected void impact(IBusinessPartnerBalanceReceiptContract Contract) {
        IBusinessPartnerBalanceJournal businessPartnerBalanceJournal = this.getBeAffected();
        businessPartnerBalanceJournal.setBusinessPartner(Contract.getReceiptBusinessPartnerCode());
        Decimal Amount=businessPartnerBalanceJournal.getAmount();
        Decimal ReceiptAmount=Contract.getReceiptAmount();
        if(ReceiptAmount.abs().compareTo(new Decimal(0))==1){
            Amount=Amount.add(ReceiptAmount);
        }
    }

    /**
     * 反向逻辑
     * @param Contract
     */
    @Override
    protected void revoke(IBusinessPartnerBalanceReceiptContract Contract) {
        IBusinessPartnerBalanceJournal businessPartnerBalanceJournal = this.getBeAffected();
        Decimal Amount=businessPartnerBalanceJournal.getAmount();
        Decimal ReceiptAmount=Contract.getReceiptAmount();
        if(ReceiptAmount.abs().compareTo(new Decimal(0))==1){
            Amount=Amount.subtract(ReceiptAmount);
        }
    }
}

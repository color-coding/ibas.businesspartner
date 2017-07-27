package org.colorcoding.ibas.businesspartner.bo.businesspartnerbalancejournal;

import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.bobas.data.*;
import org.colorcoding.ibas.businesspartner.data.*;

/**
* 业务伙伴余额记录 接口
* 
*/
public interface IBusinessPartnerBalanceJournal extends IBOSimple {

    /**
    * 获取-业务伙伴类型
    * 
    * @return 值
    */
    emBusinessPartnerType getBusinessPartnerType();

    /**
    * 设置-业务伙伴类型
    * 
    * @param value 值
    */
    void setBusinessPartnerType(emBusinessPartnerType value);


    /**
    * 获取-业务伙伴编码
    * 
    * @return 值
    */
    String getBusinessPartner();

    /**
    * 设置-业务伙伴编码
    * 
    * @param value 值
    */
    void setBusinessPartner(String value);


    /**
    * 获取-方向
    * 
    * @return 值
    */
    emDirection getDirection();

    /**
    * 设置-方向
    * 
    * @param value 值
    */
    void setDirection(emDirection value);


    /**
    * 获取-方式
    * 
    * @return 值
    */
    String getMode();

    /**
    * 设置-方式
    * 
    * @param value 值
    */
    void setMode(String value);


    /**
    * 获取-金额
    * 
    * @return 值
    */
    Decimal getAmount();

    /**
    * 设置-金额
    * 
    * @param value 值
    */
    void setAmount(Decimal value);


    /**
    * 设置-金额
    * 
    * @param value 值
    */
    void setAmount(String value);

    /**
    * 设置-金额
    * 
    * @param value 值
    */
    void setAmount(int value);

    /**
    * 设置-金额
    * 
    * @param value 值
    */
    void setAmount(double value);

    /**
    * 获取-币种
    * 
    * @return 值
    */
    String getCurrency();

    /**
    * 设置-币种
    * 
    * @param value 值
    */
    void setCurrency(String value);


    /**
    * 获取-汇率
    * 
    * @return 值
    */
    Decimal getRate();

    /**
    * 设置-汇率
    * 
    * @param value 值
    */
    void setRate(Decimal value);


    /**
    * 设置-汇率
    * 
    * @param value 值
    */
    void setRate(String value);

    /**
    * 设置-汇率
    * 
    * @param value 值
    */
    void setRate(int value);

    /**
    * 设置-汇率
    * 
    * @param value 值
    */
    void setRate(double value);

    /**
    * 获取-银行编码
    * 
    * @return 值
    */
    String getBankCode();

    /**
    * 设置-银行编码
    * 
    * @param value 值
    */
    void setBankCode(String value);


    /**
    * 获取-卡号
    * 
    * @return 值
    */
    String getCardNumber();

    /**
    * 设置-卡号
    * 
    * @param value 值
    */
    void setCardNumber(String value);


    /**
    * 获取-基于类型
    * 
    * @return 值
    */
    String getBaseDocumentType();

    /**
    * 设置-基于类型
    * 
    * @param value 值
    */
    void setBaseDocumentType(String value);


    /**
    * 获取-基于标识
    * 
    * @return 值
    */
    Integer getBaseDocumentEntry();

    /**
    * 设置-基于标识
    * 
    * @param value 值
    */
    void setBaseDocumentEntry(Integer value);


    /**
    * 获取-基于行号
    * 
    * @return 值
    */
    Integer getBaseDocumentLineId();

    /**
    * 设置-基于行号
    * 
    * @param value 值
    */
    void setBaseDocumentLineId(Integer value);


    /**
    * 获取-原始类型
    * 
    * @return 值
    */
    String getOriginalDocumentType();

    /**
    * 设置-原始类型
    * 
    * @param value 值
    */
    void setOriginalDocumentType(String value);


    /**
    * 获取-原始标识
    * 
    * @return 值
    */
    Integer getOriginalDocumentEntry();

    /**
    * 设置-原始标识
    * 
    * @param value 值
    */
    void setOriginalDocumentEntry(Integer value);


    /**
    * 获取-原始行号
    * 
    * @return 值
    */
    Integer getOriginalDocumentLineId();

    /**
    * 设置-原始行号
    * 
    * @param value 值
    */
    void setOriginalDocumentLineId(Integer value);


    /**
    * 获取-对象编号
    * 
    * @return 值
    */
    Integer getObjectKey();

    /**
    * 设置-对象编号
    * 
    * @param value 值
    */
    void setObjectKey(Integer value);


    /**
    * 获取-对象类型
    * 
    * @return 值
    */
    String getObjectCode();

    /**
    * 设置-对象类型
    * 
    * @param value 值
    */
    void setObjectCode(String value);


    /**
    * 获取-创建日期
    * 
    * @return 值
    */
    DateTime getCreateDate();

    /**
    * 设置-创建日期
    * 
    * @param value 值
    */
    void setCreateDate(DateTime value);


    /**
    * 获取-创建时间
    * 
    * @return 值
    */
    Short getCreateTime();

    /**
    * 设置-创建时间
    * 
    * @param value 值
    */
    void setCreateTime(Short value);


    /**
    * 获取-修改日期
    * 
    * @return 值
    */
    DateTime getUpdateDate();

    /**
    * 设置-修改日期
    * 
    * @param value 值
    */
    void setUpdateDate(DateTime value);


    /**
    * 获取-修改时间
    * 
    * @return 值
    */
    Short getUpdateTime();

    /**
    * 设置-修改时间
    * 
    * @param value 值
    */
    void setUpdateTime(Short value);


    /**
    * 获取-实例号（版本）
    * 
    * @return 值
    */
    Integer getLogInst();

    /**
    * 设置-实例号（版本）
    * 
    * @param value 值
    */
    void setLogInst(Integer value);


    /**
    * 获取-服务系列
    * 
    * @return 值
    */
    Integer getSeries();

    /**
    * 设置-服务系列
    * 
    * @param value 值
    */
    void setSeries(Integer value);


    /**
    * 获取-数据源
    * 
    * @return 值
    */
    String getDataSource();

    /**
    * 设置-数据源
    * 
    * @param value 值
    */
    void setDataSource(String value);


    /**
    * 获取-创建用户
    * 
    * @return 值
    */
    Integer getCreateUserSign();

    /**
    * 设置-创建用户
    * 
    * @param value 值
    */
    void setCreateUserSign(Integer value);


    /**
    * 获取-修改用户
    * 
    * @return 值
    */
    Integer getUpdateUserSign();

    /**
    * 设置-修改用户
    * 
    * @param value 值
    */
    void setUpdateUserSign(Integer value);


    /**
    * 获取-创建动作标识
    * 
    * @return 值
    */
    String getCreateActionId();

    /**
    * 设置-创建动作标识
    * 
    * @param value 值
    */
    void setCreateActionId(String value);


    /**
    * 获取-更新动作标识
    * 
    * @return 值
    */
    String getUpdateActionId();

    /**
    * 设置-更新动作标识
    * 
    * @param value 值
    */
    void setUpdateActionId(String value);



}

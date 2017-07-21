package org.colorcoding.ibas.businesspartner.bo.supplier;

import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.bobas.data.*;
import org.colorcoding.ibas.businesspartner.data.*;

/**
* 业务伙伴-供应商 接口
* 
*/
public interface ISupplier extends IBOMasterData {

    /**
    * 获取-编码
    * 
    * @return 值
    */
    String getCode();

    /**
    * 设置-编码
    * 
    * @param value 值
    */
    void setCode(String value);


    /**
    * 获取-名称
    * 
    * @return 值
    */
    String getName();

    /**
    * 设置-名称
    * 
    * @param value 值
    */
    void setName(String value);


    /**
    * 获取-组代码
    * 
    * @return 值
    */
    String getGroup();

    /**
    * 设置-组代码
    * 
    * @param value 值
    */
    void setGroup(String value);


    /**
    * 获取-联系人
    * 
    * @return 值
    */
    String getContactPerson();

    /**
    * 设置-联系人
    * 
    * @param value 值
    */
    void setContactPerson(String value);


    /**
    * 获取-公司/个人
    * 
    * @return 值
    */
    emBusinessPartnerNature getCompanyPrivate();

    /**
    * 设置-公司/个人
    * 
    * @param value 值
    */
    void setCompanyPrivate(emBusinessPartnerNature value);


    /**
    * 获取-付款方街道
    * 
    * @return 值
    */
    String getBillToStreet();

    /**
    * 设置-付款方街道
    * 
    * @param value 值
    */
    void setBillToStreet(String value);


    /**
    * 获取-付款方邮政编码
    * 
    * @return 值
    */
    String getBillToZipCode();

    /**
    * 设置-付款方邮政编码
    * 
    * @param value 值
    */
    void setBillToZipCode(String value);


    /**
    * 获取-送达方街道
    * 
    * @return 值
    */
    String getShipToStreet();

    /**
    * 设置-送达方街道
    * 
    * @param value 值
    */
    void setShipToStreet(String value);


    /**
    * 获取-送达方邮政编码
    * 
    * @return 值
    */
    String getShipToZipCode();

    /**
    * 设置-送达方邮政编码
    * 
    * @param value 值
    */
    void setShipToZipCode(String value);


    /**
    * 获取-电话 1
    * 
    * @return 值
    */
    String getTelephone1();

    /**
    * 设置-电话 1
    * 
    * @param value 值
    */
    void setTelephone1(String value);


    /**
    * 获取-电话 2
    * 
    * @return 值
    */
    String getTelephone2();

    /**
    * 设置-电话 2
    * 
    * @param value 值
    */
    void setTelephone2(String value);


    /**
    * 获取-移动电话
    * 
    * @return 值
    */
    String getMobilePhone();

    /**
    * 设置-移动电话
    * 
    * @param value 值
    */
    void setMobilePhone(String value);


    /**
    * 获取-传真号
    * 
    * @return 值
    */
    String getFaxNumber();

    /**
    * 设置-传真号
    * 
    * @param value 值
    */
    void setFaxNumber(String value);


    /**
    * 获取-国税编号
    * 
    * @return 值
    */
    String getTaxId();

    /**
    * 设置-国税编号
    * 
    * @param value 值
    */
    void setTaxId(String value);


    /**
    * 获取-价格清单
    * 
    * @return 值
    */
    Integer getPriceList();

    /**
    * 设置-价格清单
    * 
    * @param value 值
    */
    void setPriceList(Integer value);


    /**
    * 获取-余额
    * 
    * @return 值
    */
    Decimal getBalance();

    /**
    * 设置-余额
    * 
    * @param value 值
    */
    void setBalance(Decimal value);


    /**
    * 设置-余额
    * 
    * @param value 值
    */
    void setBalance(String value);

    /**
    * 设置-余额
    * 
    * @param value 值
    */
    void setBalance(int value);

    /**
    * 设置-余额
    * 
    * @param value 值
    */
    void setBalance(double value);

    /**
    * 获取-货币
    * 
    * @return 值
    */
    String getCurrency();

    /**
    * 设置-货币
    * 
    * @param value 值
    */
    void setCurrency(String value);


    /**
    * 获取-生效日期
    * 
    * @return 值
    */
    DateTime getValidDate();

    /**
    * 设置-生效日期
    * 
    * @param value 值
    */
    void setValidDate(DateTime value);


    /**
    * 获取-失效日期
    * 
    * @return 值
    */
    DateTime getInvalidDate();

    /**
    * 设置-失效日期
    * 
    * @param value 值
    */
    void setInvalidDate(DateTime value);


    /**
    * 获取-备注
    * 
    * @return 值
    */
    String getRemarks();

    /**
    * 设置-备注
    * 
    * @param value 值
    */
    void setRemarks(String value);


    /**
    * 获取-已引用
    * 
    * @return 值
    */
    emYesNo getReferenced();

    /**
    * 设置-已引用
    * 
    * @param value 值
    */
    void setReferenced(emYesNo value);


    /**
    * 获取-已删除
    * 
    * @return 值
    */
    emYesNo getDeleted();

    /**
    * 设置-已删除
    * 
    * @param value 值
    */
    void setDeleted(emYesNo value);


    /**
    * 获取-对象编号
    * 
    * @return 值
    */
    Integer getDocEntry();

    /**
    * 设置-对象编号
    * 
    * @param value 值
    */
    void setDocEntry(Integer value);


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
    * 获取-版本
    * 
    * @return 值
    */
    Integer getLogInst();

    /**
    * 设置-版本
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


    /**
    * 获取-审批状态
    * 
    * @return 值
    */
    emApprovalStatus getApprovalStatus();

    /**
    * 设置-审批状态
    * 
    * @param value 值
    */
    void setApprovalStatus(emApprovalStatus value);


    /**
    * 获取-数据所有者
    * 
    * @return 值
    */
    Integer getDataOwner();

    /**
    * 设置-数据所有者
    * 
    * @param value 值
    */
    void setDataOwner(Integer value);


    /**
    * 获取-数据所属组织
    * 
    * @return 值
    */
    String getOrganization();

    /**
    * 设置-数据所属组织
    * 
    * @param value 值
    */
    void setOrganization(String value);



}

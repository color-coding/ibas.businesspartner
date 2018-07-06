/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 供应商 */
        export interface ISupplier extends ibas.IBOMasterData, ibas.IBOUserFields {

            /** 编码 */
            code: string;

            /** 名称 */
            name: string;

            /** 组代码 */
            group: string;

            /** 激活 */
            activated: ibas.emYesNo;

            /** 公司/个人 */
            companyPrivate: emBusinessPartnerNature;

            /** 联系人 */
            contactPerson: number;

            /** 账单地址 */
            billAddress: number;

            /** 送货地址 */
            shipAddress: number;

            /** 电话 1 */
            telephone1: string;

            /** 电话 2 */
            telephone2: string;

            /** 移动电话 */
            mobilePhone: string;

            /** 传真号 */
            faxNumber: string;

            /** 国税编号 */
            taxId: string;

            /** 价格清单 */
            priceList: number;

            /** 货币 */
            currency: string;

            /** 生效日期 */
            validDate: Date;

            /** 失效日期 */
            invalidDate: Date;

            /** 备注 */
            remarks: string;

            /** 已引用 */
            referenced: ibas.emYesNo;

            /** 已删除 */
            deleted: ibas.emYesNo;

            /** 对象编号 */
            docEntry: number;

            /** 对象类型 */
            objectCode: string;

            /** 创建日期 */
            createDate: Date;

            /** 创建时间 */
            createTime: number;

            /** 修改日期 */
            updateDate: Date;

            /** 修改时间 */
            updateTime: number;

            /** 版本 */
            logInst: number;

            /** 服务系列 */
            series: number;

            /** 数据源 */
            dataSource: string;

            /** 创建用户 */
            createUserSign: number;

            /** 修改用户 */
            updateUserSign: number;

            /** 创建动作标识 */
            createActionId: string;

            /** 更新动作标识 */
            updateActionId: string;

            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;

            /** 数据所有者 */
            dataOwner: number;

            /** 数据所属组织 */
            organization: string;

            /** 所属渠道 */
            channel: string;
        }
    }

}



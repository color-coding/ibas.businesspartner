/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace bo {
        /** 内部对账 */
        export interface IInternalReconciliation extends ibas.IBOSimple {
            /** 对象编号 */
            objectKey: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 服务系列 */
            series: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 数据所有者 */
            dataOwner: number;
            /** 数据所属组织 */
            organization: string;
            /** 备注 */
            remarks: string;
            /** 取消 */
            canceled: ibas.emYesNo;
            /** 系统 */
            systemed: ibas.emYesNo;
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 基于行号 */
            baseDocumentLineId: number;
            /** 对账类型 */
            reconciliationType: string;
            /** 对账日期 */
            reconciliationDate: Date;
            /** 分支 */
            branch: string;
            /** 内部对账-行集合 */
            internalReconciliationLines: IInternalReconciliationLines;
        }

        /** 内部对账-行 集合 */
        export interface IInternalReconciliationLines extends ibas.IBusinessObjects<IInternalReconciliationLine> {
            /** 创建并添加子项 */
            create(): IInternalReconciliationLine;
        }

        /** 内部对账-行 */
        export interface IInternalReconciliationLine extends ibas.IBOSimpleLine {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 备注 */
            remarks: string;
            /** 业务伙伴/科目代码 */
            shortName: string;
            /** 源单据类型 */
            documentType: string;
            /** 源单据编号 */
            documentEntry: number;
            /** 源单据行号 */
            documentLineId: number;
            /** 类别 */
            category: string;
            /** 金额 */
            amount: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
        }


    }
}

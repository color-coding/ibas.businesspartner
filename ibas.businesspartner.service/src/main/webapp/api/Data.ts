/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "2bd803fd-975c-4f7c-aa41-1ca2991cc126";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "BusinessPartner";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace config {
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        export function get<T>(key: string, defalut?: T): T {
            return ibas.config.get(ibas.strings.format("{0}|{1}", CONSOLE_ID, key), defalut);
        }
    }
    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_BUSINESSPARTNER: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-业务伙伴地址 */
        export const BO_CODE_ADDRESS: string = "${Company}_BP_ADDRESS";
        /** 业务对象编码-业务伙伴组 */
        export const BO_CODE_BUSINESSPARTNERGROUP: string = "${Company}_BP_BPGROUP";
        /** 业务对象编码-业务伙伴联系人 */
        export const BO_CODE_CONTACTPERSON: string = "${Company}_BP_CONTACTPERSON";
        /** 业务对象编码-客户 */
        export const BO_CODE_CUSTOMER: string = "${Company}_BP_CUSTOMER";
        /** 业务对象编码-供应商 */
        export const BO_CODE_SUPPLIER: string = "${Company}_BP_SUPPLIER";
        /** 业务对象编码-资产项目 */
        export const BO_CODE_ASSETITEM: string = "${Company}_BP_ASSETITEM";
        /** 业务对象编码-业务伙伴资产 */
        export const BO_CODE_BUSINESSPARTNERASSET: string = "${Company}_BP_BPASSET";
        /** 业务对象编码-业务伙伴资产日记账 */
        export const BO_CODE_BUSINESSPARTNERASSETJOURNAL: string = "${Company}_BP_BPASSETJOURNAL";
        /** 业务对象编码-潜在客户 */
        export const BO_CODE_LEAD: string = "${Company}_BP_LEAD";
        /** 业务对象编码-付款条款 */
        export const BO_CODE_PAYMENTTERM: string = "${Company}_BP_PAYMENTTERM";
        /** 业务对象编码-合同/协议 */
        export const BO_CODE_AGREEMENT: string = "${Company}_BP_AGREEMENT";
        /** 业务对象编码-客户资产 */
        export const BO_CODE_CUSTOMERASSET: string = "${Company}_BP_CUSTOMERASSET";
        /** 业务对象编码-供应商伴资产 */
        export const BO_CODE_SUPPLIERASSET: string = "${Company}_BP_SUPPLIERASSET";
        /** 业务对象编码-内部对账 */
        export const BO_CODE_INTERNALRECONCILIATION: string = "${Company}_BP_INTRECON";

        /** 业务伙伴性质 */
        export enum emBusinessPartnerNature {
            /** 公司 */
            COMPANY,
            /** 私人 */
            PRIVATE,
        }
        /** 业务伙伴类型 */
        export enum emBusinessPartnerType {
            /** 客户 */
            CUSTOMER,
            /** 供应商 */
            SUPPLIER,
            /** 潜在客户 */
            LEAD,
        }
        /** 性别 */
        export enum emGender {
            /** 男 */
            MALE,
            /** 女 */
            FEMALE,
        }
        export enum emDueDateBaseOn {
            /** 单据日期 */
            DOCUMENT_DATE,
            /** 过账日期 */
            POSTING_DATE,
            /** 系统日期 */
            SYSTEM_DATE,
        }
        export enum emPayTermDueType {
            /** 无 */
            NONE,
            /** 月初 */
            MONTH_START,
            /** 月中 */
            MONTH_HALF,
            /** 月末 */
            MONTH_END,
        }
        /** 资产请求 */
        export class IAssetRequest {
            /** 业务伙伴 */
            businessPartner: string;
            /** 单据类型 */
            documentType?: string;
            /** 单据编号 */
            documentEntry?: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 总计 */
            total?: number;
            /** 货币 */
            currency: string;
        }
    }

    export namespace app {
        /** 收款契约 */
        export interface IReceiptContract extends ibas.IServiceContract {
            /** 业务伙伴类型 */
            businessPartnerType: bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据总计 */
            documentTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据摘要 */
            documentSummary?: string;
            /** 允许部分收款 */
            allowPartial?: boolean;
            /** 允许超出收款 */
            allowOver?: boolean;
        }
        /** 收款服务代理 */
        export class ReceiptServiceProxy extends ibas.ServiceProxy<IReceiptContract> {

        }
        /** 付款契约 */
        export interface IPaymentContract extends ibas.IServiceContract {
            /** 业务伙伴类型 */
            businessPartnerType: bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据总计 */
            documentTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据摘要 */
            documentSummary?: string;
            /** 允许部分付款 */
            allowPartial?: boolean;
            /** 允许超出付款 */
            allowOver?: boolean;
        }
        /** 付款服务代理 */
        export class PaymentServiceProxy extends ibas.ServiceProxy<IPaymentContract> {

        }

        /** 查询条件 */
        export namespace conditions {
            export namespace customer {
                /** 默认查询条件 */
                export function create(): ibas.IList<ibas.ICondition> {
                    let today: string = ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd");
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 激活的
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Customer.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 有效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Customer.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.Customer.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.Customer.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 失效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Customer.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.Customer.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.Customer.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 没删除
                    condition = new ibas.Condition();
                    condition.bracketClose = 1;
                    condition.alias = bo.Customer.PROPERTY_DELETED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    conditions.add(condition);
                    // 审批通过的或未进审批
                    condition = new ibas.Condition();
                    condition.alias = bo.Customer.PROPERTY_APPROVALSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emApprovalStatus.APPROVED.toString();
                    condition.bracketOpen = 1;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.alias = bo.Customer.PROPERTY_APPROVALSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                    conditions.add(condition);
                    return conditions;
                }
            }
            export namespace supplier {
                /** 默认查询条件 */
                export function create(): ibas.IList<ibas.ICondition> {
                    let today: string = ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd");
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 激活的
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Supplier.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 有效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Supplier.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.Supplier.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.Supplier.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 失效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Supplier.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.Supplier.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.Supplier.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 没删除
                    condition = new ibas.Condition();
                    condition.bracketClose = 1;
                    condition.alias = bo.Supplier.PROPERTY_DELETED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    conditions.add(condition);
                    // 审批通过的或未进审批
                    condition = new ibas.Condition();
                    condition.alias = bo.Customer.PROPERTY_APPROVALSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emApprovalStatus.APPROVED.toString();
                    condition.bracketOpen = 1;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.alias = bo.Customer.PROPERTY_APPROVALSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                    conditions.add(condition);
                    return conditions;
                }
            }
            export namespace contactperson {
                export function create(type: bo.emBusinessPartnerType, bpCode: string): ibas.IList<ibas.ICondition> {
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 类型
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.ContactPerson.PROPERTY_OWNERTYPE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = type.toString();
                    conditions.add(condition);
                    // 激活的
                    condition = new ibas.Condition();
                    condition.alias = bo.ContactPerson.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 业务伙伴编码
                    condition = new ibas.Condition();
                    condition.bracketClose = 1;
                    condition.alias = bo.ContactPerson.PROPERTY_BUSINESSPARTNER_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = bpCode;
                    conditions.add(condition);
                    return conditions;
                }
            }
            export namespace address {
                export function create(type: bo.emBusinessPartnerType, bpCode: string): ibas.IList<ibas.ICondition> {
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 类型
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.Address.PROPERTY_OWNERTYPE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = type.toString();
                    conditions.add(condition);
                    // 激活的
                    condition = new ibas.Condition();
                    condition.alias = bo.Address.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 业务伙伴编码
                    condition = new ibas.Condition();
                    condition.bracketClose = 1;
                    condition.alias = bo.Address.PROPERTY_BUSINESSPARTNER_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = bpCode;
                    conditions.add(condition);
                    return conditions;
                }
            }
            export namespace assetitem {
                /** 默认查询条件 */
                export function create(): ibas.IList<ibas.ICondition> {
                    let today: string = ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd");
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 激活的
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.AssetItem.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 有效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.AssetItem.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.AssetItem.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.AssetItem.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 失效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.AssetItem.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.AssetItem.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.AssetItem.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 没删除
                    condition = new ibas.Condition();
                    condition.bracketClose = 1;
                    condition.alias = bo.AssetItem.PROPERTY_DELETED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    conditions.add(condition);
                    return conditions;
                }
            }
            export namespace businesspartnerasset {
                /** 默认查询条件 */
                export function create(type: bo.emBusinessPartnerType, bpCode: string): ibas.IList<ibas.ICondition> {
                    let today: string = ibas.dates.toString(ibas.dates.today(), "yyyy-MM-dd");
                    let condition: ibas.ICondition;
                    let conditions: ibas.IList<ibas.ICondition> = new ibas.ArrayList<ibas.ICondition>();
                    // 激活的
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_ACTIVATED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.YES.toString();
                    conditions.add(condition);
                    // 有效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_VALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 失效日期
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.IS_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketOpen = 1;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.NOT_NULL;
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 2;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_INVALIDDATE_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                    condition.value = today;
                    conditions.add(condition);
                    // 没删除
                    condition = new ibas.Condition();
                    condition.bracketClose = 1;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_DELETED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    conditions.add(condition);
                    // 业务伙伴
                    condition = new ibas.Condition();
                    condition.bracketOpen = 1;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = type.toString();
                    conditions.add(condition);
                    condition = new ibas.Condition();
                    condition.bracketClose = 1;
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = bpCode;
                    conditions.add(condition);
                    // 使用次数
                    condition = new ibas.Condition();
                    condition.alias = bo.BusinessPartnerAsset.PROPERTY_TIMES_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_THAN;
                    condition.value = "0";
                    conditions.add(condition);
                    return conditions;
                }
            }
        }
    }
}
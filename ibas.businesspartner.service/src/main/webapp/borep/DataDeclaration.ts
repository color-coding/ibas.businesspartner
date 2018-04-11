/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

namespace businesspartner {
    export namespace bo {
        export namespace ibas4j {
            /** ibas的java端数据声明 */

            /** 操作消息 */
            export interface IDataDeclaration {
                /** 数据类型 */
                type: string;
            }
            /** 资产请求 */
            export interface IAssetRequest extends IDataDeclaration {
                /** 业务伙伴 */
                BusinessPartner: string;
                /** 单据类型 */
                DocumentType: string;
                /** 单据编号 */
                DocumentEntry: number;
                /** 单据行号 */
                DocumentLineId: number;
                /** 总计 */
                Total: number;
                /** 货币 */
                Currency: string;
            }
            /** 客户资产 */
            export interface ICustomerAsset extends IDataDeclaration {
                /** 资产编码 */
                Code: string;
                /** 资产名称 */
                Name: string;
                /** 图片 */
                Picture: string;
                /** 生效日期 */
                ValidDate: string;
                /** 失效日期 */
                InvalidDate: string;
                /** 可用值 */
                Amount: number;
                /** 值单位 */
                Unit: string;
                /** 可用次数 */
                Times: number;
                /** 折扣 */
                Discount: number;
                /** 客户 */
                Customer: string;
            }
        }
    }
}
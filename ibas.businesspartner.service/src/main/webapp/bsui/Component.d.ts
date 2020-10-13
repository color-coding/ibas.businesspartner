/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace businesspartner {
    namespace ui {
        namespace component {
            /**
             * 业务伙伴描述（根据类型加载客户或供应商）
             */
            class BusinessPartnerText extends sap.extension.m.ConversionText {
                /** 获取-业务伙伴类型属性 */
                getTypeProperty(): string;
                /** 设置-业务伙伴类型属性 */
                setTypeProperty(value: string): BusinessPartnerText;
            }
            /**
             * 业务伙伴描述（根据类型加载客户或供应商）
             */
            class BusinessPartnerAttribute extends sap.extension.m.ConversionObjectAttribute {
                /** 获取-业务伙伴类型属性 */
                getTypeProperty(): string;
                /** 设置-业务伙伴类型属性 */
                setTypeProperty(value: string): BusinessPartnerAttribute;
            }
        }
    }
}
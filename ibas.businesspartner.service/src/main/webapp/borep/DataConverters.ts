/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import {
} from "../api/index";
import {
    IContactPerson,
    BO_CODE_CONTACTPERSON,
    emBusinessPartnerType,
    emBusinessPartnerNature,
    emGender,
} from "../api/index";

/** 数据转换者 */
export class DataConverter4bp extends ibas.DataConverter4j {

    /** 创建业务对象转换者 */
    protected createConverter(): ibas.BOConverter {
        return new BOConverter4bp;
    }
}

/** 业务对象转换者 */
class BOConverter4bp extends ibas.BOConverter {

    /**
     * 自定义解析
     * @param data 远程数据
     * @returns 本地数据
     */
    protected customParsing(data: any): ibas.IBusinessObject {
        return data;
    }

    /**
     * 转换数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 转换的值
     */
    protected convertData(boName: string, property: string, value: any): any {
        if (boName === bo.BusinessPartnerBalanceJournal.name) {
            if (property === bo.BusinessPartnerBalanceJournal.PROPERTY_BUSINESSPARTNERTYPE_NAME) {
                return ibas.enums.toString(emBusinessPartnerType, value);
            }
        } else if (boName === bo.ContactPerson.name) {
            if (property === bo.ContactPerson.PROPERTY_GENDER_NAME) {
                return ibas.enums.toString(emGender, value);
            }
            if (property === bo.ContactPerson.PROPERTY_OWNERTYPE_NAME) {
                return ibas.enums.toString(emBusinessPartnerType, value);
            }
        } else if (boName === bo.Customer.name) {
            if (property === bo.Customer.PROPERTY_COMPANYPRIVATE_NAME) {
                return ibas.enums.toString(emBusinessPartnerNature, value);
            }
        } else if (boName === bo.Supplier.name) {
            if (property === bo.Supplier.PROPERTY_COMPANYPRIVATE_NAME) {
                return ibas.enums.toString(emBusinessPartnerNature, value);
            }
        }
        return super.convertData(boName, property, value);
    }

    /**
     * 解析数据
     * @param boName 对象名称
     * @param property 属性名称
     * @param value 值
     * @returns 解析的值
     */
    protected parsingData(boName: string, property: string, value: any): any {
        if (boName === bo.BusinessPartnerBalanceJournal.name) {
            if (property === bo.BusinessPartnerBalanceJournal.PROPERTY_BUSINESSPARTNERTYPE_NAME) {
                return ibas.enums.valueOf(emBusinessPartnerType, value);
            }
        } else if (boName === bo.ContactPerson.name) {
            if (property === bo.ContactPerson.PROPERTY_GENDER_NAME) {
                return ibas.enums.valueOf(emGender, value);
            }
            if (property === bo.ContactPerson.PROPERTY_OWNERTYPE_NAME) {
                return ibas.enums.valueOf(emBusinessPartnerType, value);
            }
        } else if (boName === bo.Customer.name) {
            if (property === bo.Customer.PROPERTY_COMPANYPRIVATE_NAME) {
                return ibas.enums.valueOf(emBusinessPartnerNature, value);
            }
        } else if (boName === bo.Supplier.name) {
            if (property === bo.Supplier.PROPERTY_COMPANYPRIVATE_NAME) {
                return ibas.enums.valueOf(emBusinessPartnerNature, value);
            }
        }
        return super.parsingData(boName, property, value);
    }
}

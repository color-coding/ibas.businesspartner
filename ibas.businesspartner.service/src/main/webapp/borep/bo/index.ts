/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 模块索引文件，此文件集中导出类
export * from "../../api/Datas";
export * from "./BusinessPartnerBalanceJournal";
export * from "./BusinessPartnerGroup";
export * from "./ContactPerson";
export * from "./Customer";
export * from "./Supplier";

// 注册业务对象到工厂
import * as ibas from "ibas/index";
import { BusinessPartnerBalanceJournal } from "./BusinessPartnerBalanceJournal";
ibas.boFactory.register(BusinessPartnerBalanceJournal.BUSINESS_OBJECT_CODE, BusinessPartnerBalanceJournal);
import { BusinessPartnerGroup } from "./BusinessPartnerGroup";
ibas.boFactory.register(BusinessPartnerGroup.BUSINESS_OBJECT_CODE, BusinessPartnerGroup);
import { ContactPerson } from "./ContactPerson";
ibas.boFactory.register(ContactPerson.BUSINESS_OBJECT_CODE, ContactPerson);
import { Customer } from "./Customer";
ibas.boFactory.register(Customer.BUSINESS_OBJECT_CODE, Customer);
import { Supplier } from "./Supplier";
ibas.boFactory.register(Supplier.BUSINESS_OBJECT_CODE, Supplier);

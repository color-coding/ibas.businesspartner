/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../3rdparty/ibas/index.d.ts" />
/// <reference path="../api/index.ts" />
/// <reference path="./bo/Address.ts" />
/// <reference path="./bo/BusinessPartnerGroup.ts" />
/// <reference path="./bo/ContactPerson.ts" />
/// <reference path="./bo/Customer.ts" />
/// <reference path="./bo/Supplier.ts" />
/// <reference path="./DataConverter.ts" />
/// <reference path="./BORepository.ts" />

namespace businesspartner {
    export namespace bo {
        // 注册业务对象仓库到工厂
        boFactory.register(BO_REPOSITORY_BUSINESSPARTNER, BORepositoryBusinessPartner);
        // 注册业务对象到工厂
        boFactory.register(Address.BUSINESS_OBJECT_CODE, Address);
        boFactory.register(BusinessPartnerGroup.BUSINESS_OBJECT_CODE, BusinessPartnerGroup);
        boFactory.register(ContactPerson.BUSINESS_OBJECT_CODE, ContactPerson);
        boFactory.register(Customer.BUSINESS_OBJECT_CODE, Customer);
        boFactory.register(Supplier.BUSINESS_OBJECT_CODE, Supplier);
    }
}
/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { BusinessPartnerBalanceJournalListApp } from "./BusinessPartnerBalanceJournalListApp";

export class BusinessPartnerBalanceJournalFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "825e4933-d996-4009-9d51-478b9cb22305";
    /** 功能名称 */
    static FUNCTION_NAME = "businesspartner_func_businesspartnerbalancejournal";
    /** 构造函数 */
    constructor() {
        super();
        this.id = BusinessPartnerBalanceJournalFunc.FUNCTION_ID;
        this.name = BusinessPartnerBalanceJournalFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: BusinessPartnerBalanceJournalListApp = new BusinessPartnerBalanceJournalListApp();
        app.navigation = this.navigation;
        return app;
    }
}

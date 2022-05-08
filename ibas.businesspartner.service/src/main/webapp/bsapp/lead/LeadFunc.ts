/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        export class LeadFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "91678bf8-38a2-489d-9a51-ed4a1356f429";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_lead";
            /** 构造函数 */
            constructor() {
                super();
                this.id = LeadFunc.FUNCTION_ID;
                this.name = LeadFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: LeadListApp = new LeadListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

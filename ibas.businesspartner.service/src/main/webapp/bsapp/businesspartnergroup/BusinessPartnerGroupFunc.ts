/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {

        export class BusinessPartnerGroupFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "9c667cb2-95df-48f7-bee0-83f7ccf8bf49";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_businesspartnergroup";
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerGroupFunc.FUNCTION_ID;
                this.name = BusinessPartnerGroupFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: BusinessPartnerGroupListApp = new BusinessPartnerGroupListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

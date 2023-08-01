/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        export class AgreementFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "a71d27ff-923a-4074-81a3-e3fda765a895";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_agreement";
            /** 构造函数 */
            constructor() {
                super();
                this.id = AgreementFunc.FUNCTION_ID;
                this.name = AgreementFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: AgreementListApp = new AgreementListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

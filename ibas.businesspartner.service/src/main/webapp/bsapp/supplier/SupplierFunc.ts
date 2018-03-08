/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {

        export class SupplierFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "e2095963-3da7-4890-8fbe-5bd5bf175521";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_supplier";
            /** 构造函数 */
            constructor() {
                super();
                this.id = SupplierFunc.FUNCTION_ID;
                this.name = SupplierFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: SupplierListApp = new SupplierListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
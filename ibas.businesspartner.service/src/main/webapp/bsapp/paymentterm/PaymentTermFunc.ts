/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        export class PaymentTermFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "e8aac247-c1e9-4d0f-8b58-681a2cbaab62";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_paymentterm";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PaymentTermFunc.FUNCTION_ID;
                this.name = PaymentTermFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PaymentTermListApp = new PaymentTermListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

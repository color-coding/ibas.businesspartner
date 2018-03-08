/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {

        export class ContactPersonFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "4f6af3e8-2682-4e0e-8900-f889679665b6";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_contactperson";
            /** 构造函数 */
            constructor() {
                super();
                this.id = ContactPersonFunc.FUNCTION_ID;
                this.name = ContactPersonFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: ContactPersonListApp = new ContactPersonListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

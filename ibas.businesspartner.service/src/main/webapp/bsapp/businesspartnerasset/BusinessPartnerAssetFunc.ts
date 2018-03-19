/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        export class BusinessPartnerAssetFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "b8047eb4-f635-40fb-a832-40d7c5fad52b";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_businesspartnerasset";
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetFunc.FUNCTION_ID;
                this.name = BusinessPartnerAssetFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: BusinessPartnerAssetListApp = new BusinessPartnerAssetListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

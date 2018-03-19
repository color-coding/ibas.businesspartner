/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        export class BusinessPartnerAssetJournalFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "6988447c-8867-4f78-89b2-aaed8d65ea8f";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_businesspartnerassetjournal";
            /** 构造函数 */
            constructor() {
                super();
                this.id = BusinessPartnerAssetJournalFunc.FUNCTION_ID;
                this.name = BusinessPartnerAssetJournalFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: BusinessPartnerAssetJournalListApp = new BusinessPartnerAssetJournalListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

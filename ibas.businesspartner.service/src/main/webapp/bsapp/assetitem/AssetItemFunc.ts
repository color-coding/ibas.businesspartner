/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace businesspartner {
    export namespace app {
        export class AssetItemFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "f07fcb0a-be16-4656-b7e0-b8a60af26822";
            /** 功能名称 */
            static FUNCTION_NAME = "businesspartner_func_assetitem";
            /** 构造函数 */
            constructor() {
                super();
                this.id = AssetItemFunc.FUNCTION_ID;
                this.name = AssetItemFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: AssetItemListApp = new AssetItemListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace initialfantasy {
    export namespace bo {

        /** 应用程序模块 */
        export interface IApplicationModule extends ibas.IBOSimple {

            /** 模块标识 */
            moduleId: string;

            /** 平台标识 */
            platformId: string;

            /** 模块名称 */
            moduleName: string;

            /** 模块类别 */
            moduleCategory: string;

            /** 模块入口 */
            moduleEntry: string;

            /** 是否可用 */
            activated: ibas.emYesNo;

            /** 对象键值 */
            objectKey: number;

            /** 对象类型 */
            objectCode: string;

            /** 数据源 */
            dataSource: string;

            /** 创建日期 */
            createDate: Date;

            /** 创建时间 */
            createTime: number;

            /** 修改日期 */
            updateDate: Date;

            /** 修改时间 */
            updateTime: number;

            /** 创建动作标识 */
            createActionId: string;

            /** 更新动作标识 */
            updateActionId: string;

            /** 实例号（版本） */
            logInst: number;

            /** 创建用户 */
            createUserSign: number;

            /** 修改用户 */
            updateUserSign: number;
        }
    }

}


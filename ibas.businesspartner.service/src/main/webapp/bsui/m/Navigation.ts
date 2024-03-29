/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../index.d.ts" />
/// <reference path="../Component.d.ts" />
/// <reference path="../Component.ts" />
/// <reference path="./address/index.ts" />
/// <reference path="./businesspartnergroup/index.ts" />
/// <reference path="./contactperson/index.ts" />
/// <reference path="./customer/index.ts" />
/// <reference path="./supplier/index.ts" />
/// <reference path="./assetitem/index.ts" />
/// <reference path="./businesspartnerasset/index.ts" />
/// <reference path="./lead/index.ts" />
/// <reference path="./paymentterm/index.ts" />
/// <reference path="./agreement/index.ts" />
namespace businesspartner {
    export namespace ui {
        /**
         * 视图导航
         */
        export class Navigation extends ibas.ViewNavigation {
            /**
             * 创建实例
             * @param id 应用id
             */
            protected newView(id: string): ibas.IView {
                let view: ibas.IView = null;
                switch (id) {
                    case app.AddressListApp.APPLICATION_ID:
                        view = new m.AddressListView();
                        break;
                    case app.AddressChooseApp.APPLICATION_ID:
                        view = new m.AddressChooseView();
                        break;
                    case app.AddressEditApp.APPLICATION_ID:
                        view = new m.AddressEditView();
                        break;
                    case app.AddressViewApp.APPLICATION_ID:
                        view = new m.AddressViewView();
                        break;
                    case app.BusinessPartnerGroupChooseApp.APPLICATION_ID:
                        view = new m.BusinessPartnerGroupChooseView();
                        break;
                    case app.ContactPersonListApp.APPLICATION_ID:
                        view = new m.ContactPersonListView();
                        break;
                    case app.ContactPersonChooseApp.APPLICATION_ID:
                        view = new m.ContactPersonChooseView();
                        break;
                    case app.ContactPersonEditApp.APPLICATION_ID:
                        view = new m.ContactPersonEditView();
                        break;
                    case app.ContactPersonViewApp.APPLICATION_ID:
                        view = new m.ContactPersonViewView();
                        break;
                    case app.CustomerListApp.APPLICATION_ID:
                        view = new m.CustomerListView();
                        break;
                    case app.CustomerChooseApp.APPLICATION_ID:
                        view = new m.CustomerChooseView();
                        break;
                    case app.CustomerEditApp.APPLICATION_ID:
                        view = new m.CustomerEditView();
                        break;
                    case app.CustomerViewApp.APPLICATION_ID:
                        view = new m.CustomerViewView();
                        break;
                    case app.SupplierListApp.APPLICATION_ID:
                        view = new m.SupplierListView();
                        break;
                    case app.SupplierChooseApp.APPLICATION_ID:
                        view = new m.SupplierChooseView();
                        break;
                    case app.SupplierEditApp.APPLICATION_ID:
                        view = new m.SupplierEditView();
                        break;
                    case app.SupplierViewApp.APPLICATION_ID:
                        view = new m.SupplierViewView();
                        break;
                    case app.AssetItemChooseApp.APPLICATION_ID:
                        view = new m.AssetItemChooseView();
                        break;
                    case app.AssetItemViewApp.APPLICATION_ID:
                        view = new m.AssetItemViewView();
                        break;
                    case app.BusinessPartnerAssetChooseApp.APPLICATION_ID:
                        view = new m.BusinessPartnerAssetChooseView();
                        break;
                    case app.LeadListApp.APPLICATION_ID:
                        view = new m.LeadListView();
                        break;
                    case app.LeadChooseApp.APPLICATION_ID:
                        view = new m.LeadChooseView();
                        break;
                    case app.LeadEditApp.APPLICATION_ID:
                        view = new m.LeadEditView();
                        break;
                    case app.LeadViewApp.APPLICATION_ID:
                        view = new m.LeadViewView();
                        break;
                    case app.PaymentTermChooseApp.APPLICATION_ID:
                        view = new m.PaymentTermChooseView();
                        break;
                    case app.AgreementChooseApp.APPLICATION_ID:
                        view = new m.AgreementChooseView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}
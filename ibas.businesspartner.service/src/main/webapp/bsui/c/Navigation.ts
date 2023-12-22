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
                        view = new c.AddressListView();
                        break;
                    case app.AddressChooseApp.APPLICATION_ID:
                        view = new c.AddressChooseView();
                        break;
                    case app.AddressEditApp.APPLICATION_ID:
                        view = new c.AddressEditView();
                        break;
                    case app.AddressViewApp.APPLICATION_ID:
                        view = new c.AddressViewView();
                        break;
                    case app.BusinessPartnerGroupListApp.APPLICATION_ID:
                        view = new c.BusinessPartnerGroupListView();
                        break;
                    case app.BusinessPartnerGroupChooseApp.APPLICATION_ID:
                        view = new c.BusinessPartnerGroupChooseView();
                        break;
                    case app.BusinessPartnerGroupEditApp.APPLICATION_ID:
                        view = new c.BusinessPartnerGroupEditView();
                        break;
                    case app.ContactPersonListApp.APPLICATION_ID:
                        view = new c.ContactPersonListView();
                        break;
                    case app.ContactPersonChooseApp.APPLICATION_ID:
                        view = new c.ContactPersonChooseView();
                        break;
                    case app.ContactPersonEditApp.APPLICATION_ID:
                        view = new c.ContactPersonEditView();
                        break;
                    case app.ContactPersonViewApp.APPLICATION_ID:
                        view = new c.ContactPersonViewView();
                        break;
                    case app.CustomerListApp.APPLICATION_ID:
                        view = new c.CustomerListView();
                        break;
                    case app.CustomerChooseApp.APPLICATION_ID:
                        view = new c.CustomerChooseView();
                        break;
                    case app.CustomerEditApp.APPLICATION_ID:
                        view = new c.CustomerEditView();
                        break;
                    case app.CustomerViewApp.APPLICATION_ID:
                        view = new c.CustomerViewView();
                        break;
                    case app.SupplierListApp.APPLICATION_ID:
                        view = new c.SupplierListView();
                        break;
                    case app.SupplierChooseApp.APPLICATION_ID:
                        view = new c.SupplierChooseView();
                        break;
                    case app.SupplierEditApp.APPLICATION_ID:
                        view = new c.SupplierEditView();
                        break;
                    case app.SupplierViewApp.APPLICATION_ID:
                        view = new c.SupplierViewView();
                        break;
                    case app.AssetItemListApp.APPLICATION_ID:
                        view = new c.AssetItemListView();
                        break;
                    case app.AssetItemChooseApp.APPLICATION_ID:
                        view = new c.AssetItemChooseView();
                        break;
                    case app.AssetItemEditApp.APPLICATION_ID:
                        view = new c.AssetItemEditView();
                        break;
                    case app.AssetItemViewApp.APPLICATION_ID:
                        view = new c.AssetItemViewView();
                        break;
                    case app.BusinessPartnerAssetListApp.APPLICATION_ID:
                        view = new c.BusinessPartnerAssetListView();
                        break;
                    case app.BusinessPartnerAssetChooseApp.APPLICATION_ID:
                        view = new c.BusinessPartnerAssetChooseView();
                        break;
                    case app.BusinessPartnerAssetEditApp.APPLICATION_ID:
                        view = new c.BusinessPartnerAssetEditView();
                        break;
                    case app.BusinessPartnerAssetJournalListApp.APPLICATION_ID:
                        view = new c.BusinessPartnerAssetJournalListView();
                        break;
                    case app.BusinessPartnerAssetJournalEditApp.APPLICATION_ID:
                        view = new c.BusinessPartnerAssetJournalEditView();
                        break;
                    case app.LeadListApp.APPLICATION_ID:
                        view = new c.LeadListView();
                        break;
                    case app.LeadChooseApp.APPLICATION_ID:
                        view = new c.LeadChooseView();
                        break;
                    case app.LeadEditApp.APPLICATION_ID:
                        view = new c.LeadEditView();
                        break;
                    case app.LeadViewApp.APPLICATION_ID:
                        view = new c.LeadViewView();
                        break;
                    case app.PaymentTermListApp.APPLICATION_ID:
                        view = new c.PaymentTermListView();
                        break;
                    case app.PaymentTermChooseApp.APPLICATION_ID:
                        view = new c.PaymentTermChooseView();
                        break;
                    case app.PaymentTermViewApp.APPLICATION_ID:
                        view = new c.PaymentTermViewView();
                        break;
                    case app.PaymentTermEditApp.APPLICATION_ID:
                        view = new c.PaymentTermEditView();
                        break;
                    case app.AgreementListApp.APPLICATION_ID:
                        view = new c.AgreementListView();
                        break;
                    case app.AgreementChooseApp.APPLICATION_ID:
                        view = new c.AgreementChooseView();
                        break;
                    case app.AgreementViewApp.APPLICATION_ID:
                        view = new c.AgreementViewView();
                        break;
                    case app.AgreementEditApp.APPLICATION_ID:
                        view = new c.AgreementEditView();
                        break;
                    case app.CustomerAssetChooseApp.APPLICATION_ID:
                        view = new c.CustomerAssetChooseView();
                        break;
                    case app.SupplierAssetChooseApp.APPLICATION_ID:
                        view = new c.SupplierAssetChooseView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}
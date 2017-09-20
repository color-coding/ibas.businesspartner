/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as businesspartnerbalancejournalApps from "../../bsapp/businesspartnerbalancejournal/index";
import * as businesspartnerbalancejournalViews from "./businesspartnerbalancejournal/index";
import * as businesspartnergroupApps from "../../bsapp/businesspartnergroup/index";
import * as contactpersonApps from "../../bsapp/contactperson/index";
import * as customerApps from "../../bsapp/customer/index";
import * as supplierApps from "../../bsapp/supplier/index";
import * as businesspartnergroupViews from "./businesspartnergroup/index";
import * as contactpersonViews from "./contactperson/index";
import * as customerViews from "./customer/index";
import * as supplierViews from "./supplier/index";
/**
 * 视图导航
 */
export default class Navigation extends ibas.ViewNavigation {

    /**
     * 创建实例
     * @param id 应用id
     */
    protected newView(id: string): ibas.IView {
        let view: ibas.IView = null;
        switch (id) {
            case businesspartnergroupApps.BusinessPartnerGroupListApp.APPLICATION_ID:
                view = new businesspartnergroupViews.BusinessPartnerGroupListView();
                break;
            case businesspartnergroupApps.BusinessPartnerGroupChooseApp.APPLICATION_ID:
                // view = new businesspartnergroupViews.BusinessPartnerGroupChooseView();
                break;
            case businesspartnergroupApps.BusinessPartnerGroupViewApp.APPLICATION_ID:
                view = new businesspartnergroupViews.BusinessPartnerGroupViewView();
                break;
            case businesspartnergroupApps.BusinessPartnerGroupEditApp.APPLICATION_ID:
                view = new businesspartnergroupViews.BusinessPartnerGroupEditView();
                break;
            case contactpersonApps.ContactPersonListApp.APPLICATION_ID:
                view = new contactpersonViews.ContactPersonListView();
                break;
            case contactpersonApps.ContactPersonChooseApp.APPLICATION_ID:
                // view = new contactpersonViews.ContactPersonChooseView();
                break;
            case contactpersonApps.ContactPersonViewApp.APPLICATION_ID:
                view = new contactpersonViews.ContactPersonViewView();
                break;
            case contactpersonApps.ContactPersonEditApp.APPLICATION_ID:
                view = new contactpersonViews.ContactPersonEditView();
                break;
            case customerApps.CustomerListApp.APPLICATION_ID:
                view = new customerViews.CustomerListView();
                break;
            case customerApps.CustomerChooseApp.APPLICATION_ID:
                // view = new customerViews.CustomerChooseView();
                break;
            case customerApps.CustomerViewApp.APPLICATION_ID:
                view = new customerViews.CustomerViewView();
                break;
            case customerApps.CustomerEditApp.APPLICATION_ID:
                view = new customerViews.CustomerEditView();
                break;
            case supplierApps.SupplierListApp.APPLICATION_ID:
                view = new supplierViews.SupplierListView();
                break;
            case supplierApps.SupplierChooseApp.APPLICATION_ID:
                view = new supplierViews.SupplierChooseView();
                break;
            case supplierApps.SupplierViewApp.APPLICATION_ID:
                view = new supplierViews.SupplierViewView();
                break;
            case supplierApps.SupplierEditApp.APPLICATION_ID:
                view = new supplierViews.SupplierEditView();
                break;
            default:
                break;
        }
        return view;
    }
}

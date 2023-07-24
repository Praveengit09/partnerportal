import { PharmacyDashboardGuard } from './../auth/guard/pharmacy-dash-guard';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '../layout/utils/utils.module';
import { RickshawChartModule } from '../components/rickshaw/rickshaw.module';
import { HSDatePickerModule } from './../layout/widget/datetimepicker/datetimepicker.module';

import { WidgetModule } from '../layout/widget/widget.module';
import { PatientRegisterModule } from '../patientregister/patientregister.module';
import { PharmacyReportComponent } from './component/report/report.component';
import { PharmacyGuard } from '../auth/guard/pharmacy-guard.service';
import { PharmacyReportGuard } from '../auth/guard/pharmareport-guard.service';
import { InventoryGuard } from '../auth/guard/inventory-guard.service';
import { PharmacyHomeOrderGuard } from '../auth/guard/pharmacyhomeorder-guard.service';
import { PharmacyDashboardComponent } from './../pharmacy/component/dashboard/pharmacydashboard.component';
import { Nvd3ChartModule } from './../components/nvd3/nvd3.module';
import { OrderPerdayPharmacyChartComponent } from './../pharmacy/component/orderperdaypharmacychart/orderperdaypharmacychart.component';
import { RevenuePerdayPharmacyChartComponent } from './../pharmacy/component/revenueperdaypharmacychart/revenueperdaypharmacychart.component';
import { RevenuePerDocPerDayPharmacyChartComponent } from './../pharmacy/component/revenueperdocperdaypharmacychart/revenueperdocperdaypharmacychart.component';
import { HomeDeliveryChartComponent } from './../pharmacy/component/homedeliverychart/homedeliverychart.component';
import { DiagnosticsService } from '../diagnostics/diagnostics.service';
import { BusinessAdminService } from '../businessadmin/businessadmin.service';
import { CentralPharmacyHomeOrderGuard } from '../auth/guard/centralpharmacyhomeorder-guard.service';
import { MatInputModule } from '@angular/material';
import { PharmacyComponent } from './advice/component/listing/pharmacy.component';

export const routes = [
  { path: '', redirectTo: 'pharmacydashboard', pathMatch: 'full' },
  { path: 'pharmacydashboard', canActivate: [PharmacyDashboardGuard], component: PharmacyDashboardComponent },
  { path: 'orders', canActivate: [PharmacyGuard], component: PharmacyComponent },
  { path: 'mypharmacy', canActivate: [PharmacyReportGuard], component: PharmacyReportComponent },
  { path: 'advice', loadChildren: './advice/advice.module#PharmacyAdviceModule' },
  { path: 'inventory', canActivate: [InventoryGuard], loadChildren: './inventory/inventory.module#InventoryModule' },
  { path: 'homeorder', canActivate: [PharmacyHomeOrderGuard], loadChildren: './homeorders/homeorders.module#HomeOrdersModule' },
  { path: 'returns', canActivate: [PharmacyHomeOrderGuard], loadChildren: './returns/pharmacyreturnsorders.module#PharmacyReturnsOrdersModule' },
  { path: 'centralhomeorder', canActivate: [CentralPharmacyHomeOrderGuard], loadChildren: './centralhomeorders/centralhomeorders.module#CentralHomeOrdersModule' },
  { path: 'centralinventory', loadChildren: './centralinventory/centralinventory.module#CentralInventoryModule' },
  { path: 'pharmacyDelivery', loadChildren: '../productdelivery/productdelivery.module#ProductDeliveryModule' },
  { path: 'supplier', loadChildren: './supplier/supplierorders.module#SupplierOrdersModule' },
  { path: 'inpatientorders', loadChildren: './inpatientorders/inpatientorders.module#InPatientOrdersModule' },
  { path: 'otpatientorders', loadChildren: './operationtheatrepatientorders/otpatientorders.module#OtPatientOrdersModule' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    UtilsModule,
    FormsModule,
    //Ng2CompleterModule,

    HSDatePickerModule,
    RickshawChartModule,
    PatientRegisterModule,
    ReactiveFormsModule,
    Nvd3ChartModule,
    MatInputModule
  ],
  declarations: [
    PharmacyDashboardComponent,
    PharmacyComponent,
    PharmacyReportComponent,
    OrderPerdayPharmacyChartComponent,
    RevenuePerdayPharmacyChartComponent,
    RevenuePerDocPerDayPharmacyChartComponent,
    HomeDeliveryChartComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    DiagnosticsService,
    BusinessAdminService
  ]
})
export class PharmacyModule {
  static routes = routes;
}

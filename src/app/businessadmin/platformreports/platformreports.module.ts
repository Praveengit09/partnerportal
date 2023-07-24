import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuperAdminService } from '../../superadmin/superadmin.service';
import { BrandRevenueComponent } from './component/brandrevenue/brandrevenue.component';
import { BusinessAdminService } from '../businessadmin.service';
import { BrandPocRevenueComponent } from './component/brandpocrevenue/brandpocrevenue.component';
import { SettlePaymentComponent } from './component/settlepayment/settlepayment.component';
import { ReconciliationPeriodicDetails } from './component/reconciliationperiodicdetails/reconciliationperiodicdetails.component';
import { ReconciliationReportComponent } from './component/reconciliationreport/reconciliationreport.component';
import { HSBusinessAdminGuard } from '../../auth/guard/hsbusinessadmin-guard.service';
import { HSDatePickerModule } from '../../layout/widget/datetimepicker/datetimepicker.module';
import { FormsModule } from '@angular/forms';
import { WidgetModule } from '../../layout/widget/widget.module';
import { RickshawChartModule } from '../../components/rickshaw/rickshaw.module';
import { UtilsModule } from '../../layout/utils/utils.module';
import { Nvd3ChartModule } from '../../components/nvd3/nvd3.module';
import { MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

export const routes = [
    { path: '', redirectTo: 'brandreport', pathMatch: 'full' },
    { path: 'brandreport', canActivate: [HSBusinessAdminGuard], component: BrandRevenueComponent },
    { path: 'brandpocreport', canActivate: [HSBusinessAdminGuard], component: BrandPocRevenueComponent },
    { path: 'reconciliation', CanActivate: [HSBusinessAdminGuard], component: ReconciliationReportComponent },
    { path: 'reconciliationdetails', CanActivate: [HSBusinessAdminGuard], component: ReconciliationPeriodicDetails },
    { path: 'settlepayment', CanActivate: [HSBusinessAdminGuard], component: SettlePaymentComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WidgetModule,
        UtilsModule,
        FormsModule,
        RickshawChartModule,
        HSDatePickerModule,
        Nvd3ChartModule,
        MatTableModule,
        MatInputModule,
        MatSortModule,
        MatPaginatorModule,
        NgxDaterangepickerMd.forRoot()
    ],
    declarations: [
        ReconciliationReportComponent,
        ReconciliationPeriodicDetails,
        BrandRevenueComponent,
        BrandPocRevenueComponent,
        SettlePaymentComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        BusinessAdminService,
        SuperAdminService
    ]
})
export class PlatformReportsModule {
    static routes = routes;
}

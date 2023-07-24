import { HSDatePickerModule } from './../../layout/widget/datetimepicker/datetimepicker.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DoctorQueueComponent } from './queue/doctorqueue.component';
import { WidgetModule } from '../../layout/widget/widget.module';
import { UtilsModule } from '../../layout/utils/utils.module';
import { PaymentService } from '../../payment/payment.service';
import { DigiVitalComponent } from './vital/digivital.component';
import { DigiVitalsReadingComponent } from './vitalsreading/vitalsreading.component';
import { NurseService } from './../../nurse/nurse.service';
import { PaymentInvoiceComponent } from './invoice/invoice.component';
import { MatInputModule } from '@angular/material';
import { NurseModule } from '../../nurse/nurse.module';

export const routes = [
    { path: '', redirectTo: 'queue', pathMatch: 'full' },
    { path: 'queue', component: DoctorQueueComponent },
    { path: 'invoice', component: PaymentInvoiceComponent },
    { path: 'vital', component: DigiVitalComponent },
    { path: 'vitalsreading', component: DigiVitalsReadingComponent },
    { path: 'prescription', loadChildren: './DigiPrescription/prescription.module#PrescriptionModule' },
    // { path: '', component: DigiVitalsReadingComponent },
    { path: 'video', loadChildren: './videoconsult/videoconsult.module#VideoConsultModule' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WidgetModule,
        UtilsModule,
        FormsModule,
        HSDatePickerModule,
        MatInputModule,
        NurseModule
    ],
    declarations: [
        DoctorQueueComponent,
        DigiVitalComponent,
        DigiVitalsReadingComponent,
        PaymentInvoiceComponent
        // PrescriptionComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        PaymentService,
        NurseService
    ]
})
export class DigiQueueModule {
    static routes = routes;
}
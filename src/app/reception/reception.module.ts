import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HSDatePickerModule } from './../layout/widget/datetimepicker/datetimepicker.module';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ReceptionComponent } from './component/booking/reception.component';

import { CentralHomeCareGuard } from '../auth/guard/centralhomecare-guard.service';
import { DigiManagerGuard } from "../auth/guard/digimanager-guard.service";
import { HomeCareServicesGuard } from '../auth/guard/homecareservices-guard.service';
import { PrintPrescriptionGuard } from "../auth/guard/prescription-guard.service";
import { QueueGuard } from "../auth/guard/queue-guard.service";
import { ReceptionAppointmentGuard } from '../auth/guard/receptionappointment-guard.service';
import { RickshawChartModule } from '../components/rickshaw/rickshaw.module';
import { UploadModule } from '../doctor/uploadcard/upload.module';
import { UtilsModule } from '../layout/utils/utils.module';
import { WidgetModule } from '../layout/widget/widget.module';
import { PatientRegisterModule } from '../patientregister/patientregister.module';
import { AppRequestQueueComponent } from './apprequestqueue/apprequestqueue.component';
import { CentralHomeConsultComponent } from './centralhomeconsult/centralhomeconsult.component';
import { ConvertToPdf } from './component/convertPdf/convertToPdf.component';
import { QueueComponent } from './component/queue/queue.component';
import { RescheduleComponent } from './component/reschedule/reschedule.component';
import { MatInputModule } from '@angular/material';



export const routes = [
  { path: '', redirectTo: 'reception', pathMatch: 'full' },
  { path: 'reception', component: ReceptionComponent },
  { path: 'booking/:doctorId/:serviceId', canActivate: [ReceptionAppointmentGuard], component: ReceptionComponent },
  { path: 'queue/:doctorId', canActivate: [QueueGuard], component: QueueComponent },
  { path: 'homeconsult', canActivate: [HomeCareServicesGuard], loadChildren: './homeconsultation/homeconsultation.module#HomeConsultationModule' },
  { path: 'prescription', canActivate: [PrintPrescriptionGuard], loadChildren: './prescription/prescription.module#PrescriptionModule' },
  { path: 'digibooking', loadChildren: './digibooking/digibooking.module#DigiBookingModule' },
  { path: 'digiqueue', canActivate: [DigiManagerGuard], loadChildren: './digiqueue/digiqueue.module#DigiQueueModule' },
  { path: 'centralhomeconsult', canActivate: [CentralHomeCareGuard], component: CentralHomeConsultComponent },
  { path: 'reschedule', canActivate: [ReceptionAppointmentGuard], component: RescheduleComponent },
  { path: 'convertToPdf', component: ConvertToPdf },
  { path: 'apprequestqueue', component: AppRequestQueueComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    UtilsModule,
    RickshawChartModule,
    UploadModule,
    PatientRegisterModule,
    FormsModule,
    HSDatePickerModule,
    MatInputModule
  ],
  declarations: [
    ReceptionComponent,
    QueueComponent,
    CentralHomeConsultComponent,
    RescheduleComponent,
    ConvertToPdf,
    AppRequestQueueComponent
  ]
})
export class ReceptionModule {
  static routes = routes;
}

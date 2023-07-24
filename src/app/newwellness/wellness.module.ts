import { ServicePricingComponent } from './component/servicepricing/servicepricing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetModule } from '../layout/widget/widget.module';
import { UtilsModule } from '../layout/utils/utils.module';
import { PatientRegisterModule } from '../patientregister/patientregister.module';
import { FormsModule } from '@angular/forms';
import { HSDatePickerModule } from '../layout/widget/datetimepicker/datetimepicker.module';
import { RickshawChartModule } from '../components/rickshaw/rickshaw.module';
import { UpdateWellnessPricingComponent } from './component/updatepricing/updatepricing.component';

export const routes = [
  { path: '', loadChildren: './wellness_slotbooking/wellness_slotbooking.module#WellnessSlotBookingModule' },
  { path: 'wellness_slotbooking', loadChildren: './wellness_slotbooking/wellness_slotbooking.module#WellnessSlotBookingModule' },
  { path: 'wellness_schedule', loadChildren: './wellnessschedule/wellnessschedule.module#WellnessScheduleModule' },
  { path: 'servicesupdatepricing', component: UpdateWellnessPricingComponent },
  { path: 'servicepricing', component: ServicePricingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    UtilsModule,
    PatientRegisterModule,
    FormsModule,
    HSDatePickerModule,
    RickshawChartModule,
  ],
  declarations: [
    UpdateWellnessPricingComponent,
    ServicePricingComponent

  ],

})
export class WellnessModule {
  static routes = routes;
}
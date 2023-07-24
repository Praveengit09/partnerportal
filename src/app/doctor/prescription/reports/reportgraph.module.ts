import { Nvd3ChartModule } from "./../../../components/nvd3/nvd3.module";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportGraphComponent } from './reportgraph/reportgraph.component';
import { ReportsComponent } from './reports.component';
import { OtherReportsComponent } from "./otherreports/otherreports.component";
import { MatTableModule, MatInputModule, MatSortModule, MatPaginatorModule } from "@angular/material";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { RickshawChartModule } from "./../../../components/rickshaw/rickshaw.module";
import { UtilsModule } from "./../../../layout/utils/utils.module";
import { HSDatePickerModule } from "./../../../layout/widget/datetimepicker/datetimepicker.module";
import { WidgetModule } from "./../../../layout/widget/widget.module";
import { PatientRegisterModule } from "./../../../patientregister/patientregister.module";
import { NgOtpInputModule } from "ng-otp-input";



@NgModule({
  imports: [
    CommonModule,
    Nvd3ChartModule,
    FormsModule,
    WidgetModule,
    UtilsModule,
    RickshawChartModule,
    HSDatePickerModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    PatientRegisterModule,
    MatPaginatorModule,
    NgxDaterangepickerMd.forRoot(),
    NgOtpInputModule

  ],
  declarations: [
    ReportGraphComponent,
    ReportsComponent,
    OtherReportsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    ReportGraphComponent,
    ReportsComponent,
    OtherReportsComponent
  ]
})
export class ReportGraphModule {
}
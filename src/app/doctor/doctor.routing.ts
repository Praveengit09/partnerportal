import { DoctorDashGuard } from './../auth/guard/doctor-dash-guard';
import { DoctorPHRSummary } from './phrsummary/doctorphrsummary.component';
import { RouterModule } from "@angular/router";
import { DoctorQueueComponent } from "./queue/doctorqueue.component";
import { NgModule } from "@angular/core";
import { DoctorDashboardComponent } from './dashboard/doctordashboard.component';
import { HomeCareServicesGuard } from '../auth/guard/homecareservices-guard.service';
import { DoctorGuard } from '../auth/guard/doctor-guard.service';
import { DoctorDashboardV1Component } from './dashboardv1/doctordashboardv1.component';

export const routes = [
  { path: "", canActivate: [DoctorGuard], redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", canActivate: [DoctorDashGuard], component: DoctorDashboardComponent },
  { path: "doctordashboardv1", component: DoctorDashboardV1Component },
  { path: "queue", component: DoctorQueueComponent },
  { path: "patientphrsummary", component: DoctorPHRSummary },
  { path: 'doctorhomeconsult', canActivate: [HomeCareServicesGuard], loadChildren: "./homeconsultation/doctorhomeconsultation.module#DoctorHomeConsultationModule" },
  { path: 'past', loadChildren: "./prescriptionlist/prescriptionlist.module#DoctorPrescriptionListModule" },
  {
    path: "favorites",
    loadChildren:
      "./savedFavorites/savedFavorites.module#SavedFavoritesModule"
  },
  {
    path: "chat",
    loadChildren:
      "./chat/chat.module#ChatModule"
  },
  {
    path: "prescription",
    loadChildren:
      "./prescription/doctorprescription.module#DoctorPrescriptionModule"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoute { }

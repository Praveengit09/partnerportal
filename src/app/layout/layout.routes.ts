import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';

import { ReceptionGuard } from '../auth/guard/reception-guard.service';
import { NurseGuard } from '../auth/guard/nurse-guard.service';
import { WellnessGuard } from '../auth/guard/wellness-guard.service';
import { DoctorGuard } from '../auth/guard/doctor-guard.service';
import { MISGuard } from '../auth/guard/mis-guard.service';
import { DefaultGuard } from '../auth/guard/default-guard.service';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: Layout, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', canActivate: [DefaultGuard],  loadChildren: '../dashboard/dashboard.module#DashboardModule' },
      { path: 'diagnostics', loadChildren: '../diagnostics/diagnostics.module#DiagnosticsModule' },
      { path: 'pharmacy', loadChildren: '../pharmacy/pharmacy.module#PharmacyModule' },
      { path: 'nurse', canActivate: [NurseGuard], loadChildren: '../nurse/nurse.module#NurseModule' },
      { path: 'payment', loadChildren: '../payment/payment.module#PaymentModule' },
      { path: 'reception', canActivate: [ReceptionGuard], loadChildren: '../reception/reception.module#ReceptionModule' },
      { path: 'onboarding', loadChildren: '../onboarding/onboarding.module#OnboardingModule' },
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
      { path: 'product', loadChildren: '../product/product.module#ProductModule' },
      { path: 'finance', loadChildren: '../businessadmin/businessadmin.module#BusinessAdminModule' },
      { path: 'package', loadChildren: '../packages/package.module#PackageModule' },
      { path: 'master', loadChildren: '../superadmin/superadmin.module#SuperAdminModule' },
      { path: 'doctor', canActivate: [DoctorGuard], loadChildren: '../doctor/doctor.module#DoctorModule' },
      { path: 'wellness', canActivate: [WellnessGuard], loadChildren: '../newwellness/wellness.module#WellnessModule' },
      { path: 'mis', canActivate: [MISGuard], loadChildren: '../mis/mis.module#ManagementInformationSystemModule' },
      { path: 'ops', canActivate: [MISGuard], loadChildren: '../ops/ops.module#OpsModule' },
      { path: 'revenuereports', canActivate: [MISGuard], loadChildren: '../revenuereports/centralorderstotalcount.module#CentralOrdersTotalCountModule' }
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);

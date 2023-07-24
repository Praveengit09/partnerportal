import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

import { AuthGuard } from './auth/guard/auth-guard.service'

export const ROUTES: Routes = [{
  path: '', redirectTo: 'app', pathMatch: 'full'
},
{
  path: 'app', canActivate: [AuthGuard], loadChildren: './layout/layout.module#LayoutModule'
},
{
  path: 'login', loadChildren: './login/login.module#LoginModule'
},
{
  path: 'pocpopup', canActivate: [AuthGuard], loadChildren: './pocpopup/pocpopup.module#PocPopupModule'
},
{
  path: 'pocadmin', canActivate: [AuthGuard], loadChildren: './pocadmin/poc/poc.module#PocModule'
},{
  path: 'pocadminEmp', canActivate: [AuthGuard], loadChildren: './pocadmin/employee/employee.module#EmployeeModule'
},
{
  path: 'error', component: ErrorComponent
},
{
  path: '**', component: ErrorComponent
}
];

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WidgetModule } from '../layout/widget/widget.module';
import { UtilsModule } from '../layout/utils/utils.module';
import { SuperAdminService } from './superadmin.service';

import { SuperAdminGuard } from '../auth/guard/superadmin-guard.service';
import { POCAdminGuard } from '../auth/guard/pocadmin-guard.service';
import { EmployeeAdminGuard } from '../auth/guard/employeeadmin-guard.service';
import { RolesAdminGuard } from '../auth/guard/rolesadmin-guard.service';
import { HsLocalStorage } from '../base/hsLocalStorage.service';
export const routes = [
    { path: '', redirectTo: 'brand', pathMatch: 'full' },
    { path: 'brand', canActivate: [SuperAdminGuard], loadChildren: './brand/brand.module#BrandModule' },
    { path: 'poc', canActivate: [POCAdminGuard], loadChildren: './poc/poc.module#PocModule' },
    { path: 'employee', canActivate: [EmployeeAdminGuard], loadChildren: './employee/employee.module#EmployeeModule' },
    { path: 'roles', canActivate: [RolesAdminGuard], loadChildren: './roles/roles.module#RolesModule' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WidgetModule,
        UtilsModule,
        FormsModule,
        // OptionNavigatorModule
    ],
    declarations: [
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        SuperAdminService, HsLocalStorage
    ]
})
export class SuperAdminModule {
    static routes = routes;
}

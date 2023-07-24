import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {WidgetModule} from '../layout/widget/widget.module';
import { PocPopupComponent } from './pocpopup.component';

export const routes = [
  { path: '', component: PocPopupComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PocPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    WidgetModule
  ]
})
export class PocPopupModule {
  static routes = routes;
}

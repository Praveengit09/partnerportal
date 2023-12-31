import { PocSearchModule } from './../../layout/utils/components/pocsearch/pocsearch.module';
// import { UtilComponentsModule } from './../../layout/utils/components/utilcomponent.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2CompleterModule } from "ng2-completer";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { WidgetModule } from '../../layout/widget/widget.module';
import { UtilsModule } from '../../layout/utils/utils.module';
import { ListCentralHomeOrderComponent } from './component/listing/listing.component';
import { CentralHomeOrderDetailsComponent } from './component/orderdetails/orderdetails.component';
import { MatInputModule } from '@angular/material';

export const routes = [
  { path: '', redirectTo: 'listing', pathMatch: 'full' },
  { path: 'listing', component: ListCentralHomeOrderComponent },
  { path: 'orderdetails', component: CentralHomeOrderDetailsComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Ng2CompleterModule,
    // NKDatetimeModule,
    WidgetModule,
    UtilsModule,
    FormsModule,
    MatInputModule,
    // UtilComponentsModule,
    PocSearchModule
  ],
  declarations: [
    ListCentralHomeOrderComponent,
    CentralHomeOrderDetailsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CentralProductHomeOrdersModule {
  static routes = routes;
}
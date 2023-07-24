import { DeliveryProductDetailsComponent } from './productDetailsComponent/productdetails.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NGTableModule } from './../layout/widget/ngtable/ngtable.module';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { WidgetModule } from './../layout/widget/widget.module';
import { DeliveryOrderListComponent } from './orderlist/orderlist.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [
    { path: '', redirectTo: 'orderlist', pathMatch: 'full' },
    { path: 'orderlist', component: DeliveryOrderListComponent },
    { path: 'orderlist/:type', component: DeliveryOrderListComponent },
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        WidgetModule,
        NGTableModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        CommonModule
    ], declarations: [
        DeliveryOrderListComponent,
        DeliveryProductDetailsComponent
    ]
})
export class ProductDeliveryModule {

}
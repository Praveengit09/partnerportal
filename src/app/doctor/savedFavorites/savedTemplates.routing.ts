import { editSavedTemplatesComponent } from './savedTemplates/editSavedTemplate/editSavedTemplates.component';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { savedTemplatesComponent } from './savedTemplates/savedTemplates.component';
import { cdssOptionsComponent } from './cdssOptions/cdssOptions.component';
import { PrescriptionFavoritesComponent } from './prescriptionFavorites/prescriptionFavorites.component';
import { ReferralNetworkComponent } from './referralNetwork/referralNetwork.component';

export const routes = [
    { path: '', redirectTo: 'partnerNetwork', pathMatch: 'full' },
    { path: 'referralNetwork', component: ReferralNetworkComponent },
    { path: 'templates', component: savedTemplatesComponent },
    { path: 'editTemplate', component: editSavedTemplatesComponent },
    { path: 'cdssOptions', component: cdssOptionsComponent },
    { path: 'prescriptionFav', component: PrescriptionFavoritesComponent },
    {
        path: "packages",
        loadChildren:
            "./packages/packages.module#PackagesModule"
    },
    {
        path: "partnerNetwork",
        loadChildren:
            "./partnerNetwork/partnerNetwork.module#PartnerNetworkModule"
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SavedFavoritesRoute { }

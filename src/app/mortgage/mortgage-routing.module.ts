import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { MortgageComponent } from './mortgage.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'how-to-apply', pathMatch: 'full' },
  { path: 'how-to-apply', component: HowToApplyComponent },
  { path: 'mortgage-options', component: MortgageOptionsComponent },
  { path: 'property-details', component: PropertyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortgageRoutingModule {}

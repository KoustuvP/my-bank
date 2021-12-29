import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { MortgageComponent } from './mortgage.component';
const routes: Routes = [
  { path: '', redirectTo: 'how-to-apply', pathMatch: 'full' },
  { path: 'how-to-apply', component: HowToApplyComponent },
  { path: 'mortgage-options', component: MortgageOptionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortgageRoutingModule {}

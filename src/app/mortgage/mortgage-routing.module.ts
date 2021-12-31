import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { MortgageComponent } from './mortgage.component';
import { MortgageGuard } from './mortgage.guard';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ReviewComponent } from './review/review.component';
import { SolicitorComponent } from './solicitor/solicitor.component';
import { ValuationsComponent } from './valuations/valuations.component';
const routes: Routes = [
  {
    path: '',
    component: MortgageComponent,
    canActivateChild: [MortgageGuard],
    children: [
      { path: '', redirectTo: 'how-to-apply', pathMatch: 'full' },
      { path: 'how-to-apply', component: HowToApplyComponent },
      { path: 'mortgage-options', component: MortgageOptionsComponent },
      { path: 'confirm-mortgage', component: AcknowledgmentComponent },
      { path: 'property-details', component: PropertyDetailsComponent },
      { path: 'valuations', component: ValuationsComponent },
      { path: 'solicitor', component: SolicitorComponent },
      { path: 'payment-details', component: PaymentDetailsComponent },
      { path: 'review', component: ReviewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortgageRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { NoticeComponent } from './components/notice/notice.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageComponent } from './mortgage.component';
import { MortgageGuard } from './mortgage.guard';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ReviewComponent } from './review/review.component';
import { MortgageService } from './services/mortgage.service';
import { SolicitorComponent } from './solicitor/solicitor.component';
import { ValuationsComponent } from './valuations/valuations.component';

@NgModule({
  imports: [SharedModule, MortgageRoutingModule],
  declarations: [
    MortgageComponent,
    HowToApplyComponent,
    MortgageOptionsComponent,
    PropertyDetailsComponent,
    AcknowledgmentComponent,
    ValuationsComponent,
    SolicitorComponent,
    PaymentDetailsComponent,
    ReviewComponent,
    NoticeComponent,
  ],
  providers: [MortgageService, MortgageGuard],
})
export class MortgageModule {}

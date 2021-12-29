import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageComponent } from './mortgage.component';

@NgModule({
  imports: [SharedModule, MortgageRoutingModule],
  declarations: [MortgageComponent, HowToApplyComponent],
})
export class MortgageModule {}

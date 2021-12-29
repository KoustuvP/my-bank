import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageComponent } from './mortgage.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  imports: [SharedModule, MortgageRoutingModule, CommonModule],
  declarations: [MortgageComponent, HowToApplyComponent, MortgageOptionsComponent,PropertyDetailsComponent],
})
export class MortgageModule {}

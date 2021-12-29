import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MortgageRoutingModule } from './mortgage-routing.module';

@NgModule({
  imports: [SharedModule, MortgageRoutingModule],
  declarations: [],
})
export class MortgageModule {}

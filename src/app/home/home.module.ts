import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OfferingsComponent } from './components/offerings/offerings.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [OfferingsComponent],
})
export class HomeModule {}

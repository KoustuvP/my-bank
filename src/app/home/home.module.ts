import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OfferingsComponent } from './components/offerings/offerings.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  declarations: [OfferingsComponent],
})
export class HomeModule {}

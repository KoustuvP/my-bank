import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OfferingsComponent } from './components/offerings/offerings.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, OfferingsComponent],
  imports: [SharedModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}

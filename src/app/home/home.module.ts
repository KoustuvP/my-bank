import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OfferingsComponent } from './components/offerings/offerings.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home.component';
import { CaraouselModule } from '../caraousel/caraousel.module';
//import { IvyCarouselModule } from "angular-responsive-carousel";


@NgModule({
  declarations: [HomeComponent, OfferingsComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    CaraouselModule
  //  CarouselModule, //IvyCarouselModule
  ],
})
export class HomeModule {}

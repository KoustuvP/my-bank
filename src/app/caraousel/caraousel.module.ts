import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CaraouselConfigDirective } from './caraosel.directive';
import { CaraouselComponent } from './caraousel.component';
;

@NgModule({
  declarations: [CaraouselComponent, CaraouselConfigDirective],
  imports: [SharedModule],
  exports: [CaraouselComponent, CaraouselConfigDirective]
})
export class CaraouselModule {}

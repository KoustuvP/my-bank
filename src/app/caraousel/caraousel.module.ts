import { NgModule } from '@angular/core';
import { CaraouselConfigDirective } from './caraosel.directive';
import { CaraouselComponent } from './caraousel.component';
;

@NgModule({
  declarations: [CaraouselComponent, CaraouselConfigDirective],
  imports: [],
  exports: [CaraouselComponent, CaraouselConfigDirective]
})
export class CaraouselModule {}

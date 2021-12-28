import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [],
  declarations: [],
})
export class HomeRoutingModule {}

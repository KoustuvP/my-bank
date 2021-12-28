import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from '../common-util/auth.service';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './shared/services/auth.service';
import { HelloComponent } from './hello.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockInterceptor } from './shared/services/mock.interceptor';
import { SharedModule } from './shared/shared.module'; 

// import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
// import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    // NgIdleKeepaliveModule.forRoot(),
    // MomentModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockInterceptor,
      //useClass: environment.mock ? MockInterceptor : null,
      multi: true,
    },
  ],
})
export class AppModule {}

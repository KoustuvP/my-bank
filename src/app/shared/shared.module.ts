import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
//import { PropertyToWordPipe, UnknownToStringPipe } from './pipes/property-to-word.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { WarningModalComponent } from './components/warning-modal/warning-modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CaraouselModule } from '../caraousel/caraousel.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WarningModalComponent,
    ClickOutsideDirective,
    LoaderComponent,
    NotificationComponent,
    // PropertyToWordPipe,
    // UnknownToStringPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    //NgbModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    WarningModalComponent,
    ClickOutsideDirective,
    LoaderComponent,
    MatInputModule,
    ReactiveFormsModule,
    NotificationComponent,
    MatDividerModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    // PropertyToWordPipe,
    // UnknownToStringPipe,
    MatIconModule,
    MatCheckboxModule,
  ],
})
export class SharedModule {}

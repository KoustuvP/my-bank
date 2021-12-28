import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';
// import { AuthGuard } from './auth.guard';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'about', component: AboutComponent, canActivate:[AuthGuard] },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./home/home.module').then((m) => m.HomeModule),
  //     canActivate:[AuthGuard]
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('../login/login.module').then((m) => m.LoginModule),
  },
  // {
  //   path: 'register',
  //   loadChildren: () =>
  //     import('./registration/registration.module').then((m) => m.RegistrationModule)
  // }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'mortgage',
    loadChildren: () =>
      import('./mortgage/mortgage.module').then((m) => m.MortgageModule),
    canActivate: [AuthGuard]
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

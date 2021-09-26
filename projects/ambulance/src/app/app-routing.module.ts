import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'histories',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'medics',
    loadChildren: () =>
      import('./medic/medic.module').then((m) => m.MedicModule),
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

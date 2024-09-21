import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: '',
    component: AllModulesComponent,
    children: [
      {
        path: '',
        redirectTo: 'appointment',
        pathMatch: 'full',
      },
      {
        path: 'appointment',
        loadChildren: () =>
          import('./appointment/appointment.module').then(
            (m) => m.AppointmentModule
          ),
      },
      {
        path: 'opd',
        loadChildren: () =>
          import('./opd/opd.module').then(
            (m) => m.OpdModule
          ),
      },
      {
        path: 'pharmacy',
        loadChildren: () =>
          import('./pharmacy/pharmacy.module').then(
            (m) => m.PharmacyModule
          ),
      },
      {
        path: 'front-office',
        loadChildren: () =>
          import('./front-office/front-office.module').then(
            (m) => m.FrontOfficeModule
          ),
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllModulesRoutingModule {}

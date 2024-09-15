import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';


@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent, 
    LockScreenComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AppointmentRoutingModule,
    PerfectScrollbarModule
  ]
})
export class AppointmentModule { }

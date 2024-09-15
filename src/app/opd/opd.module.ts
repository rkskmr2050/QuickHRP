import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './opd-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OpdComponent } from './opd/opd.component';


@NgModule({
  declarations: [
    OpdComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    DashboardRoutingModule,
    PerfectScrollbarModule
  ]
})
export class AppointmentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentListComponent } from './list/appointment-list.component';

@NgModule({
  declarations: [
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class AppointmentModule { }

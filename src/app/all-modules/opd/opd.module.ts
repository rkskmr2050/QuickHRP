import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { OpdRoutingModule } from './opd-routing.module';
import { OPDListComponent } from './list/opd-list.component';

@NgModule({
  declarations: [
    OPDListComponent
  ],
  imports: [
    CommonModule,
    OpdRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class OpdModule { }

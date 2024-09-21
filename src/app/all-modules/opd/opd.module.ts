import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { OPDComponent } from './opd.component';
import { OpdRoutingModule } from './opd-routing.module';

@NgModule({
  declarations: [
    OPDComponent
  ],
  imports: [
    CommonModule,
    OpdRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class OpdModule { }

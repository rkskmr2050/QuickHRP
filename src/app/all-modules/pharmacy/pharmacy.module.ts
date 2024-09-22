import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyListComponent } from './list/pharmacy-list.component';

@NgModule({
  declarations: [
    PharmacyListComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class PharmacyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy.component';

@NgModule({
  declarations: [
    PharmacyComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class PharmacyModule { }

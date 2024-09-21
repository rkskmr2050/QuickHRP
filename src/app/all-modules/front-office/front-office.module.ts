import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { FrontOfficeComponent } from './front-office.component';
import { FrontOfficeRoutingModule } from './front-office-routing.module';

@NgModule({
  declarations: [
    FrontOfficeComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class FrontOfficeModule { }

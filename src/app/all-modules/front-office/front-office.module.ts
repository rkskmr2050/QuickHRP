import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeListComponent } from './list/front-office-list.component';

@NgModule({
  declarations: [
    FrontOfficeListComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    SharedModule,
    AgGridModule
  ]
})
export class FrontOfficeModule { }

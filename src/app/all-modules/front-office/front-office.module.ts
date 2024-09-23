import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeListComponent } from './list/front-office-list.component';
import { FrontOfficeAddFormComponent } from './add-form/front-office-add-form.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    FrontOfficeListComponent,
    FrontOfficeAddFormComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    SharedModule,
    AgGridModule,
    NgxMaterialTimepickerModule
  ]
})
export class FrontOfficeModule { }

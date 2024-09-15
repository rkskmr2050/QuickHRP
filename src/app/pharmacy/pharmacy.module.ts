import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy/pharmacy.component';


@NgModule({
  declarations: [
    PharmacyComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PerfectScrollbarModule,
    PharmacyRoutingModule
  ]
})
export class PharmacyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfficeFrontComponent } from './office-front/office-front.component';
import { OfficeFrontRoutingModule } from './office-front-routing.module';


@NgModule({
  declarations: [
    OfficeFrontComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PerfectScrollbarModule,
    OfficeFrontRoutingModule
  ]
})
export class OfficeFrontModule { }

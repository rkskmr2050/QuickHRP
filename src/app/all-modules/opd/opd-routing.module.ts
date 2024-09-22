import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OPDListComponent } from './list/opd-list.component';

const routes: Routes = [{ path: '', component: OPDListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpdRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpdComponent } from './opd/opd.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OpdComponent,
        data: {
          title: 'OPD'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

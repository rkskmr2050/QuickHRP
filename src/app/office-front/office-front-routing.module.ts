import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeFrontComponent } from './office-front/office-front.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OfficeFrontComponent,
        data: {
          title: 'OfficeFront'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeFrontRoutingModule { }

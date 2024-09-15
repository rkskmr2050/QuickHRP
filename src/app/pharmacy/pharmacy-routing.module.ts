import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyComponent } from './pharmacy/pharmacy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PharmacyComponent,
        data: {
          title: 'Pharmacy'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }

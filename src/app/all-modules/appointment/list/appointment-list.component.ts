import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {
  public routes = routes;
}

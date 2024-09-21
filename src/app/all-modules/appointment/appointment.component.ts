import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  public routes = routes;
}

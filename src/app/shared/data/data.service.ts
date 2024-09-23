import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { routes } from '../core.index';
import { apiResultFormat, sideBar, Visitor } from '../models/models';
import { APP_CONSTANT } from '../constants/app-constant';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getVisitors() : Array<Visitor> {
    var localStoredVisitors = localStorage.getItem(APP_CONSTANT.localStorage.key.visitors);
      if(!localStoredVisitors)
      {
        this.getVisitorsFromJson().subscribe((res: apiResultFormat) => {
          localStorage.setItem(APP_CONSTANT.localStorage.key.visitors, JSON.stringify(res.data));
          return res.data;
        });
      }
      return JSON.parse(localStoredVisitors!)
  }

  public addVisitor(visitor : Visitor){
    const visitors : Array<Visitor> = JSON.parse(localStorage.getItem(APP_CONSTANT.localStorage.key.visitors)!);
    var maxId = Math.max(...visitors.map(o => o.id));
    visitor.id = maxId + 1;
    visitors.push(visitor);
    localStorage.setItem(APP_CONSTANT.localStorage.key.visitors, JSON.stringify(visitors));
  }

  private getVisitorsFromJson() {
    return this.http.get<apiResultFormat>('assets/json/visitors.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getActivities() {
    return this.http.get<apiResultFormat>('assets/json/activities.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public sideBar: sideBar[] = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Appointment',
          route: routes.appointment,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar',
          base: routes.appointment,
          subMenus: [],
        },
        {
          menuValue: 'OPD',
          route: routes.opd,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'check-square',
          base: routes.opd,
          subMenus: [],
        },
        {
          menuValue: 'Pharmacy',
          route: routes.pharmacy,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'home',
          base: routes.pharmacy,
          subMenus: [],
        },
        {
          menuValue: 'Front-Office',
          route: routes.frontOffice,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user',
          base: routes.frontOffice,
          subMenus: [],
        },
      ],
    },
  ];
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/core.index'
import { SideBarService } from '../shared/side-bar/side-bar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public miniSidebar = false;
  public routes = routes;
 
  constructor(public router: Router,private sideBar: SideBarService) {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
  }
  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
  
}

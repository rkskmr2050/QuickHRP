import { Component , OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

    constructor(public sidebarservice: SidebarService, private router: Router, private route: ActivatedRoute) { }
        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {

        /* Search Bar */
        $(document).ready(function () {
            $(".search-btn-mobile").on("click", function () {
                $(".search-bar").addClass("full-search-bar");
            });
            $(".search-arrow-back").on("click", function () {
                $(".search-bar").removeClass("full-search-bar");
            });
        });

    }

    	// On Login link click
	onLogout() {
        this.router.navigate(['auth'], { relativeTo: this.route.parent });
      }
}

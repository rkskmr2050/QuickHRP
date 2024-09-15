import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router, private route: ActivatedRoute) { }

  // On Forgotpassword link click
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }

  // On Signup link click
  onSignup() {
    this.router.navigate(['register'], { relativeTo: this.route.parent });
  }


  ngOnInit(): void {
  }

	// On Login link click
	onLogin() {
	  this.router.navigate(['appointment'], { relativeTo: this.route.parent });
	}
}

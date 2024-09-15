import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-switcher',
  templateUrl: './color-switcher.component.html',
  styleUrls: ['./color-switcher.component.scss']
})
export class ColorSwitcherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*switcher*/
	$(".switcher-btn").on("click", function () {
		$(".switcher-wrapper").toggleClass("switcher-toggled");
	});


	$("#darkmode").on("click", function() {
		$("html").attr("class", "dark-theme")
	  }),
	  
	  $("#lightmode").on("click", function() {
		$("html").attr("class", "light-theme")
	  }),
	  
	  $("#darksidebar").on("click", function() {
		$("html").attr("class", "dark-sidebar")
	  })


	  $("#ColorLessIcons").on("click", function () {
		$("html").toggleClass("ColorLessIcons");
	});
  }

}

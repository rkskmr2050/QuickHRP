import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-office-front',
  templateUrl: './office-front.component.html',
  styleUrls: ['./office-front.component.scss']
})
export class OfficeFrontComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}

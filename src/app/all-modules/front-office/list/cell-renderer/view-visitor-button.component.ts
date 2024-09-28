import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { FrontOfficeListComponent } from '../front-office-list.component';
import { VisitorAction } from '../../shared/enums/visitor-action';

@Component({
  standalone: true,
  templateUrl: './view-visitor-button.component.html',
  imports:[CommonModule]
})
export class ViewVisitorButtonComponent implements ICellRendererAngularComp {
  private parentComponent!: FrontOfficeListComponent;
  visitorAction !: VisitorAction;
  public id: any;
  constructor(){}
  
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.id = params.data.id;
    this.parentComponent = params.context;
  }
    
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }
  
  public onActionButton_Click(visitorId : number, action : VisitorAction)
  {
    this.parentComponent.onActionButton_Click(visitorId, action); // Call parent method
  }
}

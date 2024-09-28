import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { routes, ToasterService } from 'src/app/shared/core.index';
import { front_office_list_colDefs } from './front-office-list-column-defination';
import { VisitorAction } from '../shared/enums/visitor-action';
import { FrontOfficeDataService } from '../shared/services/front-office.service';
import { Visitor } from '../shared/models/visitor';

@Component({
  selector: 'app-front-office-list',
  templateUrl: './front-office-list.component.html',
  styleUrls: ['./front-office-list.component.scss']
})
export class FrontOfficeListComponent {
  public visitors: Array<Visitor> = [];
  public visitor !: Visitor;
  public routes = routes;
  public pagination: boolean = true;
  public paginationPageSize = 10;
  public paginationPageSizeSelector = [10, 15, 20, 100];
  isEdit: boolean = false;
  dismissedModal: boolean = true;

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = front_office_list_colDefs;

  constructor(private data: FrontOfficeDataService, private toaster: ToasterService) { }

  ngOnInit() {
    this.getTableData();
  }

  private getTableData(): void {
    this.visitors = [];
    this.data.getVisitors().then((res) => {
      this.visitors = res.sort((a, b) => b.id - a.id);
    });
  }

  public refereshGRid(event: any) {
    this.getTableData();
  }

  public onActionButton_Click(visitorId: number, action: VisitorAction) {
    this.onVisitorModalOpen();
    this.isEdit = false;
    switch (action) {
      case VisitorAction.View: {
        this.data.getVisitors().then((res) => {
          this.visitor = res.find(x => x.id == visitorId)!;
        });
        break;
      }
      case VisitorAction.Edit: {
        this.isEdit = true;
        this.data.getVisitors().then((res) => {
          this.visitor = res.find(x => x.id == visitorId)!;
        });
        break;
      }
      case VisitorAction.Delete: {
        this.data.deleteVisitor(visitorId);
        this.toaster.typeSuccess('Visitor has been deleted successfully!', 'Success!');
        this.getTableData();
        break;
      }
    }
  }

  public onAddVisitorButton_Click() {
    this.onVisitorModalOpen();
    this.isEdit = false;
  }

  public onVisitorModalClose() {
    this.dismissedModal = true;
  }

  public onVisitorModalOpen() {
    this.dismissedModal = false;
  }

  public onViewVisitorModalClose() {
    this.onVisitorModalClose();
  }
}

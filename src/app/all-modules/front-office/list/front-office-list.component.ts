import { Component} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { routes} from 'src/app/shared/core.index';
import { DataService } from 'src/app/shared/data/data.service';
import { Visitor } from 'src/app/shared/models/models';
import { front_office_list_colDefs} from './front-office-list-column-defination';

@Component({
  selector: 'app-front-office-list',
  templateUrl: './front-office-list.component.html',
  styleUrls: ['./front-office-list.component.scss']
})
export class FrontOfficeListComponent {
  public visitors: Array<Visitor> = [];
  public routes = routes;
  public pagination : boolean = true;
  public paginationPageSize = 10;
  public paginationPageSizeSelector = [10, 15, 20, 100];
  
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = front_office_list_colDefs;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getTableData();
  }

  private getTableData(): void {
    this.visitors = [];
    this.visitors = this.data.getVisitors().sort((a,b)=>b.id-a.id);
  }

  public refereshGRid(event:any){
    this.getTableData();
  }
}

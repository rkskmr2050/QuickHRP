import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { routes ,ToasterService} from 'src/app/shared/core.index';
import { DataService } from 'src/app/shared/data/data.service';
import { apiResultFormat, Visitor } from 'src/app/shared/models/models';

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
colDefs: ColDef[] = [
  // { field: "id"},
  { field: "purpose", width: 100},
  { field: "name", filter:true },
  { field: "visitTo" , width: 120},
  { field: "visitToPerson", headerName : 'IPD/OPD/Staff', width: 250 },
  { field: "phone" , filter:true, width: 120},
  { field: "date", width: 120, filter: 'agDateColumnFilter',
     // add extra parameters for the date filter
     filterParams: {
      // provide comparator function
      comparator: (filterLocalDateAtMidnight : any, cellValue:any) => {
          const dateAsString = cellValue;

          if (dateAsString == null) {
              return 0;
          }

          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          const dateParts = dateAsString.split('/');
          const year = Number(dateParts[2]);
          const month = Number(dateParts[0]) - 1;
          const day = Number(dateParts[1]);
          const cellDate = new Date(year, month, day);

          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {
              return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
          }
          return 0;
      }
  }
  },
  { field: "inTime", width: 100 },
  { field: "outTime" , width: 100},
  { field: "action" }
];

  constructor(private toaster: ToasterService, private data: DataService) {
  }

  ngOnInit() {
    this.getTableData();
  }

  public typeSuccess() {
    this.toaster.typeSuccess('Visitor has been added successfully!', 'Success!');
  }

  private getTableData(): void {
    this.visitors = [];
    this.data.getVisitors().subscribe((res: apiResultFormat) => {
      this.visitors = res.data;
    });
  }
}

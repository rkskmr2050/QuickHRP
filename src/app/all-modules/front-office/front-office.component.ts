import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { routes ,ToasterService} from 'src/app/shared/core.index';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.scss']
})
export class FrontOfficeComponent {
  public routes = routes;
  public pagination : boolean = true;
  public paginationPageSize = 10;
  public paginationPageSizeSelector = [10, 15, 20, 100];
  // Row Data: The data to be displayed.
 rowData = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota1", model: "Corolla1", price: 29600, electric: false },
  { make: "Toyota2", model: "Corolla2", price: 29600, electric: false },
  { make: "Toyota3", model: "Corolla3", price: 29600, electric: false },
  { make: "Toyota4", model: "Corolla4", price: 29600, electric: false },
  { make: "Toyota5", model: "Corolla5", price: 29600, electric: false },
  { make: "Toyota6", model: "Corolla6", price: 29600, electric: false },
  { make: "Toyota7", model: "Corolla7", price: 29600, electric: false },
  { make: "Toyota8", model: "Corolla8", price: 29600, electric: false },
  { make: "Toyota9", model: "Corolla9", price: 29600, electric: false },
  { make: "Toyota10", model: "Corolla10", price: 29600, electric: false },
  { make: "Toyota11", model: "Corolla11", price: 29600, electric: false },
  { make: "Toyota12", model: "Corolla12", price: 29600, electric: false },
  { make: "Toyota13", model: "Corolla13", price: 29600, electric: false },
  { make: "Toyota14", model: "Corolla14", price: 29600, electric: false },
  { make: "Toyota15", model: "Corolla15", price: 29600, electric: false },
  { make: "Toyota16", model: "Corolla16", price: 29600, electric: false },
  { make: "Toyota17", model: "Corolla17", price: 29600, electric: false },
  { make: "Toyota9", model: "Corolla9", price: 29600, electric: false },
  { make: "Toyota10", model: "Corolla10", price: 29600, electric: false },
  { make: "Toyota11", model: "Corolla11", price: 29600, electric: false },
  { make: "Toyota12", model: "Corolla12", price: 29600, electric: false },
  { make: "Toyota13", model: "Corolla13", price: 29600, electric: false },
  { make: "Toyota14", model: "Corolla14", price: 29600, electric: false },
  { make: "Toyota15", model: "Corolla15", price: 29600, electric: false },
  { make: "Toyota16", model: "Corolla16", price: 29600, electric: false },
  { make: "Toyota17", model: "Corolla17", price: 29600, electric: false },
  { make: "Toyota9", model: "Corolla9", price: 29600, electric: false },
  { make: "Toyota10", model: "Corolla10", price: 29600, electric: false },
  { make: "Toyota11", model: "Corolla11", price: 29600, electric: false },
  { make: "Toyota12", model: "Corolla12", price: 29600, electric: false },
  { make: "Toyota13", model: "Corolla13", price: 29600, electric: false },
  { make: "Toyota14", model: "Corolla14", price: 29600, electric: false },
  { make: "Toyota15", model: "Corolla15", price: 29600, electric: false },
  { make: "Toyota16", model: "Corolla16", price: 29600, electric: false },
  { make: "Toyota17", model: "Corolla17", price: 29600, electric: false },
];

// Column Definitions: Defines the columns to be displayed.
colDefs: ColDef[] = [
  { field: "make",editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
        values: ['Tesla', 'Ford', 'Toyota'],
    }, },
  { field: "model", filter:true },
  { field: "price" },
  { field: "electric" }
];

  constructor(private toaster: ToasterService) {
  }

  public typeSuccess() {
    this.toaster.typeSuccess('Visitor has been added successfully!', 'Success!');
  }
}

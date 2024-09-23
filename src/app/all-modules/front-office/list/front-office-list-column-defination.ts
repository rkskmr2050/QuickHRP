import { ColDef } from 'ag-grid-community';

export const front_office_list_colDefs: ColDef[] = [
  // { field: "id"},
  { field: "purpose", width: 100},
  { field: "name", filter:true },
  { field: "visitTo" , width: 120},
  { field: "relatedTo", width: 250 },
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
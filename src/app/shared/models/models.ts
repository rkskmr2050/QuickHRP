export interface pageSelection {
  skip: number;
  limit: number;
}
export interface apiResultFormat {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
data: Array<any>;
totalData: number;
}

export interface routerlink {
url: string;
// id: number;
// type: number;
}
export interface sideBar {
  tittle: string,
  showAsTab: boolean,
  separateRoute: boolean,
  menu: menu[]
}
export interface menu { 
  menuValue: string,
  route ?: string,
  hasSubRoute: boolean,
  showSubRoute: boolean,
  icon: string,
  base?: string,
  subMenus: submenu[]
}
export interface submenu { 
  menuValue?: string,
  route: string,
  base?: string,
}
export interface tasks {
  id: number,
  taskname: string,
  responsibleuser: string,
  duedate: string,
  taskowner: string,
  status: string,
  progress: string,
  percentage: string
}
export interface datatable {
  id: number,
  name: string,
  position: string,
  office : string,
  age :string,
  startdate: string,
  salary: string
}
export interface reports {
  id: number,
  reportname: string,
  datecreated : string,
  createdby : string
}
export interface reportPreview {
  reportName: string,
  dateCreated: string,
  createdBy: string,
  company: string
}
export interface leads {
    id: number,
    symbol: string,
    fullname: string,
    title: string,
    company: string,
    phone: string,
    emailaddress: string,
    leadstatus: string,
    leadcreated: string,
    leadowner: string,
    changeColor: string
}
export interface projects {
  id : number,
  symbol: string,
  projectname: string,
  projectstatus: string,
  userresponsible: string,
  projectcategory: string,
  projectcreated: string,
  changeColor: string,
  pipeline: Array<string>
}
export interface invoicesRecurring {
  id : number,
  invoiceId: string,
  createdOn: string,
  invoiceto: string,
  amount: string,
  lastInvoice: string,
  nextInvoice : string,
  frequency: string,
  status: string
}
export interface invoicespaid {
  id : number,
  invoiceId : string,
  category: string,
  createdOn: string,
  invoiceto: string,
  amount: string,
  paidOn: string,
  status: string,
}
export interface invoicesOverdue {
  id : number,
  invoiceId : string,
  amount: string,
  status: string,
  createdOn: string,
  invoiceto: string,
  lastDate: string
}
export interface invoicesList {
  id : number,
  invoiceId : string,
  amount: string,
  status: string,
  createdOn: string,
  category: string,
  invoiceto: string,
  dueDate: string,
  img: string
}
export interface invoicesgrid {
  createdOn: string,
  category: string,
  invoiceto: string,
  img: string,
  text?: string,
  dueDate: string,
  amount: string,
  status: string,
  gridId: string
}
export interface invoicesDraft {
  id : number
  createdOn: string,
  invoiceto: string,
  amount: string,
}
export interface invoicesCancelled {
  id: number,
  invoiceId: string,
  createdOn: string,
  invoiceto: string,
  amount: string,
  cancelledOn: string

}
export interface deals {
id: number,
symbol: string,
dealname: string,
company: string,
forecaseclosedate: string,
userresponsible: string,
dealvalue: string,
changeColor: string,
pipeline: pipeline[]
}
export interface pipeline {
  tooltip_data: string,
  active: string
}
export interface contacts {
  id: number,
  fullname: string,
  title: string,
  phone: string,
  email:string,
  taglist: string,
  changeColor: string,
  img: string
}
export interface companies {
  id: number,
  company: string,
  phone: string,
  billingstreet: string,
  billingcity: string,
  billingstate: string,
  billingcountry: string,
  img: string
}
export interface activities {
  id: number,
  subject: string,
  deal: string,
  contactperson : string,
  email:string,
  phone: string,
  companies: string
}
export interface categories {
  id: number,
  categoryName: string,
  date: string,
  addedBy: string,
  status: string,
  action1 : string,
  action2 : string,
  isStatus: boolean
}
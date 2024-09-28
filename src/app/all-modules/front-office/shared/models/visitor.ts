export interface Visitor {
    id: number,
    purpose: string,
    name: string,
    idCard: string,
    visitTo : string,
    relatedTo:string,
    noOfPerson:number,
    phone: string,
    date: Date,
    inTime: string,
    outTime: string
    note: string
  }
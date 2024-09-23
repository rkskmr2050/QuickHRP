import { DatePipe, KeyValue } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { DataService, ToasterService } from 'src/app/shared/core.index';
import { Visitor } from 'src/app/shared/models/models';

@Component({
  selector: 'app-front-office-add-form',
  templateUrl: './front-office-add-form.component.html',
  styleUrls: ['./front-office-add-form.component.scss']
})
export class FrontOfficeAddFormComponent {
  visitorForm!: UntypedFormGroup;
  visitToOptions!: Array<string>;
  relatedToOptions!:Array<string>
  @ViewChild('closeModal') closeModal!: ElementRef;
  @Output() onAddVisitor = new EventEmitter<boolean>();
  
  constructor(private toaster: ToasterService, private fb: FormBuilder,private datePipe: DatePipe,private data: DataService) {
  }

  ngOnInit() {
    this.setFormData();
    this.initializerForm();
  }

  initializerForm(){
    var date = new Date();
    this.visitorForm = this.fb.group({
      purpose: ['',[Validators.required]],
      name:  [null,[Validators.required]],
      idCard:  [null,[Validators.required]],
      visitTo :  ['',[Validators.required]],
      relatedTo : ['',[Validators.required]],
      noOfPerson: [null,[Validators.required]],
      phone:  [null,[Validators.required]],
      date:  [this.datePipe.transform(date,"dd-MMM-yyyy")],
      inTime:  [null,[Validators.required]],
      outTime:  [null],
      note:  [null]
    });
    this.setFormControls();
  }

  private setFormControls(){
    this.f['date']?.disable();
  }

  private setFormData(){
    this.visitToOptions = this.data.visitToOptions;
  }

  get f() {
    return this.visitorForm.controls;
  }

  onVisitToChange(){
   const selectedVisitTo = this.f['visitTo'].value;
   switch(selectedVisitTo){
    case 'Staff':{
      this.relatedToOptions = this.data.staffList;
      break;
    }
    case 'OPD Patient':{
      this.relatedToOptions = this.data.opdPatientList;
      break;
    }
    case 'IPD Patient':{
      this.relatedToOptions = this.data.ipdPatientList;
      break;
    }
    default:{
      this.relatedToOptions = [];
    }
   }
  }

onKey(event:any) { 
  this.relatedToOptions = this.search(event.target.value);
}

search(value: string) { 
  let filter = value.toLowerCase();
  return this.relatedToOptions.filter(option => option.toLowerCase().startsWith(filter));
}
  
  onSubmit(form: FormGroup) {
    this.visitorForm.markAllAsTouched();
    if (this.visitorForm.valid) {
      const visitor: Visitor = this.visitorForm.getRawValue();
      this.data.addVisitor(visitor);
      this.onAddVisitor.next(true);
      this.closeModal.nativeElement.click();
      this.toaster.typeSuccess('Visitor has been added successfully!', 'Success!');
    }
  }

  clear(){
    this.visitorForm.markAsUntouched();
    this.initializerForm();
  }
}

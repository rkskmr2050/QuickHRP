import { DatePipe } from '@angular/common';
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
  @ViewChild('closeModal') closeModal!: ElementRef;
  @Output() onAddVisitor = new EventEmitter<boolean>();
  
  constructor(private toaster: ToasterService, private fb: FormBuilder,private datePipe: DatePipe,private data: DataService) {
  }

  ngOnInit() {
    var date = new Date();
    this.visitorForm = this.fb.group({
      purpose: [null,[Validators.required]],
      name:  [null,[Validators.required]],
      idCard:  [null,[Validators.required]],
      visitTo :  [null,[Validators.required]],
      relatedTo : [null],
      noOfPerson: [null,[Validators.required]],
      phone:  [null,[Validators.required]],
      date:  [this.datePipe.transform(date,"dd-MMM-yyyy")],
      inTime:  [null,[Validators.required]],
      outTime:  [null],
      note:  [null]
    });
    this.setDefaultFormState();
  }

  private setDefaultFormState(){
    this.visitorForm.markAsUntouched();
    this.f['date']?.disable();
  }

  get f() {
    return this.visitorForm.controls;
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
}

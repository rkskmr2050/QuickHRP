import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/shared/core.index';

@Component({
  selector: 'app-front-office-add-form',
  templateUrl: './front-office-add-form.component.html',
  styleUrls: ['./front-office-add-form.component.scss']
})
export class FrontOfficeAddFormComponent {
  visitorForm!: UntypedFormGroup;
  @ViewChild('closeModal') closeModal!: ElementRef
  
  constructor(private toaster: ToasterService, private fb: FormBuilder,private datePipe: DatePipe) {
  }

  ngOnInit() {
    var date = new Date();
    this.visitorForm = this.fb.group({
      purpose: [null,[Validators.required]],
      name:  [null,[Validators.required]],
      idCard:  [null,[Validators.required]],
      visitTo :  [null,[Validators.required]],
      visitToPerson: [null,[Validators.required]],
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
    this.f['relatedTo']?.disable();
  }

  get f() {
    return this.visitorForm.controls;
  }
  
  onSubmit(form: FormGroup) {
    this.visitorForm.markAllAsTouched();
    if (this.visitorForm.valid) {
      this.closeModal.nativeElement.click();
      this.toaster.typeSuccess('Visitor has been added successfully!', 'Success!');
    }
  }
}

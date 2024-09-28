import { DatePipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/shared/core.index';
import { FrontOfficeDataService } from '../shared/services/front-office.service';
import { Visitor } from '../shared/models/visitor';

@Component({
  selector: 'app-front-office-add-form',
  templateUrl: './front-office-add-form.component.html',
  styleUrls: ['./front-office-add-form.component.scss']
})
export class FrontOfficeAddFormComponent {
  visitorForm!: UntypedFormGroup;
  visitToOptions!: Array<string>;
  relatedToOptions!: Array<string>
  @Input() isEdit !: boolean;
  @Input() visitorId: number | undefined;
  @ViewChild('closeModal') closeModal!: ElementRef;
  @Output() onAddVisitor = new EventEmitter<boolean>();
  @Output() onCancel = new EventEmitter<boolean>();

  constructor(private toaster: ToasterService, private fb: FormBuilder, private datePipe: DatePipe, private data: FrontOfficeDataService) {
  }

  ngOnInit() {
    this.setFormData();
    this.initializerForm();
  }

  initializerForm() {
    var date = new Date();
    this.visitorForm = this.fb.group({
      purpose: ['', [Validators.required]],
      name: [null, [Validators.required]],
      idCard: [null, [Validators.required]],
      visitTo: ['', [Validators.required]],
      relatedTo: ['', [Validators.required]],
      noOfPerson: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      date: [this.datePipe.transform(date, "dd-MMM-yyyy")],
      inTime: [null, [Validators.required]],
      outTime: [null],
      note: [null]
    });
    this.setFormControls();
  }

  private setFormControls() {
    let visitor!: Visitor;
    if (this.isEdit) {
      this.data.getVisitors().then((res) => {
        visitor = res.find(x => x.id == this.visitorId)!;
        this.f['purpose'].setValue(visitor.purpose);
        this.f['name'].setValue(visitor.name);
        this.f['idCard'].setValue(visitor.idCard);
        this.f['visitTo'].setValue(visitor.visitTo);
        this.onVisitToChange();
        this.f['relatedTo'].setValue(visitor.relatedTo);
        this.f['noOfPerson'].setValue(visitor.noOfPerson);
        this.f['phone'].setValue(visitor.phone);
        this.f['date'].setValue(visitor.date);
        this.f['inTime'].setValue(visitor.inTime);
        this.f['outTime'].setValue(visitor.outTime);
        this.f['note'].setValue(visitor.note);
      });
    }
    this.f['date']?.disable();
  }

  private setFormData() {
    this.visitToOptions = this.data.visitToOptions;
  }

  get f() {
    return this.visitorForm.controls;
  }

  onVisitToChange() {
    const selectedVisitTo = this.f['visitTo'].value;
    switch (selectedVisitTo) {
      case 'Staff': {
        this.relatedToOptions = this.data.staffList;
        break;
      }
      case 'OPD Patient': {
        this.relatedToOptions = this.data.opdPatientList;
        break;
      }
      case 'IPD Patient': {
        this.relatedToOptions = this.data.ipdPatientList;
        break;
      }
      default: {
        this.relatedToOptions = [];
      }
    }
  }

  onSubmit() {
    this.visitorForm.markAllAsTouched();
    if (this.visitorForm.valid) {
      const visitor: Visitor = this.visitorForm.getRawValue();
      if (this.isEdit) {
        visitor.id = this.visitorId!;
        this.data.updateVisitor(visitor);
      }
      else {
        this.data.addVisitor(visitor);
      }
      this.onAddVisitor.next(true);
      this.closeModal.nativeElement.click();
      this.toaster.typeSuccess(this.isEdit ? 'Visitor has been updated successfully!' : 'Visitor has been added successfully!', 'Success!');
    }
  }

  cancel() {
    this.onCancel.next(true);
  }
}

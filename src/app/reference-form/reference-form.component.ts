import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reference } from '../references/reference';
import { ReferenceService } from '../references/reference.service';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.css']
})
export class ReferenceFormComponent implements OnInit {
@Input() id?:number;
  public references!: Reference[];

  constructor(private referenceService: ReferenceService) {}
  ngOnInit(): void {
    this.getReferences();
  }
  public getReferences(): void {
    this.referenceService.getReferences(1).subscribe(
      (response: any) => {
        // console.log(response.references);
        this.references = response.references;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddReference(refForm: any): void{
    this.referenceService.addReferences(refForm.value).subscribe(
      (response: Reference) => {
        this.getReferences();
        refForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        refForm.reset();
      }
    )
  }

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phno: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    designation: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    company: new FormControl('', [Validators.required]),
    name2: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email2: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    phno2: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    designation2: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    company2: new FormControl('', [Validators.required]),
  });
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phno() {
    return this.contactForm.get('phno');
  }
  get designation() {
    return this.contactForm.get('designation');
  }
  get company() {
    return this.contactForm.get('company');
  }

  get name2() {
    return this.contactForm.get('name2');
  }
  get email2() {
    return this.contactForm.get('email2');
  }
  get phno2() {
    return this.contactForm.get('phno2');
  }
  get designation2() {
    return this.contactForm.get('designation2');
  }
  get company2() {
    return this.contactForm.get('company2');
  }
}


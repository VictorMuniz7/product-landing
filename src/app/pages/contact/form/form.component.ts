import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface Issues {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(
    private formBuilder: FormBuilder,
  ){}

  issueIsSelected: boolean = true
  requestSent: boolean = true
  formDisplay: string = 'flex'

  issues: Issues[] = [
    {value: 'purchase-0', viewValue: "Purchase issues"},
    {value: 'login-1', viewValue: 'Login issues'},
    {value: 'received-2', viewValue: 'Product not received'},
    {value: 'pages-3', viewValue: 'Pages does not load'},
    {value: 'payment-4', viewValue: 'Payment issues'},
    {value: 'other-5', viewValue: 'Other issues'},
  ];

  contactForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    email: ['', [Validators.email,Validators.required]],
    phone: ['', [Validators.required, Validators.pattern("(\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{3,4})|([0-9]{10,11})|([0-9]{2}\s?[0-9]{8,9})")]],
    selectedIssue: ['', [Validators.required]],
    description: ['', [Validators.maxLength(200)]]
  })

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get selectedIssue() {
    return this.contactForm.get('selectedIssue');
  }

  get description() {
    return this.contactForm.get('description');
  }

  onSubmit(){
    this.formDisplay = 'none';
    this.requestSent = false
  }
}

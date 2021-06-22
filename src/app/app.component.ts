import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration';
  registrationForm: FormGroup;
  constructor(
  ) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern("[789][0-9]{9}")]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      password1: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
  }

  onSubmit() {
    if(this.registrationForm.valid) {
      console.log(this.formValue());
    }
  }
  formValue() {
    return this.registrationForm.value;
  }
}

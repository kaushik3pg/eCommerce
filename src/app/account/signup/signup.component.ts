import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';



const matchPassword = (): ValidatorFn  =>  {
  return (control : AbstractControl) : ValidationErrors | null =>  {
    const {password, confirmPassword} = control.value;
    return password !== confirmPassword ? {passwordsDontMatch: true} : null;
  
  }
    }
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm = new FormGroup({
    name  : new FormControl('', [Validators.required, Validators.minLength(3)]),
    email : new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword : new FormControl('', [Validators.required]),
  }, {validators: [matchPassword()]});

  constructor() {
 
   }

  ngOnInit(): void {

  }




}

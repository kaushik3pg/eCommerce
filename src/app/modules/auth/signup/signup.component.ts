import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';

const matchPassword = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const { password, confirmPassword } = control.value;
    return password !== confirmPassword ? { passwordsDontMatch: true } : null;
  };
};
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  createForm() {
    this.signupForm = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ]),
      ],
      userPassword: this.fb.group(
        {
          password: [
            '',
            Validators.compose([Validators.required, Validators.minLength(8)]),
          ],
          confirmPassword: [
            '',
            Validators.compose([Validators.required, Validators.minLength(8)]),
          ],
        },
        { validators: [matchPassword()] }
      ),
    });
  }

  getConfirmPasswordError() {
    if (this.signupForm.get('userPassword')?.hasError('passwordsDontMatch')) {
      return 'pass not matcha';
    } else return null;
  }
  onSignup(){
    localStorage.setItem('email', this.signupForm.get('email')?.value);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.createForm();
  }
}

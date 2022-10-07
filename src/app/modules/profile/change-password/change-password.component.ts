import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const matchPassword = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const { newPassword, confirmNewPassword } = control.value;
    return newPassword !== confirmNewPassword ? { passwordsDontMatch: true } : null;
  };
};
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  createForm() {
    this.changePasswordForm = this.fb.group(
      {
        currentPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)]),
        ],
        newPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)]),
        ],
        confirmNewPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)]),
        ],
      },
      { validators: [matchPassword()] }
    );
  }
  ngOnInit(): void {
    this.createForm();
  }
}

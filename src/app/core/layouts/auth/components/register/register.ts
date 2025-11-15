import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidtionMassg } from '../../../../../shared/components/validtion-massg/validtion-massg';
import { Auth } from '../../services/auth';
import {
  passwordMatchValidator,
  passwordStrengthValidator,
  customEmailValidator,
  egyptPhoneValidator,
  usernameValidator
} from 'auth';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ValidtionMassg,],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit  {
  resMsg: string = '';
  isloading = true;
  authForm!: FormGroup;
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  formInit() {
    this.authForm = this.fb.group(
      {
        firstName: ['', [Validators.required, usernameValidator]],
        lastName: ['', [Validators.required, usernameValidator]],
        email: ['', [Validators.required, customEmailValidator]],
        password: ['', [Validators.required, passwordStrengthValidator]],
        rePassword: ['', [Validators.required]],
        phone: ['', [Validators.required, egyptPhoneValidator]],
      },
      { validator:[passwordMatchValidator ] }
    );
  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value === control.get('rePassword')?.value
      ? null
      : { mismatch: true };
  }

  submitForm() {
    this.isloading = false;
    if (this.authForm.valid || !this.isloading) {
      this.auth.register(this.authForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isloading = true;
          if (res.message == 'success') {
            this.router.navigate(['/Login']);
          }
        },
        error: (error) => {
          console.log(error);
          this.isloading = true;
        },
      });
    }
  }

  ngOnInit(): void {
    this.formInit();
  }
}

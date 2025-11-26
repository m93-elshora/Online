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

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ValidtionMassg],
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
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['', [Validators.required, Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
        rePassword: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
        phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
      },
      { validators: this.passwordMatchValidator }
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

          this.isloading = true;
          if (res.message == 'success') {
            this.router.navigate(['/login']);
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

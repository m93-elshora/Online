import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-reset-pass',
  imports: [ReactiveFormsModule],
  templateUrl: './reset-pass.html',
  styleUrl: './reset-pass.css',
})
export class ResetPass {
    isloading = true;
    private readonly auth = inject(Auth);

  private readonly fb = new FormBuilder();
  private readonly router = new Router();
  authForm = this.fb.group({
    newPassword: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
  }, { validators: this.passwordMatchValidator });

  passwordMatchValidator(control: any) {
    return control.get('newPassword')?.value === control.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  submit() {
    this.isloading = false;
    if (this.authForm.valid || !this.isloading) {
      this.auth.resetPassword(this.authForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isloading = true;
          if (res.message == 'success') {
            this.router.navigate(['/home']);
          }
        },
        error: (error) => {
          console.log(error);
          this.isloading = true;
        },
      });
    }
  }
}

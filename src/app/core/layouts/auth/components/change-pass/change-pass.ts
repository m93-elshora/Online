import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-change-pass',
  imports: [ReactiveFormsModule],
  templateUrl: './change-pass.html',
  styleUrl: './change-pass.css',
})
export class ChangePass {
   private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  isloading = true;

  authForm = this.fb.group(
    {
      oldPassword: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
      newPassword: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]],
    },
  );

   submit() {
    this.isloading = false;
    if (this.authForm.valid || !this.isloading) {
      this.auth.changePassword(this.authForm.value).subscribe({
        next: (res) => {
          this.isloading = true;
          if (res.message == 'success') {
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isloading = true;
          if(err.message == 'falid') {
          this.router.navigate(['/login'])
          }
        },
      });
    }
  }

}

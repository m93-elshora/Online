import { Auth } from '../../services/auth';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-code',
  imports: [ReactiveFormsModule],
  templateUrl: './send-code.html',
  styleUrls: ['./send-code.css'], // Corrected to styleUrls and ensured the file exists
})
export class SendCode {
  isloading = true;
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly auth = inject(Auth);

  authForm = this.fb.group({
    code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
  });

   submitForm() {
    this.isloading = false;
    if (this.authForm.valid || !this.isloading) {
      this.auth.sendCode(this.authForm.value).subscribe({
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

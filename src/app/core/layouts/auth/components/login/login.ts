import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { ValidtionMassg } from "../../../../../shared/components/validtion-massg/validtion-massg";


@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule, CommonModule, ValidtionMassg],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

    resMsg: string = '';
  isloading = true;
  isShowPassword: boolean = true;
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  authForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/),]],
    },

  );



  submitForm() {
    this.isloading = false;
    if (this.authForm.valid || !this.isloading) {
      this.auth.login(this.authForm.value).subscribe({
        next: (res) => {

          this.isloading = true;
          if (res.message == 'success') {
            this.resMsg = 'Login successful';
            localStorage.setItem('userToken', res.token);
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 500);
          }
        },
        error: (error) => {
          this.resMsg = error.error.message;
          this.isloading = true;
        },
      });
    }
  }


showPassword(){
  this.isShowPassword = !this.isShowPassword;
}
ngOnInit(): void {
  this.authForm.reset();
}}

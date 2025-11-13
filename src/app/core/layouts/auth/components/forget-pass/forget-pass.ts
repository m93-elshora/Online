import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-forget-pass',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forget-pass.html',
  styleUrl: './forget-pass.css',
})
export class ForgetPass {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);


  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  submitForm() {
    if (this.authForm.valid) {
      console.log('Email sent');
      this.router.navigate(['/auth/send-code']);
    }
  }

}

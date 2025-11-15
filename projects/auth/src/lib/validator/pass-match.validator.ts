import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
  const password = form.get('password')?.value;
  const rePassword = form.get('rePassword')?.value;

  return password && rePassword && password !== rePassword ? { mismatch: true } : null;
};


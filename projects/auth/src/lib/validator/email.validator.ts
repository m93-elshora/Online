import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const customEmailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (!value) return null;

  const regex = /^[\w.-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/;

  return regex.test(value) ? null : { invalidEmail: true };
};

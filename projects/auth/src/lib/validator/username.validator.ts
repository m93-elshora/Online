import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const usernameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (!value) return null;

  const regex = /^[A-Za-z0-9_]{3,20}$/;

  return regex.test(value) ? null : { invalidUsername: true };
};

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const egyptPhoneValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (!value) return null;

  const regex = /^01[0125][0-9]{8}$/;

  return regex.test(value) ? null : { invalidPhone: true };
};

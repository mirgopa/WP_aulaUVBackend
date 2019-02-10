import { AbstractControl, ValidatorFn } from '@angular/forms';

export class DecimaNumberValidator {
  static validateNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const number = /^\d{1,6}(\.\d{1,3})?$/.test(control.value)
        ? +control.value
        : NaN;

      if (number !== number) {
        return { validateNumber: true };
      }

      return null;
    };
  }
}

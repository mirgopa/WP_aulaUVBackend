import { AbstractControl, ValidatorFn } from '@angular/forms';

export class UrlValidator {
  static validateUrl(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const url = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-\_]+\.[a-zA-Z]{2,5}(\/[a-zA-Z0-9\.\-\_]*)*$/.test(
        control.value,
      )
        ? control.value
        : '';

      if (!url || url === '') {
        return { validateUrl: true };
      }

      return null;
    };
  }
}

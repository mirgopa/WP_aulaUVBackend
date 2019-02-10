import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  template: `
    <p class="mat-typography" [innerHtml]="data"></p>
  `,
  styles: ['p { margin: 0px !important; }'],
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}

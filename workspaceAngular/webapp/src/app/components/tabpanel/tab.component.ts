/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  styles: [
    `
      .pane {
        padding: 1em;
      }
    `,
  ],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
      <ng-container
        *ngIf="template"
        [ngTemplateOutlet]="template"
        [ngTemplateOutletContext]="{ data: dataContext }"
      >
      </ng-container>
    </div>
  `,
})
export class TabComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;
}

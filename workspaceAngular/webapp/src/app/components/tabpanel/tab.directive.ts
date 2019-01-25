import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamic-tabs]',
})
export class TabDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

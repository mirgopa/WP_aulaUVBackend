import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Section } from '../../models/Section';
import { TabDirective } from '../tabpanel/tab.directive';

@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.scss'],
})
export class TabpanelComponent implements OnInit {
  tabs = []; // Etiquetas de pestaña
  selected = new FormControl(0);

  @Output() closeSidenav = new EventEmitter<void>();
  @ViewChild(TabDirective) tabHost: TabDirective;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}

  addTab(item: Section) {
    this.tabs.push({ name: item.name || 'New', component: item.component });
    this.selected.setValue(this.tabs.length);

    const componentFactory = this.cfr.resolveComponentFactory(item.component);
    console.log(this.tabHost);
    const viewContainerRef = this.tabHost.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(componentFactory);

    this.closeSidenav.emit();
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

import {
  Component,
  ContentChildren,
  QueryList,
  ViewChild,
  ComponentFactoryResolver,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { TabDirective } from '../tabpanel/tab.directive';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.scss'],
})
export class TabpanelComponent implements OnInit {
  dynamicTabs: TabComponent[] = [];
  selected = new FormControl(0);

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild(TabDirective) dynamicTabPlaceholder: TabDirective;
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}

  openTab(title: string, template, data, isClosable) {
    const index = this.dynamicTabs.findIndex((tab) => tab.title === title);

    if (index >= 0) {
      this.selected.setValue(index + 1); // Incluimos la pestaña fija de home
    } else {
      const componentFactory = this.cfr.resolveComponentFactory(TabComponent);
      const viewContainerRef = this.dynamicTabPlaceholder.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);

      const instance: TabComponent = componentRef.instance as TabComponent;
      instance.title = title;
      instance.template = template;
      instance.dataContext = data;
      instance.isCloseable = isClosable;
      instance.active = true;

      this.dynamicTabs.push(componentRef.instance as TabComponent);
      this.selected.setValue(this.dynamicTabs.length);
    }
    this.closeSidenav.emit();
  }

  selectTab(tabIndex: number) {
    if (tabIndex !== null && tabIndex !== undefined) {
      this.dynamicTabs.forEach((tab) => (tab.active = false));
      if (this.dynamicTabs[tabIndex - 1]) {
        this.dynamicTabs[tabIndex - 1].active = true; // Extraemos la pestaña fija de home
      }
    }
  }

  closeTab(tab: TabComponent) {
    const index = this.dynamicTabs.findIndex((t) => t.title === tab.title);

    if (index >= 0) {
      this.dynamicTabs.splice(index, 1);

      // Se destruye de forma dinamica el componente generado
      const viewContainerRef = this.dynamicTabPlaceholder.viewContainerRef;
      viewContainerRef.remove(index);

      this.selected.setValue(index >= 0 ? index : 0);
    }
  }
}

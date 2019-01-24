import { Injectable } from '@angular/core';

import { Section } from '../models/Section';
import { ExampleTabComponent } from '../components/example-tab/example-tab.component';

@Injectable()
export class SectionService {
  menuItems: Section[] = [
    {
      name: 'Productos',
      description: 'Mantenimiento de productos',
      icon: 'shopping_basket',
      component: ExampleTabComponent,
    },
    {
      name: 'Compra',
      description: 'Listados de compra',
      icon: 'shopping_cart',
      component: null,
    },
  ];

  getSections() {
    return this.menuItems;
  }
}

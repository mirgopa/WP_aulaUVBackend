import { Injectable } from '@angular/core';

import { Section } from '../models/Section';
import { ExampleTabComponent } from '../components/example-tab/example-tab.component';
import { Example2TabComponent } from '../components/example2-tab/example2-tab.component';

@Injectable()
export class SectionService {
  menuItems: Section[] = [
    {
      name: 'Productos',
      description: 'Mantenimiento de productos',
      icon: 'shopping_basket',
      component: 'exampleTab',
    },
    {
      name: 'Compra',
      description: 'Listados de compra',
      icon: 'shopping_cart',
      component: 'example2Tab',
    },
  ];

  getSections() {
    return this.menuItems;
  }
}

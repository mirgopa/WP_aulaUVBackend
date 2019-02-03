import { Injectable } from '@angular/core';

import { Section } from '../models/Section';

@Injectable()
export class SectionService {
  menuItems: Section[] = [
    {
      name: 'Productos',
      description: 'Mantenimiento de productos',
      icon: 'shopping_basket',
      component: 'productList',
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

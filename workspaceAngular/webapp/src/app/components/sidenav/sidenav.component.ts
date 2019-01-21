import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Section } from '../../models/Section';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() title: string;

  menuItems: Section[] = [
    {
      name: 'Productos',
      description: 'Mantenimiento de productos',
      icon: 'shopping_basket',
      route: 'productos',
    },
    {
      name: 'Compra',
      description: 'Listados de compra',
      icon: 'shopping_cart',
      route: 'compras',
    },
  ];

  mode = new FormControl('push');

  constructor() {}

  ngOnInit() {}
}

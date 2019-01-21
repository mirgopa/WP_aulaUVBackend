import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.scss'],
})
export class TabpanelComponent implements OnInit {
  tabs = ['ejemplo', 'ejemplo2'];
  selected = new FormControl(0);

  @Output() closeSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  addTab(nameTab: string) {
    this.tabs.push(nameTab || 'New');
    this.selected.setValue(this.tabs.length);
    this.closeSidenav.emit();
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

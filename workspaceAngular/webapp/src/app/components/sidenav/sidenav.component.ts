import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SectionService } from '../../services/section.service';
import { TabsService } from '../../services/tabs.service';
import { Section } from '../../models/Section';
import { TabpanelComponent } from '../tabpanel/tabpanel.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menuItems: Section[];
  mode = new FormControl('push');

  @Input() title: string;
  @ViewChild(TabpanelComponent) tabpanelComponent;

  constructor(
    private sectionService: SectionService,
    private tabsService: TabsService,
  ) {}

  ngOnInit() {
    this.menuItems = this.sectionService.getSections();
    this.tabsService.component = this.tabpanelComponent;
  }

  addTab(item: Section) {
    this.tabsService.component.openTab(
      item.name || 'New',
      this.tabsService.tabs[item.component],
      {},
      true,
    );
  }
}

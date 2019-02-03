import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsService } from '../../services/tabs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab-templates',
  templateUrl: './tab-templates.component.html',
})
export class TabTemplatesComponent implements OnInit {
  @ViewChild('productList') productListComponent;
  @ViewChild('example2Tab') example2TabComponent;

  constructor(private tabService: TabsService) {}

  ngOnInit() {
    this.tabService.tabs.productList = this.productListComponent;
    this.tabService.tabs.example2Tab = this.example2TabComponent;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'tab-templates',
  templateUrl: './tab-templates.component.html',
})
export class TabTemplatesComponent implements OnInit {
  @ViewChild('exampleTab') exampleTabComponent;
  @ViewChild('example2Tab') example2TabComponent;

  constructor(private tabService: TabsService) {}

  ngOnInit() {
    this.tabService.tabs.exampleTab = this.exampleTabComponent;
    this.tabService.tabs.example2Tab = this.example2TabComponent;
  }
}

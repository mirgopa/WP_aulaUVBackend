import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-compra-edit',
  templateUrl: './compra-edit.component.html',
  styleUrls: ['./compra-edit.component.scss'],
})
export class CompraEditComponent implements OnInit {
  @Input() data: any;
  @Output() closeComponent: EventEmitter<Boolean> = new EventEmitter<Boolean>(true); // True for async event

  constructor(private tabsService: TabsService) {}

  ngOnInit() {
    console.log(this.data);
  }

  close() {
    this.closeComponent.emit(true);
    this.tabsService.component.closeActive();
  }
}

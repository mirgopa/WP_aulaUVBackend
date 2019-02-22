import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TabsService } from 'src/app/services/tabs.service';
import { ProductTableComponent } from 'src/app/modules/product/components/product-table/product-table.component';

@Component({
  selector: 'app-compra-edit',
  templateUrl: './compra-edit.component.html',
  styleUrls: ['./compra-edit.component.scss'],
})
export class CompraEditComponent implements OnInit {
  myForm: FormGroup;

  @Input() data: any;
  @Output() closeComponent: EventEmitter<Boolean> = new EventEmitter<Boolean>(true); // True for async event
  @ViewChild(ProductTableComponent) productTableComponent: ProductTableComponent;

  constructor(private tabsService: TabsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      id: [this.data.id ? this.data.id : null],
      nombre: [this.data.nombre ? this.data.nombre : '', Validators.required],
    });
  }

  get f() {
    return this.myForm.controls;
  }

  save() {
    console.log(this.productTableComponent.selection.selected);
    console.log(this.myForm.value);
  }

  close(isCancel: Boolean) {
    if (!isCancel) {
      this.save();
      this.closeComponent.emit(true);
    }
    this.tabsService.component.closeActive();
  }
}

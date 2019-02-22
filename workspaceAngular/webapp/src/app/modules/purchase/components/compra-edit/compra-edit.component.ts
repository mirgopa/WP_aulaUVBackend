import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { TabsService } from 'src/app/services/tabs.service';
import { ProductTableComponent } from 'src/app/modules/product/components/product-table/product-table.component';
import { CompraService } from 'src/app/services/compra.service';
import { Compra } from 'src/app/models/Compra';
import { ObDialog } from '../../../../models/ObDialog';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { DialogComponent } from '../../../../components/dialog/dialog.component';
import { Msg } from 'src/app/messages';

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

  constructor(
    private tabsService: TabsService,
    private formBuilder: FormBuilder,
    private compraService: CompraService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      id: [this.data.id ? this.data.id : null],
      nombre: [this.data.nombre ? this.data.nombre : '', Validators.required],
    });
  }

  get f() {
    return this.myForm.controls;
  }

  openDialog(obDialog: ObDialog) {
    this.dialog.open(DialogComponent, { data: obDialog });
  }

  update() {
    const result: Compra = this.myForm.value;
    result.productos = this.productTableComponent.selection.selected;

    this.compraService.update(<Compra>result).subscribe(
      (res) => {
        if (result.id != null && result.id !== undefined) {
          this.snackBar.openFromComponent(SnackbarComponent, {
            data: `${Msg.compra.update.ok1} ${result.nombre} ${Msg.compra.update.ok2}`,
            duration: 2500,
          });
        } else {
          this.snackBar.openFromComponent(SnackbarComponent, {
            data: `${Msg.compra.insert.ok1} ${result.nombre} ${Msg.compra.insert.ok2}`,
            duration: 2500,
          });
        }
        this.close(false);
      },
      (err) => {
        if (result) {
          const obDialog: ObDialog = {
            title: Msg.compra.insert.errTitle,
            description: `${Msg.compra.insert.errDesc1} ${result.nombre} ${Msg.compra.insert.errDesc2}`,
          };
          this.openDialog(obDialog);
        }
      },
    );
  }

  close(isCancel: Boolean) {
    if (!isCancel) {
      this.closeComponent.emit(true);
    }
    this.tabsService.component.closeActive();
  }
}

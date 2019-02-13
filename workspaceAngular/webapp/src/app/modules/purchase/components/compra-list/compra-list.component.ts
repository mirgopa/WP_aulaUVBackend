import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { CompraService } from 'src/app/services/compra.service';
import { ObDialog } from '../../../../models/ObDialog';
import { DialogComponent } from '../../../../components/dialog/dialog.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { Msg } from 'src/app/messages';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.scss'],
})
export class CompraListComponent implements OnInit {
  compraList: any = [];
  myForm: FormGroup;

  constructor(private compraService: CompraService, private formBuilder: FormBuilder, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      nombre: [''],
    });

    this.find();
  }

  // Getter para acceso a los campos del formulario
  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }

    this.find(this.myForm.value.nombre);
  }

  openDialog(obDialog: ObDialog) {
    this.dialog.open(DialogComponent, { data: obDialog });
  }

  find(nombre?: string) {
    this.compraService.find(nombre).subscribe(
      (res) => {
        this.compraList = res;
      },
      (err) => console.error(err),
    );
  }

  delete(id: number) {
    if (id !== null && id !== undefined) {
      const compraToDelete: any = this.compraList.filter((compra) => compra.id === id);
      this.compraService.delete(id).subscribe(
        (res) => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            data: `${Msg.compra.delete.ok1} ${compraToDelete[0].nombre} ${Msg.compra.delete.ok2} ${id.toString()} ${Msg.compra.delete.ok3}`,
            duration: 2500,
          });
          this.find(this.myForm.value.nombre);
        },
        (err) => {
          const obDialog: ObDialog = {
            title: Msg.compra.delete.errTitle,
            description: `${Msg.compra.delete.errDesc1} ${compraToDelete[0].nombre} ${Msg.compra.delete.errDesc2} ${id.toString()} ${Msg.compra.delete.errDesc3}`,
          };
          this.openDialog(obDialog);
        },
      );
    }
  }
}

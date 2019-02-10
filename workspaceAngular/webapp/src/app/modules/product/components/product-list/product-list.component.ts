import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/Product';
import { ObDialog } from '../../../../models/ObDialog';
import { DialogComponent } from '../../../../components/dialog/dialog.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { Msg } from 'src/app/messages';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: any = [];
  myForm: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder, private dialog: MatDialog, private snackBar: MatSnackBar) {}

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
    this.productService.find(nombre).subscribe(
      (res) => {
        this.productList = res;
      },
      (err) => console.error(err),
    );
  }

  edit(id?: number) {
    if (id !== null && id !== undefined) {
      this.productService.get(id).subscribe(
        (res) => this.openEditDialog(<Product>res),
        (err) => {
          const obDialog: ObDialog = {
            title: Msg.product.get.errTitle,
            description: `${Msg.product.get.errDesc1} ${id.toString()} ${Msg.product.get.errDesc2}`,
          };
          this.openDialog(obDialog);
        },
      );
    } else {
      const product: Product = {
        id: null,
        nombre: '',
        descripcion: '',
        image: '',
        readMore: '',
        precio: null,
      };
      this.openEditDialog(product);
    }
  }

  openEditDialog(product?: Product) {
    const dialogRef = this.dialog.open(ProductEditComponent, { data: product });

    dialogRef.afterClosed().subscribe((result) => {
      this.productService.update(<Product>result).subscribe(
        (res) => {
          if (result.id != null && result.id !== undefined) {
            this.snackBar.openFromComponent(SnackbarComponent, {
              data: `${Msg.product.update.ok1} ${result.nombre} ${Msg.product.update.ok2}`,
              duration: 2500,
            });
          } else {
            this.snackBar.openFromComponent(SnackbarComponent, {
              data: `${Msg.product.insert.ok1} ${result.nombre} ${Msg.product.insert.ok2}`,
              duration: 2500,
            });
          }
          this.find(this.myForm.value.nombre);
        },
        (err) => {
          if (result) {
            const obDialog: ObDialog = {
              title: Msg.product.insert.errTitle,
              description: `${Msg.product.insert.errDesc1} ${result.nombre} ${Msg.product.insert.errDesc2}`,
            };
            this.openDialog(obDialog);
          }
        },
      );
    });
  }

  delete(id: number) {
    if (id !== null && id !== undefined) {
      const productToDelete: any = this.productList.filter((product) => product.id === id);
      this.productService.delete(id).subscribe(
        (res) => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            data: `${Msg.product.delete.ok1} ${productToDelete[0].nombre} ${Msg.product.delete.ok2} ${id.toString()} ${Msg.product.delete.ok3}`,
            duration: 2500,
          });
          this.find(this.myForm.value.nombre);
        },
        (err) => {
          const obDialog: ObDialog = {
            title: Msg.product.delete.errTitle,
            description: `${Msg.product.delete.errDesc1} ${productToDelete[0].nombre} ${Msg.product.delete.errDesc2} ${id.toString()} ${Msg.product.delete.errDesc3}`,
          };
          this.openDialog(obDialog);
        },
      );
    }
  }
}

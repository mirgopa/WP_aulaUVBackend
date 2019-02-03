import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/Product';
import { ObDialog } from '../../../../models/ObDialog';
import { DialogComponent } from '../../../../components/dialog/dialog.component';
import { debug } from 'util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: any = [];
  myForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) {}

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

  delete(id: number) {
    if (id !== null && id !== undefined) {
      // tslint:disable-next-line:label-position
      let productToDelete: any = this.productList.filter(
        (product) => product.id === id,
      );
      this.productService.delete(id).subscribe(
        (res) => {
          const obDialog: ObDialog = {
            title: 'Producto borrado con éxito',
            description1: 'El producto ',
            description2: ' con identificador ',
            description3: ' ha sido eliminado de la base de datos con éxito.',
            value1: productToDelete[0].nombre,
            value2: id.toString(),
          };
          this.openDialog(obDialog);
          this.find(this.myForm.value.nombre);
        },
        (err) => console.error('El producto no se ha podido eliminar'),
      );
    }
  }
}

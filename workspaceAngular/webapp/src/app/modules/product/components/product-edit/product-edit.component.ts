import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from 'src/app/models/Product';
import { DecimaNumberValidator } from 'src/app/directives/decimal-number-validator';
import { UrlValidator } from 'src/app/directives/url-validator';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ProductEditComponent>, @Inject(MAT_DIALOG_DATA) private data: Product) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      id: [this.data.id ? this.data.id : null],
      nombre: [this.data.nombre ? this.data.nombre : '', Validators.required],
      descripcion: [this.data.descripcion ? this.data.descripcion : '', Validators.required],
      image: [this.data.image ? this.data.image : '', [Validators.required, UrlValidator.validateUrl()]],
      readMore: [this.data.readMore ? this.data.readMore : '', UrlValidator.validateUrl()],
      precio: [this.data.precio ? this.data.precio.toString().replace(',', '.') : null, [Validators.required, DecimaNumberValidator.validateNumber()]],
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material';

import { ProductListComponent } from './components/product-list/product-list.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { ProductService } from '../../services/product.service';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';

@NgModule({
  declarations: [ProductListComponent, ProductEditComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ProductListComponent, ProductEditComponent],
  entryComponents: [
    ProductListComponent,
    ProductEditComponent,
    DialogComponent,
    SnackbarComponent,
  ],
  providers: [ProductService],
})
export class ProductModule {}

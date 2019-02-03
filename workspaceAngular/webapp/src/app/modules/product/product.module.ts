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

@NgModule({
  declarations: [ProductListComponent],
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
  exports: [ProductListComponent],
  entryComponents: [ProductListComponent, DialogComponent],
  providers: [ProductService],
})
export class ProductModule {}

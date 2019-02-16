import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material';

import { DialogComponent } from '../../components/dialog/dialog.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { CompraListComponent } from './components/compra-list/compra-list.component';
import { CompraEditComponent } from './components/compra-edit/compra-edit.component';

@NgModule({
  declarations: [CompraListComponent, CompraEditComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule, MaterialModule, FlexLayoutModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [CompraListComponent, CompraEditComponent],
  entryComponents: [CompraListComponent, CompraEditComponent, DialogComponent, SnackbarComponent],
  providers: [],
})
export class PurchaseModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material';

import { Example2TabComponent } from './components/example2-tab/example2-tab.component';

@NgModule({
  declarations: [Example2TabComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [Example2TabComponent],
  entryComponents: [Example2TabComponent],
  providers: [],
})
export class PurchaseModule {}

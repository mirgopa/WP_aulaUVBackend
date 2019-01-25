import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material';

import { ExampleTabComponent } from './components/example-tab/example-tab.component';

@NgModule({
  declarations: [ExampleTabComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [ExampleTabComponent],
  entryComponents: [ExampleTabComponent],
  providers: [],
})
export class ProductModule {}

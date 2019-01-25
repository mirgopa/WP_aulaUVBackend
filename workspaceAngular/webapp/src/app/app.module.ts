import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { ProductModule } from './modules/product/product.module';
import { PurchaseModule } from './modules/purchase/purchase.module';

import { AppComponent } from './app.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { TabTemplatesComponent } from './components/tabpanel/tab-templates.component';
import { TabComponent } from './components/tabpanel/tab.component';
import { TabDirective } from './components/tabpanel/tab.directive';
import { TabpanelComponent } from './components/tabpanel/tabpanel.component';

import { HomeComponent } from './components/home/home.component';

import { SectionService } from './services/section.service';
import { TabsService } from './services/tabs.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavComponent,
    TabpanelComponent,
    TabDirective,
    TabComponent,
    TabTemplatesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductModule,
    PurchaseModule,
  ],
  entryComponents: [TabComponent],
  providers: [SectionService, TabsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

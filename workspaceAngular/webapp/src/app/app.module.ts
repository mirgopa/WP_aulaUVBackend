import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from './material';

import { NavigationComponent } from './components/navigation/navigation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TabpanelComponent } from './components/tabpanel/tabpanel.component';
import { TabDirective } from './components/tabpanel/tab.directive';
import { TabComponent } from './components/tabpanel/tab.component';
import { ExampleTabComponent } from './components/example-tab/example-tab.component';
import { SectionService } from './services/section.service';
import { Example2TabComponent } from './components/example2-tab/example2-tab.component';
import { HomeComponent } from './components/home/home.component';
import { TabsService } from './services/tabs.service';
import { TabTemplatesComponent } from './components/tabpanel/tab-templates.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavComponent,
    TabpanelComponent,
    TabDirective,
    TabComponent,
    TabTemplatesComponent,
    ExampleTabComponent,
    Example2TabComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  entryComponents: [TabComponent, ExampleTabComponent, Example2TabComponent],
  providers: [SectionService, TabsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

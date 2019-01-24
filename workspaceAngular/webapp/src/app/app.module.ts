import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from './material';

import { NavigationComponent } from './components/navigation/navigation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TabpanelComponent } from './components/tabpanel/tabpanel.component';
import { TabDirective } from './components/tabpanel/tab.directive';
import { ExampleTabComponent } from './components/example-tab/example-tab.component';
import { SectionService } from './services/section.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavComponent,
    TabpanelComponent,
    TabDirective,
    ExampleTabComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  entryComponents: [ExampleTabComponent],
  providers: [SectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}

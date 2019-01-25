import { Injectable } from '@angular/core';
import { TabpanelComponent } from '../components/tabpanel/tabpanel.component';

@Injectable()
export class TabsService {
  public component: TabpanelComponent;

  public tabs: any = {};
}

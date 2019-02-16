import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { TabsService } from '../../services/tabs.service';
import { CompraListComponent } from 'src/app/modules/purchase/components/compra-list/compra-list.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab-templates',
  templateUrl: './tab-templates.component.html',
})
export class TabTemplatesComponent implements OnInit {
  @ViewChild('productList') productListComponent;
  @ViewChild('compraList') compraListComponent;
  @ViewChild('compraEdit') compraEditComponent;

  @ViewChildren(CompraListComponent) compraListChild: QueryList<CompraListComponent>;

  constructor(private tabService: TabsService) {}

  ngOnInit() {
    this.tabService.tabs.productList = this.productListComponent;
    this.tabService.tabs.compraList = this.compraListComponent;
    this.tabService.tabs.compraEdit = this.compraEditComponent;
  }

  updateCompraList(toRefresh: Boolean) {
    if (toRefresh) {
      // Utilizo la premisa singleton (first es valido porque no voy a tener más componentes de este tipo)
      // otra forma de hacerlo... this.compraListComponent._projectedViews[0].nodes[1].instance.find();
      this.compraListChild.first.find();
    }
  }
}

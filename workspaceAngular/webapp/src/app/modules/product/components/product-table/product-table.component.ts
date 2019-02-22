import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Compra } from 'src/app/models/Compra';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['select', 'id', 'nombre', 'precio', 'readMore'];
  selection = new SelectionModel<Product>(true, []);
  listProductFromCompra: Product[];

  @Input() dataC: Compra;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.listProductFromCompra = this.dataC.productos;
    this.find();
    /*
    const listIds = this.dataC.productos.map((product) => {
      return product.id;
    });
    console.log(listIds);*/
  }

  find() {
    const me = this;
    this.productService.find().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource<Product>(res as Product[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.dataSource.data.forEach((row) => {
          if (me.listProductFromCompra && me.listProductFromCompra.filter((item) => item.id === row.id).length > 0) {
            this.selection.select(row);
          }
        });
      },
      (err) => console.error(err),
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
}

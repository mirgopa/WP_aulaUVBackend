import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URI = 'http://localhost:8083/producto';

  constructor(private http: HttpClient) {}

  find(nombre?: string) {
    return this.http.get(
      `${this.API_URI}/findProducto${nombre ? `?nombre=${nombre}` : ''}`,
    );
  }

  get(id: number) {
    return this.http.get(`${this.API_URI}/getProducto?id=${id}`);
  }

  update(product: Product) {
    return this.http.put(`${this.API_URI}/updateProducto`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URI}/deleteProducto?id=${id}`);
  }
}

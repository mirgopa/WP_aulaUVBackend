import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Compra } from '../models/Compra';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  API_URI = 'http://localhost:8083/compra';

  constructor(private http: HttpClient) {}

  find(nombre?: string) {
    return this.http.get(`${this.API_URI}/findCompra${nombre ? `?nombre=${nombre}` : ''}`);
  }

  get(id: number) {
    return this.http.get(`${this.API_URI}/getCompra?id=${id}`);
  }

  update(compra: Compra) {
    return this.http.put(`${this.API_URI}/updateCompra`, compra);
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URI}/deleteCompra?id=${id}`);
  }
}

import { Product } from 'src/app/models/Product';

export interface Compra {
  id: number;
  nombre: string;
  created: string;
  productos: Product[];
  presupuesto: number;
}

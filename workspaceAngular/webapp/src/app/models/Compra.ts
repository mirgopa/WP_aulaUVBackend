import { Product } from 'src/app/models/Product';

export interface Compra {
  id: number;
  nombre: string;
  created: Date;
  productos: Product[];
  presupuesto: number;
}

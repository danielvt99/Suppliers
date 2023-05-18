import { Product } from "./products";

export interface Supplier {
  supplierId?: number;
  name?: string;
  telephoneNumber?: string;
  products?: Product[];
}
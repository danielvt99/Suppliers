import { Product } from "./products";

export interface Supplier {
  SupplierId: number;
  Name?: string;
  TelephoneNumber?: string;
  Products: Product[];
}
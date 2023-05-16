import { Supplier } from "./suppliers";

export interface Product {
    ProductId: number;
    SupplierId?: number;
    ProductName?: string;
    Description?: string;
    Price?: number;
    Supplier?: Supplier | null;
  }
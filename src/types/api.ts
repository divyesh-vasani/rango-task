export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  sku: string;
  weight: number;
  brand: string;
  thumbnail: string;
}

export interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  images?: string[];
  category: string;
  description?: string;
  highlights?: string[];
  specs?: Record<string, string>;
  discountPrice?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  rating: number[];
  priceRange: [number, number];
  sortBy: 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';
}
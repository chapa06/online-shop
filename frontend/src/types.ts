export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
  specs?: Record<string, string>;
  discountPrice?: number;
  sales?: boolean;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  products?: Product[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  rating: number[];
  priceRange: [number, number];
  sortBy: 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';
}

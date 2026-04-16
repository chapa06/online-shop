const API_BASE_URL = '/api';

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  images: string[];
  specs?: Record<string, string>;
  category: {
    id: number;
    name: string;
    image: string;
  };
}

export interface Category {
  id: number;
  name: string;
  image: string;
  products?: Product[];
}

export const api = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },

  async getCategories(): Promise<Category[]> {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },

  async getCategory(id: number): Promise<Category> {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category');
    }
    return response.json();
  },

  async getSaleProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}/products/sales/on`);
    if (!response.ok) {
      throw new Error('Failed to fetch sale products');
    }
    return response.json();
  },

  async updateProductSales(id: number, sales: boolean): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/products/${id}/sales?sales=${sales}`, {
      method: 'PATCH',
    });
    if (!response.ok) {
      throw new Error('Failed to update product sales status');
    }
    return response.json();
  },
};

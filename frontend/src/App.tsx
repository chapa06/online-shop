import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { api } from './services/api';
import type { FilterState, Product, CartItem } from './types';
import { ChevronDown, Search, SlidersHorizontal, Check } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('shop');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    rating: [],
    priceRange: [0, 1000],
    sortBy: 'name-asc'
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await api.getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const sortOptions = [
    { id: 'name-asc', label: 'Name (A-Z)' },
    { id: 'name-desc', label: 'Name (Z-A)' },
    { id: 'price-asc', label: 'Price (Low to High)' },
    { id: 'price-desc', label: 'Price (High to Low)' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.rating.length > 0) {
      result = result.filter(p => filters.rating.some(r => p.rating >= r));
    }

    result = result.filter(p => Number(p.price) >= filters.priceRange[0] && Number(p.price) <= filters.priceRange[1]);

    result.sort((a, b) => {
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (filters.sortBy === 'price-asc') return Number(a.price) - Number(b.price);
      if (filters.sortBy === 'price-desc') return Number(b.price) - Number(a.price);
      return 0;
    });

    return result;
  }, [filters, products]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (currentPage === 'product-detail' && selectedProduct) {
      return <ProductDetail product={selectedProduct} onAddToCart={handleAddToCart} />;
    }

    switch (currentPage) {
      case 'cart':
        return <Cart items={cart} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveFromCart}  onNavigate={handleNavigate}/>;
      case 'about':
        return <About />;
      case 'categories':
        return <Categories />;
      case 'shop':
      default:
        return (
          <>
            <Hero />
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex flex-col lg:flex-row gap-12">
                <Sidebar 
                  onRatingChange={(rating) => setFilters(prev => ({
                    ...prev,
                    rating: prev.rating.includes(rating) ? prev.rating.filter(r => r !== rating) : [...prev.rating, rating]
                  }))}
                  onPriceChange={(min, max) => setFilters(prev => ({ ...prev, priceRange: [min || 0, max || 1000] }))}
                />
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold text-gray-900 transition-colors">
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters
                      </button>
                      <span className="text-sm text-gray-500 font-medium">
                        {filteredProducts.length} products
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Sort by:</span>
                      <div className="relative">
                        <button 
                          onClick={() => setIsSortOpen(!isSortOpen)}
                          className="flex items-center justify-between w-48 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-100 transition-all"
                        >
                          {sortOptions.find(o => o.id === filters.sortBy)?.label}
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isSortOpen && (
                          <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 overflow-hidden">
                            {sortOptions.map(option => (
                              <button
                                key={option.id}
                                onClick={() => {
                                  setFilters(prev => ({ ...prev, sortBy: option.id as FilterState['sortBy'] }));
                                  setIsSortOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                                  filters.sortBy === option.id 
                                    ? 'bg-gray-50 text-orange-500 font-bold' 
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                {option.label}
                                {filters.sortBy === option.id && <Check className="w-4 h-4" />}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                      {filteredProducts.map(product => (
                        <div key={product.id} onClick={() => handleProductClick(product)} className="cursor-pointer">
                          <ProductCard product={product} onAddToCart={handleAddToCart} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">No products found</h3>
                      <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      <div className="flex-1">
        {renderPage()}
      </div>

      <Footer />
    </div>
  );
}

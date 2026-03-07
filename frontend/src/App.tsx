import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';
import type { FilterState, Product } from './types';
import { ChevronDown, Search, SlidersHorizontal, Check } from 'lucide-react';

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

export default function App() {
  const [currentPage, setCurrentPage] = useState('shop');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    rating: [],
    priceRange: [0, 1000],
    sortBy: 'name-asc'
  });

  const sortOptions: { id: SortOption; label: string }[] = [
    { id: 'name-asc', label: 'Name (A-Z)' },
    { id: 'name-desc', label: 'Name (Z-A)' },
    { id: 'price-asc', label: 'Price (Low to High)' },
    { id: 'price-desc', label: 'Price (High to Low)' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (filters.rating.length > 0) {
      result = result.filter(p => filters.rating.some(r => p.rating >= r));
    }

    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    result.sort((a, b) => {
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

    return result;
  }, [filters]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product: Product) => {
    // Временная заглушка для добавления в корзину
    console.log('Added to cart:', product);
  };

  const handleRatingChange = (rating: number) => {
    setFilters(prev => ({
      ...prev,
      rating: prev.rating.includes(rating) 
        ? prev.rating.filter(r => r !== rating) 
        : [...prev.rating, rating]
    }));
  };

  const handlePriceChange = (min: number | null, max: number | null) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [min || 0, max || 1000]
    }));
  };

  const handleSortChange = (sortBy: SortOption) => {
    setFilters(prev => ({
      ...prev,
      sortBy
    }));
    setIsSortOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
      default:
        return (
          <>
            <Hero />
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex flex-col lg:flex-row gap-12">
                <Sidebar 
                  onRatingChange={handleRatingChange}
                  onPriceChange={handlePriceChange}
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
                                onClick={() => handleSortChange(option.id)}
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
                        <div key={product.id}>
                          <ProductCard 
                            product={product} 
                            onAddToCart={() => handleAddToCart(product)} 
                          />
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
        cartCount={0}
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
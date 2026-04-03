import React from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';
import { Tag, Clock } from 'lucide-react';

interface DealsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const Deals: React.FC<DealsProps> = ({ products, onProductClick, onAddToCart }) => {
  const saleProducts = products.filter(p => p.sales);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-orange-100 p-2 rounded-lg">
          <Tag className="w-6 h-6 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Special Deals</h1>
      </div>
      <p className="text-gray-500 mb-12">Limited time offers on our best products - Don't miss out!</p>

      {/* Flash Sale Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-indigo-600 rounded-3xl p-8 sm:p-12 text-white mb-16 relative overflow-hidden shadow-2xl shadow-indigo-500/20"
      >
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Flash Sale Event</h2>
            <p className="text-indigo-100 text-lg">Save up to 30% on selected items across all categories.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center gap-4">
            <Clock className="w-6 h-6" />
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-indigo-200">Ends in</div>
              <div className="text-2xl font-bold">2 days, 14:23:05</div>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl" />
      </motion.div>

      {saleProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {saleProducts.map(product => (
            <div key={product.id} className="relative">
              <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                On Sale
              </div>
              <div onClick={() => onProductClick(product)} className="cursor-pointer">
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Tag className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">No deals available</h3>
          <p className="text-gray-500">Check back later for special offers!</p>
        </div>
      )}
    </div>
  );
};
import React from 'react';
import { CATEGORIES } from '../constants';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Categories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h1>
        <p className="text-gray-500 max-w-2xl">Browse our wide selection of premium pet supplies by category. We have everything you need for your beloved companions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                <p className="text-white/70 text-sm">{category.count} products</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

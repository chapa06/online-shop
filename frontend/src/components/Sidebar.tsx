import React from 'react';
import type { FilterState } from '../types';

interface SidebarProps {
  onRatingChange: (rating: number) => void;
  onPriceChange: (min: number, max: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onRatingChange, onPriceChange }) => {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
      <div className='bg-white rounded-lg border border-gray-200 p-6 sticky top-24'>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Filters</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Rating</h3>
            <div className="space-y-2">
              {[5, 4, 3].map((rating) => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    onChange={() => onRatingChange(rating)}
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {rating}+ Stars
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full pl-7 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  onChange={(e) => onPriceChange(Number(e.target.value), 1000)}
                />
              </div>
              <span className="text-gray-400">—</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full pl-7 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  onChange={(e) => onPriceChange(0, Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
import React, { useState } from 'react';
import { type CartItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Minus, Plus, Tag, ChevronRight, CheckCircle2, ShoppingCart } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onNavigate: (page: string) => void;
}
export const Cart: React.FC<CartProps> = ({ items, onNavigate, onUpdateQuantity, onRemove }) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedPromo === 'SAVE10' ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + tax;
  const isFreeShipping = subtotal > 50;

   const navItems = [
    { id: 'shop', label: 'Shop', href: '/shop' },
    { id: 'categories', label: 'Categories', href: '/categories' },
    { id: 'deals', label: 'Deals', href: '/deals' },
    { id: 'about', label: 'About', href: '/about' },
  ];

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'SAVE10') {
      setAppliedPromo('SAVE10');
    } else {
      alert('Invalid promo code. Try SAVE10');
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCart className="w-10 h-10 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your shopping bag is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <button onClick={() => onNavigate('shop')} className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          <span className="text-orange-500">Shopping</span> Bag
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">{items.length} item{items.length !== 1 ? 's' : ''} ready for checkout</p>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
            <span className="text-orange-500">1 Cart</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-gray-300">2 Checkout</span>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-gray-300">3 Complete</span>
          </div>
        </div>
      </div>

      <div className={`mb-8 p-4 rounded-xl border flex items-center justify-between ${isFreeShipping ? 'bg-orange-50 border-orange-100 text-orange-700' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
        <div className="flex items-center gap-3">
          <Tag className="w-5 h-5" />
          <span className="text-sm font-medium">
            {isFreeShipping ? 'Free shipping on orders over $50' : `Add $${(50 - subtotal).toFixed(2)} more for free shipping`}
          </span>
        </div>
        {isFreeShipping && (
          <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Qualified!
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Item List */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6"
              >
                <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1.5 hover:bg-white rounded-lg transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1.5 hover:bg-white rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-500">${(item.price * item.quantity).toFixed(2)}</div>
                      <div className="text-xs text-gray-400">${item.price.toFixed(2)} each</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl shadow-orange-500/20">
            <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
            <p className="text-white/80 text-sm mb-8">{items.length} items in your bag</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-2">
                <Tag className="w-4 h-4" />
                Promo Code
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 bg-white text-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button 
                  onClick={handleApplyPromo}
                  className="bg-[#0A1128] text-white font-bold px-6 py-3 rounded-xl hover:bg-black transition-colors"
                >
                  Apply
                </button>
              </div>
              {appliedPromo && (
                <div className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Promo code {appliedPromo} applied!
                </div>
              )}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm text-emerald-300">
                  <span>Discount (10%)</span>
                  <span className="font-bold">-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Tax (8%)</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                <span className="text-xl font-bold">Total</span>
                <span className="text-3xl font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-blue-900">Delivery Time</div>
                <div className="text-xs text-blue-700">3-5 business days</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-blue-900">Shipping To</div>
                <div className="text-xs text-blue-700">123 Main Street, NY 10001</div>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-orange-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'shop', label: 'Shop', href: '/shop' },
    { id: 'categories', label: 'Categories', href: '/categories' },
    { id: 'deals', label: 'Deals', href: '/deals' },
    { id: 'about', label: 'About', href: '/about' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between h-[84px]">
          
          <a href="/" className='flex flex-row items-center gap-1 font-semibold text-xl shrink-0'>
            <img src="./assets/logo.png" alt="Logo" className='size-10' />
            <span>PawsStore</span>
          </a>

          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <a 
                key={item.id}
                className={'text-gray-700 hover:text-orange-500'}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className='flex flex-row items-center gap-2 sm:gap-4'>
            <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
              <img src="./assets/lupa.svg" alt="Search" className='size-5' />
            </button>
            
              <button
                onClick={() => onNavigate('cart')}
                className='p-2 hover:bg-gray-100 rounded-full transition-colors relative cursor-pointer'
                >

              <img src="./assets/cart.png" alt="Cart" className='size-5' />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button> 
            <button className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <img 
                    src={"./assets/menu.svg"} 
                    alt="Menu Toggle" 
                    className="size-6" 
                  />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md"
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
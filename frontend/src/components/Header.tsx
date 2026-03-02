import React from 'react';


interface HeaderProps {
  cartCount: number;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({}) => {
  const navItems = [
    { id: 'shop', label: 'Shop' },
    { id: 'categories', label: 'Categories' },
    { id: 'deals', label: 'Deals' },
    { id: 'about', label: 'About' },
  ];

    return(
        <header className="bg-white h-[84px] border-b border-gray-200 sticky top-0 z-50 ">
          <div className="flex flex-row items-center justify-between h-full ml-28 mr-28">
            <a href="" className='flex flex-row items-center gap-1 font-semibold text-xl'>
           <img src="..\src\assets\logo.png" alt="" className='size-10 '/>
           PawsStore
            </a>
            <nav className="hidden lg:flex  gap-8 ">
                <a className="text-gray-700 hover:text-orange-500 transition-colors" href="/shop" data-discover="true">Shop</a>
                <a className="text-gray-700 hover:text-orange-500 transition-colors" href="/categories" data-discover="true">Categories</a>
                <a className="text-gray-700 hover:text-orange-500 transition-colors" href="/deals" data-discover="true">Deals</a>
                <a className="text-gray-700 hover:text-orange-500 transition-colors" href="/about" data-discover="true">About</a>
            </nav>
            <div className='flex flex-row gap-4'>
              <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                <img src="..\src\assets\lupa.png" alt=""  className='size-5'/>
              </button>
              <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                <img src="..\src\assets\cart.png" alt=""  className='size-5'/>
              </button>
            </div>
          </div>
        </header>
    );
};
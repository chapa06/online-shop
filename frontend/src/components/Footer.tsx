import React from 'react';
export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1128] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className='grid grid-cols-1 gap-4'>
                <a href="/" className='flex flex-row items-center gap-1 font-semibold text-xl shrink-0'>
                     <img src="../src/assets/logo.png" alt="Logo" className='size-10' />
                     <span>PawsStore</span>
                </a>
                <p className='text-gray-400 text-sm leading-relaxed text-left'>Your trusted source for premium pet supplies and accessories.</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-gray-300 text-sm text-left">
                    <li><a href="#" className="hover:text-orange-500 transition-colors">Shop All</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition-colors">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition-colors">Best Sellers</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition-colors">Sale Items</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6">Customer Service</h3>
                    <ul className="space-y-4 text-gray-300 text-sm text-left">
                    <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Info</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition-colors">Returns Policy</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                    <p className='text-gray-400 text-sm leading-relaxed text-left mb-6'>Subscribe to get special offers and updates.</p>
                    <div className='flex flex-row gap-2'>
                        <input type="email" placeholder="Your email" className="flex-1 px-3 py-2.5 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-orange-500 text-white"/>
                        <button className="px-3 py-2.5 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors flex items-center justify-center shrink-0">
                        <img src="../src/assets/konvert.png" alt="Send" className="size-4" />
                        </button>
                    </div>
                </div>
                
            </div>
            <div className='pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4'>
                <p className='text-sm text-gray-400'>© 2026 PawsStore. All rights reserved.</p>
                    <div className='flex items-center gap-4'>
                        <a href="" className='text-gray-400 hover:text-orange-500 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook w-5 h-5">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="" className='text-gray-400 hover:text-orange-500 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter w-5 h-5">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a href="" className='text-gray-400 hover:text-orange-500 transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram w-5 h-5">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        </a>
                    </div>
            </div>
        </div>
    </footer>
  );
};

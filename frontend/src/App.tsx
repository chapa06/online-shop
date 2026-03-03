import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(() => {
    const savedCart = localStorage.getItem('paws_cart_count');
    return savedCart ? parseInt(savedCart, 10) : 0;
  });
  const [currentPage, setCurrentPage] = useState('shop');
  useEffect(() => {
    localStorage.setItem('paws_cart_count', count.toString());
  }, [count]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    console.log(`Переходим на: ${page}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      
      <Header 
        cartCount={count} 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      <main className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={viteLogo} className="h-20 w-20 drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={reactLogo} className="h-20 w-20 drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
          </a>
        </div>

        <h1 className="text-5xl font-extrabold mb-8 tracking-tight">
          Vite <span className="text-indigo-500">+</span> React
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-sm w-full">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md active:scale-95 mb-4"
          >
            В корзине: {count} товаров
          </button>
          
          {/* Добавим кнопку сброса, чтобы тестировать было удобнее */}
          <button 
            onClick={() => setCount(0)}
            className="text-xs text-red-400 hover:text-red-600 transition-colors underline"
          >
            Очистить корзину
          </button>
          
          <p className="text-gray-600 text-sm mt-4">
            Данные теперь сохраняются! Попробуй обновить страницу (F5).
          </p>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default App
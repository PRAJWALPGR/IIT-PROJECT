import React, { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';
import { LoginModal } from './components/LoginModal';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { products } from './data';
import { Product, CartItem, User } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const addToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleLogin = (email: string, password: string) => {
    setUser({
      email,
      name: email.split('@')[0],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    });
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar
        cartItemsCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
        user={user}
        onLoginClick={() => setIsLoginOpen(true)}
        onLogoutClick={handleLogout}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fresh from Local Farmers</h2>
              <p className="text-gray-600 mb-6">Support your local community by buying directly from farmers.</p>

              {/* Category Filter */}
              <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                    selectedCategory === null
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-50'
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-green-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        ) : (
          <About />
        )}
      </main>

      <Footer />

      {/* Cart Sidebar */}
      <Cart
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;
import React from 'react';
import { ShoppingCart as CartIcon, Leaf, User, Search } from 'lucide-react';
import { User as UserType } from '../types';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
  user: UserType | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onNavigate: (page: 'home' | 'about') => void;
  currentPage: 'home' | 'about';
}

export function Navbar({ 
  cartItemsCount, 
  onCartClick, 
  user, 
  onLoginClick, 
  onLogoutClick,
  onNavigate,
  currentPage
}: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Leaf className="w-8 h-8 text-green-500" />
            <h1 className="text-2xl font-bold text-gray-900">FreshLocal</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-gray-700 hover:text-green-500 transition-colors ${
                currentPage === 'home' ? 'text-green-500' : ''
              }`}
            >
              Home
            </button>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">Shop</a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors">Farmers</a>
            <button 
              onClick={() => onNavigate('about')}
              className={`text-gray-700 hover:text-green-500 transition-colors ${
                currentPage === 'about' ? 'text-green-500' : ''
              }`}
            >
              About
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={onLogoutClick}
                  className="text-sm text-gray-700 hover:text-green-500 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center gap-2 text-gray-700 hover:text-green-500 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}
            
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <CartIcon className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
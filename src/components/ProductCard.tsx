import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        {product.organic && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
            Organic
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            src={product.farmerImage}
            alt={product.farmer}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-gray-600">{product.farmer}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-600 font-bold">
            ${product.price}/{product.unit}
          </span>
          <span className="text-sm text-gray-500">
            {product.available} available
          </span>
        </div>
        
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-green-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
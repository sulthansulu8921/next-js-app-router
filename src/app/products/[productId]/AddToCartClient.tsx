'use client';

import { useState } from 'react';

export default function AddToCartClient({ product }: any) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existing = cart.find((p: any) => p.id === product.id);

      if (!existing) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
      }

      setAdded(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={handleAddToCart}
        disabled={added}
        className={`${
          added ? 'bg-green-600' : 'bg-blue-600'
        } text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition btn btn-primary`}
      >
        {added ? 'Added to Cart ✓' : 'Add to Cart'}
      </button>

      <button className="bg-gray-100 text-gray-900 border px-5 py-2 rounded-lg hover:bg-gray-200">
        Wishlist
      </button>
    </div>
  );
}

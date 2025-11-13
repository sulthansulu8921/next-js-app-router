'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5 p-4">
        <h1 className="fw-bold mb-3">Your Cart is Empty 🛒</h1>
        <Link href="/products" className="btn btn-primary btn-lg">
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold mb-4">Your Cart 🛍️</h1>

      <div className="list-group mb-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.image}
                alt={item.title}
                onClick={() => setSelectedImage(item.image)}
                className="rounded"
                style={{ width: '70px', height: '70px', objectFit: 'cover', cursor: 'pointer' }}
              />
              <div>
                <h5 className="mb-1">{item.title}</h5>
                <p className="text-muted mb-0">₹{item.price.toFixed(2)}</p>
              </div>
            </div>

            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center border-top pt-4">
        <h4 className="fw-semibold">
          Total: <span className="text-primary">₹{total.toFixed(2)}</span>
        </h4>

        <div className="d-flex gap-3 mt-3 mt-sm-0">
          <button className="btn btn-outline-secondary" onClick={clearCart}>
            Clear Cart
          </button>

          <button className="btn btn-success">
            Checkout
          </button>
        </div>
      </div>

      {/* Modal Image Preview */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
          style={{ zIndex: 9999, cursor: 'pointer' }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="rounded shadow-lg"
            style={{ maxWidth: '90%', maxHeight: '80%' }}
            alt="Product Preview"
          />
        </div>
      )}
    </div>
  );
}

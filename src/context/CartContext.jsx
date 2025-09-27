// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // items: { id, name, price, image, quantity, stock }

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: Math.min(i.quantity + qty, i.stock ?? 9999) } : i);
      }
      return [...prev, { ...product, quantity: Math.min(qty, product.stock ?? 9999) }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const subtotal = cart.reduce((s, i) => s + i.quantity * i.price, 0);

  const value = { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

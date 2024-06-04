import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = () => {
    setCartItemsCount(prevCount => prevCount + 1);
  };

  const removeFromCart = () => {
    setCartItemsCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <CartContext.Provider value={{ cartItemsCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
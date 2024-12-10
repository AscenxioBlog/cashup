import React, { createContext, useState } from 'react';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
// Create a context
export const AppContext = createContext();

function MyContext({ children }) {
  const [api, contextHolder] = notification.useNotification();

  


  const [cartItems, setCartItems] = useState([]);
  const [viewcart, setViewcart] = useState('none');

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If product already exists in cart, increase its quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If product is new, add it to the cart with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Increment quantity of an item
  const incrementItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity of an item
  const decrementItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setViewcart((prev) => (prev === 'none' ? 'block' : 'none'));
  };

  // Context value to be provided
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
    viewcart,
    toggleCart,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export default MyContext;

import React, { useState } from "react";
import { CartContext } from "./CartContext";

const Provider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    // Add item to cart
    setCart([...cart]);
    console.log(cart);
    
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Provider;

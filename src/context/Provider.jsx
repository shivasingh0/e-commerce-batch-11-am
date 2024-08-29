import React, { useState } from "react";
import { CartContext } from "./CartContext";

const Provider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    console.log(JSON.stringify(data));
    
    // Add item to cart
    setCart((previousData)=>[...previousData, data]);
    // console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart))
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Provider;

import React, { useContext } from "react";
import CartTable from "../components/CartTable";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  // const {cart} = useContext(CartContext)

  const data = localStorage.getItem("cart")
  // console.log(data);
  
  const parseData = JSON.parse(data)
  console.log(parseData);
  
  
  return (
    <>
      <CartTable cart={parseData} />
    </>
  );
};

export default Cart;

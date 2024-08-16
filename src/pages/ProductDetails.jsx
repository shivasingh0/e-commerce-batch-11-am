import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  console.log(location);
  
  const productData = location.state;
  console.log(location.state);
  

  return (
    <div className="p-10">
      <h1>Products details</h1>

      <div className="flex justify-between">
        <div className="W-[300px] border h-[300px] bg-white shadow-md rounded-lg">
          <img
            className="w-[200px]"
            src={productData.image}
            alt="img"
          />
        </div>
        <div>
          <h1>{productData.title}</h1>
          <p>Price: ${productData.price}</p>
          <p>Rating : {productData.rating.rate}</p>
          <p>Description : {productData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

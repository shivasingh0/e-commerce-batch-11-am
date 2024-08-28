import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  const [productTitle, setProductTitle] = useState("");
  const [productRating, setProductRating] = useState("");
  const navigate = useNavigate();

  const {addToCart} = useContext(CartContext)

  // products Api fetch
  const apiData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductsData(data);
      setFilteredProducts(data); // Initialize filteredProducts with all data
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleProduct = (id) => {
    const selectedProduct = productsData.find((item) => id === item.id);
    navigate(`/products/${id}`, { state: selectedProduct });
  };

  // Filter data
  const filterData = () => {
    const filtered = productsData.filter((item) => {
      return (
        (productPrice ? item.price <= productPrice : true) &&
        (productTitle ? item.title.toLowerCase().includes(productTitle.toLowerCase()) : true) &&
        (productRating ? item.rating.rate <= productRating : true)
      );
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <div className="bg-gray-300 py-5 text-center">
        <h1 className="text-2xl font-bold text-gray-600">Products</h1>
        <p className="text-gray-800 text-lg font-bold">Filter products</p>
        <div className="flex justify-around items-center mt-4">
          <input
            type="text"
            className="px-2 rounded-lg text-lg py-2"
            placeholder="title"
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <input
            type="number"
            onChange={(e) => setProductPrice(e.target.value)}
            className="px-2 rounded-lg text-lg py-2"
            placeholder="Enter max Price"
          />
          <select
            onChange={(e) => setProductRating(e.target.value)}
            className="px-2 rounded-lg text-lg py-2"
          >
            <option value="">-Select Rating-</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            onClick={filterData}
            className="bg-blue-950 py-2 px-4 text-white font-bold rounded-xl hover:bg-blue-900 hover:scale-105 transition-all"
          >
            Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center p-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div
              key={index}
              className="border-2 flex flex-col items-center justify-center p-5"
            >
              <img src={item.image} className="h-[200px] w-[200px]" alt="" />
              <h1 className="font-bold line-clamp-1 text-center">
                {item.title}
              </h1>
              <div className="flex gap-[150px] pt-5">
                <p className="text-gray-700 font-semibold">
                  Rating: {item.rating.rate}
                </p>
                <p className="text-gray-700 font-semibold">
                  Total Rating: {item.rating.count}
                </p>
              </div>
              <div className="flex gap-[120px] pt-2">
                <button
                  onClick={() => handleProduct(item.id)}
                  className="border-2 py-2 px-4 font-semibold rounded-xl bg-slate-200"
                >
                  View Details
                </button>
                <button onClick={()=>addToCart(item)} className="bg-blue-950 py-2 px-4 text-white font-bold rounded-xl hover:bg-blue-900 hover:scale-105 transition-all">
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600">No products found</p>
        )}
      </div>
    </>
  );
};

export default Products;

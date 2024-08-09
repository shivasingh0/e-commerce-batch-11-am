import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  const [productTitle, setProductTitle] = useState("");
  const [productRating, setProductRating] = useState("");
  const location = useLocation();

  useEffect(() => {
    setProductsData(location.state);
  }, []);
  // console.log(productsData);

  const filterData = () => {
    productsData.filter((item) => {
      // console.log(item);
      if (
        item?.price < productPrice ||
        item?.title == productTitle ||
        item?.rating?.rate <= productRating
      ) {
        console.log(item);
      }
    });
  };

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
            name=""
            onChange={(e) => setProductRating(e.target.value)}
            className="px-2 rounded-lg text-lg py-2"
            id=""
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
            Fliter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center p-10">
        {productsData?.map((item, index) => (
          <div
            key={index}
            className="border-2 flex flex-col items-center justify-center p-5"
          >
            <img src={item?.image} className="h-[200px] w-[200px]" alt="" />
            <h1 className="font-bold line-clamp-1 text-center">
              {item?.title}
            </h1>
            <div className="flex gap-[150px] pt-5">
              <p className="text-gray-700 font-semibold">
                Rating: {item?.rating?.rate}
              </p>
              <p className="text-gray-700 font-semibold">
                Total Rating: {item?.rating?.count}
              </p>
            </div>
            <div className="flex gap-[120px] pt-2">
              <div className="border-2 py-2 px-4 font-semibold rounded-xl bg-slate-200">
                Price: {item?.price}
              </div>
              <button className="bg-blue-950 py-2 px-4 text-white font-bold rounded-xl hover:bg-blue-900 hover:scale-105 transition-all">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

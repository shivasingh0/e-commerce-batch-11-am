import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleProducts = () => {
    navigate("/products", { state: data });
  };

  // fatch product api
  const fatchApi = async () => {
    const apiData = await axios.get("https://fakestoreapi.com/products");
    const res = await apiData.data;
    setData(res);
  };

  useEffect(() => {
    fatchApi();
  }, []);

  return (
    <>
      <div className="flex gap-5 px-10 my-10">
        <div className="grid grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="p-5 w-[100%] shadow-2xl border ">
              <img
                className="w-[200px] h-80 ms-7"
                src={item.image}
                alt="watch"
              />
              <h1 className="font-bold line-clamp-1 text-xl">{item.title}</h1>
              <p className="line-clamp-3">{item.description}</p>
              <div className="flex justify-between mt-10">
                <button className="bg-blue-950 text-white hover:scale-105 transition-all rounded-lg px-5 py-2">
                  Buy now
                </button>
                <button className="border-blue-950 border-2 hover:scale-105 transition-all rounded-lg px-5 py-2 font-bold">
                  {item.price}₹
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button
          onClick={handleProducts}
          className="bg-blue-950 hover:bg-blue-900 hover:scale-105 transition-all text-white py-2 px-4 rounded-xl"
        >
          View More Products
        </button>
      </div>
    </>
  );
};

export default Card;

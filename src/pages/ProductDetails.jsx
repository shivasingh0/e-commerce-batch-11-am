import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [stateData, setStateData] = useState([]);

  const location = useLocation();
  //   console.log(location.pathname);

  const splitter = location.pathname.split("/");
  const id = splitter.reverse()[0];
  console.log(id);

  useEffect(() => {
    setStateData(location.state);
  }, [stateData]);

  return (
    <div className="p-10">
      <h1>Products details</h1>
      {stateData?.map(
        (item, index) =>
          item.id === id && (
            <div key={index} className="flex justify-between">
              <div className="W-[300px] border h-[300px] bg-white shadow-md rounded-lg">
                <img className="w-[200px]" src={item.image} alt="img" />
              </div>
              <div>
                <h1>{item.title}</h1>
                <p>Price: $100</p>
                <p>Rating</p>
                <p>description</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductDetails;

import React from "react";
import Carousoul from "../components/Carousoul";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  

  return (
    <>
      <div className="w-[100vw] h-[60vh] overflow-hidden">
      <Carousoul />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center">Products</h1>
       
          <Card/>
      </div>
    </>
  );
};

export default Home;

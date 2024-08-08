import React from "react";
import Carousoul from "../components/Carousoul";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <div className="w-[100vw] h-[60vh] overflow-hidden">
      <Carousoul />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center">Products</h1>
        <div className="flex gap-5 px-10 my-10">
          <Card/>
        </div>
      </div>
    </>
  );
};

export default Home;

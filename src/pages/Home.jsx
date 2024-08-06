import React from "react";
import Carousoul from "../components/Carousoul";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Carousoul />
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

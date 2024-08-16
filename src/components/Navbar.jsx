import React from "react";
import { IoSearchCircle } from "react-icons/io5";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="p-5 flex justify-between">
        <div className="flex">
          <input
            type="text"
            placeholder="Search Product"
            className="border-2 w-[350px] ps-2 text-lg rounded-md"
          />
          <IoSearchCircle className="text-5xl cursor-pointer hover:scale-105 transition-all" />
        </div>
        <div className="flex gap-3">
          <FaInstagramSquare className="text-4xl" />
          <FaFacebookSquare className="text-4xl" />
          <FaTwitterSquare className="text-4xl" />
        </div>
      </div>
      <hr />
      <div className="bg-slate-900 text-white font-bold flex justify-around h-16 items-center">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl">E-Commerce</h1>
          </Link>
        </div>
        <ul className="flex gap-10">
          <li className=" cursor-pointer hover:scale-105 transition-all hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" cursor-pointer hover:scale-105 transition-all hover:underline">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className=" cursor-pointer hover:scale-105 transition-all hover:underline">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className=" cursor-pointer hover:scale-105 transition-all hover:underline">
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
        <div className="flex gap-10">
          <Link to={"/login"}>
            <button
              className="bg-blue-500 hover:bg-blue-700 transition-all text-white font-bold py-
        2 px-4 rounded"
            >
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button
              className="border-blue-500 border-2 transition-all hover:bg-blue-700 text-white font-bold py-
        2 px-4 rounded"
            >
              Signup
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

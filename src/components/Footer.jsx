import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 text-white pt-20">
        <div className="flex justify-evenly items-center">
        <div>
          <h1 className="text-xl font-bold">E-Commerce</h1>
          <p>Making the world a better place through constructing elegant hierarchies.</p>
        </div>
        <div>
          <ul>
            <li className="underline font-bold">Solutions</li>
            <li className="text-gray-300 cursor-pointer">Marketing</li>
            <li className="text-gray-300 cursor-pointer">Analytics</li>
            <li className="text-gray-300 cursor-pointer">Commerce</li>
            <li className="text-gray-300 cursor-pointer">Insights</li>
          </ul>
        </div>
        <div>
        <ul>
            <li className="underline font-bold">Solutions</li>
            <li className="text-gray-300 cursor-pointer">Marketing</li>
            <li className="text-gray-300 cursor-pointer">Analytics</li>
            <li className="text-gray-300 cursor-pointer">Commerce</li>
            <li className="text-gray-300 cursor-pointer">Insights</li>
          </ul>
        </div>
        <div>
        <ul>
            <li className="underline font-bold">Solutions</li>
            <li className="text-gray-300 cursor-pointer">Marketing</li>
            <li className="text-gray-300 cursor-pointer">Analytics</li>
            <li className="text-gray-300 cursor-pointer">Commerce</li>
            <li className="text-gray-300 cursor-pointer">Insights</li>
          </ul>
        </div>
        </div>
        <hr className="mt-10 mx-10"  />
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-500">© 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

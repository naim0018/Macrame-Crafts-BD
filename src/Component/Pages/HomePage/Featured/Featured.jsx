import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-center font-normal text-5xl mt-10">Featured</h1>
      <p className="w-1/2 text-sm text-center text-gray-400 mx-auto mt-2 mb-10">
        {" "}
        Explore our featured collection on our homemade macrame crafts, where
        each knot tells a unique story of creativity and warmth. Bring the
        artistry of macrame into your home, one crafted masterpiece at a time.
      </p>
      <div className="grid grid-cols-5  mx-auto gap-4 drop-shadow-lg">
    
        <div className="relative w-full h-full col-span-2 border overflow-hidden">
        <div className="group hover:scale-105 transition-all relative">
          <img
            className="w-full "
            src="https://i.ibb.co/nkqJ1qZ/1-Layer.png"
            alt=""
          />
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center -bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <Link to='cardDetails/1'>
            <button className="px-5 py-3 z-10 rounded-lg border bg-white text-lg font-medium">
              Details
            </button>
            </Link>
          </div>
        </div>
        </div>


        <div className="flex flex-col gap-4 h-full ">
          <div className="relative w-full h-full  border overflow-hidden">
        <div className="group hover:scale-105 transition-all relative">
          <img
            className="w-full "
            src="https://i.ibb.co/KVN7mKt/product3.jpg"
            alt=""
          />
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center -bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <button className="px-5 py-3 z-10 rounded-lg border bg-white text-lg font-medium">
              Details
            </button>
          </div>
        </div>
        </div>
          <div className="relative w-full h-full  border overflow-hidden">
        <div className="group hover:scale-105 transition-all relative">
          <img
            className="w-full "
            src="https://i.ibb.co/cXH8QTr/product1.jpg"
            alt=""
          />
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center -bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <button className="px-5 py-3 z-10 rounded-lg border bg-white text-lg font-medium">
              Details
            </button>
          </div>
        </div>
        </div>
        </div>
        <div className="relative w-full h-full col-span-2 border overflow-hidden">
        <div className="group hover:scale-105 transition-all relative">
          <img
            className="w-full "
            src="https://i.ibb.co/qRTZ1Fz/1-layer-4.png"
            alt=""
          />
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center -bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <button className="px-5 py-3 z-10 rounded-lg border bg-white text-lg font-medium">
              Details
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const {
    id,
    title,
    image,
    height,
    width,
    description,
    price,
    discountPrice,
    meterial,
  } = data;

  return (
    <div className="border border-black rounded-lg">
      {/* <div className="w-full  border outline outline-1 border-b-4 border-r-4 border-transparent hover:border-b-4 hover:border-r-4 hover:border-b-black hover:border-r-black rounded-lg overflow-hidden"
      > */}
      <div className="w-full border-b-4 border-r-4 border-transparent group hover:border-b-4 hover:border-r-4 hover:border-b-black hover:border-r-black rounded-lg overflow-hidden transition-all  ease-in-out"
      >
        {/* image  */}
        <div className="grid relative">
          <img
            className="place-self-center  bg-transparent mt-4 group-hover:scale-110 transition-all ease-in-out"
            src={image}
            alt=""
          />
        </div>
        {/* title  */}
        <div className="p-5 flex flex-col border">
          <h2 className="my-5 text-lg font-medium">{title}</h2>
          <div className="flex-grow ">
          <p className="my-5 text-sm text-gray-400">{description}</p>
          </div>
          <hr className="border border-black" />
        </div>
        {/* Price  */}
        <div className="p-5 flex items-center justify-center gap-5">
            <div className=" flex items-center justify-center gap-2">
          <del className="text-sm">${price}</del>
            <p className="text-lg font-medium">${discountPrice}</p>
            </div>
          <div className="">
            <Link to={`/cardDetails/${id}`}>
            <button className="btn">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

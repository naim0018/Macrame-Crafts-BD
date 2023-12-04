import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const [discount, setDiscount] = useState(false);
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

  // if (discountPrice){
  //   setDiscount(true)
  // } 

  return (
    <div className="border border-black rounded-lg">
      {/* <div className="w-full  border outline outline-1 border-b-4 border-r-4 border-transparent hover:border-b-4 hover:border-r-4 hover:border-b-black hover:border-r-black rounded-lg overflow-hidden"
      > */}
      <div className="w-full border-b-4 border-r-4 border-transparent group hover:border-b-4 hover:border-r-4 hover:border-b-black hover:border-r-black rounded-lg overflow-hidden transition-all  ease-in-out flex flex-col h-full">
        {/* image  */}
        <div className="grid relative">
          <img
            className="place-self-center  bg-transparent mt-4 group-hover:scale-110 transition-all ease-in-out"
            src={image}
            alt=""
          />
        </div>
        {/* title  */}
        <div className="p-5 flex-grow ">
          <h2 className="my-5 text-lg font-medium">{title}</h2>

          <p className="my-5 text-sm text-gray-400">{description}</p>
        </div>
        <div className="px-5">
          <hr className="border border-black" />
        </div>
        {/* Price  */}
        <div className="p-5 flex items-center justify-center gap-5">

          {
            discountPrice ?
          <div className=" flex items-center justify-center gap-2">
            <del className="text-sm">${price}</del>
            <p className="text-lg font-medium">${discountPrice}</p>
          </div>
          :
          <p className="text-sm">${price}</p>

          }
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

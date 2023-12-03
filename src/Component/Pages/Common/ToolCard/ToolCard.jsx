import React from "react";

const ToolCard = ({ tool }) => {
  const { img, title , number, description  } = tool;
  return (
    <div className=" grid grid-cols-3 shadow-md p-8 gap-5">
      <div className=" ">
        <img className="w-full" src={img} alt=""/>
      </div>
      
      <div className=" col-span-2 space-y-5 flex flex-col py-20 px-10">
        <h2 className="text-4xl font-extralight">{title}</h2>
        <p className="flex-grow flex items-center text-lg text-gray-500">{description}</p>
        <button className="btn btn-info w-fit">Buy Now</button>
      </div>
    </div>
  );
};

export default ToolCard;

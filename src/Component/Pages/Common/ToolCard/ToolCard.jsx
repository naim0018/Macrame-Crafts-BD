import React from "react";

const ToolCard = ({ tutorial }) => {
  const { img, title , number, description,  } = tutorial;
  console.log(img);
  return (
    <div className="border grid grid-cols-3  p-8 gap-5">
      <div className=" border">
        <img className="w-full" src={img} alt="" />
      </div>
      
      <div className="border col-span-2 space-y-5">
        <h2 className="text-2xl font-medium ">{title}</h2>
        <p>{description}</p>
        <button className="btn btn-info">Buy Now</button>
      </div>
    </div>
  );
};

export default ToolCard;

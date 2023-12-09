import { Description } from "@mui/icons-material";
import React from "react";

const TutorialsCard = ({ data }) => {
  const { id, img, title,paragraph } = data;
  console.log(data)
  return (
    <div className=" grid grid-cols-3 shadow-md p-8 gap-5">
      <div className=" ">
        <img className="w-full" src={img} alt="" />
      </div>

      <div className=" col-span-2 space-y-5 flex flex-col py-20 px-10">
        <h2 className="text-4xl font-extralight">{title}</h2>
        <p className="flex-grow flex items-center text-lg text-gray-500">
          {paragraph}
        </p>
        <button className="btn w-fit hover:text-white bg-yellow-400 hover:bg-emerald-400 border-none">
          Read More
        </button>
      </div>
    </div>
  );
};

export default TutorialsCard;

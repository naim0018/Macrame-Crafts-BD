import React from "react";

const TutorialCards = ({ tutorial }) => {
  const { img, title , number, description,  } = tutorial;
  console.log(img);
  return (
    <div className="border flex  p-8 ">
      
        <img className="w-4/12 " src={img} alt="" />
      
      <div className="">
        <p>{title}</p>

      </div>
    </div>
  );
};

export default TutorialCards;

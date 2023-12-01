import React from 'react';

const TutorialCards = ({tutorial}) => {
    const {img,title}=tutorial;
    console.log(img);
    return (
        <div>
           <p><img src={img} alt="" /></p> 
          <p>{title}</p>
        </div>
    );
};

export default TutorialCards;
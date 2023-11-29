import React from 'react';
import { useState } from 'react';

const Cards = ({data}) => {
    
    const {id, name, image, height, width, description, price , discountPrice, meterial} = data;

    
    return (
        <div>
            <div className="w-80 border border-black">
                {/* image  */}
                <div className="grid relative ">
                <img className='place-self-center border drop-shadow-lg bg-transparent' src={image} alt="" />
                </div>
                {/* title  */}
                <div className="p-5">
                    <h2 className='my-5 text-lg font-medium'>{name}</h2>
                    <p className='my-5 text-sm text-gray-400'>{description}</p>
                    <hr className='border border-black'/>
                </div>
                {/* Price  */}
                <div className="p-5">
                    <p className='text-lg font-medium'>${price}</p>

                </div>

            </div>
        </div>
    );
};

export default Cards;
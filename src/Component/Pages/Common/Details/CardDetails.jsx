import React from 'react';
import useData from '../../../../hooks/useData';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const product = useData();
    const { id } = useParams();
    // console.log(product)
    const productId = product?.find(item => item.id == id)
    const { title, image, height, width, description, price, discountPrice, material } = productId || {}
    return (
        <div className=''>
            {productId &&
                <div className='min-h-screen grid grid-cols-2 my-10 justify-center'>
                    <div className="grid">
                        <img className='w-4/5 place-self-center' src={image} alt={title} title={title} />
                    </div>
                    <div className="my-20 space-y-5  sticky top-10 h-fit">
                        <h2 className='text-4xl font-medium'>{title}</h2>
                        <p className='w-2/3 text-lg font-normal text-gray-500'>{description}</p>
                        <p><span className='text-lg font-semibold'>Height : </span> <span className='text-xl font-normal text-gray-500'> {height} </span> <span className="h-20 border-l-[1px] border-black mx-5"></span> <span className='text-lg font-semibold'> Width : </span> <span className='text-xl font-normal text-gray-500'>{width}</span></p>
                        <p><span className='text-lg font-semibold'>Material </span>: <span className='text-lg font-normal text-gray-500'>{material}</span></p>
                        <button className='btn btn-neutral btn-lg btn-wide'>Price : {price}</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default CardDetails;
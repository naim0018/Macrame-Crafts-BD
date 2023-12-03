import React from 'react';
import useData from '../../../../hooks/useData';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const product = useData();
    const {id} = useParams();
    // console.log(product)
    const productId = product?.find(item => item.id == id)
    const {title,image,height,width,description,price,discountPrice,material} = productId || {}
    return (
        <>
        {productId &&
        <div className='grid border my-10 justify-center min-h-screen'>
            <img className='w-full' src={image} alt="" />
           <h2 className='text-lg font-medium'>{title}</h2> 
           <p>Details : Height : {height} Width : {width}</p>
           <p>Material : {material}</p>
           <p>{description}</p>
            <p>Price : {price}</p>
        </div>
        }
        </>
    );
};

export default CardDetails;
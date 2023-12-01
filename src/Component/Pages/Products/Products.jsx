import React from 'react';
import useData from '../../../hooks/useData';
import Cards from '../Common/Cards/Cards';

const Products = () => {
    const products = useData();
    console.log(products)
    return (
        <div className='min-h-screen'>
            <h1 className='text-5xl font-light text-center my-10'>Our Products</h1>
            <div className="w-5/6 mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center my-10">
                {
                    products.map(data => <Cards key ={data.id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default Products;
import React from 'react';
import useData from '../../../../hooks/useData';


const HotDeals = () => {
    const data=useData();
    console.log(data)
    return (
        <div className='container mx-auto'>
            <div className="text-center w-1/2 mx-auto">
                <h1 className='font-normal text-5xl mt-10'>Hot Deals</h1>
                <p className='text-sm text-center text-gray-400 mx-auto mt-2 mb-10'>"Explore fantastic discounts on featured items in the Hot Deals—grab your favorite products at amazing prices today!"</p>
            </div>

            {/* Cards */}
            <div className="">


            </div>
        </div>
    );
};

export default HotDeals;
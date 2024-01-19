import React from 'react';
import useData from '../../../hooks/useData';
import Cards from '../../../Component/Pages/Common/Cards/Cards';

const AllProduct = () => {
    const {data} = useData()
    
    return (
        <div className="">
        <div className='container mx-auto md:px-10  grid 2xl:grid-cols-3 xl:grid-cols-2  gap-5'>
            {
                data?.map(data=><Cards key={data._id} data={data} admin={true}/>)
            }
        </div>
        </div>
    );
};

export default AllProduct;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const useData = () => {
    const [products,setProducts]=useState();
    useEffect(()=>{
        fetch('Product.json') 
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return products;
};

export default useData;
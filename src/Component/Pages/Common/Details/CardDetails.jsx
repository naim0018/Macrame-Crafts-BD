import React from 'react';
import useData from '../../../../hooks/useData';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const product = useData();
    const id = useParams();
    const productId = product.find(item => item.id === parseInt(id))

    console.log(productId , id)
    return (
        <div>
            details
        </div>
    );
};

export default CardDetails;
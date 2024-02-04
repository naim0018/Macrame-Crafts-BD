import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from 'react-query';

const usePendingOrderData = () => {

    const axiosSecure = useAxiosSecure();
    const pendingOrder = useQuery({
        queryKey:['pendingOrder'],
        queryFn:async ()=>{
            const {data} = await axiosSecure.get("/pendingOrder")
            return data
        }
    })


  return pendingOrder;
}

export default usePendingOrderData
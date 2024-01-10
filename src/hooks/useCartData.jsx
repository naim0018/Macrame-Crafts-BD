import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQueries, useQuery } from 'react-query'

const useCartData = () => {
  const {data:carts, refetch} = useQuery({
  queryKey:['carts'],
  queryFn: async()=>{
    try {
      const {data} = await axios.get('http://localhost:400/carts')
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
 }) 

        return [carts , refetch]   
      }
      export default useCartData
      

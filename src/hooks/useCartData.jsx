import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQueries } from 'react-query'

const useCartData = () => {
    const [carts,setCarts] = useState()
    useEffect(()=> {
        const fetchData = async () =>{
          try {
            const {data} =await axios.get('https://macrame-crafts-server.vercel.app/carts')
         
            setCarts(data)
          } catch (error) {
                console.log(error.message)
          }
        }
        fetchData();
        },[])  
        return carts   
      }
      export default useCartData
      
      // const {} = useQueries({
      //     queryKey:['carts'],
      //     queryFn:()=>{
      //         axios.get('https://macrame-crafts-server.vercel.app/carts')
      //         .then()
      //     }
      // })
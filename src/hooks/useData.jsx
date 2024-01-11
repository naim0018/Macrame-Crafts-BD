import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";


const useData = () => {
  const result = useQuery({
    queryKey:["products"],
    queryFn:async()=>{
      const {data} = await axios.get("https://macrame-crafts-server.vercel.app/products")
      return data;
    }
  })


  return result;
};

export default useData;
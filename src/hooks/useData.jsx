import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// 
const useData = (sortOrder,category) => {
  const result = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`https://macrame-crafts-server.vercel.app/products?sort=${sortOrder}&category=${category}`)
      console.log(data, sortOrder);
      return data;
    }
  })


  return result;
};

export default useData;
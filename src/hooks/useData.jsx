import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

// https://macrame-crafts-server.vercel.app/products
const useData = (sortOrder) => {
  const result = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:400/products?sort=${sortOrder}`)
      console.log(data, sortOrder);
      return data;
    }
  })


  return result;
};

export default useData;
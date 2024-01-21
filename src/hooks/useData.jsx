import axios from "axios";
import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";
// 
const useData = (sortOrder,category) => {
  const axiosPublic = useAxiosPublic()
  const result = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/products`,{params: {sort:sortOrder,category:category}})
      return data;
    }
  })
  return result;
};

export default useData;
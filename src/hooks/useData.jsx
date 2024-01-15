import axios from "axios";
import { useQuery } from "react-query";
// 
const useData = (sortOrder,category) => {
  const result = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`https://macrame-crafts-server.vercel.app/products`,{params: {sort:sortOrder,category:category}})
      return data;
    }
  })
  return result;
};

export default useData;
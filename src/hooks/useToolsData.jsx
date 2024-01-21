
import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";
const useToolsData = () => {
  const axiosPublic= useAxiosPublic()
    const tools = useQuery({
      queryKey:["tools"],
      queryFn:async()=>{
          const {data} = await axiosPublic.get("/tools")
          return data
      }
    })

    return tools;
};

export default useToolsData;


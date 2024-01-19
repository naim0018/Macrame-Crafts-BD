
import axios from "axios";
import  { useState, useEffect } from "react";
import { useQuery } from "react-query";
const useToolsData = () => {
    const tools = useQuery({
      queryKey:["tools"],
      queryFn:async()=>{
          const {data} = await axios.get("https://macrame-crafts-server.vercel.app/tools")
          return data
      }
    })

    return tools;
};

export default useToolsData;


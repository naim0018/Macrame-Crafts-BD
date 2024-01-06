
import axios from "axios";
import  { useState, useEffect } from "react";
const useToolsData = () => {
    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data} = await axios.get('https://macrame-crafts-server.vercel.app/tools');
          setTools(data)
          setLoading(false)
        } catch (error) {
          console.error("Error fetching tools data:", error);
        }
      };
  
      fetchData(); // Call the async function
    }, []);
    return {tools,loading};
};

export default useToolsData;

import  { useState, useEffect } from "react";
const useToolsData = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
      fetch("Tools.json") 
        .then((res) => res.json())
        .then((data) => {
          setTools(data);
          console.log(data); 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    return tools;
};

export default useToolsData;
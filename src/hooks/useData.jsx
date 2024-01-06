import axios from "axios";
import { useEffect, useState } from "react";


const useData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const {data} = await axios.get("https://macrame-crafts-server.vercel.app/products");
        // const data = await response.json();
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return {products,loading};
};

export default useData;

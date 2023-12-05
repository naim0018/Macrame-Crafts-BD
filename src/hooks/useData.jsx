import { useEffect, useState } from "react";


const useData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../Product.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return products;
};

export default useData;

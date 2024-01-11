import { useEffect, useState } from "react";
import useData from "../../../hooks/useData";
import Cards from "../Common/Cards/Cards";
import { Helmet } from "react-helmet-async";
import Loading from "../Loading/Loading";
import Loadingui from "../Loading/Loadingui/Loadingui";
import { Dropdown } from "primereact/dropdown";


const Products = () => {
  const [products, setProducts] = useState()
  const [category, setCategory] = useState()
  const { data, isLoading, isFetching } = useData()
  useEffect(() => {
    if (data) {
      setProducts(data);
    }

    if (category !== "") {
      console.log(category);
      const categoryData = data?.filter(item => item.category == category)
      setProducts(categoryData)
    }

  }, [data, category]);

  console.log(products?.length);
  console.log(category);


  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Macrame Crafts BD | Our Product</title>
      </Helmet>
      <h1 className="text-5xl font-light text-center my-10">Our Products</h1>


      <select className="select select-bordered w-full max-w-xs" value={category} onChange={e => setCategory(e.target.value)}>
        <option value="" >Select Category</option>
        <option value="1 layer">1 layer</option>
        <option value="2 layer">2 layer</option>
        <option value="3 layer">3 layer</option>
        <option value="Wall hanging">Wall Hanging</option>
      </select>
      {
        isLoading ? <Loadingui /> :

          <div className="w-5/6 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 justify-items-center my-10 ">
            {
              products?.map((data) => (
                <Cards key={data._id} data={data} />
              ))
            }
          </div>
      }
    </div>
  );
};

export default Products;

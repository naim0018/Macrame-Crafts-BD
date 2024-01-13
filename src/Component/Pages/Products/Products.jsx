import { useEffect, useState } from "react";
import useData from "../../../hooks/useData";
import Cards from "../Common/Cards/Cards";
import { Helmet } from "react-helmet-async";
import Loading from "../Loading/Loading";
import Loadingui from "../Loading/Loadingui/Loadingui";
import { Dropdown } from "primereact/dropdown";


const Products = () => {
  // const [products, setProducts] = useState()
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedData, setSortedData] = useState([]);
  const [category, setCategory] = useState("")
  const { data, refetch, isLoading, isFetching } = useData(sortOrder,category)
  useEffect(() => {
    refetch();
  }, [sortOrder,category])
  console.log(sortOrder);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Macrame Crafts BD | Our Product</title>
      </Helmet>
      <h1 className="text-5xl font-light text-center my-10">Our Products</h1>

      <select className="select select-bordered w-full max-w-xs" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>

        <option value="asc">Price Low to High</option>
        <option value="dsc">Price High to Low</option>
      </select>

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
              data?.map((data) => (
                <Cards key={data._id} data={data} />
              ))
            }
          </div>
      }
    </div>
  );
};

export default Products;

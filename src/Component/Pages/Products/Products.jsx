import useData from "../../../hooks/useData";
import Cards from "../Common/Cards/Cards";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const products = useData();



  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Macrame Crafts BD | Our Product</title>
      </Helmet>
      <h1 className="text-5xl font-light text-center my-10">Our Products</h1>
      <div className="w-5/6 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 justify-items-center my-10 ">
        {products.map((data) => (
          <Cards key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;

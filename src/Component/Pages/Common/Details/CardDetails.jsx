import { useState } from "react";
import useData from "../../../../hooks/useData";
import { useParams } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import swal from "sweetalert";
import axios from "axios";
import useCartData from "../../../../hooks/useCartData";
import Loadingui from "../../Loading/Loadingui/Loadingui";
// import swal from "sweetalert";

const CardDetails = () => {
  const [amount, setAmount] = useState(1);
  const { data, isLoading, refetch, isFetching } = useData();
  const { id } = useParams();
  const productId = data?.find((item) => item._id == id);
  const {
    title,
    image,
    height,
    width,
    description,
    price,
    discountPrice,
    material,
  } = productId || {};

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount((count) => count - 1);
    }
  };
  const handleIncrement = () => {
    setAmount((count) => count + 1);
  };
  if (amount > 0) {
    var totalPrice = amount * (discountPrice || price);
  }


  const cartItem = {
    title, image, height, width, description, price, discountPrice, amount, totalPrice
  }

  

  const handelAddToCart = async () => {

    await axios.post('https://macrame-crafts-server.vercel.app/carts', cartItem)
      .then(res => {
        if (res.status === 200) {
          refetch();
        }
      })



  };

  return (
    <div className="min-h-screen">
      {
        isLoading && <Loadingui />
      }
      {productId && (
        <div className="min-h-screen grid  p-8 md:p-- md:grid-cols-2 justify-center  ">
          <div className="grid">
            <Zoom>
              <img
                className="w-4/5 place-self-center  rounded-lg"
                src={image}
                alt={title}
                title={title}
              />
            </Zoom>
          </div>
          <div className="my-20  sticky top-24 h-fit">
            <div className="space-y-5">
              <h2 className="text-4xl font-medium">{title}</h2>
              <p className="w-2/3 text-lg font-normal text-gray-500">
                {description}
              </p>

              <p>
                <span className="text-lg font-semibold">Height : </span>
                <span className="text-xl font-normal text-gray-500">

                  {height}
                </span>
                <span className="h-20 border-l-[1px] border-black mx-5"></span>
                <span className="text-lg font-semibold"> Width : </span>
                <span className="text-xl font-normal text-gray-500">
                  {width}
                </span>
              </p>
              <p>
                <span className="text-lg font-semibold">Material </span>
                <span className="text-lg font-normal text-gray-500 ">
                  {material}
                </span>
              </p>
            </div>

            <div className="mt-14">
              {discountPrice ? (
                <div className="">
                  <div className="flex gap-4 items-center w-fit">
                    <p className="text-4xl font-medium flex items-center text-emerald-400">
                      <TbCurrencyTaka />
                      {discountPrice}
                    </p>
                    <del className=" text-red-400">৳{price}</del>
                  </div>
                </div>
              ) : (
                <p className="text-4xl font-medium flex items-center text-emerald-400">
                  <TbCurrencyTaka />
                  {price}
                </p>
              )}
              <div className="flex items-center gap-4 mt-8">
                <div className="">
                  <div className="border border-black w-fit  flex items-center gap-4">
                    <button
                      onClick={handleDecrement}
                      className="btn btn-ghost text-lg font-bold hover:bg-yellow-300 rounded-none "
                    >
                      -
                    </button>
                    <p className="text-xl font-bold w-5 text-center">
                      {amount}
                    </p>
                    <button
                      onClick={handleIncrement}
                      className="btn btn-ghost text-lg font-bold hover:bg-yellow-300 rounded-none "
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handelAddToCart}
                  className="btn btn-lg bg-yellow-300 hover:bg-emerald-400 hover:text-gray-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;

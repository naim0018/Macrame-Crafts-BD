import { Zoom } from "@mui/material";

const AddToCard = ({productId}) => {

    const {
        id,
        title,
        image,
        height,
        width,
        description,
        price,
        discountPrice,
        material,
      } = productId || {};

      const handleRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNofound("No Data Found");
      };

    return (
     <div className="min-h-screen">
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
          <div className="my-20  sticky top-10 h-fit">
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
                      {/* <TbCurrencyTaka /> */}
                      {discountPrice}
                    </p>
                    <del className=" text-red-400">৳{price}</del>
                  </div>
                </div>
              ) : (
                <p className="text-4xl font-medium flex items-center text-emerald-400">
                  {/* <TbCurrencyTaka /> */}
            
                </p>
              )}
              <div className="flex items-center gap-4 mt-8">
                <div className="">
                  <div className="border border-black w-fit  flex items-center gap-4">
                    <button
                      // onClick={handleDecrement}
                      className="btn btn-ghost text-lg font-bold hover:bg-yellow-300 rounded-none "
                    >
                      -
                    </button>
                    <p className="text-xl font-bold w-5 text-center">
                      {height}
                    </p>
                    <button
                      // onClick={handleIncrement}
                      className="btn btn-ghost text-lg font-bold hover:bg-yellow-300 rounded-none "
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  // onClick={handelAddToCart}
                  onClick={handleRemove}
                  className="btn btn-lg bg-yellow-300 hover:bg-emerald-400 hover:text-gray-500"
                >
                  Deleted
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default AddToCard;
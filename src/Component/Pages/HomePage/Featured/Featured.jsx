
import { Link } from "react-router-dom";
import useData from "../../../../hooks/useData";
import { useEffect, useState } from "react";
import Loadingui from "../../Loading/Loadingui/Loadingui";

const Featured = () => {
  const {data,isLoading,isFetching,isFetched}=useData() 
  const [randomData, setRandomData] = useState();
  if(isFetching){
    <Loadingui/>
  }
  console.log(data)


   useEffect(() => {
     // Shuffle the data to get a random order
     const shuffledData = data?.sort(() => 0.5 - Math.random());
     // Select the first 3 items from the shuffled data
     const selectedRandomData = shuffledData?.slice(0, 4);
     setRandomData(selectedRandomData);
   }, [data]);
  

  return (
    <>
    {
      randomData && <div className="my-20 container mx-auto">
      <h1 className="text-center font-normal text-5xl mt-10">Featured</h1>
      <p className="w-1/2 text-sm text-center text-gray-400 mx-auto mt-2 mb-10">
        {" "}
        Explore our featured collection on our homemade macrame crafts, where
        each knot tells a unique story of creativity and warmth. Bring the
        artistry of macrame into your home, one crafted masterpiece at a time.
      </p>
      <div className="grid grid-cols-5  mx-auto gap-4 drop-shadow-lg">
    
        <div className="relative w-full h-full col-span-2 border overflow-hidden">
        <div className="group hover:scale-105 transition-all relative">
          <img
            className="w-full "
            src={randomData[0].image}
            alt=""
          />
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center -bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <Link to={`cardDetails/${randomData[0]._id}`}>
            <button className="px-5 py-3 z-10 rounded-lg border bg-white text-lg font-medium">
              Details
            </button>
            </Link>
          </div>
        </div>
        </div>


        <div className="flex flex-col gap-4 h-full ">
          <div className="relative w-full h-full  border overflow-hidden">
        <div className="group hover:scale-105 transition-all relative">
          <img
            className="w-full "
            src={randomData[1].image}
            alt=""
          />
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center -bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Link to={`cardDetails/${randomData[1]._id}`}>
            <button className="px-5 py-3 z-10 rounded-lg border bg-white text-lg font-medium">
              Details
            </button>
            </Link>
          </div>
        </div>
        </div>
          <div className="relative w-full h-full  border overflow-hidden">
        <div className="group hover:scale-105 transition-all relative">
          <img
            className="w-full "
            src={randomData[2].image}
            alt=""
          />
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center -bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Link to={`cardDetails/${randomData[2]._id}`}>
            <button className="px-5 py-3 z-10 rounded-lg border bg-white text-lg font-medium">
              Details
            </button>
            </Link>
          </div>
        </div>
        </div>
        </div>
        <div className="relative w-full h-full col-span-2 border overflow-hidden">
        <div className="group hover:scale-105 transition-all relative">
          <img
            className="w-full "
            src={randomData[3].image}
            alt=""
          />
          <div className="absolute h-full w-full bg-black/10 flex items-center justify-center -bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Link to={`cardDetails/${randomData[3]._id}`}>
            <button className="px-5 py-3 z-10 rounded-lg border bg-white text-lg font-medium">
              Details
            </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default Featured;

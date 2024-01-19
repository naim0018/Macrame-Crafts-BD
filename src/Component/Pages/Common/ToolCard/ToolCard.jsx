

const ToolCard = ({ tool }) => {
  const { img, title , number, description  } = tool;
  return (
    <div className=" grid sm:grid-cols-3 shadow-md p-8 gap-5">
      <div className="grid">
        <img className="w-full place-self-center" src={img} alt=""/>
      </div>
      
      <div className=" sm:col-span-2 space-y-5 flex flex-col py-20 px-10">
        <h2 className="text-4xl font-extralight">{title}</h2>
        <p className="flex-grow flex items-center text-xs lg:text-lg text-gray-500">{description}</p>
        <button className="btn w-fit hover:text-white bg-yellow-400 hover:bg-emerald-400 border-none">Buy Now</button>
      </div>
    </div>
  );
};

export default ToolCard;

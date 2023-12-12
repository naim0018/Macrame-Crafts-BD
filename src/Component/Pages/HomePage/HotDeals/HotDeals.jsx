
import useData from '../../../../hooks/useData';
import Cards from '../../Common/Cards/Cards';


const HotDeals = () => {
    const data = useData();
    console.log(data)
    const products =data?.filter(item=>item.discountPrice !== undefined)
    console.log(products)
    return (
        <div className='container mx-auto my-10'>
            <div className="text-center w-1/2 mx-auto">
                <h1 className='font-normal text-5xl mt-10'>Hot Deals</h1>
                <p className='text-sm text-center text-gray-400 mx-auto mt-2 mb-10'>&quotExplore fantastic discounts on featured items in the Hot Deals—grab your favorite products at amazing prices today!&quot</p>
            </div>

            {/* Cards */}
            <div className="w-5/6 mx-auto grid 2xl:grid-cols-4 xl:grid-cols-3 lg:gap-10 lg:grid-cols-3 md:grid-cols-2 gap-5 justify-items-center">
                {
                    products?.map(data => <Cards key={data.id} data={data}/>)                   
                }
            </div>
        </div>
    );
};

export default HotDeals;
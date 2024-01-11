
import useData from '../../../../hooks/useData';
import Cards from '../../Common/Cards/Cards';
import Loadingui from '../../Loading/Loadingui/Loadingui';


const HotDeals = () => {
    const result = useData();
    const { data, isLoading } = result;


    const products = data?.filter(item => item.discountPrice !== undefined)

    return (
        <div className='container mx-auto my-10'>
            <div className="text-center w-1/2 mx-auto">
                <h1 className='font-normal text-5xl mt-10'>Hot Deals</h1>
                <p className='text-sm text-center text-gray-400 mx-auto mt-2 mb-10'>&quotExplore fantastic discounts on featured items in the Hot Deals—grab your favorite products at amazing prices today!&quot</p>
            </div>

            {/* Cards */}


            {
                isLoading && <Loadingui />
            }

            <div className=" mx-2  grid 2xl:grid-cols-4 xl:grid-cols-3 lg:gap-10 lg:grid-cols-3 md:grid-cols-2 gap-5 justify-items-center">
                {
                    products?.slice(0, 4).map(data => <Cards key={data._id} data={data} />)
                }
            </div>
        </div>
    );
};

export default HotDeals;
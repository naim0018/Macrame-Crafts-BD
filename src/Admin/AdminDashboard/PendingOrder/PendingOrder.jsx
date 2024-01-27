
import useCartData from '../../../hooks/useCartData';
import ShowCartData from '../../../Component/Pages/Carts/ShowCartData';

const PendingOrder = () => {

  const {data} = useCartData();
  


  return (
    <div>
      {
        data?.map(user => <ShowCartData key={user?._id} item={user} admin={true}/> )
      }
    </div>
  )
}

export default PendingOrder
import ShowCartData from "../../../Component/Pages/Carts/ShowCartData";
import usePendingOrderData from "../../../hooks/usePendingOrderData";

const PendingOrder = () => {
  const { data } = usePendingOrderData();

  console.log(data);

  return (
    <div>
      {data?.map((user) => (
        <div className="" key={user?._id}>
          {user?.userCarts?.map((item) => (
            <ShowCartData key={item._id} item={item} admin={true} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PendingOrder;

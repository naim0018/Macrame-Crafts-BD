import ShowCartData from "../../../Component/Pages/Carts/ShowCartData";
import usePendingOrderData from "../../../hooks/usePendingOrderData";

const PendingOrder = () => {
  const { data } = usePendingOrderData();

  console.log(data);

  return (
    <div>
      {data?.map((user) => (
        <div className="grid grid-cols-5" key={user?._id}>
          <p>{user?.email}</p>
          <div className="col-span-4">
          {user?.userCarts?.map((item) => (
            <ShowCartData key={item._id} item={item} admin={true} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingOrder;

import { useDispatch, useSelector } from "react-redux";
import { FiMinusCircle } from "react-icons/fi";
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../reducer/cartSlice";

const CartPage = () => {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-screen bg-peach bg-opacity-45 ">
        <div className="grid  grid-cols-12">
          <h1 className="font-Vazir text-2xl font-bold text-bistre text-center py-4 col-span-10">
            سبد خرید
          </h1>
          <button
            onClick={() => dispatch(clearCart())}
            className="w-[40%] bg-bistre text-peach rounded-lg py-2 font-Vazir text-lg m-4 col-span-2"
          >
            حذف همه
          </button>
        </div>
        <div className="grid grid-cols-7">
          <div className="col-span-5 border-2 border-bistre rounded-md p-2 m-2 ">
            <div className="grid grid-cols-4 ">
              <h1 className="text-center font-Vazir text-bistre text-lg font-semibold ">
                عنوان
              </h1>
              <h1 className="text-center font-Vazir text-bistre text-lg font-semibold">
                تعداد
              </h1>
              <h1 className="text-center font-Vazir text-bistre text-lg font-semibold">
                قیمت
              </h1>
              <h1 className="text-center font-Vazir text-bistre text-lg font-semibold">
                حذف محصول
              </h1>
            </div>
            <hr className="text-bistre border-1 m-2"></hr>
            {items.map((item) => (
              <div key={item.title} className="grid grid-cols-4   p-2">
                <h1 className="text-center font-Vazir text-bistre text-lg ">
                  {item.title}
                </h1>
                <div>
                  <h1 className="text-center font-Vazir text-bistre text-lg ">
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="mx-2 hover:text-red"
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="mx-2 hover:text-red"
                    >
                      <FiMinusCircle size={20} />
                    </button>
                  </h1>
                </div>
                <h1 className="text-center font-Vazir text-bistre text-lg ">
                  {item.price}
                </h1>
                <h1 className="text-center font-Vazir text-bistre text-lg ">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="hover:text-red"
                  >
                    <FaRegTrashCan size={20} />
                  </button>
                </h1>
              </div>
            ))}
          </div>
          <div className="col-span-2 border-2 border-bistre rounded-md p-2 m-2">
            <h1 className="font-Vazir text-bistre text-lg text-center font-semibold">
              سفارش ها
            </h1>
            <hr className="text-bistre border-1 m-2"></hr>
            <div className="grid grid-cols-2">
              <div className="space-y-6">
                <h1 className="font-Vazir text-bistre text-lg m-2  font-semibold">
                  آیتم ها :
                </h1>
                <h1 className="font-Vazir text-bistre text-lg m-2  font-semibold">
                  کل مبلغ :
                </h1>
              </div>
              <div className="space-y-6">
                <h1 className="font-Vazir text-bistre text-lg m-2  font-semibold">
                  {totalQuantity}
                </h1>
                <h1 className="font-Vazir text-bistre text-lg m-2  font-semibold">
                  {totalPrice}
                </h1>
              </div>
            </div>
            <button className="w-[100%] bg-bistre text-peach rounded-lg py-2 font-Vazir text-lg  mt-8">
              پرداخت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;

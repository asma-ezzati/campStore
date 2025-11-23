import { Link } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../reducer/productsApi";
import { MdShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { useMemo } from "react";
import LoadingPage from "../common/LoadingPage";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducer/cartSlice";
import { toast } from "react-toastify";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading: pLoading } = useGetProductsQuery();
  const { data: categories, isLoading: cLoading } = useGetCategoriesQuery();

  const finalData = useMemo(() => {
    //از ممو برای این استفاده میکنیم که از رندر مجدد جلوگیری بشه
    if (!products || !categories) return [];
    //اینجا از وجود داده مطمئن میشیم که داده ای هست یا نه در غیر اینصورت ارایه خالی باشه
    const catMap = new Map();
    //کت مپ مثل دیکشنری عمل میکنه
    categories.forEach((c) => {
      catMap.set(String(c.id), c.name);
    });

    return products.map((p) => {
      const catName = catMap.get(String(p.category)) ?? "نامشخص";
      return { ...p, categoryName: catName };
      //products:{id,title,price,category,image,categoryName}
    });
  }, [products, categories]);

  if (pLoading || cLoading) return <LoadingPage />;

  return (
    <>
      <div className=" w-full mx-auto px-4 bg-peach bg-opacity-40">
        <h1 className="col-span-4 font-Vazir text-bistre text-2xl font-bold text-center pt-6 ">
          محصولات فروشگاه ما
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  p-4 mt-4">
          {finalData.map((product) => (
            <div
              key={product.id}
              className="border-2 border-lion rounded-md p-4 w-full flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[180px] h-[140px] object-contain  "
              ></img>
              <div className="mt-3 text-right">
                <h1 className=" font-Vazir text-lg text-right text-bistre mr-3 ">
                  نام محصول : {product.title}
                </h1>
                <h2 className=" font-Vazir text-lg text-right text-bistre mr-3 ">
                  قیمت : {product.price}
                </h2>
                <h3 className=" font-Vazir text-lg text-right text-bistre mr-3 ">
                  دسته بندی : {product.categoryName}
                </h3>
              </div>
              <div className="mt-4 flex gap-2 justify-end items-center  ">
                <Link
                  to={`/products/${product.id}`}
                  className="bg-bistre w-11 h-11 rounded-full flex items-center justify-center"
                >
                  <FaEye size={30} className="text-peach m-3 " />
                </Link>
                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                    toast.success("محصول با موفقیت به سبد خرید اضافه شد ✅");
                  }}
                  className="bg-bistre w-11 h-11 rounded-full flex items-center justify-center"
                >
                  <MdShoppingCart size={30} className="text-peach m-3 " />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductsList;

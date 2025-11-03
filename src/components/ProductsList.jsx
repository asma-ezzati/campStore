import { Link } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../reducer/productsApi";
import { MdShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { useMemo } from "react";

const ProductsList = () => {
  const { data: products } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

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
    });
  }, [products, categories]);

  return (
    <>
      <div className=" grid grid-cols-4  bg-peach bg-opacity-40  ">
        <h1 className="col-span-4 font-Vazir text-bistre text-2xl font-bold text-center mt-6 ">
          محصولات فروشگاه ما
        </h1>
        {finalData.map((product) => (
          <div
            key={product.id}
            className=" border-2 border-lion rounded-md  m-2 w-[300px] h-[435px]  "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-[200px] m-10  "
            ></img>
            <div className="grid grid-cols-4">
              <div className="col-span-3">
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
              <div className="grid grid-rows-1   ">
                <Link
                  to={`/products/${product.id}`}
                  className="bg-bistre w-[55px] h-[55px] rounded-full m-2"
                >
                  <FaEye size={30} className="text-peach m-3 " />
                </Link>
                <button className="bg-bistre w-[55px] h-[55px] rounded-full m-2">
                  <MdShoppingCart size={30} className="text-peach m-3 " />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductsList;

import { Link, useParams } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../reducer/productsApi";
import { useMemo } from "react";
import { FaEye } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import LoadingPage from "../common/LoadingPage";
import { addToCart } from "../reducer/cartSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const CategoryPage = () => {
  const { catId } = useParams();
  const dispatch = useDispatch();
  const { data: products, isLoading: pLoading } = useGetProductsQuery();
  const { data: categories, isLoading: cLoading } = useGetCategoriesQuery();

  const finalData = useMemo(() => {
    if (!products || !categories) return [];
    const catMap = new Map(categories.map((c) => [String(c.id), c.name]));
    return products.map((p) => ({
      ...p,
      categoryName: catMap.get(String(p.category)) ?? "نامشخص",
    }));
  }, [products, categories]);

  const filtered = useMemo(() => {
    return finalData.filter((p) => String(p.category) === String(catId));
  }, [finalData, catId]);

  const cat = categories.find((cat) => String(cat.id) === String(catId));

  if (pLoading || cLoading) return <LoadingPage />;

  return (
    <>
      <div className="min-h-screen bg-peach bg-opacity-40">
        <div className=" mx-auto px-4 py-6">
          <h2 className="col-span-4 font-Vazir text-2xl font-bold text-bistre mb-6 text-center">
            {cat.name}
          </h2>

          {/* Grid با breakpoints و gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="border-2 border-lion rounded-md p-4 flex flex-col justify-between bg-white/5"
              >
                {/* تصویر واکنش‌پذیر */}
                <div className="w-full flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-[180px] h-[140px] object-contain"
                  />
                </div>

                {/* متن‌ها */}
                <div className="mt-3 text-right">
                  <h1 className="font-Vazir text-lg text-bistre truncate">
                    نام محصول : {item.title}
                  </h1>
                  <h2 className="font-Vazir text-md text-bistre mt-1">
                    قیمت : {item.price}
                  </h2>
                  <h3 className="font-Vazir text-sm text-bistre mt-1">
                    دسته بندی : {item.categoryName}
                  </h3>
                </div>

                {/* دکمه‌ها در پایین کارت */}
                <div className="mt-4 flex gap-2 justify-end items-center">
                  <Link
                    to={`/products/${item.id}`}
                    className="bg-bistre w-11 h-11 rounded-full flex items-center justify-center"
                  >
                    <FaEye size={18} className="text-peach" />
                  </Link>

                  <button
                    onClick={() => {
                      dispatch(addToCart(item));
                      toast.success("محصول با موفقیت به سبد خرید اضافه شد ✅");
                    }}
                    className="bg-bistre w-11 h-11 rounded-full flex items-center justify-center"
                  >
                    <MdShoppingCart size={20} className="text-peach" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryPage;

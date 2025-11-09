import { Link, useParams } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../reducer/productsApi";
import { useMemo } from "react";
import { FaEye } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import LoadingPage from "../common/LoadingPage";

const CategoryPage = () => {
  const { catId } = useParams();
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
      <div className=" grid grid-cols-4 h-full bg-peach bg-opacity-40  ">
        <h2 className="col-span-4 font-Vazir text-2xl font-bold text-bistre m-4 text-center ">
          {cat.name}
        </h2>
        {filtered.map((item) => (
          <div
            key={item.id}
            className=" border-2 border-lion rounded-md  m-2 w-[300px] h-[435px]  "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[200px] m-10  "
            ></img>
            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <h1 className=" font-Vazir text-lg text-right text-bistre mr-3 ">
                  نام محصول : {item.title}
                </h1>
                <h2 className=" font-Vazir text-lg text-right text-bistre mr-3 ">
                  قیمت : {item.price}
                </h2>
                <h3 className=" font-Vazir text-lg text-right text-bistre mr-3 ">
                  دسته بندی : {item.categoryName}
                </h3>
              </div>
              <div className="grid grid-rows-1   ">
                <Link
                  to={`/products/${item.id}`}
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
export default CategoryPage;

import { useMemo } from "react";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../reducer/productsApi";
import DeleteProduct from "./DeleteProduct";
import EditProducts from "./EditProducts";

import LoadingPage from "../../common/LoadingPage";

const ProductsAdmin = () => {
  const {
    data: products,
    isLoading: pLoading,
    error: pError,
  } = useGetProductsQuery();
  const {
    data: categories,
    isLoading: cLoading,
    error: cError,
  } = useGetCategoriesQuery();

  const finalData = useMemo(() => {
    if (!products || !categories) return [];
    const catMap = new Map();
    categories.forEach((cat) => {
      catMap.set(String(cat.id), cat.name);
    });
    return products.map((p) => {
      const catName = catMap.get(String(p.category)) ?? "نامشخص";
      return { ...p, categoryName: catName };
    });
  }, [products, categories]);

  if (pError || cError)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          خطا در بارگذاری داده‌ها. دوباره تلاش کنید.
        </p>
      </div>
    );

  if (pLoading || cLoading) return <LoadingPage />;

  return (
    <>
      <div className=" grid  grid-cols-4 m-1  ">
        {finalData.map((product) => (
          <div
            key={product.id}
            className=" border-2 border-bistre rounded-md  m-2 w-[280px] h-[435px]  "
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
                <EditProducts id={product.id} />

                <DeleteProduct id={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductsAdmin;

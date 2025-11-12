import { Link, useParams } from "react-router-dom";
import {
  useGetCategoryByIdQuery,
  useGetProductByIdQuery,
} from "../reducer/productsApi";
import LoadingPage from "../common/LoadingPage";
import { toast } from "react-toastify";

const SingleProductPage = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading: pLoading,
    error: pError,
  } = useGetProductByIdQuery(productId);

  const categoryId = product?.category;

  const {
    data: category,
    isLoading: cLoading,
    error: cError,
  } = useGetCategoryByIdQuery(categoryId);

  if (pLoading || cLoading) return <LoadingPage />;

  if (pError || cError) {
    toast.error("خطای سرور❌");
  }

  if (!product || !category) return [];

  return (
    <>
      <div className="h-screen bg-lion py-20 ">
        <div
          key={product.id}
          className="bg-peach bg-opacity-50 w-[80%] rounded-md  mx-auto grid grid-cols-3 items-center "
        >
          <img src={product.image} alt={product.title} className="p-4"></img>
          <div className="space-y-7 mx-auto ">
            <h1 className="text-xl text-bistre font-Vazir font-semibold ">
              نام محصول :{product.title}
            </h1>
            <h2 className="text-xl text-bistre font-Vazir font-semibold">
              قیمت :{product.price}
            </h2>
            <h2 className="text-xl text-bistre font-Vazir font-semibold">
              دسته بندی :{category.name}
            </h2>
          </div>
          <div className=" space-y-5">
            <button className="  rounded-md py-3 w-[300px] font-Vazir text-md bg-lion hover:bg-bistre hover:text-lion  ">
              اضافه کردن به سبد خرید
            </button>
            <Link
              to={"/products"}
              className="block  rounded-md py-3 text-center w-[300px] font-Vazir text-md bg-lion hover:bg-bistre hover:text-lion  "
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;

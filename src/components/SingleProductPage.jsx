import { useParams } from "react-router-dom";
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
          className="bg-peach bg-opacity-50 w-[80%] rounded-md border-2 mx-auto grid grid-cols-3 items-center gap-10"
        >
          <img src={product.image} alt={product.title}></img>
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
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;

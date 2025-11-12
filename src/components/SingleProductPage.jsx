import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../reducer/productsApi";
import LoadingPage from "../common/LoadingPage";
import { toast } from "react-toastify";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(productId);

  if (isLoading) return <LoadingPage />;
  if (error) {
    toast.error("خطای سرور❌");
  }
  console.log(product);

  if (!product) return [];

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
              دسته بندی :{product.category}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;

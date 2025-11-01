import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../reducer/productsApi";
import { FiShoppingBag } from "react-icons/fi";

const Shop = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطایی رخ داده</p>;

  // فقط 6 تا محصول اول
  const limitedProducts = products.slice(0, 4);

  return (
    <>
      <div className=" bg-brown m-2 rounded-md h-screen flex items-center justify-center flex-wrap relative ">
        {limitedProducts.map((product) => (
          <div
            key={product.id}
            className=" rounded-tl-full rounded-tr-full w-[250px] m-2 p-4 h-[350px] bg-peach "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-[200px]  m-2 mt-5"
            />
            <h2 className=" font-Vazir text-brown text-xl font-semibold mt-6 text-center">
              {product.title}
            </h2>
          </div>
        ))}
        <div className="absolute top-10 left-10 hover:transition-transform hover:-skew-x-12 hover:skew-y-3 ">
          <Link className=" font-Vazir text-xl text-peach flex ">
            همه ی محصولات
            <FiShoppingBag size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Shop;

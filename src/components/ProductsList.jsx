import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../reducer/productsApi";
import { MdShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa6";

const ProductsList = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <>
      <div className=" grid grid-cols-4  bg-peach ">
        <h1 className="col-span-4 font-Vazir text-bistre text-2xl font-bold text-center mt-6 ">
          محصولات فروشگاه ما
        </h1>
        {products.map((product) => (
          <div
            key={product.id}
            className=" bg-lion rounded-tl-full rounded-tr-full m-2 w-[300px] h-[435px]  "
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
                  دسته بندی : {product.category}
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

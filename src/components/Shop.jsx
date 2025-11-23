import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../reducer/productsApi";
import LoadingPage from "../common/LoadingPage";
import { FiShoppingBag } from "react-icons/fi";

const Shop = () => {
  const { data: category, isLoading, error } = useGetCategoriesQuery();

  if (!category) return [];
  if (isLoading) return <LoadingPage />;

  return (
    <>
      <div className=" bg-brown min-h-screen  m-2 rounded-md  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5   ">
        {category.map((cat) => (
          <Link key={cat.id} to={`/categories/${cat.id}`}>
            <div className=" mt-10 m-4 rounded-xl shadow-lg hover:shadow-bistre transition-shadow duration-300 h-[200px] bg-lion ">
              <img src={cat.image} className="w-[150px] mx-auto p-2 "></img>
              <h1 className=" font-Vazir text-xl text-peach text-center ">
                {cat.name}
              </h1>
            </div>
          </Link>
        ))}
        <div className="col-span-full flex justify-center items-end mt-5 mb-5 mr-5">
          <Link
            to={"/products"}
            className=" font-Vazir font-bold text-2xl text-peach flex gap-3 "
          >
            همه ی محصولات
            <FiShoppingBag size={35} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Shop;

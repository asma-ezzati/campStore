import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../reducer/productsApi";
import { FiShoppingBag } from "react-icons/fi";

const Shop = () => {
  const { data: category, error } = useGetCategoriesQuery();

  if (!category) return [];

  return (
    <>
      <div className=" bg-brown m-2 rounded-md h-screen grid grid-cols-5 grid-row-2 items-center  relative ">
        {category.map((cat) => (
          <Link key={cat.id}>
            <div className=" mt-14 m-4 rounded-xl shadow-lg hover:shadow-bistre transition-shadow duration-300 h-[200px] bg-lion ">
              <img src={cat.image} className="w-[150px] mx-auto p-2 "></img>
              <h1 className=" font-Vazir text-xl text-peach text-center ">
                {cat.name}
              </h1>
            </div>
          </Link>
        ))}
        <div className="absolute bottom-10 left-10 hover:transition-transform hover:-skew-x-12 hover:skew-y-3  ">
          <Link
            to={"/products"}
            className=" font-Vazir text-xl text-peach flex "
          >
            همه ی محصولات
            <FiShoppingBag size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Shop;

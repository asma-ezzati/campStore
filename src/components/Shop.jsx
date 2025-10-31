import { useGetProductsQuery } from "../reducer/productsApi";

const Shop = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطایی رخ داده</p>;

  // فقط 6 تا محصول اول
  const limitedProducts = products.slice(0, 6);

  return (
    <div className=" bg-brown m-2 rounded-md h-screen flex items-center justify-center flex-wrap  ">
      {limitedProducts.map((product) => (
        <div
          key={product.id}
          className=" border rounded-xl w-[300px] m-2 p-4 h-[250px] flex "
        >
          <img src={product.image} alt={product.title} className="w-1/2" />
          <h2 className=" font-Vazir text-peach text-xl font-semibold">
            {product.title}
          </h2>
        </div>
      ))}
    </div>
  );
};
export default Shop;

import { useParams } from "react-router-dom";
import {
  useEditProductsMutation,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} from "../../reducer/productsApi";

const EditProductsForm = () => {
  const { productId } = useParams();

  const { data: product, isLoading: productLoading } =
    useGetProductByIdQuery(productId);
  const [editProduct] = useEditProductsMutation();
  const { data: categories } = useGetCategoriesQuery();

  if (productLoading) return <div>loading....</div>;

  if (!product) return <div>notfound product</div>;

  return <></>;
};
export default EditProductsForm;

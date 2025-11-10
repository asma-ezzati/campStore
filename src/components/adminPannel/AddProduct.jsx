import { Formik, Form, Field } from "formik";
import {
  useGetCategoriesQuery,
  useAddProductMutation,
} from "../../reducer/productsApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const navigate = useNavigate();
  const { data: categories } = useGetCategoriesQuery();
  const [addProduct] = useAddProductMutation();

  return (
    <>
      <div className="h-screen bg-lion py-12   ">
        <div className="max-w-2xl mx-auto p-4 bg-peach bg-opacity-45  rounded-md  shadow-xl">
          <h2 className="font-Vazir text-bistre text-center text-2xl mb-2">
            اطلاعات محصول جدید :
          </h2>
          <Formik
            initialValues={{
              title: "",
              price: "",
              category: "",
              image: "",
            }}
            onSubmit={async (values) => {
              try {
                const payload = {
                  title: values.title,
                  price: values.price,
                  category: values.category,
                  image: values.image,
                };
                await addProduct(payload).unwrap();
                toast.success("محصول با موفقیت اضافه شد ✅");
                navigate("/admin");
              } catch (err) {
                toast.error("خطا در اضافه کردن محصول ❗");
                console.error(err);
              }
            }}
          >
            <Form className="space-y-4">
              <div>
                <label className=" font-Vazir block text-md text-bistre font-medium">
                  عنوان
                </label>
                <Field
                  name="title"
                  className=" font-Vazir text-md text-bistre bg-peach bg-opacity-80  mt-1 w-full   rounded-md p-2 focus:outline-1 focus:outline-none focus:ring-2 focus:ring-bistre  "
                ></Field>
              </div>

              <div>
                <label className=" font-Vazir block text-md text-bistre font-medium">
                  قیمت
                </label>
                <Field
                  name="price"
                  className=" font-Vazir text-md text-bistre bg-peach bg-opacity-80  mt-1 w-full   rounded-md p-2 focus:outline-1 focus:outline-none focus:ring-2 focus:ring-bistre  "
                ></Field>
              </div>

              <div>
                <label className=" font-Vazir block text-md text-bistre font-medium">
                  دسته بندی
                </label>
                <Field
                  name="category"
                  as="select"
                  className=" font-Vazir text-md text-bistre bg-peach bg-opacity-80  mt-1 w-full   rounded-md p-2 focus:outline-1 focus:outline-none focus:ring-2 focus:ring-bistre  "
                >
                  <option value="">انتخاب کنید</option>
                  {categories?.map((cat) => (
                    <option
                      key={cat.id}
                      value={String(cat.id)}
                      className="hover:bg-red"
                    >
                      {cat.name}
                    </option>
                  ))}
                </Field>
              </div>

              <div>
                <label className=" font-Vazir block text-md text-bistre font-medium">
                  آدرس تصویر
                </label>
                <Field
                  name="image"
                  className=" font-Vazir text-md text-bistre bg-peach bg-opacity-80  mt-1 w-full   rounded-md p-2 focus:outline-1 focus:outline-none focus:ring-2 focus:ring-bistre  "
                ></Field>
              </div>

              <button
                type="submit"
                className="bg-lion font-Vazir text-peach w-full my-4 px-4 py-2 rounded disabled:bg-opacity-50 hover:bg-bistre "
              >
                ذخیره
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default AddProduct;

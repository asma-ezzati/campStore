import { useNavigate, useParams } from "react-router-dom";
import {
  useEditProductsMutation,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} from "../../reducer/productsApi";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const EditProductsForm = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading: productLoading } =
    useGetProductByIdQuery(productId);
  const [editProduct, { isLoading: updating }] = useEditProductsMutation();
  const { data: categories } = useGetCategoriesQuery();

  if (productLoading) return <div>loading....</div>;

  if (!product) return <div>notfound product</div>;

  const schema = Yup.object({
    title: Yup.string().required("نام الزامی است📍"),
    price: Yup.string().required("نوشتن قیمت الزامی است 📍"),
    image: Yup.string().required("لطفا آدرس عکس را وارد کنید "),
    category: Yup.string().required("انتخاب دسته‌بندی الزامی است"),
  });

  return (
    <>
      <div className="h-screen bg-lion py-12   ">
        <div className="max-w-2xl mx-auto p-4 bg-peach bg-opacity-45  rounded-md  shadow-xl">
          <h2 className="font-Vazir text-bistre text-center text-2xl mb-2">
            ویرایش محصول
          </h2>
          <Formik
            initialValues={{
              title: product.title ?? "",
              price: product.price ?? 0,
              category: String(product.category ?? ""),
              image: product.image ?? "",
            }}
            validationSchema={schema}
            enableReinitialize={true}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
              try {
                // اگر API تو id جدا میخواد
                const payload = { id: productId, ...values };
                console.log("payload =>", payload);

                await editProduct(payload).unwrap();
                toast.success("محصول با موفقیت بروزرسانی شد ✅");
                setSubmitting(false);
                navigate(`/admin`);
              } catch (err) {
                console.error(err);
                toast.error(" خطا در بروزرسانی محصول ❌ ");
                setStatus({ error: "خطا در بروزرسانی محصول" });
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, status }) => (
              <Form className="space-y-4">
                {status?.error && (
                  <div className="text-red-600">{status.error}</div>
                )}
                <div>
                  <label className=" font-Vazir block text-md text-bistre font-medium">
                    عنوان
                  </label>
                  <Field
                    name="title"
                    className=" font-Vazir text-md text-bistre bg-peach bg-opacity-80  mt-1 w-full   rounded-md p-2 focus:outline-1 focus:outline-none focus:ring-2 focus:ring-bistre  "
                  ></Field>
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="font-Vazir text-md m-2 text-red  text-center"
                  />
                </div>

                <div>
                  <label className=" font-Vazir block text-md text-bistre font-medium">
                    قیمت
                  </label>
                  <Field
                    name="price"
                    className=" font-Vazir text-md text-bistre bg-peach bg-opacity-80  mt-1 w-full   rounded-md p-2 focus:outline-1 focus:outline-none focus:ring-2 focus:ring-bistre  "
                  ></Field>
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="font-Vazir text-md m-2 text-red  text-center"
                  />
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
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="font-Vazir text-md m-2 text-red  text-center"
                  />
                </div>

                <div>
                  <label className=" font-Vazir block text-md text-bistre font-medium">
                    آدرس تصویر
                  </label>
                  <Field
                    name="image"
                    className=" font-Vazir text-md text-bistre bg-peach bg-opacity-80  mt-1 w-full   rounded-md p-2 focus:outline-1 focus:outline-none focus:ring-2 focus:ring-bistre  "
                  ></Field>
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="font-Vazir text-md m-2 text-red  text-center"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-lion font-Vazir text-peach w-full my-4 px-4 py-2 rounded disabled:bg-opacity-50 hover:bg-bistre "
                >
                  ذخیره
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default EditProductsForm;

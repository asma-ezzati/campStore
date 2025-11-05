import { ErrorMessage, Field, Form, Formik } from "formik";
import banner3 from "../assets/banner3.jpg";
import * as Yup from "yup";
const Signin = () => {
  const schema = Yup.object({
    email: Yup.string()
      .email("ایمیل معتبر نیست❌")
      .required("ایمیل الزامی است 📍"),
    password: Yup.string()
      .max(8, "🚨 پسورد شامل 8 کاراکتر و کمتر باشد")
      .required("پسورد الزامی است 📍"),
  });

  return (
    <>
      <div className="h-screen bg-red grid place-items-center ">
        <div className="w-[60%] mx-auto  rounded-md grid grid-cols-3 grid-rows-1 bg-lion  ">
          <div className="col-span-2">
            <h1 className="font-Vazir text-lg font-semibold p-2 mt-6 text-center text-bistre ">
              ساخت حساب کاربری
            </h1>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={schema}
              onSubmit={() => {}}
            >
              <Form className="font-Vazir p-5 ">
                <Field
                  name="email"
                  type="email"
                  placeholder="ایمیل"
                  className="w-2/3 my-4 bg-lion border-2 border-bistre rounded-md p-2 focus:outline-none  block mx-auto placeholder:text-bistre focus:border-red "
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="font-Vazir text-md m-2 text-red  text-center"
                ></ErrorMessage>

                <Field
                  name="password"
                  type="password"
                  placeholder="پسورد"
                  className="w-2/3 my-4 bg-lion border-2 border-bistre rounded-md p-2 focus:outline-none block mx-auto  placeholder:text-bistre focus:border-red"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="font-Vazir text-md m-2 text-red  text-center"
                ></ErrorMessage>
                <button
                  type="submit"
                  className="w-2/3 my-4 mx-[77px] border-bistre border-2 p-2 rounded-md bg-bistre text-peach hover:shadow-xl shadow-bistre"
                >
                  ثبت نام
                </button>
              </Form>
            </Formik>
          </div>
          <img src={banner3} className="w-[300px] p-5  "></img>
        </div>
      </div>
    </>
  );
};
export default Signin;

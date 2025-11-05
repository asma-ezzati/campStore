import { ErrorMessage, Field, Form, Formik } from "formik";
import banner3 from "../assets/banner3.jpg";
const Signin = () => {
  return (
    <>
      <div className="h-screen bg-red grid place-items-center ">
        <div className="w-[60%] mx-auto  rounded-md grid grid-cols-3 grid-rows-1 bg-lion  ">
          <div className="col-span-2">
            <h1 className="font-Vazir text-lg font-semibold p-2 mt-6 text-center text-red ">
              ساخت حساب کاربری
            </h1>

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={() => {}}
            >
              <Form>
                <label>ایمیل</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div"></ErrorMessage>

                <label>پسورد</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div"></ErrorMessage>
                <button type="submit">ثبت نام</button>
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

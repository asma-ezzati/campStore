import banner3 from "../assets/banner3.jpg";
const Signin = () => {
  return (
    <>
      <div className="h-screen bg-red grid place-items-center ">
        <div className="w-[60%] mx-auto border-2 grid grid-cols-3 grid-rows-1 ">
          <div className="col-span-2">
            <h1 className="font-Vazir text-lg font-semibold p-2 m-2 text-center ">
              ساخت حساب کاربری
            </h1>

            <form>
              <input
                type="email"
                placeholder="ایمیل"
                className="block w-4/5 mx-auto m-5 p-2 border-2 rounded-md focus:outline-none font-Vazir text-md  "
              ></input>
              <input
                type="password"
                placeholder="پسورد"
                className="block w-4/5 mx-auto m-5 p-2 border-2 rounded-md focus:outline-none font-Vazir text-md  "
              ></input>
              <button className="font-Vazir w-4/5 border-2  rounded-md my-5 mx-12 p-2 text-md ">
                ثبت نام
              </button>
            </form>
          </div>
          <img src={banner3} className="w-[300px] p-5"></img>
        </div>
      </div>
    </>
  );
};
export default Signin;

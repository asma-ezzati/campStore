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

            <form>
              <input
                type="email"
                placeholder="ایمیل"
                className="block w-4/5 mx-auto m-5 p-2 border-2  border-bistre rounded-md focus:outline-none focus:border-red outline-none font-Vazir text-md bg-lion text-bistre placeholder:text-bistre  "
              ></input>
              <input
                type="password"
                placeholder="پسورد"
                className="block w-4/5 mx-auto m-5 p-2 border-2 border-bistre  rounded-md focus:outline-none focus:border-red font-Vazir text-md  bg-lion  text-bistre placeholder:text-bistre "
              ></input>
              <button className="font-Vazir w-4/5   rounded-md my-5 mx-12 p-2 text-md bg-red text-peach hover:shadow-xl shadow-red ">
                ثبت نام
              </button>
            </form>
          </div>
          <img src={banner3} className="w-[300px] p-5  "></img>
        </div>
      </div>
    </>
  );
};
export default Signin;

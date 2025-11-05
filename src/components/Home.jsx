import { Link } from "react-router-dom";
import banner from "../assets/banner1.webp";
import { RiAdminLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div
        className="h-screen  bg-cover bg-center bg-no-repeat bg-fixed rounded-md m-2 "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" py-44 mx-10  h-full ">
          <h1 className="text-white text-2xl font-semibold font-Vazir text-red py-6  ">
            با تجهیزات حرفه‌ای کمپ، آماده‌ی کشف دنیای بیرون شو.
          </h1>
          <h1 className="text-white text-md font-semibold font-Vazir text-red ">
            «آرامش واقعی اون‌جاست که به طبیعت پناه می‌بری.»
          </h1>
        </div>
        <div className=" w-12 h-12  absolute top-8 left-10 border-2 border-bistre  rounded-full bg-[rgba(255,255,255,0.08)] bg-blur-[10px] ">
          <Link to={"/admin"} className="text-bistre">
            <RiAdminLine size={30} className="m-2" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;

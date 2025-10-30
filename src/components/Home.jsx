import { Link } from "react-router-dom";
import banner from "../assets/banner1.webp";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div
        className="h-screen  bg-cover bg-center bg-no-repeat bg-fixed rounded-md"
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
      </div>
    </>
  );
};
export default Home;

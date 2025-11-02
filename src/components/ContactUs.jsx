import banner2 from "../assets/banner2.webp";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactUs = () => {
  return (
    <>
      <div className="h-screen bg-red m-2 p-4 rounded-md grid grid-cols-3 gap-2  grid-rows-1 gap-y-0 items-center justify-center ">
        <div className="border-l-2 border-peach">
          <img
            src={banner2}
            className="w-[250px] h-[200px] object-cover  mr-16 "
          ></img>
          <h1 className=" font-Vazir text-xl font-bold text-peach col-span-5 mt-10 text-center ">
            «فروشگاه وسایل کمپ »
          </h1>
          <h1 className=" font-Vazir text-xl font-bold text-peach col-span-5 mt-2 text-center ">
            تجربه طبیعت با تجهیزات حرفه‌ای
          </h1>
        </div>
        <div className="border-l-2 border-peach ">
          <h2 className=" font-Vazir text-peach font-semibold text-lg p-6 ">
            شماره تماس :
          </h2>
          <h2 className=" font-Vazir text-peach font-semibold text-lg p-6 ">
            ایمیل پشتیبانی:
          </h2>
          <h2 className=" font-Vazir text-peach font-semibold text-lg p-6 ">
            آدرس :
          </h2>
          <h2 className=" font-Vazir text-peach font-semibold text-lg p-6 ">
            ساعت کاری :
          </h2>
        </div>
        <div>
          <h1 className=" font-Vazir text-peach font-semibold text-lg p-4 text-center mb-2  ">
            شبکه های اجتماعی ما
          </h1>
          <div className="grid grid-cols-5 grid-rows-1 items-center justify-center ">
            <FaTelegram size={30} className="text-peach" />
            <RiInstagramFill size={30} className="text-peach" />
            <IoLogoWhatsapp size={30} className="text-peach" />
            <FaLinkedin size={30} className="text-peach" />
            <FaGithub size={30} className="text-peach" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;

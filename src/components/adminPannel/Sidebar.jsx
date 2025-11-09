import { IoBagAddOutline, IoSettingsOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="bg-[rgba(255,255,255,0.08)] rounded-lg w-[80px] m-1 p-1 ">
        <Link to={`/admin/add`}>
          <IoBagAddOutline size={30} className="my-14 mx-5 text-bistre" />
        </Link>
        <a href="https://calendar.google.com/calendar/u/0/r" target="_blank">
          <BsCalendar2Date size={30} className="my-14 mx-5 text-bistre" />
        </a>
        <Link to={"/setting"}>
          <IoSettingsOutline size={30} className="my-14 mx-5 text-bistre" />
        </Link>
        <Link to={"/products"}>
          <FaRegEye size={30} className="my-14 mx-5 text-bistre" />
        </Link>
        <Link to={"/"}>
          <IoMdExit size={30} className="my-14 mx-5 text-bistre" />
        </Link>
      </div>
    </>
  );
};
export default Sidebar;

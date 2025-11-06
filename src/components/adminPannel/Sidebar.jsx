import { IoBagAddOutline, IoSettingsOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className="bg-[rgba(255,255,255,0.08)] rounded-lg w-[80px] m-1 p-1 ">
        <IoBagAddOutline size={30} className="my-14 mx-5 text-bistre" />
        <BsCalendar2Date size={30} className="my-14 mx-5 text-bistre" />
        <IoSettingsOutline size={30} className="my-14 mx-5 text-bistre" />
        <FaRegEye size={30} className="my-14 mx-5 text-bistre" />
        <IoMdExit size={30} className="my-14 mx-5 text-bistre" />
      </div>
    </>
  );
};
export default Sidebar;

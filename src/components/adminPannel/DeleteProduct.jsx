import { MdDeleteForever } from "react-icons/md";

const DeleteProduct = () => {
  return (
    <>
      <button className="bg-bistre w-[55px] h-[55px] rounded-full m-2 hover:bg-red ">
        <MdDeleteForever size={30} className="text-peach m-3 " />
      </button>
    </>
  );
};
export default DeleteProduct;

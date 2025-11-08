import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditProducts = ({ id }) => {
  return (
    <>
      <Link
        to={`/admin/edit/${id}`}
        className="bg-bistre w-[55px] h-[55px] rounded-full m-2 hover:bg-brown "
      >
        <FaUserEdit size={30} className="text-peach m-3 " />
      </Link>
    </>
  );
};
export default EditProducts;

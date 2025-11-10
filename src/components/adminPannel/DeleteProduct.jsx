import { MdDeleteForever } from "react-icons/md";
import { useDeleteProductMutation } from "../../reducer/productsApi";
import { toast } from "react-toastify";

const DeleteProduct = ({ id }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDleteButton = async () => {
    try {
      await deleteProduct(id).unwrap();
      toast.success("محصول با موفقیت حذف شد ✅");
    } catch (err) {
      toast.error("خطا در حذف محصول❌");
      console.log(err);
    }
  };

  return (
    <>
      <button
        onClick={handleDleteButton}
        className="bg-bistre w-[55px] h-[55px] rounded-full m-2 hover:bg-red "
      >
        <MdDeleteForever size={30} className="text-peach m-3 " />
      </button>
    </>
  );
};
export default DeleteProduct;

import Sidebar from "./Sidebar";

const AdminPage = () => {
  return (
    <>
      <div className=" h-screen bg-lion  ">
        <div className="font-Vazir text-center text-xl text-bistre font-bold py-6">
          <h1>Admin Pannel</h1>
        </div>
        <div className="grid grid-cols-12">
          <div className=" ">
            <Sidebar />
          </div>
          <div className="">{/* <Products/> */}</div>
        </div>
      </div>
    </>
  );
};
export default AdminPage;

import notFound from "../assets/notFound.jpg";
const NotFoundPage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-lion ">
        <img
          src={notFound}
          alt="notFound"
          className="w-[400px] h-[400px] "
        ></img>
      </div>
    </>
  );
};
export default NotFoundPage;

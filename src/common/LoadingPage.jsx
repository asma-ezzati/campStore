import loading from "../assets/loading.svg";

const LoadingPage = () => {
  return (
    <>
      <div className=" bg-lion flex justify-center items-center h-screen">
        <img src={loading} alt="loading" className="w-16 h-16"></img>
        <h1 className="font-Vazir text-xl font-semibold text-bistre ">
          در حال بارگذاری....
        </h1>
      </div>
    </>
  );
};
export default LoadingPage;

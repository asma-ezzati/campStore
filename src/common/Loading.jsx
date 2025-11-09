import loading from "./image/loading.svg";

const Loading = () => {
  return (
    <>
      <div className=" bg-lion flex justify-center items-center h-screen">
        <img src={loading} alt="loading" className="w-16 h-16"></img>
      </div>
    </>
  );
};
export default Loading;

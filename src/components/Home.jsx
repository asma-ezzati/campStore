import banner from "../assets/banner1.webp";

const Home = () => {
  return (
    <>
      {/* <img src={banner}></img> */}
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex items-center justify-center h-full bg-black/50">
          <h1 className="text-white text-4xl font-bold">Welcome to My Site</h1>
        </div>
      </div>
    </>
  );
};
export default Home;

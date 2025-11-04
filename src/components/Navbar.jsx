import { useRef } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Shop from "./shop";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const homeRef = useRef(null);
  const storeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSections = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <nav className="absolute top-4 right-[430px] font-Vazir text-xl border-bistre  p-4 border-b  ">
          <button
            className="px-3 text-bistre"
            onClick={() => {
              scrollToSections(homeRef);
            }}
          >
            خانه
          </button>
          <button
            className="px-3 text-bistre"
            onClick={() => {
              scrollToSections(aboutRef);
            }}
          >
            درباره ما
          </button>
          <button
            className="px-3 text-bistre"
            onClick={() => {
              scrollToSections(storeRef);
            }}
          >
            فروشگاه
          </button>

          <button
            className="px-3 text-bistre"
            onClick={() => {
              scrollToSections(contactRef);
            }}
          >
            تماس با ما
          </button>
          <Link to={"/signin"} className="px-3 text-bistre">
            ثبت نام
          </Link>
        </nav>
        <section ref={homeRef} style={{ height: "100vh" }}>
          <Home />
        </section>
        <section ref={aboutRef} style={{ height: "100vh" }}>
          <AboutUs />
        </section>
        <section ref={storeRef} style={{ height: "100vh" }}>
          <Shop />
        </section>
        <section ref={contactRef} style={{ height: "100vh" }}>
          <ContactUs />
        </section>
      </div>
    </>
  );
};
export default Navbar;

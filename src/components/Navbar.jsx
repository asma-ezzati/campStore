import { useRef, useState } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Shop from "./shop";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const homeRef = useRef(null);
  const storeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [open, setOpen] = useState(false);

  const scrollToSections = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <div>
        <nav className=" font-Vazir text-xl  p-4  fixed  z-50 top-4 right-4 ">
          {/* icons */}
          <div className="md:hidden  ">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <IoClose size={30} className="text-bistre" />
              ) : (
                <RxHamburgerMenu size={30} className="text-bistre" />
              )}
            </button>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex gap-6 font-Vazir text-xl bg-white/60 backdrop-blur-lg p-4 rounded-xl shadow  ">
            <button
              className="px-3 text-bistre  hover:text-peach "
              onClick={() => {
                scrollToSections(homeRef);
              }}
            >
              خانه
            </button>
            <button
              className="px-3 text-bistre hover:text-peach "
              onClick={() => {
                scrollToSections(aboutRef);
              }}
            >
              درباره ما
            </button>
            <button
              className="px-3 text-bistre hover:text-peach "
              onClick={() => {
                scrollToSections(storeRef);
              }}
            >
              فروشگاه
            </button>
            <button
              className="px-3 text-bistre hover:text-peach "
              onClick={() => {
                scrollToSections(contactRef);
              }}
            >
              تماس با ما
            </button>
            <Link to={"/signin"} className="px-3 text-bistre hover:text-peach ">
              ثبت نام
            </Link>
          </div>

          {/* Mobile */}

          {open && (
            <div className="md:hidden absolute top-12 right-0 bg-white/80 backdrop-blur-xl shadow-lg rounded-xl p-5 flex flex-col gap-4 text-lg">
              <button
                className="px-3 text-bistre hover:text-peach"
                onClick={() => {
                  scrollToSections(homeRef);
                }}
              >
                خانه
              </button>
              <button
                className="px-3 text-bistre hover:text-peach"
                onClick={() => {
                  scrollToSections(aboutRef);
                }}
              >
                درباره ما
              </button>
              <button
                className="px-3 text-bistre hover:text-peach"
                onClick={() => {
                  scrollToSections(storeRef);
                }}
              >
                فروشگاه
              </button>
              <button
                className="px-3 text-bistre hover:text-peach"
                onClick={() => {
                  scrollToSections(contactRef);
                }}
              >
                تماس با ما
              </button>
              <Link
                to={"/signin"}
                onClick={() => setOpen(false)}
                className="px-3 text-bistre hover:text-peach"
              >
                ثبت نام
              </Link>
            </div>
          )}
        </nav>
        <section ref={homeRef}>
          <Home />
        </section>
        <section ref={aboutRef}>
          <AboutUs />
        </section>
        <section ref={storeRef}>
          <Shop />
        </section>
        <section ref={contactRef}>
          <ContactUs />
        </section>
      </div>
    </>
  );
};
export default Navbar;

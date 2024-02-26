import { motion } from "framer-motion";
import LogoWhite2 from "../assets/Avicii-Nav-white.png";
import ThemeButton from "./ThemeButton";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import AlbumSection from "./AlbumSection";
import LogoBlack from "../assets/Avicii-Nav-black.png";

function HeroSection({ handleThemeSwitch, theme }) {
  return (
    <>
      {/* <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} /> */}
      <div
        id="hero"
        className="flex items-center justify-center flex-col font-inter bg:white dark:bg-black ease-in-out duration-500"
      >
        {/* <ThemeButton handleThemeSwitch={handleThemeSwitch} theme={theme} /> */}
        <div className="text-center h-screen">
          <div className="dark:pt-20 dark:mt-0 md:-mt-16 md:pt-0 pt-28 md:flex flex-col items-center">
            {theme === "dark" ? (
              <img className="md:w-full w-80 md:pt-0 pt-36" src={LogoWhite2} />
            ) : (
              <img src={LogoBlack} className="md:pt-0 pt-5" />
            )}
            <div className="">
              <h1 className="text-2xl md:text-5xl mb-1 md:mb-3 text-black font-semibold dark:mt-0 md:-mt-36 -mt-20 dark:text-gray-300 font-inter">
                Remembering AVICII
              </h1>
              <p className="text-lg md:text-3xl max-w-md text-gray-600 mb-3 dark:text-gray-300 font-caveat">
                Celebrating the Legacy of Avicii
              </p>
              <p
                href="#works"
                className="text-base font-medium rounded-md dark:text-white text-black px-4 md:text-sm"
              >
                1989.09.08 – 2018.04.20
              </p>
            </div>
          </div>
        </div>

        <div className="dark:text-gray-300 text-gray-950">
          <motion.p
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="md:text-5xl text-xl font-normal text-center"
          >
            The Legacy Lives On: Remembering AVICII
          </motion.p>
          <div className="md:text-center text-center py-10 px-2 md:py-10 md:px-10 font-light md:text-2xl text-lg">
            <AnimatedText
              text={`"Tim Bergling, better known by his stage name Avicii, was a Swedish DJ, producer, and songwriter. His iconic music revolutionized electronic dance music, touching the hearts of millions worldwide."`}
            />
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/about"
              className="border px-8 py-2 dark:border-gray-300 border-gray-950 mb-10 dark:hover:bg-gray-300 dark:hover:text-gray-950 hover:bg-gray-950 hover:text-gray-300"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <AlbumSection />
    </>
  );
}
export default HeroSection;

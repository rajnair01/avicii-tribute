import LogoWhite from "../assets/Avicii-Logo-white.webp";
import LogoBlack2 from "../assets/Avicii-Logo-black.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ThemeButton from "./ThemeButton";

function Navbar({ theme, handleThemeSwitch }) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="bg:white dark:bg-black bg-white text-black dark:text-white flex items-center justify-around mx-auto font-inter sticky top-0 z-10 border-b dark:border-gray-300 border-gray-950 ease-in-out duration-500">
      {/* {theme === "dark" ? (
        <img className="md:w-20 w-16 hidden md:block" src={LogoWhite} />
      ) : (
        <img src={LogoBlack2} className="w-20" />
      )} */}

      <ul className="hidden md:flex gap-5 py-5 pl-5 w-full">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
      </ul>
      <div
        onClick={() => handleNav()}
        className="flex md:hidden w-full justify-start p-5"
      >
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-16 w-[60%] h-full border-r-gray-900 dark:bg-[#000300] bg-white ease-in-out duration-500"
            : "fixed left-[-100%] ease-out duration-700"
        }
      >
        <ul className="uppercase p-2">
          <li className="p-4 border-b border-gray-600">
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/albums" onClick={closeNav}>
              Albums
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-xs">
            <Link to="/tim" onClick={closeNav}>
              - Tim
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-xs">
            <Link to="/stories" onClick={closeNav}>
              - Stories
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-xs">
            <Link to="/true" onClick={closeNav}>
              - True
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-xs">
            <Link to="/aviciibyavicii" onClick={closeNav}>
              - True(Avicii by Avicii)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;

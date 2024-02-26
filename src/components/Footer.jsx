import { FiYoutube } from "react-icons/fi";
import { RiSpotifyLine } from "react-icons/ri";
import { LiaApple } from "react-icons/lia";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/Avicii-Logo-white.webp";
import LogoBlack2 from "../assets/Avicii-Logo-black.png";

function Footer({ theme }) {
  return (
    <footer className="dark:bg-black dark:text-gray-300 bg-white text-black dark:py-10 py-10 ease-in-out duration-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="md:w-1/3 md:block hidden">
          {theme === "dark" ? (
            <img className="md:w-20 w-16 hidden md:block" src={LogoWhite} />
          ) : (
            <img src={LogoBlack2} className="w-20" />
          )}
        </div>
        <div className="md:flex hidden flex-col md:flex-row items-center justify-center md:w-1/3 space-y-4 md:space-y-0 md:space-x-4 ">
          <Link to="/" className="dark:text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="dark:text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/albums" className="dark:text-gray-300 hover:text-white">
            Albums
          </Link>
        </div>
        <div className="md:w-1/3 flex items-center justify-center md:justify-end space-x-4">
          <a
            href="https://music.apple.com/ca/artist/avicii/298496035"
            target="_blank"
            className="dark:hover:text-white dark:text-gray-300 text-gray-600 hover:text-black"
          >
            <LiaApple size={28} />
          </a>
          <a
            href="https://www.youtube.com/@avicii"
            className="dark:hover:text-white dark:text-gray-300 text-gray-600 hover:text-black"
            target="_blank"
          >
            <FiYoutube size={24} />
          </a>
          <a
            href="https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
            className="dark:hover:text-white dark:text-gray-300 text-gray-600 hover:text-black"
            target="_blank"
          >
            <RiSpotifyLine size={24} />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 md:pt-8 text-center">
        {/* <p className="text-sm">
          &copy; {new Date().getFullYear()} Espresso Emporium. All rights
          reserved.
        </p> */}
        <p className="text-xs md:p-0 p-5">
          One day youll leave this world behind So live a life you will
          remember.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

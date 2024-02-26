import AviciibyAvicii from "../assets/aviciibyavicii.jpg";
import Spotify from "../assets/Spotify.png";
import Youtube from "../assets/Youtube.png";
import { motion } from "framer-motion";

function AviciiByAvicii() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black py-5 ease-in-out duration-500">
      <div className="md:flex justify-center items-center">
        <img src={AviciibyAvicii} alt="" className="w-80 md:mx-0 mx-auto" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          className="text-sm md:w-1/2 p-2 font-inter md:text-left text-center"
        >
          On 17 February 2014, manager Ash Pournouri, confirmed through his
          Facebook, Twitter and Instagram pages that Avicii was due to release a
          remix edition of True, containing a remake of all the tracks in True
          remixed by Avicii himself, however, Heart Upon My Sleeve, Canyons,
          Edom, Long Road to Hell, All You Need Is Love, and Always on the Run
          were not remixed. On 20 February, it was confirmed that the remix
          edition was due to be released on 24 March 2014.
        </motion.p>
      </div>
      <p className="md:text-center text-center">Track Listing</p>
      <ul className="max-w-[720px] py-10 md:flex flex-col mx-auto ">
        <div className="px-2 md:px-0">
          <div className="md:flex justify-between items-center">
            <li className="py-2">Avicii - Wake Me Up (Avicii By Avicii)</li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Jv8f2B-6zd8&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Avicii - You Make Me (Avicii by Avicii)
            </li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=mgpH7-RWbVU&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk&index=2"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Avicii - Hey Brother (Avicii By Avicii)
            </li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=RnYgoJcM9QQ&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk&index=3"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Addicted To You (Avicii By Avicii)
            </li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=CWx4i-TUdWo&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk&index=4"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Dear Boy (Avicii By Avicii)</li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=7sEpBE3NE9Y&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk&index=5"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Liar Liar (Avicii By Avicii)</li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=otnvw7VKGo4&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk&index=6"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Shame On Me (Avicii By Avicii)</li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=xsW0LzbYMI8&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk&index=7"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Lay Me Down (Avicii By Avicii)</li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=xjPB8BmNVzQ&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk&index=8"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Hope Theres Someone (Avicii By Avicii)
            </li>
            <div className="flex gap-1">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=jgbDMOoFlIc&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk&index=9"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default AviciiByAvicii;

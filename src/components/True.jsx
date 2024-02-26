import TrueImg from "../assets/avicii-true.png";
import Spotify from "../assets/Spotify.png";
import Youtube from "../assets/Youtube.png";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

function True() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black py-5 ease-in-out duration-500">
      <div className="md:flex justify-center items-center">
        <img src={TrueImg} alt="" className="md:mx-0 mx-auto" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          className="text-sm md:w-1/2 p-2 font-inter md:text-left text-center"
        >
          True is the debut studio album by Swedish electronic music producer
          Avicii, released on 13 September 2013 by PRMD Music, Lava Records and
          Sony Music Entertainments Columbia Records. Avicii said that
          sonically, the album would move away from his earlier house music
          sound on previous records by incorporating elements of other genres
          such as country music. True was preceded by the release of the Aloe
          Blacc-assisted Wake Me Up that featured a rare Marantz Enhanced
          Digital Stereo audio track and topped several charts around the world,
          and You Make Me, which features vocals from Swedish artist Salem Al
          Fakir. True debuted at number two on the UK Albums Chart and peaked
          within the top-ten of at least ten countries; it subsequently
          re-peaked at number two on the chart in February 2014. On 24 March
          2014, Avicii released a remixed version of the album titled True
          (Avicii by Avicii). A two-disc edition, comprising the standard
          10-track edition alongside the remix album featuring a new album
          cover, was released in June 2014.
        </motion.p>
      </div>
      <p className="text-center">Track Listing</p>
      <ul className="max-w-[720px] py-10 md:flex flex-col mx-auto ">
        <div className="px-2 md:px-0">
          <div className="md:flex justify-between items-center">
            <li className="py-2">Avicii - Wake Me Up</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=IcrbM1l_BoI&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - You Make Me</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Wb5VOQexMBU&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=2"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Hey Brother</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=6Cp6mKbRTQY&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=3"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Addicted To You</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Qc9c12q3mrc&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=4"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Dear Boy (Audio)</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Vlnw9LxxfTg&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=5"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Liar Liar</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=vngjoSb-XrE&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=6"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Shame On Me</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=bIBcUcwu0Ig&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=7"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Lay Me Down</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=ISiGtxsN5d0&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=8"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Hope Theres Someone</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=5M-pUCtcwmw&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=9"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Heart Upon My Sleeve</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=rxxbwM89WNw&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT&index=10"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>
        </div>
      </ul>
      <div className="max-w-[1280px] mx-auto font-inter md:px-0 px-2">
        <AnimatedText
          text={`Avicii's third album was first mentioned in late 2016 after he signed with Universal Sweden, when it was said that his next album would be released in 2017. From 13 July to 2 August, Avicii began sharing teasers for new music and later released Avīci  on 11 August 2017 with a total of six tracks. In an interview, he stated that  was the first of three EPs, with his full third album to be released alongside the third EP. Recording for the album resumed in late 2017. During March 2018, Avicii continued to share updates via Instagram and other streaming sites of different IDs and demos being put together for the album, including what would become "Hold the Line", "Bad Reputation", "Tough Love", "Ain't a Thing", and "Fades Away", amongst other demos. According to Kristoffer Fogelmark, the track "Never Leave Me" was the last track Avicii worked on, finished only two days before he left for Oman.`}
        />
      </div>
    </div>
  );
}
export default True;

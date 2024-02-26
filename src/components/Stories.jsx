import StoriesImg from "../assets/avicii-stories.png";
import Spotify from "../assets/Spotify.png";
import Youtube from "../assets/Youtube.png";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

function Stories() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black py-5 ease-in-out duration-500">
      <div className="md:flex justify-center items-center">
        <img src={StoriesImg} alt="" className="md:mx-0 mx-auto" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          className="text-sm md:w-1/2 p-2 font-inter md:text-left text-center"
        >
          Stories is the second studio album by Swedish electronic music
          producer Avicii, released on 2 October 2015 by PRMD Music and Island
          Records. It was produced by Avicii along with Salem Al Fakir, Alex
          Ebert, Carl Falk, Kristoffer Fogelmark, Martin Garrix, Dhani
          Lennevald, Ash Pournouri, Albin Nedler, and Vincent Pontare on several
          tracks. It is his final album before his death in 2018. This album was
          followed by his 3rd and final album, Tim which was released
          posthumously in June of 2019. Stories was released to mixed to
          positive reviews from critics. Four singles were released from the
          album: Waiting for Love, Pure Grinding, For a Better Day, and Broken
          Arrows, along with the promotional singles Ten More Days and Gonna
          Love Ya. Stories has sold one million copies worldwide as of November
          2015, and was the fourth most-streamed album of the year worldwide on
          Spotify.
        </motion.p>
      </div>
      <p className="text-center">Track Listing</p>
      <ul className="max-w-[720px] py-10 md:flex flex-col mx-auto ">
        <div className="px-2 md:px-0">
          <div className="md:flex justify-between items-center">
            <li className="py-2">Avicii - Waiting for Love</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=cHHLHGNpCSA&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Avicii - Talk To Myself (Lyric Video)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=kfntpNM1-dM&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=2"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Touch Me (Lyric Video)</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=jIOBp07deYY&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=3"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Ten More Days</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=21hoWeMro6Y&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=4"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - For A Better Day</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Xq-knHXSKYY&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=5"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Broken Arrows</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=V6iKSUoUN48&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=6"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Avicii - True Believer (Lyric Video)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=MhTJJ1AHzzU&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=7"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Avicii - City Lights (Lyric Video)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=R43PCsV92R4&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=8"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Pure Grinding</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=hzdIoghbFzg&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=9"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Avicii - Sunset Jesus (Lyric Video)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=9bljFUfIshM&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=10"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Avicii - Cant Catch Me (Lyric Video)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=B1qWnmycriA&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=11"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Somewhere In Stockholm</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=9WZN3S_j9dQ&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=12"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Trouble</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=GiuabrUp8zM&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=13"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Avicii - Gonna Love Ya</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a href="">
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=UuxTn5vC8VM&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8&index=14"
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
          text={`In July 2014, Avicii told Rolling Stone that he had worked on 70 songs for his next album and would include collaborations with Jon Bon Jovi, Billie Joe Armstrong, Chris Martin, Wyclef Jean, Serj Tankian and Matisyahu. Describing the album, Avicii said: "It's going to be a lot more song-oriented." On 2 March 2015, Avicii performed live at Australia's Future Music Festival. A lot of songs were leaked onto the internet from Avicii's UMF 2015 set. These songs include "Waiting for Love", "For a Better Day", "City Lights" and "Sunset Jesus", leaked under the name "Attack". A complete track listing of the set can be found on Avicii's SoundCloud page. On 22 May 2015, Avicii premiered his first single from Stories, "Waiting for Love". The track was co-produced by DJ and producer Martin Garrix. Almost a month later, Avicii communicated through Twitter that he had finished the album after two years of work. On 4 August 2015, it was announced on iHeartMedia Summit that Avicii's next single from Stories was "For a Better Day", featuring singer Alex Ebert. On 28 August, he released his next two singles, the other being "Pure Grinding".`}
        />
      </div>
    </div>
  );
}
export default Stories;

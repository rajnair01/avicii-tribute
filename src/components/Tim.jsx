import TimImg from "../assets/Avicii-Tim.png";
import Spotify from "../assets/Spotify.png";
import Youtube from "../assets/Youtube.png";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

function Tim() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black py-5 ease-in-out duration-500">
      <div className="md:flex justify-center items-center">
        <img src={TimImg} alt="" className="md:mx-0 mx-auto" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          className="text-sm md:w-1/2 p-2 font-inter md:text-left text-center"
        >
          Tim is the third and final studio album by Swedish DJ and producer
          Avicii, released on 6 June 2019, following his death on 20 April 2018.
          It is his sole posthumous album release. It includes the single SOS,
          which was released on 10 April 2019. All profits from sales of the
          album go towards the Tim Bergling Foundation, set up following Aviciis
          suicide, for mental health awareness.
        </motion.p>
      </div>
      <p className="text-center">Track Listing</p>
      <ul className="max-w-[720px] py-10 md:flex flex-col mx-auto ">
        <div className="px-2 md:px-0">
          <div className="md:flex justify-between items-center">
            <li className="py-2">Peace of Mind (featuring Vargas & Lagola)</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/6ZEYvUSgON3J5Qe1RYi3Jo"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=i5L9gHsqSQk&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Heaven (featuring Chris Martin)</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/0vrmHPfoBadXVr2n0m1aqZ"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=fqzhtvLWefA&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=2"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">SOS (featuring Aloe Blacc)</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/2x0RZdkZcD8QRI53XT4GI5"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=u8tdT5pAE34&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=3"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Tough Love (featuring Agnes and Vargas & Lagola)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/1yfyIdEw5U2bD5I6gxQCxW"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=McJgc3Nb46I&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=4"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Bad Reputation (featuring Joe Janiak)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/0HZgYFimoJG9Ijy8InUWcV"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=dzWBgb9cr1s&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=5"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Aint a Thing (featuring Bonn)</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/3MhNgzZwFtUF6jSr6pRSkW"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=nGsmOd8xPJE&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=6"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Hold the Line (featuring Arizona)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/6EBlOYNcZ8MrdEov9lEdV6"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Y_SR7V5qglc&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=7"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">Freak (featuring Bonn)</li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/6NVjujGb9fnl25fjzm5dTy"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Jc2xfYuLWgE&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=8"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Excuse Me Mr. Sir (featuring Vargas & Lagola)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/5dVUSdsePmEKkq4ryfrobU"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=yHkoWrxDuTU&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=9"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Heart Upon My Sleeve (with Imagine Dragons)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/6kXNnS7JJz0nAv4XEwEmQJ"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=j8Iz_hgYjj4&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=10"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Never Leave Me (featuring Joe Janiak)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/7zGEU6BXl2c4TxpzIAr7BI"
                target="_blank"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=BanzDujUwF4&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=11"
                target="_blank"
              >
                <img src={Youtube} className="w-8" alt="" />
              </a>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <li className="py-2 text-start">
              Fades Away (featuring Noonie Bao)
            </li>
            <div className="flex gap-1 md:pb-0 pb-2">
              <a
                href="https://open.spotify.com/track/6aPDvttLmezuUlv60ExTH9"
                target="_blan"
              >
                <img src={Spotify} className="w-8" alt="" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=IKEuu-sA4YI&list=OLAK5uy_mo0wJh-LjbaTD5NsVO--RzKkToBnonkUw&index=12"
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
          text={`Avicii's third album was first mentioned in late 2016 after he signed with Universal Sweden, when it was said that his next album would be released in 2017. From 13 July to 2 August, Avicii began sharing teasers for new music and later released Avīci on 11 August 2017 with a total of six tracks. In an interview, he stated that ) was the first of three EPs, with his full third album to be released alongside the third EP. Recording for the album resumed in late 2017. During March 2018, Avicii continued to share updates via Instagram and other streaming sites of different IDs and demos being put together for the album, including what would become "Hold the Line", "Bad Reputation", "Tough Love", "Ain't a Thing", and "Fades Away", amongst other demos. According to Kristoffer Fogelmark, the track "Never Leave Me" was the last track Avicii worked on, finished only two days before he left for Oman.`}
        />
      </div>
    </div>
  );
}
export default Tim;

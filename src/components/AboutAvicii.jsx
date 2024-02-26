import AnimatedText from "./AnimatedText";
import bgMobile from "../assets/bg-about-mobile.png";
import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";
import bg1 from "../assets/avicii-bg-1.jpg";
import levels from "../assets/levels.jpg";
import True from "../assets/avicii-true.png";
import stories from "../assets/avicii-stories.png";
import retirement from "../assets/avicii-retirement.webp";
import Spotify from "../assets/Spotify.png";
import Youtube from "../assets/Youtube.png";
import aviciibyavicii from "../assets/aviciibyavicii.jpg";
import aviciiTim from "../assets/Avicii-Tim.png";
import { Link } from "react-router-dom";

function AboutAvicii({ handleThemeSwitch, theme }) {
  return (
    <>
      {/* <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} /> */}
      <ThemeButton handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="">
        <div>
          <img src={bgMobile} className="md:hidden block" />
          <div className="flex">
            {/* <img
              src={bgNew}
              alt=""
              className="md:w-1/2 hidden md:block"
              style={{ backgroundPosition: "right" }}
            /> */}
            <div className="dark:bg-black bg-white dark:text-gray-300 text-gray-950 font-inter md:py-20 py-5 text-center ease-in-out duration-500">
              <div className="p-5 md:text-5xl text-3xl font-caveat">
                <AnimatedText text={`1989–2010: Early life and career`} />
              </div>
              <img
                src={bg1}
                alt=""
                className="mx-auto hidden md:block rounded-2xl w-1/2"
                style={{ backgroundPosition: "right" }}
              />
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                  className="font-inter md:text-lg text-sm text-left p-2"
                >
                  Tim Bergling; 8 September 1989 – 20 April 2018, known
                  professionally as Avicii , Swedish: , was a Swedish DJ,
                  remixer, and music producer. At age 16, Bergling began posting
                  his remixes on electronic music forums, which led to his first
                  record deal. He rose to prominence in 2011 with his single
                  Levels.
                  <div className="md:hidden py-2" />
                  His debut studio album, True 2013, blended electronic music
                  with elements of multiple genres and received generally
                  positive reviews. It peaked in the top 10 in more than 15
                  countries and topped international charts; the lead single,
                  Wake Me Up, topped most music markets in Europe and reached
                  number four in the United States.
                  <div className="md:hidden py-2" />
                  In 2015, Bergling released his second studio album, Stories,
                  and in 2017 he released an EP, Avīci . His catalog also
                  included the singles I Could Be the One with Nicky Romero, You
                  Make Me, X You, Hey Brother, Addicted to You, The Days, The
                  Nights, Waiting for Love, Without You, and Lonely Together.
                  Bergling was nominated for a Grammy Award for his work on
                  Sunshine with David Guetta in 2012 and Levels in 2013. Several
                  music publications credit Bergling as among the DJs who
                  ushered electronic music into Top 40 radio in the early 2010s.
                  Bergling retired from touring in 2016, after several years of
                  stress and poor mental health.
                  <div className="md:hidden py-2" />
                  On 20 April 2018, he died by suicide while on holiday in
                  Muscat, Oman. In 2019, his third and final album, Tim, was
                  released posthumously.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="dark:bg-black dark:text-gray-300 md:text-center text-black bg-white ease-in-out duration-500">
            <div className="w-full md:text-6xl text-5xl font-caveat text-center py-5">
              <AnimatedText text={`2011–2013: Levels`} />
            </div>

            <div className="md:flex justify-center items-center">
              <img src={levels} alt="" className="md:mx-0 mx-auto" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="font-inter md:text-sm text-sm p-2 md:w-1/2"
              >
                In 2011, Berglings track Fade into Darkness was sampled by Leona
                Lewis on her single Collide. The sampling was not accredited and
                led to controversy as Bergling attempted to block the singles
                release. The matter was resolved out of court, with Collide
                being made a joint release between Lewis and Bergling. In
                October 2011, Bergling released Levels, which launched him into
                the mainstream. Levels reached the top ten in Austria, Belgium,
                Bosnia and Herzegovina, Croatia, Denmark, Finland, Germany,
                Greece, Ireland, Italy, the Netherlands, Slovenia and the United
                Kingdom, whilst topping the charts in Hungary, Norway and
                Sweden. In 2012, his collaboration track Sunshine with David
                Guetta was nominated for a Grammy award under the category for
                Best Dance Recording.
                <div className="md:hidden py-2" />
                On 23 March 2012, Berglings unsigned single Last Dance was
                previewed on Pete Tongs show on BBC Radio 1. The song was later
                released on 27 August 2012. At Ultra Music Festival 2012 in
                Miami, he premiered two tracks, Girl Gone Wild (Aviciis UMF
                Remix) with Madonna and Superlove with Lenny Kravitz. Berglings
                UMF Remix of Girl Gone Wild was released on 20 April 2012, and
                Superlove with Kravitz was released on 29 May 2012. After
                reaching two million followers on Facebook, Bergling released a
                new song titled Two Million. It was put out as a free download
                on his official SoundCloud page.
                <div className="md:hidden py-2" />
                On 27 April 2012, Bergling released Silhouettes. The song
                featured vocals from Salem Al Fakir and peaked at number 5 on
                the UK Dance charts and number 4 on the Billboard Hot Dance Club
                Songs. Bergling was a featured performer on 4 August 2012 at
                Lollapalooza festival in Chicagos Grant Park. On 12 August 2012,
                he released Dancing in My Head (Aviciis Been Cursed Mix) on
                Beatport. The track features vocals from Eric Turner. A radio
                edit of the track, titled Dancing in My Head (Tom Hangs Mix) was
                released on 14 August 2012 on iTunes, and a remix EP was later
                released on 30 October 2012 featuring remixes from Charlie
                Bernardo and Michael Woods.
                <div className="md:hidden py-2" />
                On 26 September 2012, Bergling made history as the first DJ to
                headline the world-famous Radio City Music Hall in New York
                City. He performed two sold-out shows on 26 and 27 September. He
                was supported by Matt Goldman and Cazzette at the two shows. At
                his Radio City Music Hall shows, he played a preview of his new
                track with Mike Posner titled Stay with You.
              </motion.p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <a
                href="https://open.spotify.com/album/1OEGfToF7QbjUgyxMAnGXg"
                target="_blank"
              >
                <img src={Spotify} alt="" className="w-10 flex" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=_ovdm2yX4MA"
                target="_blank"
              >
                <img src={Youtube} alt="" className="w-10 flex" />
              </a>
            </div>
          </div>

          <div className="dark:bg-black dark:text-gray-300 md:text-center text-black bg-white ease-in-out duration-500">
            <div className="md:text-6xl text-5xl flex justify-center items-center font-caveat py-5">
              <AnimatedText text={`2013–2014: True`} />
            </div>
            <div className="md:flex justify-center items-center">
              <img src={True} alt="" className="md:mx-0 mx-auto" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="font-inter md:text-sm text-sm p-2 md:w-1/2"
              >
                In March 2013, Bergling announced and premiered new tracks from
                his forthcoming new album True—which was released in September
                that year—during his Main Stage set at Ultra Music Festival in
                Miami. The new tracks were experimental in nature. For example,
                Bergling brought out a stomping band to play through the new
                bluegrass-tinged song Wake Me Up. Many of these new songs
                received mixed critical reviews after the concert. On 11 April
                2013, Bergling released his new album promo mix on SoundCloud.
                It contained some songs from True and some of his non-album
                singles. It also contained some of his IDs such as Black and
                Blue and Enough is Enough (Dont Give Up On Us).
                <div className="md:hidden py-2" />
                The EBU and SVT announced on 15 April that Bergling, along with
                ex-ABBA members Björn Ulvaeus and Benny Andersson, had composed
                the anthem for the Eurovision Song Contest 2013. The song was
                performed for the first time in the Final on 18 May. On 14 June
                2013, the world premiere of Berglings new single, Wake Me Up,
                was previewed by Pete Tong on BBC Radio 1, featuring vocals from
                Aloe Blacc. The song was later released on iTunes and radio on
                25 June 2013. It is the first single from Berglings album True,
                which was released on 16 September 2013.
                <div className="md:hidden py-2" />
                Wake Me Up was number 1 on the Spotify Global Chart and Bergling
                was at 2 in most streamed artist worldwide. Wake Me Up later
                went on to set a then record of 14 weeks as the number one hit
                on Billboards Dance/Electronic Songs list. The Official Charts
                Company announced on 21 July that Wake Me Up had become the UKs
                fastest selling single of 2013 after overtaking Robin Thickes
                Blurred Lines, having sold 267,000 copies in its first week on
                sale in the UK. Wake Me Up subsequently became a major hit,
                topping the charts in over 20 countries including Australia,
                Germany, Ireland, Italy, Sweden, the Netherlands, and New
                Zealand.
              </motion.p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <a
                href="https://open.spotify.com/album/2H6i2CrWgXE1HookLu8Au0"
                target="_blank"
              >
                <img src={Spotify} alt="" className="w-10 flex" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=IcrbM1l_BoI&list=PL5bDKtI83VRfCO9LOoGz3Z7mGCFjMF0xT"
                target="_blank"
              >
                <img src={Youtube} alt="" className="w-10 flex" />
              </a>
              <div>
                <Link to="/true">
                  <button className="dark:bg-gray-300 dark:text-black bg-black text-white px-5 py-2 rounded-full dark:hover:bg-gray-200 m-2">
                    Go to album
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="dark:bg-black dark:text-gray-300 md:text-center text-black bg-white ease-in-out duration-500">
            <div className="md:text-6xl text-5xl flex justify-center items-center font-caveat py-5">
              <AnimatedText text={`2014–2015: Stories`} />
            </div>
            <div className="md:flex justify-center items-center">
              <img src={stories} alt="" className="md:mx-0 mx-auto" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="font-inter md:text-sm text-sm p-2 md:w-1/2"
              >
                In July 2014, Bergling told Rolling Stone that he had worked on
                70 songs for his next album Stories, which would include
                collaborations with Jon Bon Jovi, Serj Tankian of System of a
                Down, Chris Martin, Wyclef Jean and Matisyahu. Describing the
                album, Bergling said that its going to be a lot more
                song-oriented. During his tour for True, he also performed his
                upcoming single No Pleasing a Woman with vocals from Billie Joe
                Armstrong of the American rock band Green Day. It has a similar
                instrumental to Wake Me Up albeit different chord progressions,
                along with No Pleasing a Woman. Bergling also performed other
                upcoming songs like In Love with Your Ghost with Daniel Danne
                Adams-Ray, Love to Fall with Tom Odell and Million Miles with
                LP, which is the demo version of Trouble, a song from Stories
                with vocals from Wayne Hector.
                <div className="md:hidden py-2" />
                ose Myself, a collaboration between Bergling and Chinese singer
                Wang Leehom, was released on 1 September 2014. On 8 September
                2014, his 25th birthday, Bergling decided to cancel all of his
                remaining performances of 2014 due to health concerns. The
                following day, he announced through Denim & Supply that he would
                release his new single The Days later in 2014; a video was also
                featured with a preview of the track. The Days is a
                collaboration between Bergling and Robbie Williams, and was
                released on 3 October 2014 via PRMD. On 16 September 2014, it
                was announced through EA Sports that Bergling was debuting a new
                track called The Nights exclusively on FIFA 15. On 17 November
                2014, it was officially announced that the track is to be
                released as a part of an EP together with The Days.
                <div className="md:hidden py-2" />
                On 17 November 2014, Wyclef Jean released a track titled Divine
                Sorrow featuring Avicii, which was part of Product Reds Share
                the Sound of an AIDS-Free Generation campaign.
              </motion.p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <a
                href="https://open.spotify.com/album/7dqftJ3kas6D0VAdmt3k3V"
                target="_blank"
              >
                <img src={Spotify} alt="" className="w-10 flex" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=cHHLHGNpCSA&list=PL5bDKtI83VRcvHJhxu5Z6bgGEc1ev41y8"
                target="_blank"
              >
                <img src={Youtube} alt="" className="w-10 flex" />
              </a>
              <div>
                <Link to="/stories">
                  <button className="dark:bg-gray-300 dark:text-black bg-black text-white px-5 py-2 rounded-full dark:hover:bg-gray-200 m-2">
                    Go to album
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="dark:bg-black dark:text-gray-300 text-center text-black bg-white ease-in-out duration-500">
            <div className="md:text-6xl text-5xl flex justify-center items-center font-caveat py-5">
              <AnimatedText text={`2014: Avīci and Avicii: True Stories`} />
            </div>
            <div className="md:flex justify-center items-center">
              <img
                src={aviciibyavicii}
                alt=""
                className="md:mx-0 mx-auto md:w-1/5 w-80"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="font-inter md:text-sm text-sm p-2 md:w-1/2 md:text-center text-left"
              >
                On 17 February 2014, manager Ash Pournouri, confirmed through
                his Facebook, Twitter and Instagram pages that Avicii was due to
                release a remix edition of True, containing a remake of all the
                tracks in True remixed by Avicii himself, however, Heart Upon My
                Sleeve, Canyons, Edom, Long Road to Hell, All You Need Is Love,
                and Always on the Run were not remixed. On 20 February, it was
                confirmed that the remix edition was due to be released on 24
                March 2014.
              </motion.p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <a
                href="https://open.spotify.com/album/0ignCov9foaLxuqND5GMtl"
                target="_blank"
              >
                <img src={Spotify} alt="" className="w-10 flex" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=Jv8f2B-6zd8&list=OLAK5uy_nRpY6XwWYutry2HYFaVyjuyBEF0Y2PjRk"
                target="_blank"
              >
                <img src={Youtube} alt="" className="w-10 flex" />
              </a>
              <div>
                <Link to="/aviciibyavicii">
                  <button className="dark:bg-gray-300 dark:text-black bg-black text-white px-5 py-2 rounded-full dark:hover:bg-gray-200 m-2">
                    Go to album
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="dark:bg-black bg-white dark:text-gray-300 text-gray-950 font-inter md:py-20 py-5 text-center ease-in-out duration-500">
              <div className="p-5 text-5xl font-caveat">
                <AnimatedText text={`2016: Retirement from touring`} />
              </div>
              <img
                src={retirement}
                alt=""
                className="mx-auto hidden md:block h-[60vh] w-full"
                style={{ backgroundPosition: "right" }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="font-inter md:text-base text-xs"
              >
                On 15 January 2016, Bergling released his remix of Mortens
                Beautiful Heartbeat. Coca-Cola had partnered with Bergling for a
                global campaign anthem, Taste the Feeling, featuring Conrad
                Sewell. The song was released on 19 January. On 25 January,
                Bergling once again teamed up with Coldplay to co-produce the
                bands single Hymn for the Weekend, which was released as the
                second single from their album A Head Full of Dreams. In 2016,
                according to a report by Inc. magazine, Avicii Music AB was the
                6th fastest-growing company in Europe, with a revenue of €7.7
                million in 2014.
                <div className="md:hidden py-2" />
                On 19 March 2016 at Ultra Music Festival, Bergling debuted new
                demos featuring Sandro Cavazza such as We Burn (Faster Than
                Light), Lord, Our Love, & Unbreakable, as well as a
                collaboration with Australian pop star Sia called All I Need;
                they remain unreleased to this day. On 29 March, Bergling
                announced via his Facebook page that he would be retiring from
                performing later that year, citing health concerns. On 7 April
                2016, Bergling announced that he was working on a third studio
                album. On 3 June 2016, Bergling released a collaboration with
                Otto Knows titled Back Where I Belong. On 15 July 2016, Bergling
                released a remix of his own song, Feeling Good. The remix was
                titled Feeling Good (Avicii by Avicii). This track was only
                released on Berglings official YouTube channel.
                <div className="md:hidden py-2" />
                On 1 August, the track was pulled from YouTube with the video
                being made private. On 28 August 2016, Bergling performed his
                final show at Ushuaïa Ibiza Beach Hotel. On 22 December 2016, a
                representative of Avicii Music AB announced that Bergling had
                parted ways with long-time manager Arash Pournouri and At Night
                Management along with Pournouris record label PRMD. The
                representative also announced that Bergling had signed on to
                Universal Music Sweden and was expected to release his third
                studio album in 2017.
              </motion.p>
            </div>
          </div>

          <div className="dark:bg-black dark:text-gray-300 md:text-center text-black bg-white ease-in-out duration-500">
            <div className="md:text-6xl text-5xl flex justify-center items-center font-caveat py-5">
              <AnimatedText text={`2019: Tim`} />
            </div>
            <div className="md:flex justify-center items-center">
              <img src={aviciiTim} alt="" className="md:mx-0 mx-auto" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="font-inter md:text-sm text-sm p-2 md:w-1/2"
              >
                Aviciis third album was first mentioned in late 2016 after he
                signed with Universal Sweden, when it was said that his next
                album would be released in 2017. From 13 July to 2 August,
                Avicii began sharing teasers for new music and later released
                Avīcii on 11 August 2017 with a total of six tracks. In an
                interview, he stated that was the first of three EPs, with his
                full third album to be released alongside the third EP.
                Recording for the album resumed in late 2017.
                <div className="md:hidden py-2" />
                During March 2018, Avicii continued to share updates via
                Instagram and other streaming sites of different IDs and demos
                being put together for the album, including what would become
                Hold the Line, Bad Reputation, Tough Love, Aint a Thing, and
                Fades Away, amongst other demos. According to Kristoffer
                Fogelmark, the track Never Leave Me was the last track Avicii
                worked on, finished only two days before he left for Oman.
                Following Aviciis death in April 2018, a representative said the
                following month that there were no plans to release any new
                material in the immediate future.
                <div className="md:hidden py-2" />
                In April 2019, it was announced that collaborators were enlisted
                to help finish the work on the album. A team of writers and
                producers made an album described as containing elements of
                psychedelia, Arabian music, sounds of the Caribbean and more.
                The albums track listing was chosen from 16 possible songs. On 1
                and 2 June 2019, fans were given a chance to listen to the album
                4–5 days early by going to music cubes in various locations
                around the world.
              </motion.p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <a
                href="https://open.spotify.com/album/6Ad1E9vl75ZB3Ir87zwXIJ"
                target="_blank"
              >
                <img src={Spotify} alt="" className="w-10 flex" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=i5L9gHsqSQk&list=PLl8VaWiKm5ovR7ZsG1uOb9PbFzvmC9y0u"
                target="_blank"
              >
                <img src={Youtube} alt="" className="w-10 flex" />
              </a>
              <div>
                <Link to="/tim">
                  <button className="dark:bg-gray-300 dark:text-black bg-black text-white px-5 py-2 rounded-full dark:hover:bg-gray-200 m-2">
                    Go to album
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutAvicii;

import TrueImg from "../assets/avicii-true.png";
import TimImg from "../assets/Avicii-Tim.png";
import StoriesImg from "../assets/avicii-stories.png";
import { Link } from "react-router-dom";
import Spotify from "../assets/Spotify.png";
import Youtube from "../assets/Youtube.png";
import AnimatedText from "./AnimatedText";
import AviciiByAviciiImg from "../assets/aviciibyavicii.jpg";

function AlbumPage() {
  return (
    <div className="dark:bg-black dark:text-white bg-white text-black font-inter ease-in-out duration-500">
      <div className="md:flex justify-center items-center py-2">
        <Link to="/tim">
          <img src={TimImg} alt="" className="mx-auto " />
        </Link>
        <div className="md:w-1/2 font-inter">
          <div className="px-2 text-2xl font-bold border-b md:w-1/6 md:py-0 pt-5">
            <Link to="/tim">
              <AnimatedText text={`Tim`} />
            </Link>
          </div>
          <p className="text-sm p-2 font-inter">
            Tim is the third and final studio album by Swedish DJ and producer
            Avicii, released on 6 June 2019, following his death on 20 April
            2018. It is his sole posthumous album release. It includes the
            single SOS, which was released on 10 April 2019. All profits from
            sales of the album go towards the Tim Bergling Foundation, set up
            following Aviciis suicide, for mental health awareness.
          </p>
        </div>
      </div>
      <div className="md:flex justify-center items-center py-2 ">
        <Link to="/stories">
          <img src={StoriesImg} alt="" className="mx-auto" />
        </Link>
        <div className="md:w-1/2 font-inter">
          <div className="px-2 text-2xl font-bold  border-b md:w-1/6 md:py-0 pt-5">
            <Link to="/stories">
              <AnimatedText text={`Stories`} />
            </Link>
          </div>
          <p className="text-sm p-2 font-inter">
            Stories is the second studio album by Swedish electronic music
            producer Avicii, released on 2 October 2015 by PRMD Music and Island
            Records. It was produced by Avicii along with Salem Al Fakir, Alex
            Ebert, Carl Falk, Kristoffer Fogelmark, Martin Garrix, Dhani
            Lennevald, Ash Pournouri, Albin Nedler, and Vincent Pontare on
            several tracks. It is his final album before his death in 2018. This
            album was followed by his 3rd and final album, Tim which was
            released posthumously in June of 2019. Stories was released to mixed
            to positive reviews from critics. Four singles were released from
            the album: Waiting for Love, Pure Grinding, For a Better Day, and
            Broken Arrows, along with the promotional singles Ten More Days and
            Gonna Love Ya. Stories has sold one million copies worldwide as of
            November 2015, and was the fourth most-streamed album of the year
            worldwide on Spotify.
          </p>
        </div>
      </div>
      <div className="md:flex justify-center items-center py-2 ">
        <Link to="/aviciibyavicii">
          <img src={AviciiByAviciiImg} alt="" className="w-80 mx-auto" />
        </Link>
        <div className="md:w-1/2 font-inter">
          <div className="px-2 text-2xl font-bold  border-b md:w-1/3 md:py-0 pt-5">
            <Link to="/aviciibyavicii">
              <AnimatedText text={`True: Avicii By Avicii`} />
            </Link>
          </div>
          <p className="text-sm p-2 font-inter">
            On 17 February 2014, manager Ash Pournouri, confirmed through his
            Facebook, Twitter and Instagram pages that Avicii was due to release
            a remix edition of True, containing a remake of all the tracks in
            True remixed by Avicii himself, however, Heart Upon My Sleeve,
            Canyons, Edom, Long Road to Hell, All You Need Is Love, and Always
            on the Run were not remixed. On 20 February, it was confirmed that
            the remix edition was due to be released on 24 March 2014.
          </p>
        </div>
      </div>
      <div className="md:flex justify-center items-center py-2">
        <Link to="/true">
          <img src={TrueImg} alt="" className="mx-auto" />
        </Link>
        <div className="md:w-1/2 font-inter">
          <div className="px-2 text-2xl font-bold  border-b md:w-1/6 md:py-0 pt-5">
            <Link to="/true">
              <AnimatedText text={`True`} />
            </Link>
          </div>
          <p className="text-sm p-2 font-inter">
            True is the debut studio album by Swedish electronic music producer
            Avicii, released on 13 September 2013 by PRMD Music, Lava Records
            and Sony Music Entertainments Columbia Records. Avicii said that
            sonically, the album would move away from his earlier house music
            sound on previous records by incorporating elements of other genres
            such as country music. True was preceded by the release of the Aloe
            Blacc-assisted Wake Me Up that featured a rare Marantz Enhanced
            Digital Stereo audio track and topped several charts around the
            world, and You Make Me, which features vocals from Swedish artist
            Salem Al Fakir. True debuted at number two on the UK Albums Chart
            and peaked within the top-ten of at least ten countries; it
            subsequently re-peaked at number two on the chart in February 2014.
            On 24 March 2014, Avicii released a remixed version of the album
            titled True (Avicii by Avicii). A two-disc edition, comprising the
            standard 10-track edition alongside the remix album featuring a new
            album cover, was released in June 2014.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AlbumPage;

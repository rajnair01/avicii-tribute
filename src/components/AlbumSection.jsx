import Tim from "../assets/Avicii-Tim.png";
import True from "../assets/avicii-true.png";
import Stories from "../assets/avicii-stories.png";
import { Link } from "react-router-dom";
import aviciibyavicii from "../assets/aviciibyavicii.jpg";

function AlbumSection() {
  return (
    <div className="md:flex md:h-[50vh] gap-1 bg-black text-white">
      {/* <p className="md:hidden block dark:text-gray-300 text-gray-950 text-2xl font-caveat pl-2 py-2">
        Albums -
      </p> */}
      <div className="md:w-1/3">
        <Link to="./tim">
          <img
            src={Tim}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </Link>
        {/* <p className="md:hidden block text-center">Tim (2019)</p> */}
      </div>
      <div className=" md:w-1/3 ">
        <Link to="./stories">
          <img
            src={Stories}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </Link>
      </div>
      <div className=" md:w-1/3 ">
        <Link to="./true">
          <img
            src={True}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </Link>
      </div>
      <div className=" md:w-1/3 ">
        <Link to="./aviciibyavicii">
          <img
            src={aviciibyavicii}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </Link>
      </div>
    </div>
  );
}
export default AlbumSection;

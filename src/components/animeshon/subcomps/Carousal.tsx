import { CalendarDays, HistoryIcon, StarIcon, Tally3 } from "lucide-react";
import CarousalData from "../../../constants/carousal-data";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousal: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [clickedOn, setClickedOn] = useState<string>("");

  useEffect(
    function () {
      const automateSlider = setInterval(loadNextImage, 3000);

      return () => {
        clearInterval(automateSlider);
      };
    },
    [clickedOn],
  );

  const loadPrevImage = function (e: React.MouseEvent<HTMLImageElement>) {
    setActive((active) =>
      active - 1 < 0 ? CarousalData.length - 1 : active - 1,
    );

    if (e) {
      setClickedOn((clickedOn) => (clickedOn === "prev" ? "next" : "prev"));
    }
  };
  const loadNextImage = function (e: React.MouseEvent<HTMLImageElement>) {
    setActive((active) => (active + 1 == CarousalData.length ? 0 : active + 1)); // or you can do simply (active + 1)%images.length

    if (e) {
      setClickedOn((clickedOn) => (clickedOn === "prev" ? "next" : "prev"));
    }
  };

  return (
    <section className={` h-[400px] md:h-[500px] lg:h-[65vh]  w-full`}>
      <div
        id="background-image-container"
        className=" h-full bg-no-repeat relative"
        style={{
          backgroundImage: `url(${CarousalData[active].cover})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
          transition: "1.1s",
        }}
      >
        <div
          id="carousal-info"
          className="w-full xl:w-[70%] h-full absolute left-0 top-0 flex flex-col justify-center gap-y-3 pl-2 lg:pl-3 pt-4"
        >
          <div id="title">
            <h2 className="text-xl lg:text-3xl font-semibold text-wrap">
              {CarousalData[active].title}
            </h2>
          </div>
          <div className="flex gap-x-1 md:gap-x-2 lg:gap-x-3">
            <p className="flex gap-x-1 lg:gap-x-2">
              <StarIcon />{" "}
              <span className={`text-[#90ee90] font-semibold`}>
                {CarousalData[active].rating}
              </span>
            </p>
            <p className="flex gap-x-1 lg:gap-x-2">
              <HistoryIcon className="text-orange-400" />
              <span className="font-semibold">
                {CarousalData[active].status}
              </span>
            </p>
            <p className="flex gap-x-0.5 items-center">
              <Tally3 />
              <span className="font-semibold">
                {CarousalData[active].totalEpisodes}
              </span>
            </p>
            <p className="flex gap-x-1 lg:gap-x-2">
              <CalendarDays />
              <span className="font-semibold">
                {CarousalData[active].releaseDate}
              </span>
            </p>
          </div>
          <div className="flex gap-x-2 flex-wrap gap-y-1">
            {CarousalData[active].genres.map((genre) => (
              <span
                key={genre}
                className=" px-2 py-0.5 rounded-lg bg-violet-300  text-black"
              >
                {genre}
              </span>
            ))}
          </div>
          <p className="max-h-[60px] text-lg lg:text-xl  leading-6 line-clamp-2  text-ellipsis">
            {CarousalData[active].description}
          </p>
          <div className="flex gap-x-2">
            <Link
              className=" text-center max-w-[100px] w-full ml-1 px-2 py-1 text-xl rounded-md bg-black text-[#e50000] border border-white"
              to={`/anime/info/${CarousalData[active].id}`}
            >
              Info
            </Link>
            <Link
              className="text-center max-w-[100px] w-full  ml-1 px-2 py-1 text-xl rounded-md bg-black text-[#e50000] border border-white"
              to={`/anime/watch/${CarousalData[active].watchId}`}
            >
              Watch
            </Link>
          </div>
        </div>
        <div className="dot-container flex justify-center items-center  mt-2 absolute bottom-4 w-full ">
          {CarousalData.map(function (_carousalData, imgIndex) {
            return (
              <li
                key={imgIndex}
                className={`${imgIndex === active ? "bg-red-500" : "bg-white"} h-3 w-3 rounded-full ml-[1rem]`}
                style={{ transition: "0.1s" }}
              ></li>
            );
          })}
        </div>
        <div
          id="next-prev-container"
          className="absolute right-4 bottom-10 2xl:right-12 2xl:bottom-16"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-left-arrow-icon-download-in-svg-png-gif-file-formats--the-best-icons-for-modern-web-pack-sign-symbols-460297.png?f=webp&w=256"
            alt="left-arrow"
            className=" h-9 w-9 md:h-14 md:w-14   cursor-pointer bg-pink-300 rounded-lg pr-0.5 pb-0.5 mb-3"
            onClick={loadPrevImage}
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-right-arrow-icon-download-in-svg-png-gif-file-formats--the-best-icons-for-modern-web-pack-sign-symbols-460299.png?f=webp&w=256"
            alt="right-arrow"
            className=" h-9 w-9 md:h-14 md:w-14 cursor-pointer bg-pink-300 rounded-lg pr-0.5 pb-0.5"
            onClick={loadNextImage}
          />
        </div>

        <div id="spotlight-info" className="h-[101%] carousal-gradient "></div>
      </div>
    </section>
  );
};

export default Carousal;

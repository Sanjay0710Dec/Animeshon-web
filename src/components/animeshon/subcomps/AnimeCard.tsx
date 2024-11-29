import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Star, Tally4 } from "lucide-react";
interface AnimeCardProps {
  animePoster: string;
  title: string;
  rating: number;
  releaseYear: number;
  episodes: number;
  type: string;
  infoId: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({
  animePoster,
  title,
  rating,
  releaseYear,
  episodes,
  type,
  infoId,
}) => {
  return (
    <div className=" h-[300px] lg:h-[400px]  rounded-md   shadow-sm shadow-white">
      <Link to={`/anime/info/${infoId}`}>
        <img
          id="anime-poster"
          src={animePoster}
          alt={title}
          className="h-[75%]  w-full rounded-md"
        />
        <h3
          id="title"
          className=" mx-auto mt-3 text-sm  leading-5 truncate whitespace-nowrap px-2 hover:text-[#e50000]"
        >
          {title}
        </h3>
        <div
          id="anime-info"
          className=" flex items-center justify-between px-2 mt-2 text-lg "
        >
          {rating ? (
            <p id="rating" className="  rounded-md flex gap-0.5 items-center">
              <Star size={18} />
              <span className="inline-block">{rating}</span>
            </p>
          ) : null}
          {releaseYear ? (
            <p
              id="release-year"
              className="  rounded-md flex items-center gap-0.5"
            >
              <CalendarDays size={18} />
              <span className="inline-block">{releaseYear}</span>
            </p>
          ) : null}
          {episodes ? (
            <p id="episodes" className="  rounded-md flex items-center gap-0.5">
              <Tally4 size={18} />
              <span className="inline-block">{episodes}</span>
            </p>
          ) : null}
          {type ? (
            <p id="anime-type" className="  rounded-md">
              {type}
            </p>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;

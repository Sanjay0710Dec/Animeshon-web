import React, { useMemo } from "react";
import { AnimeInfo } from "../../../../types/animeResult/info";
import { Eye, StarIcon } from "lucide-react";
import descriptionFormatter from "../../../../utils/formatDescription";
import formatEpisode from "../../../../utils/formatEpisode";
import { Link } from "react-router-dom";
import { selectRatingColour } from "../../../../utils/selectRatingColor";

const MainDescription: React.FC<AnimeInfo> = (result) => {
  const {
    id,
    title,
    image,
    cover,
    description,
    status,
    startDate,
    endDate,
    totalEpisodes,
    currentEpisodes,
    rating, 
    duration,
    genres,
    season,
    studios,
    subOrDub,
    type,
    episodes
  } = result;
  const { english, userPreferred,romanj } = title;

  const modifiedDescription = useMemo(function () {

    return descriptionFormatter(description || "");
  }, [description]);

  const [animeTitle, _epsiodeString] = useMemo(function () {
    
     if(episodes.length > 0){
      return formatEpisode(episodes[0].id);
     }
     return []
  }, [episodes]);
  const ratingTextColour = useMemo(function(){
    
    return selectRatingColour(rating);
  },[rating])


  return (
    <section className="text-white">
      {cover && <div id="cover" className="h-[250px] md:h-[400px]">
        <img src={cover ? cover : ""} alt="cover" className="h-full w-full" />
      </div>}
      <div
        id="description-and-image"
        className="flex flex-col md:flex-row gap-y-4 md:gap-x-5 pt-4 px-2">

        <div id="image" className="max-w-[200px] md:max-w-[250px] lg:max-w-[300px] ">
          <img src={image ? image : ""} className=" h-full w-full rounded" />
        </div>

        <div id="description" className="flex flex-col gap-y-4 ">

          <div id="anime-title">
            <h2 className="text-xl  text-pink-400 font-semibold text-wrap  md:text-2xl">{english ? english : userPreferred ? userPreferred:romanj}</h2>
          </div>

          <div id="rating" className="flex gap-x-1">
            <span>Rating:</span>
            <StarIcon size={20} />
            <span className={`${ratingTextColour}`}>{rating}</span>
          </div>

          <div id="airing" className="flex gap-x-2 ">
            <span>Airing:</span>
            {startDate &&
              <span>{startDate.day}-{startDate.month}-{startDate.year}</span>
            }
            <span>to</span>
            {endDate && <span>{endDate.day}-{endDate.month}-{endDate.year}</span>}
          </div>
          <div id="episodes" className="flex flex-col gap-y-4">
            {totalEpisodes && <p id="total-episodes" className="flex gap-x-2">
              <span>TotalEpisodes:</span>
              <span>{totalEpisodes}</span>
            </p>}
            {currentEpisodes && <p id="current-episodes" className="flex gap-x-2">
              <span>CurrentEpisodes:</span><span>{currentEpisodes}</span>
            </p>}
          </div>
          {duration &&
            <div id="anime-each-episode-duration" className="flex gap-x-2 ">
              <span>Duration:</span><span>{duration} mins</span>
            </div>}
          {genres.length > 0 ?
            <div id="genres" className="flex gap-x-2 flex-wrap ">
              <span>Genres:</span>
              {genres.map((genre, index) => (
                <span key={genre + index}>{genre}{index !== genres.length - 1 ? "," : null}</span>
              ))}
            </div>
            : null}
          {status && <div id="anime-status" className="flex gap-x-2">
            <span>Status:</span><span>{status}</span>
          </div>}
          {season && <div id="anime-season" className="flex gap-x-2">
            <span>Season:</span><span>{season}</span>
          </div>}
          {type && <div id="anime-type" className="flex gap-x-2">
            <span>Type:</span><span>{type}</span>
          </div>}
          {subOrDub && <div id="anime-audio-type" className="flex gap-x-2">
            <span>sub or dub:</span><span>{subOrDub}</span>
          </div>}
          {studios.length > 0 ?
            <div id="genres" className="flex gap-x-2 flex-wrap">
              <span>Studios:</span>
              {studios.map((studio, index) => (
                <span key={studio + index}>{studio}{index !== studios.length - 1 ? "," : null}</span>
              ))}
            </div>
            : null}
         { episodes.length > 0 ? (
            <div id="watch-anime" >
            <Link className="inline-block w-[150px] bg-white text-black  px-2 py-1 rounded-md" to={`/anime/watch/${animeTitle}`}>
              <div className="flex text-xl md:text-2xl gap-x-1 items-center justify-center"><Eye size={18}/><span>Watch</span></div>
            </Link>
          </div>
         ): (<div className="text-white font-semibold">No Episodes Found to Watch</div>)}
        </div>
      </div>
      {modifiedDescription &&
        <div id="anime-description" className="mt-2 px-2">
          <p className="text-2xl text-[#e50000] mb-0.5 font-semibold">Description:</p>
          <p className="md:text-lg text-justify px-1 ml-1">{modifiedDescription}.</p>
        </div>}

    </section>
  );
};

export default MainDescription;


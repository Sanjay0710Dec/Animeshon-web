import React from "react";
import { Link } from "react-router-dom";
import useAnimeSearch from "../../../hooks/useAnimeSearch";
import { Result } from "../../../types/animeResult/general";
import { CalendarDays, StarIcon, Tally4 } from "lucide-react";

const Search: React.FC = () => {
  const {
    animeSearched,
    setAnimeSearched,
    loading,
    animeSearchErrorMessage,
    result,
  } = useAnimeSearch();
  return (
    <div className=" bg-white text-black flex justify-center  w-[75%] xl:w-[40%] px-0.5 py-0.5 h-[60%] rounded-md border border-black relative">
      <input
        type="text"
        id="anime-search"
        placeholder="Search"
        className="py-0.5 pl-1 outline-none inline-block w-[70%] rounded-md h-full text-[16px]"
        autoComplete="off"
        value={animeSearched}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
          setAnimeSearched(e.target.value);
        }}
      />
      <Link
        to={"/anime/filter"}
        className="bg-black text-white text-sm md:text-xl  w-[30%]  flex justify-center items-center rounded-md"
      >
        Filter
      </Link>
      <div
        id="anime-searched-results"
        className="max-h-[200px] md:max-h-[300px] overflow-y-auto overscroll-y-contain absolute left-0 top-[3rem] rounded-md scrollbar-hide bg-white text-black w-full z-50"
      >
        {loading ? (
          <div className="text-xl pl-1">loading....</div>
        ) : result ? (
          result.results.map((animeResult, index) => (
            <SearchedResult
              key={index + animeResult.id}
              result={animeResult}
              setAnimeSearched={setAnimeSearched}
            />
          ))
        ) : (
          <div>{animeSearchErrorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default Search;

const SearchedResult: React.FC<{
  result: Result;
  setAnimeSearched: React.Dispatch<React.SetStateAction<string>>;
}> = React.memo(({ result, setAnimeSearched }) => {
  const { image, id, title, rating, totalEpisodes, type, releaseDate } = result;
  const { userPreferred, english, romanj } = title;
  return (
    <Link
      to={`/anime/info/${id}`}
      onClick={function () {
        setAnimeSearched("");
      }}
    >
      <div className="border-b border-black px-1.5 py-1">
        <div
          id="tile-image"
          className="flex items-center flex-wrap md:flex-nowrap gap-x-2 md:gap-x-4"
        >
          <div id="image" className="max-w-[40px] md:max-w-[80px]">
            <img
              src={image || ""}
              alt="poster"
              className="w-full h-full rounded-sm"
            />
          </div>
          <p className="text-lg md:text-xl font-semibold ">
            {english ? english : userPreferred ? userPreferred : romanj}
          </p>
        </div>
        <div
          id="description"
          className="flex gap-x-3 md:gap-x-4 flex-wrap md:text-lg mt-0.5"
        >
          {rating && (
            <p className="flex gap-x-1 items-center">
              <StarIcon size={18} />
              <span>{rating}</span>{" "}
            </p>
          )}
          {totalEpisodes && (
            <p className="flex gap-x-1 items-center">
              <Tally4 size={18} /> <span>{totalEpisodes}</span>
            </p>
          )}
          {releaseDate && (
            <p className="flex gap-x-1 items-center">
              {" "}
              <CalendarDays size={18} /> <span>{releaseDate}</span>{" "}
            </p>
          )}
          <p>Type: {type}</p>
        </div>
      </div>
    </Link>
  );
});

import React, { useState } from "react";
import { EpisodeInfo } from "../../../../types/animeResult/general";

const EpisodesComponent: React.FC<{
  episodes: EpisodeInfo[];
  setEpisodeId: React.Dispatch<React.SetStateAction<string>>;
}> = React.memo(({ episodes, setEpisodeId }) => {
  const [episodeTitle, setEpisodeTitle] = useState(episodes[0]?.title || "");
  const [activeEpisode, setActiveEpisode] = useState(0);
  return (
    <section className="mt-4">
      <div
        id="episode-title"
        className="px-2 text-2xl lg:text-3xl text-center text-wrap max-w-[900px] w-full mx-auto mb-2"
      >
        <span>you're watching:</span>
        <span className="text-pink-300 ml-2">{episodeTitle}</span>
      </div>
      <div className="max-w-[900px] mx-auto max-h-[350px] md:max-h-[450px] grid grid-cols-2 md:grid-cols-3 overflow-y-auto  overscroll-y-contain scrollbar-hide border border-gray-300 rounded-md  gap-x-2.5 md:gap-x-4  px-2 py-2 gap-y-2 ">
        {episodes.map((episode, index) => (
          <div
            className={`text-lg md:text-xl font-semibold cursor-pointer flex flex-col items-center justify-center gap-y-2 p-1  ${index === activeEpisode ? "bg-pink-300 text-black" : ""} border border-white rounded-md`}
            key={episode.title + index}
            onClick={function () {
              setEpisodeTitle(episode.title);
              setActiveEpisode(index);
              setEpisodeId(episode.episodeId);
            }}
          >
            <span>{episode.number}</span>
            <span>{episode.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
});

export default EpisodesComponent;

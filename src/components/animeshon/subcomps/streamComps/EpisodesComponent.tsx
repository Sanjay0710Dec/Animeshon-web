import React, { useState } from "react";
import { EpisodeInfo } from "../../../../types/animeResult/general";

const EpisodesComponent: React.FC<{
  episodes: EpisodeInfo[];
  setEpisodeId: React.Dispatch<React.SetStateAction<string>>;
}> = React.memo(({ episodes, setEpisodeId }) => {
    const[episodeTitle,setEpisodeTitle] = useState(episodes[0]?.title || "");
    const[activeEpisode,setActiveEpisode] = useState(0);
  return (
    <section className="mt-4">
      <div id="episode-title" className="px-2  mb-2 text-2xl lg:text-3xl text-center text-wrap"><span>you're watching:</span> <span  className="text-[#e50000]">{episodeTitle}</span></div>
    <div className=" lg:max-w-[900px] lg:mx-auto max-h-[350px] md:max-h-[450px]   flex flex-wrap overflow-y-auto  overscroll-y-contain scrollbar-hide border border-orange-400 rounded-md justify-evenly gap-x-2.5 md:gap-x-4  px-2 py-2 gap-y-2 ">
      {episodes.map((episode, index) => (
        <div
          className={`cursor-pointer flex items-center justify-center p-2  h-[36px] w-[36px] md:h-[2.5rem] md:w-[2.5rem] ${index === activeEpisode ? "bg-[#e50000] text-black": null} border border-white   rounded-md`}
          title={episode.title}
          key={episode.title + index}
          onClick={function () {
            setEpisodeTitle(episode.title);
            setActiveEpisode(index);
            setEpisodeId(episode.episodeId);
          }}
        >
          {episode.number}
        </div>
      ))}
    </div>
    </section>
  );
});

export default EpisodesComponent;


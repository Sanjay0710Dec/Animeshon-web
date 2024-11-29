import React from "react";
import useEpisodesInfo from "../../../hooks/useEpisodesInfo";
import EpisodesComponent from "../subcomps/streamComps/EpisodesComponent";
import VideoComponent from "../subcomps/streamComps/VideoComponent";

const AnimeStreamPageMainComponent: React.FC = () => {
  const { loading, streamErrorMessage, episodes, episodeId, setEpisodeId } =
    useEpisodesInfo();
  return (
    <main className="main-container   bg-black pb-4 text-white px-2 lg:px-0  pt-8 ">
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center text-3xl">
          loading...
        </div>
      ) : streamErrorMessage ? (
        <div className="h-screen w-full flex items-center justify-center text-3xl">
          {streamErrorMessage}
        </div>
      ) : (
        <React.Fragment>
           {episodeId && <VideoComponent src={episodeId}/>}
           {episodes.length > 0 && <EpisodesComponent episodes={episodes} setEpisodeId={setEpisodeId}/>}
        </React.Fragment>
      )}
    </main>
  );
};
export default AnimeStreamPageMainComponent;


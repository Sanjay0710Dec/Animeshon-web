import React from "react";
import useAnimeInfo from "../../../hooks/useAnimeInfo";
import MainDescription from "../subcomps/info/MainDescription";
import AnimeInfoRecommended from "../subcomps/info/RecommendedAnime";
import AnimeInfoRelated from "../subcomps/info/RelatedAnime";

const AnimeInfoPageMainComponent: React.FC = () => {
  const { loading, errorMessage, result } = useAnimeInfo();
  return (
    <main className="main-container   bg-black pb-4">
      {loading ? (
        <div className="min-h-screen flex items-center justify-center  text-3xl font-bold">
          loading...
        </div>
      ) : result ? (
        <React.Fragment>
          <MainDescription {...result} />
          <AnimeInfoRecommended {...result}/>
          <AnimeInfoRelated {...result}/>
        </React.Fragment>
      ) : (
        <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
          {errorMessage}
        </div>
      )}
    </main>
  );
};

export default AnimeInfoPageMainComponent;


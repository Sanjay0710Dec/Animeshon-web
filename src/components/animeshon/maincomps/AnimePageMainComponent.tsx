import React from "react";
import Carousal from "../subcomps/Carousal";
import TrendingAnime from "../subcomps/TrendingAnime";
import RecentAiredEpisodes from "../subcomps/RecentAiredEpisodes";
import Top10Anime from "../subcomps/Top10Anime";
import Header from "../../ui/layout/header/Header";
import Footer from "../../ui/layout/footer/Footer";

const AnimePageMainComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Header backgroundBlack={false} />
      <main className="main-container  bg-black pb-4">
        <Carousal />
        <TrendingAnime />
        <RecentAiredEpisodes />
        <Top10Anime />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AnimePageMainComponent;

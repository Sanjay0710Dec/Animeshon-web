import React, { useEffect } from "react";
import Header from "../components/ui/layout/header/Header";
import AnimeInfoPageMainComponent from "../components/animeshon/maincomps/AnimeInfoPageMainComponent";
import Footer from "../components/ui/layout/footer/Footer";

const AnimeInfo: React.FC = () => {
  useEffect(function(){
    window.scrollTo(0,0);
 },[]);
 
  return (
    <React.Fragment>
      <Header backgroundBlack={true} />
        <AnimeInfoPageMainComponent />
      <Footer />
    </React.Fragment>
  );
};
export default AnimeInfo;


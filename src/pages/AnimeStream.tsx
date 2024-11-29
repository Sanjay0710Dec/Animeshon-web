import React, { useEffect } from "react";
import Header from "../components/ui/layout/header/Header";
import Footer from "../components/ui/layout/footer/Footer";
import AnimeStreamPageMainComponent from "../components/animeshon/maincomps/AnimeStreamPageMainComponent";

const AnimeStream:React.FC = () =>{
    useEffect(function(){
        window.scrollTo(0,0);
     },[]);
     
    return (
        <React.Fragment>
            <Header backgroundBlack={true}/>
            <AnimeStreamPageMainComponent/>
            <Footer/>
        </React.Fragment>
    )
}
export default AnimeStream
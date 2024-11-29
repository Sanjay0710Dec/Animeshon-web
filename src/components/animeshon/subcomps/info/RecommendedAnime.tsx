import React from "react";
import { AnimeInfo } from "../../../../types/animeResult/info";
import AnimeCard from "../AnimeCard";



const AnimeInfoRecommended:React.FC<AnimeInfo> = (result) =>{
    const {recommendations} = result
    return (
        <section id="trending-anime-container" className="mt-4">
            <h2 id="container-title" className="text-3xl mb-2 pl-4 font-semibold text-[#e50000]">Recommended Anime</h2>
            { 
                    <div className="py-1 grid grid-flow-col overflow-x-auto auto-cols-[200px]  lg:auto-cols-[270px] gap-x-5 overscroll-x-contain px-2 lg:px-4 scrollbar-hide" style={{ scrollSnapType: "mandatory", scrollSnapAlign: "start" }}>
                        {recommendations.map((animeInfo,index) => (
                            <AnimeCard key={index + animeInfo.id} animePoster={animeInfo.image} title={animeInfo.title.english} rating={animeInfo.rating} releaseYear={0} episodes={animeInfo.episodes || 0} type={animeInfo.type} infoId={animeInfo.id + ""} />
                        ))}
                    </div>
                
            }
        </section>
    )
}
export default AnimeInfoRecommended
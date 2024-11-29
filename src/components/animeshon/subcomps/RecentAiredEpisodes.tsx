import React from "react";
import useRecentEpisodes from "../../../hooks/useRecentEpisodes";
import AnimeCardsSkeleton from "../../skeletons/AnimeCardsSkeleton";
import AnimeCard from "./AnimeCard";

const RecentAiredEpisodes: React.FC  = () =>{
         const{result, errorMessage, loading} = useRecentEpisodes();
    return(
        <section id="recent-anime-episode-container" className="mt-4">
        <h2 id="container-title" className="text-3xl mb-2 pl-4 font-semibold text-[#e50000]">Recently Aired Episodes</h2>
        {loading ? <AnimeCardsSkeleton cardsCount={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]} /> : (
            result ? (
                <div className="py-1  grid grid-flow-col overflow-x-auto auto-cols-[200px]  lg:auto-cols-[270px] gap-x-5 overscroll-x-contain px-2 lg:px-4 scrollbar-hide" style={{ scrollSnapType: "mandatory", scrollSnapAlign: "start" }}>
                    {result.results.map((animeInfo,index) => (
                        <AnimeCard key={index + animeInfo.id} animePoster={animeInfo.image} title={animeInfo.title.english} rating={0} releaseYear={0} episodes={animeInfo.episodeNumber} type={animeInfo.type} infoId={animeInfo.id} />
                    ))}
                </div>
            ) : (<p id="error-message-container" className="text-xl md:text-2xl  px-1.5 text-wrap">{errorMessage}</p>)
        )}
    </section>
    )
}

export default RecentAiredEpisodes;
import React, { useMemo } from "react";
import AnimeCardsSkeleton from "../../skeletons/AnimeCardsSkeleton";
import AnimeCard from "./AnimeCard";
import useTop10Anime from "../../../hooks/useTop10Anime";
import { top10AnimeCard } from "../../../types/animeResult/search";
const top10Titles = ["Today", "Week", "Month"];

const Top10Anime: React.FC = React.memo(() => {
    const { result, loading, errorMessage } = useTop10Anime();
    const destructuredtop10Result = useMemo(function () {

        if (result) {
            return [result.today, result.week, result.month];
        }
        return []

    }, [result])

    return (

        <section id="recent-anime-episode-container" className="mt-4">
            <h2 id="container-title" className="text-3xl mb-2 pl-4 font-semibold text-[#e50000]">Top 10 Anime</h2>
            <div id="top10-main">
                {
                    loading ? (
                        top10Titles.map((title, index) => (
                            <div key={title + index} id={title.toLocaleLowerCase() + index} className="mb-2">
                                <h3 className="text-2xl font-semibold pl-4 my-2">{title}</h3>
                                <AnimeCardsSkeleton cardsCount={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                            </div>
                        ))
                    ) : (
                        destructuredtop10Result.length > 0 ? (
                            destructuredtop10Result.map((result, index) => (
                                <Top10AnimeEachSection  key={top10Titles[index] + 1} result={result} index={index} />
                            ))
                        ) : (<p id="error-message-container" className="text-xl md:text-2xl  px-1.5 text-wrap">{errorMessage}</p>)
                    )
                }
            </div>
        </section>
    )
})

export default Top10Anime;

const Top10AnimeEachSection: React.FC<{ result: top10AnimeCard[], index: number }> = ({ result, index }) => {

    return (
        <div id={top10Titles[index].toLocaleLowerCase() + index} className="mb-2">
            <h3 className="text-2xl font-semibold my-1 pl-4">{top10Titles[index]}</h3>
            <div className="py-1 grid grid-flow-col overflow-x-auto auto-cols-[200px]  lg:auto-cols-[270px] gap-x-5 overscroll-x-contain px-2 lg:px-4 scrollbar-hide" style={{ scrollSnapType: "mandatory", scrollSnapAlign: "start" }}>
                {result.map((animeInfo, index) => (
                    <AnimeCard key={index + animeInfo.id} animePoster={animeInfo.poster} title={animeInfo.name} rating={0} releaseYear={0} episodes={animeInfo.episodes.sub} type={""} infoId={animeInfo.id} />
                ))}
            </div>
        </div>
    )
}
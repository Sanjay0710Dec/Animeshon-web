import React from "react";

   
const AnimeCardsSkeleton: React.FC<{ cardsCount: number[] }> = ({ cardsCount }) => {

    return (
        <section id="shimmer-container" className="h-[300px] lg:h-[400px] py-1 grid grid-flow-col overflow-x-auto auto-cols-[200px]  lg:auto-cols-[275px] gap-x-5 overscroll-x-contain px-2 scrollbar-hide" style={{scrollSnapType:"mandatory",scrollSnapAlign:"start"}} >

           
                {cardsCount.map((card) => (
                    <div
                        key={card}
                        className=" h-full  rounded-md p-1 shadow-md shadow-white cursor-pointer mb-1"
                    >
                        <div id="anime-poster" className="h-[75%] bg-gray-200 w-full card-breathing rounded-md" />
                        <h3 id="title" className="w-[90%] h-6 mx-auto bg-gray-200 mt-4 card-breathing rounded-md" />
                        <div id="anime-info" className="h-6 flex items-center justify-between px-2 mt-2 card-breathing ">
                            <p id="rating" className="w-[22%] h-full bg-gray-200 rounded-md" />
                            <p id="release-year" className="w-[22%] h-full bg-gray-200 rounded-md" />
                            <p id="episodes" className="w-[22%] h-full bg-gray-200 rounded-md" />
                            <p id="anime-type" className="w-[22%] h-full bg-gray-200 rounded-md" />
                        </div>
                    </div>
                ))}
          
        </section>
    )
}

export default AnimeCardsSkeleton;
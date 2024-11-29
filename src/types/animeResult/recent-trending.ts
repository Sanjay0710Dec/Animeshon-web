import { AnimeFormat,titles,AnimeStatus,AnimeGenres } from "./general"

export interface AnimeRecentEpisodes{
    currentPage:number,
    totalResults:number,
    results:{
      id:string,
      malId?:string,
      title:{
        romanji:string,
        english:string,
        native:string,
      },
      image:string,
      imageHash: "hash" | null,
      episodeId:string,
      episodeTitle:string,
      episodeNumber:number,
      type:AnimeFormat
    }[]
}



export interface TrendingAnimeResult{
    currentPage:number,
    hasNextPage:boolean,
    results:{
      id:string,
      malId:number,
      title:titles,
      image:string,
      imageHash:"hash" | null,
      trailer:{
        id?:string,
        site?:string,
        thumbnail?:string,
        thumbnailHash:"hash" | null
      },
      description:string,
      status:AnimeStatus,
      cover:string,
      coverHash:"hash" | null,
      rating:number,
      releaseDate:number,
      color:string,
      genres:AnimeGenres[],
      totalEpisodes:number,
      duration:number,
      type:AnimeFormat
    }[]
}

export interface PopularAnime extends TrendingAnimeResult{
  
}
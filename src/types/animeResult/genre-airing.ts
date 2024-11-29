import { titles,AnimeFormat ,AnimeGenres} from "./general"


export interface AnimeByGenres{
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
      cover:string,
      coverHash:"hash" | null,
      rating:number,
      releaseDate:number,
      color:string,
      totalEpisodes:number,
      duration:number,
      type:AnimeFormat
     }[]
}

export interface AnimeAiringSchedule{
    currentPage:number,
    hasNextPage:boolean,
    results:{
      id:string,
      malId:number,
      episode:number,
      airingAt:number,
      title:titles,
      country:string,
      image:string,
      imageHash:"hash" | null,
      description:string,
      cover:string,
      coverHash:"hash" | null,
      genres:AnimeGenres[],
      color:string,
      rating:number,
      releaseDate:number,
      type:AnimeFormat
     }[]
}
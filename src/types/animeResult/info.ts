import { titles,AnimeStatus,AnimeGenres,AnimeSeason,AnimeFormat,AnimeRecommendation,
    AnimeCharacter,AnimeRelation,AnimeMapping,AnimeArtwork,AnimeEpisode} from "./general";

// 3: Particular Anime Info

export interface AnimeInfo{
    id:string,
    title:titles,
    malId:number,
    synonyms:string[],
    isLicensed:boolean,
    isAdult:boolean,
    countryOfOrigin:string,
    image:string | null,
    imageHash:"hash" | null,
    cover:string | null,
    coverHash:"hash" | null,
    popularity:number | null,
    description:string | null,
    status:AnimeStatus,
    startDate:{
      year:number,
      month:number,
      day:number
    },
    endDate:{
    year:number,
    month:number,
    day:number
   },
   totalEpisodes:number,
   currentEpisodes:number,
   rating:number,
   duration:number,
   genres:AnimeGenres[],
   season:AnimeSeason,
   studios:string[],
   subOrDub:"sub" | "dub",
   type:AnimeFormat,
   recommendations:AnimeRecommendation[],
   characters:AnimeCharacter[],
   relations:AnimeRelation[],
   mappings?:AnimeMapping[],
   artwork?:AnimeArtwork[],
   episodes:AnimeEpisode[]
      
    
}




// utils of the main Result.
export interface titles{
    romanj:string,
    english:string,
    native:string,
    userPreferred?:string,
}

export enum AnimeStatus {
    ONGOING = "Ongoing",
    COMPLETED = "Completed",
    HIATUS = "Hiatus",
    CANCELLED = "Cancelled",
    NOT_YET_AIRED = "Not yet aired",
    UNKNOWN = "Unknown",
}

export enum AnimeFormat{
    TV = "TV",
    TV_SHORT = "TV_SHORT",
    OVA = "OVA",
    ONA = "ONA",
    MOVIE = "MOVIE",
    SPECIAL = "SPECIAL",
    MUSIC = "MUSIC",
    NONE = "NONE"
    
}

export enum AnimeSeason{
    WINTER = "WINTER",
    SPRING = "SPRING",
    SUMMER = "SUMMER",
    FALL = "FALL",
    NONE = "NONE"
}

export enum AnimeGenres{
    ACTION = "Action",
    ADVENTURE = "Adventure",
    CARS = "Cars",
    FANTASY = "Fantasy",
    HORROR = "Horror",
    MAHOU_SHOUJO = "Mahou Shoujo",
    MECHA = "Mecha",
    MUSIC = "Music",
    MYSTERY = "Mystery",
    PSYCHOLOGICAL = "Psychological",
    ROMANCE = "Romance",
    SCI_FI = "Sci-Fi",
    SPLICE_OF_LIFE = "Splice of Life",
    SPORTS = "Sports",
    SUPER_NATURAL = "Supernatural",
    THRILLER = "Thriller"
    
    
}

export interface AnimeRecommendation{
    id:number,
    malId:number,
    title:titles,
    status:AnimeStatus,
    episodes:number,
    image:string,
    imageHash:"hash" | null,
    cover:string,
    coverHash:"hash" | null,
    rating:number,
    type:AnimeFormat
}


interface AnimeVoiceActor{
    id:number,
    language:"Japanese" | "Engilsh" | "Korean" | "Italian" | "Spanish" | "Portuguese" | "French" | "German",
    name:{
      first:string,
      last:string,
      full:string,
      native:string,
      userPreferred:string,
    },
    image:string,
    imageHash:"hash" | null
}

export interface AnimeCharacter{
    id: number,
    role:"MAIN" | "SUPPORTING",
    name:{
      first:string,
      last:string,
      full:string,
      native:string,
      userPreferred:string
    },
    image:string,
    imageHash:"hash" | null,
    voiceActors:AnimeVoiceActor[]
}

export interface AnimeRelation{
    id:number,
    relationType: "PREQUEL" | "SUMMARY" | "OTHER" | "ADAPTATION" | "SIDE_STORY" | "SEQUEL",
    malId:number | null,
    title:titles,
    status:AnimeStatus,
    episodes: number | null,
    image:string,
    imageHash:"hash" | null,
    color:string,
    type:AnimeFormat,
    cover:string,
    coverHash:"hash" | null,
    rating:number
}

export interface AnimeMapping{
    id: string,
    providerId:string,
    similarity:number,
    providerType:string,
}

export interface AnimeArtwork{
    img:string,
    type:string,
    providerId:string
}

export interface AnimeEpisode{
    id:string,
    title:string,
    description:string | null,
    image:string,
    imageHash:"hash" | null,
    airDate: string | null
}


export interface Result{
    id:string,
    malId:number | null,
    title:titles,
    status:AnimeStatus,
    image:string | null,
    imageHash:"hash" | null,
    cover:string | null,
    coverHash:"hash" | null,
    popularity:number | null,
    description:string | null,
    rating:number | null,
    genres:AnimeGenres[] | [],
    color: string | null,
    totalEpisodes: number | null,
    currentEpisodesCount: number | null,
    type:AnimeFormat
    releaseDate: number | null
    
}

export interface EpisodeInfo{
    title:string,
    episodeId:string,
    number:number,
    isFiller:boolean
}



export interface AnimeOverallResult<T>{
    success:boolean,
    data:{
        message:string,
        result:T
    }
}

export interface CarousalType{
    id:string,
    watchId:string,
    title:string,
    cover:string,
    rating:number,
    status:string,
    genres:string[],
    totalEpisodes:number,
    type:string,
    releaseDate:number
    description:string
} 





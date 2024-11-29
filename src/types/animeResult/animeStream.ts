import { EpisodeInfo } from "./general";


export interface AnimeEpisodesInfo{
    totalEpisodes:string,
    episodes:EpisodeInfo[]
}


interface Subtitle{
    file:string,
    label?:string,
    kind:string,
    default?:boolean
}

interface EpisodeWatchTimeInfo{
    start:number,
    end:number
}

interface EpisodeWatchLink{
    url:string,
    type:string
}

export interface EpisodeWatchMainInfo{
    tracks:Subtitle[],
    intro:EpisodeWatchTimeInfo,
    outro:EpisodeWatchTimeInfo,
    sources:EpisodeWatchLink[],
    anilistId:number,
    malID:string

}

export interface VideoQuality{
    height:number,
    level:number
}
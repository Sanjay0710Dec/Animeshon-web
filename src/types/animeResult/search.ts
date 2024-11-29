import { Result } from "./general"
// 1: Basic Search Result

export interface SearchResult{
    currentPage: number,
    hasNextPage: boolean,
    results:Result[] | []
    
}

// 2: Advanced Search Result.

export interface AdvanceSearchResult{
    currentPage: number | null,
    hastNextPage: boolean,
    totalPages:number,
    totalResults:number,
    results:Result[] | []
    
}


export interface AdvancedSearchQuery{
    query?:string,
    page?:number,
    perPage?:number,
    type?:string,
    genres?: string[],
    format?:string,
    status?:string,
    year?:number,
    season?:string
}


export interface top10AnimeCard{
    id:string,
    rank:number,
    name:string,
    jname:string,
    poster:string,
    episodes:{
        sub:number,
        dub:number
    }
}

export interface top10AnimeResult{
    today:top10AnimeCard[],
    week:top10AnimeCard[],
    month:top10AnimeCard[]
}
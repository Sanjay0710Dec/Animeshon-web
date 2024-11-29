import {
  AnimeEpisodesInfo,
  EpisodeWatchMainInfo,
} from "../types/animeResult/animeStream";
import { AnimeOverallResult } from "../types/animeResult/general";
import { AnimeInfo } from "../types/animeResult/info";
import {
  AnimeRecentEpisodes,
  TrendingAnimeResult,
} from "../types/animeResult/recent-trending";
import { SearchResult, top10AnimeResult } from "../types/animeResult/search";

class animeApi {
  static async trendingAnime(
    page: number,
    perPage: number = 15,
  ): Promise<AnimeOverallResult<TrendingAnimeResult>> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/anime/trending?page=${page}&perPage=${perPage}`,
      );
      if(!fetchResponse.ok){
        throw new Error(fetchResponse.statusText);
      }
      const jsonResponse = await fetchResponse.json();
      return jsonResponse;
    } catch (error) {
      if (error instanceof Error && error.message.toLowerCase() !== "failed to fetch") {
         
        throw new Error(error.message);
      }
      throw new Error("not able to connect to server, please check your internet connection");
    }
  }

  static async recentlyAiredEpisodes(
    page: number,
    perPage: number = 15,
  ): Promise<AnimeOverallResult<AnimeRecentEpisodes>> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/anime/recent-anime-episodes?page=${page}&perPage=${perPage}`,
      );
      if(!fetchResponse.ok){
        throw new Error(fetchResponse.statusText);
      }
      const jsonResponse = await fetchResponse.json();

      return jsonResponse;
    } catch (error) {
      if (error instanceof Error && error.message.toLowerCase() !== "failed to fetch") {
         
        throw new Error(error.message);
      }
      throw new Error("not able to connect to server, please check your internet connection");
    }
  }

  static async top10Anime(): Promise<AnimeOverallResult<top10AnimeResult>> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/anime/top10-anime`,
      );
      if(!fetchResponse.ok){
        throw new Error(fetchResponse.statusText);
      }
    
      const jsonResponse = await fetchResponse.json();
      
      return jsonResponse;
    } catch (error) {
              
      if (error instanceof Error && error.message.toLowerCase() !== "failed to fetch") {
         
        throw new Error(error.message);
      }
      throw new Error("not able to connect to server, please check your internet connection");
    }
  }
  static async animeInfo(
    infoId: string,
  ): Promise<AnimeOverallResult<AnimeInfo>> {
    try {
      if (!parseInt(infoId)) {
        return animeApi.top10AnimeInfo(infoId);
        
      }
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/anime/info/${infoId}`,
      );
      if(!fetchResponse.ok){
        throw new Error("Anime " + fetchResponse.statusText);
      }
      
      const jsonResponse = await fetchResponse.json();
      return jsonResponse;
    } catch (error) {
        
      if (error instanceof Error && error.message.toLowerCase() !== "failed to fetch") {
        
        throw new Error(error.message);
      }
      throw new Error("not able to connect to server, please check your internet connection");
    }
  }
  static async top10AnimeInfo(
    infoId: string,
  ): Promise<AnimeOverallResult<AnimeInfo>> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/anime/top10AnimeInfo/${infoId}`,
      );
      if(!fetchResponse.ok){
        throw new Error("Anime " + fetchResponse.statusText);
      }
      const jsonResponse = await fetchResponse.json();
      return jsonResponse;

    } catch (error) {
       
      if (error instanceof Error && error.message.toLowerCase() !== "failed to fetch") {
        
        throw new Error(error.message);
      }
      throw new Error("not able to connect to server, please check your internet connection");
    }
  }

  static async basicSearchResult(
    animeRegex: string,
  ): Promise<AnimeOverallResult<SearchResult>> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/anime/search/${animeRegex}`,
      );
      if(!fetchResponse.ok){
        throw new Error(fetchResponse.statusText);
      }
      const jsonResponse = await fetchResponse.json();
      return jsonResponse;
    } catch (error) {
      if (error instanceof Error && error.message.toLowerCase() !== "failed to fetch") {
        
        throw new Error(error.message);
      }
      throw new Error("not able to connect to server, please check your internet connection");
    }
  }
  static async fetchAnimeEpisodes(
    animeTitle: string,
  ): Promise<AnimeOverallResult<AnimeEpisodesInfo>> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/anime/stream/episodes?animeId=${animeTitle}`,
      );
      if (!fetchResponse.ok) {
        
        throw new Error(fetchResponse.statusText);
      }
      const jsonResponse = await fetchResponse.json();

      return jsonResponse;
    } catch (error) {
    
      if (error instanceof Error && error.message.toLowerCase() !== "failed to fetch") {
       
        throw new Error(error.message);
      }
      throw new Error("not able to connect to server, please check your internet connection");
    }
  }
  static async fetchAnimeStreamingLink(
    epsiodeId: string,
    category: string,
  ): Promise<AnimeOverallResult<EpisodeWatchMainInfo>> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/anime/stream/watchEpisode?animeEpisodeId=${epsiodeId}&category=${category}`,
      );
      if(!fetchResponse.ok){
        throw new Error(fetchResponse.statusText);
      }
      const jsonResponse = await fetchResponse.json();

      
      return jsonResponse;
    } catch (error) {
      if (error instanceof Error && error.message.toLowerCase() !== "failed to fetch") {
        
        throw new Error(error.message);
      }
      throw new Error("not able to connect to server, please check your internet connection");
    }
  }
}

export default animeApi;

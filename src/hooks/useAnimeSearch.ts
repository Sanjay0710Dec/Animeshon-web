import { useEffect, useState } from "react"
import { SearchResult } from "../types/animeResult/search";
import animeApi from "../api/animeApi";

const useAnimeSearch = () =>{

    const[animeSearched,setAnimeSearched] = useState("");
    const[debouncedAnimeSearched,setDebouncedAnimeSearched] = useState("");
    const[loading,setLoading] = useState(false);
    const[animeSearchErrorMessage,setAnimeSearchErrorMessage] = useState("");
    const[result,setResult] = useState<SearchResult | null>(null);

   useEffect(function(){

      const clearDebounced = setTimeout(function(){
         setDebouncedAnimeSearched(animeSearched);
      },500);

      return () =>{
        clearTimeout(clearDebounced);
      }
   },[animeSearched]);

   useEffect(function(){
        if(!debouncedAnimeSearched){
         setResult(null);
         return;
        }
        setLoading(true);
      animeApi.basicSearchResult(debouncedAnimeSearched).then(function(jsonResponse){
                    
         setResult(jsonResponse.data.result);

      }).catch(function(error){
          setResult(null);
          setAnimeSearchErrorMessage(error?.message);
      }).finally(function(){
         setLoading(false);
      })
   },[debouncedAnimeSearched]);

   return {animeSearched,setAnimeSearched,loading,animeSearchErrorMessage,result};
}
export default useAnimeSearch;
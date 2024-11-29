import { useEffect, useState } from "react"
import animeApi from "../api/animeApi";


const useEpisodeStreamingLink = (src:string) =>{
      const[watchCategory,setWatchCategory] = useState<"sub"|"dub">("sub");
      const [videoStreamingLink,setVideoStreamingLink] = useState<string>("");
      const[streamingErrorMessage,setStreamingErrorMessage] = useState("");
      const[loading,setLoading] = useState(false);


      useEffect(function(){

           
             setLoading(true);
             animeApi.fetchAnimeStreamingLink(src,watchCategory).then(function(jsonResponse){
             
                 const {sources} = jsonResponse.data.result;
                 const streamInfo = sources[0];
                 const {url} = streamInfo;
                 setVideoStreamingLink(url);
                

             }).catch(function(error){
                  
                  setStreamingErrorMessage(error?.message);
             }).finally(function(){
                  setLoading(false);
             })
      },[src,watchCategory]);


      return {loading,streamingErrorMessage,videoStreamingLink,setWatchCategory};
    
}
export default useEpisodeStreamingLink
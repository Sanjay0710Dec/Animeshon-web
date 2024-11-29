import { useEffect, useState } from "react";
import { EpisodeInfo } from "../types/animeResult/general";
import { useNavigate, useParams } from "react-router-dom";
import animeApi from "../api/animeApi";

const useEpisodesInfo = () => {
  const { animeTitle } = useParams();
  const [episodes, setEpisodes] = useState<EpisodeInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [streamErrorMessage, setStreamErrorMessage] = useState("");
  const [episodeId, setEpisodeId] = useState("");

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!animeTitle) {
        alert("no animeTitle found");
        return navigate("/anime");
      
      }
      
      setLoading(true);
      animeApi
        .fetchAnimeEpisodes(animeTitle)
        .then(function (jsonResponse) {

          setEpisodes(jsonResponse.data.result.episodes);
          setEpisodeId(jsonResponse.data.result.episodes[0].episodeId);
        })
        .catch(function (error) {
          
            setStreamErrorMessage(error?.message);
          
        })
        .finally(function () {
          setLoading(false);
        });
    },
    [animeTitle],
  );

  return { loading, streamErrorMessage, episodes, episodeId, setEpisodeId };
};
export default useEpisodesInfo;


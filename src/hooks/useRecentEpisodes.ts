import { useState, useEffect } from "react";
import { AnimeRecentEpisodes } from "../types/animeResult/recent-trending";
import animeApi from "../api/animeApi";
const useRecentEpisodes = () => {
  const [page, _setPage] = useState<number>(1);
  const [result, setResult] = useState<AnimeRecentEpisodes>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    function () {
      setLoading(true);
      animeApi
        .recentlyAiredEpisodes(page)
        .then(function (response) {
          setResult(response.data.result);
        })
        .catch(function (error) {
            setResult(undefined);
          setErrorMessage(error?.message);
          
        })
        .finally(function () {
          setLoading(false);
        });
    },
    [page]
  );

  return { result, errorMessage, loading };
};

export default useRecentEpisodes;

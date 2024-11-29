import { useEffect, useState } from "react";
import animeApi from "../api/animeApi";
import { top10AnimeResult } from "../types/animeResult/search";

const useTop10Anime = () => {
  const [result, setResult] = useState<top10AnimeResult>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(function () {
    setLoading(true);
    animeApi
      .top10Anime()
      .then(function (jsonResponse) {
            setResult(jsonResponse.data.result);
       
      })
      .catch(function (error) {
        setResult(undefined);
         setErrorMessage(error?.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  return { result, errorMessage, loading };
};

export default useTop10Anime;


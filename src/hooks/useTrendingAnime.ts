import { useEffect, useState } from "react";
import animeApi from "../api/animeApi";
import { TrendingAnimeResult } from "../types/animeResult/recent-trending";

const useTrendingAnime = () => {
  const [page, _setPage] = useState<number>(1);
  const [result, setResult] = useState<TrendingAnimeResult>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    function () {
      setLoading(true);
      animeApi
        .trendingAnime(page)
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

export default useTrendingAnime;

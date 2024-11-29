import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import animeApi from "../api/animeApi";
import { AnimeInfo } from "../types/animeResult/info";

const useAnimeInfo = () => {
  const { infoId } = useParams();
  const [result, setResult] = useState<AnimeInfo | null>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(
    function () {
      if(!infoId){
        alert("not a valid Id");
        return navigate("/anime");
      }
      setLoading(true);
      animeApi
        .animeInfo(infoId)
        .then(function (jsonResponse) {
         
            setResult(jsonResponse.data.result);
         
        })
        .catch(function (error) {
          setErrorMessage(error?.message);
          setResult(null);
        })
        .finally(function () {
          setLoading(false);
        });
    },
    [infoId],
  );

  return { loading, errorMessage, result };
};

export default useAnimeInfo;


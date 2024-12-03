import { useCallback, useState } from "react";
import UserApi from "../api/userApi";

const useFeedBackAndSuggestion = () => {
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedBack] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [feedbackSuggestionMessage, setFeedBackSuggestionMessage] =
    useState("");

  const handleFeedbackAndSuggestionSubmit = useCallback(
    function () {
      setSubmitting(true);
      UserApi.uploadUserFeedBackAndSuggestion(feedback, suggestion)
        .then(function (jsonResponse) {
          setFeedBackSuggestionMessage(jsonResponse.data.message);
        })
        .catch(function (error) {
          setFeedBackSuggestionMessage(error?.message);
        })
        .finally(function () {
          setSubmitting(false);
          setFeedBack("");
          setSuggestion("");
        });
    },
    [feedback, suggestion],
  );

  return {
    submitting,
    feedback,
    suggestion,
    feedbackSuggestionMessage,
    setFeedBack,
    setSuggestion,
    handleFeedbackAndSuggestionSubmit,
  };
};
export default useFeedBackAndSuggestion;

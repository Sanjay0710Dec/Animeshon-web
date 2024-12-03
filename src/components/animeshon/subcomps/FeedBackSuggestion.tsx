import React from "react";
import useFeedBackAndSuggestion from "../../../hooks/useFeedBackAndSuggestion";

const FeedBackSuggestion: React.FC = () => {
  const {
    submitting,
    feedback,
    suggestion,
    feedbackSuggestionMessage,
    setFeedBack,
    setSuggestion,
    handleFeedbackAndSuggestionSubmit,
  } = useFeedBackAndSuggestion();
  return (
    <section className="max-w-[900px]  w-full mx-auto pt-16 flex flex-col gap-y-8 px-4 md:px-8 pb-4 lg:border lg:border-white lg:rounded-md">
      <h2 className="font-semibold text-center">Help us Improve</h2>
      <TextArea
        title="FeedBack *"
        value={feedback}
        setValue={setFeedBack}
        id="feedback-area"
      />
      <TextArea
        title="Suggestion"
        value={suggestion}
        setValue={setSuggestion}
        id="suggestion-area"
      />
      <button
        type="button"
        onClick={handleFeedbackAndSuggestionSubmit}
        disabled={submitting || !feedback}
        className="bg-blue-300 max-w-[180px] py-4 px-8 rounded-md text-black"
      >
        Submit
      </button>
      {feedbackSuggestionMessage && (
        <p className="text-center text-[#e50000]">
          {feedbackSuggestionMessage}
        </p>
      )}
    </section>
  );
};

export default FeedBackSuggestion;

const TextArea: React.FC<{
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}> = ({ title, value, setValue, id }) => {
  return (
    <div id={id}>
      <h3 className="mb-4 text-[#e50000] text-xl md:text-2xl">{title}</h3>
      <textarea
        cols={30}
        rows={5}
        value={value}
        onChange={function (e: React.ChangeEvent<HTMLTextAreaElement>) {
          setValue(e.target.value);
        }}
        className="block w-full rounded text-black outline-none bg-gray-200 p-1 text-lg"
      >
        {value}
      </textarea>
    </div>
  );
};

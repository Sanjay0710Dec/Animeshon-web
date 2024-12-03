import React from "react";
import Header from "../../ui/layout/header/Header";
import Footer from "../../ui/layout/footer/Footer";
import FeedBackSuggestion from "../subcomps/FeedBackSuggestion";

const AnimeFeedBackMainComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Header backgroundBlack={true} />
      <main className="main-container pb-4 bg-black text-2xl flex items-center justify-center">
        <FeedBackSuggestion />
      </main>
      <Footer />
    </React.Fragment>
  );
};
export default AnimeFeedBackMainComponent;

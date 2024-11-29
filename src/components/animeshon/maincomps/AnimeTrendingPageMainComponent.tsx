import React from "react";
import Header from "../../ui/layout/header/Header";
import Footer from "../../ui/layout/footer/Footer";

const AnimeTrendingPageMainComponent = () => {
  return (
    <React.Fragment>
      <Header backgroundBlack={true} />
      <main className="main-container pb-4 bg-black text-2xl text-white flex justify-center items-center">
        Coming Soon...
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AnimeTrendingPageMainComponent;

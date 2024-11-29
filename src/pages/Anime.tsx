import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Anime: React.FC = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default Anime;

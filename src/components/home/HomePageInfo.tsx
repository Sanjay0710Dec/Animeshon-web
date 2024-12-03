import React from "react";
import { Link } from "react-router-dom";

const HomePageInfo: React.FC = () => {
  return (
    <section className="lg:max-w-[900px] lg:mx-auto w-full text-white py-1 mt-2 md:px-3 px-1 flex flex-col gap-4  ">
      <div id="upcoming-feature">
        <h2 className="text-[#e50000] text-2xl font-semibold">
          Up Coming Features
        </h2>
        <ul id="features" className="flex flex-col gap-y-2">
          <li>
            <span className="text-green-300">Appearance Customization:</span>
            <span className="ml-2 text-justify">
              you can customize the appearance of the website according to your
              favorite colours and background images.
            </span>
          </li>
          <li>
            <span className="text-green-300">Commenting:</span>
            <span className="ml-2 text-justify">
              You can share your point of view{"(POV)"} about anime Episode
              which should not contain any fillers or vulgar words.
            </span>
          </li>
          <li>
            <span className="text-green-300">Add To Favorites:</span>
            <span className="ml-2 text-justify">
              You can add anime to your favorites and view quickly in feature by
              escaping the search,
              {
                " you can only add an anime to favorites when you have an account"
              }
            </span>
          </li>
        </ul>
      </div>

      <div id="feed-back-request">
        <h2 className="text-[#e50000] text-2xl font-semibold mb-2">
          Feed Back Request
        </h2>
        <p className="mb-2">
          A small request to registered and non-registered users, please give a
          feed back about your experience. Suggestions are always welcome, so
          that we can improve and give you better experience.
        </p>
        <p className="mb-2 text-green-300">
          Registered and non-registered users, feed back and suggestions will be
          anonymous
        </p>
        <div id="feed-back-link" className="text-orange-500 mt-4">
          <Link
            to={"/anime/feedback"}
            className="border border-white px-2 py-1 rounded-md "
          >
            Give FeedBack
          </Link>
        </div>
        <div id="note" className="text-2xl font-semibold mt-3">
          Note: Currently application is in beta you may encounter errors
        </div>
      </div>
    </section>
  );
};
export default HomePageInfo;

import { Link } from "react-router-dom";

import ItachiFear from "../assets/itachi-mangekyou-sharingan-utqhbbb82e36e3va.jpg";
const ErrorPage = () => {
  return (
    <main className="h-screen flex bg-black flex-col items-center justify-center text-white gap-y-4 px-1 md:px-0">
      <div
        id="itachi-fear"
        className=" h-[150px] w-[150px] lg:w-[200px] lg:h-[200px]"
      >
        <img
          src={ItachiFear}
          alt="fear-image"
          className="w-full h-full rounded-md"
        />
      </div>
      <h1 className="text-3xl lg:text-[50px] font-semibold">
        404 - Page Not Found
      </h1>
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <h2 className="text-wrap text-center text-gray-300">
          oops! The page you are looking for doesn't exist
        </h2>
        <Link
          to={"/anime"}
          className="px-3 py-2 max-w-[200px] w-full text-center rounded-md text-black bg-white border border-black"
        >
          Go Back To Anime
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;

import { Link } from "react-router-dom";
import Search from "../../inputs/Search";
import Sidebar from "./sidebar/Sidebar";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className=" flex justify-between xl:justify-evenly items-center px-2 w-full h-full">
      <Search />
      <div className="hidden px-2 py-1 xl:block  ">
        <button
          onClick={function () {
            alert("coming soon...");
          }}
          title="watch random anime"
          className="mr-4 rounded-md  bg-[#e50000] text-black  font-semibold inline-block px-2 py-1 text-xl"
        >
          Random anime
        </button>
        <Link
          to={"/auth/login"}
          className="inline-block  py-1 px-4  rounded-md bg-[#e50000] text-xl text-black font-semibold"
        >
          Login
        </Link>
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;

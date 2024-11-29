import React from "react";

import itachiImage from "../../assets/wallpaperflare.com_profile.jpg"
import { Link } from "react-router-dom";
const ItachiHeroSection:React.FC = () =>{

    return (
        <section className="lg:max-w-[900px] w-full mx-auto relative  h-[300px] lg:h-[510px] text-white py-1 " >
              <div id="itachi-image" className="w-full h-full border border-white rounded-md absolute top-0 left-0  ">
                <img src={itachiImage} className="w-full h-full rounded-md"/>
              </div>
             <div className="z-50 absolute top-1/2 w-full flex flex-col gap-y-3 md:px-3 px-1 ">
                <p className="">
                    <span className="text-[#e50000] text-xl md:text-2xl font-semibold mr-2">ANIMESHON</span>
                    <span className="text-xl md:text-2xl">Watch you're favourite anime for free without any ads</span>
                </p>
                <div id="link" className="text-center py-1">
                    <Link to={"/anime"} className="border border-white rounded-md px-4 py-1 text-center text-2xl font-semibold text-orange-400 bg-black">Binge watch now</Link>
                </div>

             </div>
        </section>
    )
}

export default ItachiHeroSection;
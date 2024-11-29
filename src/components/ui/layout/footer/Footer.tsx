import React from "react"
import { Link } from "react-router-dom"

const Footer:React.FC = () =>{
   return (
      <footer className="bg-black  p-2 ">
         <div id="title-container border-white p-2">
            <h2 className="text-[#e50000] text-lg md:text-xl font-bold tracking-[8px]">ANIMESHON</h2>
         </div>
         <div id="miscellenous-links" className="mt-2 pt-1 md:px-10 flex items-center justify-between">
            <Link to={"/misc/dmca"}>DMCA</Link>
            <Link to={"/misc/privacy-policy"}>Privacy Policy</Link>
            <Link to={"/misc/terms-of-service"}>Terms of Service</Link>
         </div>
         <div id="streaming-info" className="mt-2 p-1 flex items-center justify-center text-justify">
            Animeshon does not store any files on our server, we only provide links to the media which is hosted on 3rd party services
         </div>
      </footer>
   )
}

export default Footer
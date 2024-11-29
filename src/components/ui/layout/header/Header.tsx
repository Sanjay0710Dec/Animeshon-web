import { Link } from "react-router-dom"
import Navbar from "./Navbar"
interface PartOfAnimeProps{
   backgroundBlack:boolean
}
const Header:React.FC<PartOfAnimeProps> =({backgroundBlack}) =>{
  return (
    <header className={` flex items-center h-16 md:h-[70px] ${backgroundBlack ?"bg-black":"bg-transparent absolute top-0 z-30  w-full"}  `}>
       <h1 className="ml-1 text-[18px] font-bold md:text-4xl py-2 pl-2 md:pl-8 md:w-[40%] flex justify-start items-center h-full text-[#e50000] tracking-[2px]"><Link to={'/anime'}>ANIMESHON</Link></h1>
     <Navbar/>
    </header>
  )
}

export default Header
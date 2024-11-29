import HomePageInfo from "./HomePageInfo"
import ItachiHeroSection from "./ItachiHeroSection"

const HomePageMainComponent:React.FC = () =>{


    return (
        <main className=" pt-4 md:pt-20 min-h-screen px-2 md:px-0 bg-black pb-4  ">
          <ItachiHeroSection/>
          <HomePageInfo/>
        </main>
    )
}

export default HomePageMainComponent
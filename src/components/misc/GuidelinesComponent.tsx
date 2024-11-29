import React from "react";
import { GuideLinesType } from "../../types/user/guidelines";



const GuideLinesComponent:React.FC<{guidelinesContent:GuideLinesType,pageTitle:string}> = ({guidelinesContent,pageTitle}) =>{
  return(
    <div className=" pb-2  pt-3 px-2 w-[100%] md:w-[64.8%]">

    <h1 className="py-1  px-[10%] md:px-[15%] text-2xl  md:text-3xl font-semibold">{pageTitle}</h1>

    {guidelinesContent.map((sectionContent, index) => (
      <section key={sectionContent.title} id={`${sectionContent.title.toLowerCase()}`} className="mt-3">

        {sectionContent.title && <h2 className="md:text-2xl font-medium text-xl mb-1 pl-4 text-red-500"><span className="inline-block mr-1">{index + 1}.</span>{sectionContent.title}</h2>}

        <div id="content-group" className="bg-gray-700 rounded-md p-4 mb-1 leading-7  text-justify">

          {sectionContent.description.map((content, index) => (
            <p key={index + content[0]} className="mb-1 "><span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500"></span>{content}</p>
          ))}

        </div>
      </section>
    ))}
  </div>
  )
}

export default GuideLinesComponent;
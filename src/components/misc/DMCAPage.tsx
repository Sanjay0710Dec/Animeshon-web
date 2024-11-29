import React, { useEffect } from "react"
import dmcaContent from "../../constants/dmca"
import GuideLinesComponent from "./GuidelinesComponent"
const DMCAPage: React.FC = () => {
  useEffect(function(){
    window.scrollTo(0,0);
 },[]);
  return (
    
    <GuideLinesComponent guidelinesContent={dmcaContent} pageTitle="DMCA Compliance"/>
  )
}

export default DMCAPage
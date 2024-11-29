import React, { useEffect } from "react"
import TermsServiceContent from "../../constants/termsOfService"
import GuideLinesComponent from "./GuidelinesComponent"
const TermsPage: React.FC = () => {
  useEffect(function(){
    window.scrollTo(0,0);
 },[]);
 
  return (
    <GuideLinesComponent guidelinesContent={TermsServiceContent} pageTitle="Terms Of Service"/>
  )
}

export default TermsPage
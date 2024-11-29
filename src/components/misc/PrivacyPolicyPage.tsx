import React, { useEffect } from "react"
import privacyPolicyContent from "../../constants/privacyPolicty"
import GuideLinesComponent from "./GuidelinesComponent"
const PrivacyPolicyPage: React.FC = () => {
  useEffect(function(){
    window.scrollTo(0,0);
 },[]);
 
  return (
    <GuideLinesComponent guidelinesContent={privacyPolicyContent} pageTitle="Privacy Policy"/>
  )
}

export default PrivacyPolicyPage
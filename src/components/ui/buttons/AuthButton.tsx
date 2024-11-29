import React from "react"
import { AuthenticationButtonProps } from "../../../types/user/auth"

const AuthButton:React.FC<AuthenticationButtonProps> =({type,value,backgroundColor,tobeDisabled}) =>{
  return (
    <button type={type} className={` text-black rounded py-2 px-9 text-lg md:text-xl ${backgroundColor} `} disabled={tobeDisabled}>{value}</button>
  )
}

export default AuthButton
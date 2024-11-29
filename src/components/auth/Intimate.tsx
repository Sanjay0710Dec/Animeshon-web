import React from 'react'
import { Link } from 'react-router-dom'

interface MessageProps{
    message:string,
    authType: "SignUp" | "Login",
    to: "/auth/signup" | "/auth/login"
}
const  Intimate:React.FC<MessageProps> = ({message,authType,to})=> {
  return (
    <div className='flex p-1 justify-center items-center md:text-xl text-lg  mt-1'>
        <p>{message}</p>
        <Link to={to} className='underline text-blue-500 text-xl ml-1'>{authType}</Link>
    </div>
  )
}

export default Intimate
import React from "react"
import { FormInputProps } from "../../../types/user/auth"

const AuthInput:React.FC<FormInputProps> = ({id,label,inputValue,inputType,placeholder,onBlurr,onchange,touched,valueError}) =>{
  return (
    <div className="p-1 flex flex-col mx-0.5">
        <label className="text-xl text-[#08effff1] ml-0.5 mb-0.5" htmlFor={id}>{label}</label>
        <input className=" py-2 pl-2 text-black rounded text-lg md:text-xl   outline-none" type={inputType} id={id} name={id} value={inputValue} placeholder={placeholder} onBlur={onBlurr} onChange={onchange}  />
        {touched && valueError ? <div className="text-[#D8C0B3]  font-medium mt-0.5 text-xl">{valueError}</div> : null}
    </div>
  )
}

export default AuthInput
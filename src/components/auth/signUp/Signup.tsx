import React from "react";
import {SignupSchema, signupValidation } from "../../../types/user/auth";
// import AuthButton from "../../ui/buttons/AuthButton";
import AuthInput from "../../ui/inputs/AuthInput"
import Intimate from "../Intimate"
import { Formik} from "formik"
import useSignup from "../../../hooks/useSignup";

const initialValues: SignupSchema = {
   username: "",
   email: "",
   password: "",

}

const Signup: React.FC = () => {
 const {handleSignupSubmit,signupMessage} = useSignup();

   return (
      <section className="min-h-[100vh] flex items-center justify-center flex-col relative">
         <h1 className="text-[#e50000] tracking-[2px] text-2xl mb-2 font-semibold  mt-[-10rem] md:mt-[-17rem]">ANIMESHON</h1>
         <div id="sigup-container" className=" max-w-[600px] w-[96%]  rounded-md  bg-[rgba(32,32,32,0.5)] hover:shadow-md hover:shadow-[#e50000] mx-2 pb-1">

            <h2 className="text-2xl flex justify-center items-center p-2 text-white ">Signup</h2>

            <Intimate message={"Already have an account ?"} authType={"Login"} to={"/auth/login"} />

            <div id="signup-form">
               <Formik initialValues={initialValues} validationSchema={signupValidation} onSubmit={handleSignupSubmit}>
                  {(formik) => (
                     <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>

                        <AuthInput id="username" label="Username"
                           inputType="text" inputValue={formik.values.username} placeholder="ex: itachi_01"
                           onBlurr={formik.handleBlur} onchange={formik.handleChange}
                           touched={formik.touched.username} valueError={formik.errors.username} />

                        <AuthInput id="email" label="Email" inputType="email"
                           inputValue={formik.values.email} placeholder="ex: user01@gmail.com"
                           onBlurr={formik.handleBlur} onchange={formik.handleChange}
                           touched={formik.touched.email} valueError={formik.errors.email} />

                        <AuthInput id="password" label="Password" inputType="password"
                           inputValue={formik.values.password} placeholder="ex: User$234"
                           onBlurr={formik.handleBlur} onchange={formik.handleChange}
                           touched={formik.touched.password} valueError={formik.errors.password} />

                        <div className="flex justify-start items-center gap-x-8 mt-2 pl-1  font-semibold text-xl">

                           {/* <AuthButton type={"reset"} value="Reset" backgroundColor={"bg-red-500"} tobeDisabled={formik.isSubmitting} />

                           {formik.isSubmitting ? (<div id="submitting-message"
                              className={`flex bg-blue-300 text-black items-center p-2 rounded`}>
                              <span className="text-xl mr-2">Signing Up</span> <span className="loader"></span>
                           </div>) : (<AuthButton type={"submit"} value="Signup" backgroundColor={"bg-blue-300"} tobeDisabled={!formik.isValid}/>)} */}
                            you will be able to signup soon..

                        </div>
                        {signupMessage && <p className="mt-1 p-1 text-red-600">{signupMessage}</p>}
                     </form>)}
               </Formik>
            </div>
         </div>

      </section>
   )
}

export default Signup
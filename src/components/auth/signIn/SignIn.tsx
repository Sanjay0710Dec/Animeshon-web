import React from "react";
// import AuthButton from "../../ui/buttons/AuthButton";
import { Formik } from "formik";
import AuthInput from "../../ui/inputs/AuthInput";
import { SignInSchema, signInValidation } from "../../../types/user/auth";
import Intimate from "../Intimate";
// import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";

const initialValues: SignInSchema = {
    username: "",
    password: ""
}

const SignIn: React.FC = () => {
    const { handleLoginSubmit, loginMessage } = useLogin()

    return (
        <section className='min-h-[100vh] flex items-center justify-center flex-col '>
            <h1 className="text-[#e50000] tracking-[2px] text-2xl mb-2 font-semibold  mt-[-10rem] md:mt-[-17rem]">ANIMESHON</h1>
            <div id="sigup-container" className=" max-w-[600px] w-[96%]  rounded-md p-1 bg-[rgba(32,32,32,0.5)] mx-2">

                <h2 className="text-2xl flex justify-center items-center p-2 text-white ">Login</h2>

                <Intimate message={"Don't have an account ?"} authType={"SignUp"} to={"/auth/signup"} />

                <div id="signIn-form">
                    <Formik initialValues={initialValues} validationSchema={signInValidation} onSubmit={handleLoginSubmit}>
                        {formik => (<form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>

                            <AuthInput id="username" label="Username"
                                inputType="text" inputValue={formik.values.username} placeholder="ex: itachi_01"
                                onBlurr={formik.handleBlur} onchange={formik.handleChange}
                                touched={formik.touched.username} valueError={formik.errors.username} />

                            <AuthInput id="password" label="Password" inputType="password"
                                inputValue={formik.values.password} placeholder="ex: User$23"
                                onBlurr={formik.handleBlur} onchange={formik.handleChange}
                                touched={formik.touched.password} valueError={formik.errors.password} />

                            {/* <div id="forgot-password" className="flex justify-end items-center py-1 pr-2 text-blue-500 underline"><Link to={"/auth/email-confirmation"}>Forgot Password?</Link></div> */}

                            <div className="flex justify-start items-center gap-x-8 mt-2 pl-1 font-semibold text-xl">

                                {/* <AuthButton type={"reset"} value="Reset" backgroundColor={"bg-red-500"} tobeDisabled={formik.isSubmitting} />

                                {formik.isSubmitting ? (<div id="submitting-message"
                                    className={`flex bg-blue-300 text-black items-center p-2 rounded`}>
                                    <span className="text-xl mr-2">Signing Up</span> <span className="loader"></span>
                                </div>) : (<AuthButton type={"submit"} value="Login" backgroundColor={"bg-blue-300"} tobeDisabled={formik.isSubmitting || !formik.isValid} />)} */}
                                 you will be able to login soon..
                            </div>
                            {loginMessage && <p className="mt-1 p-1 text-red-600">{loginMessage}</p>}
                        </form>)}
                    </Formik>
                </div>
            </div>

        </section>
    )
}


export default SignIn;
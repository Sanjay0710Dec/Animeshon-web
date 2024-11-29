import { useState } from "react"
import { SignInSchema } from "../types/user/auth";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import UserApi from "../api/userApi";



const useLogin   = () =>{
    const [loginMessage,setLoginMessage] = useState<string>("");
    const navigate = useNavigate();

    const handleLoginSubmit = async (values:SignInSchema,actions:FormikHelpers<SignInSchema>):Promise<void> =>{

        try {
              
            const loginResponse = await UserApi.loginUser(values);
             actions.setSubmitting(false);
              if(loginResponse.success){
                  
                  alert(loginResponse.data.message);
                  navigate('/anime');
              }
              else{
                 setLoginMessage(loginResponse.data.message);
              }
      } catch (error) {
          if(error instanceof Error){
              console.log(error.message);
          }
          setLoginMessage("unable to login please try after sometime");
          actions.setSubmitting(false);
      }
           
    }
    return {
        handleLoginSubmit,
        loginMessage
    }

}

export default useLogin
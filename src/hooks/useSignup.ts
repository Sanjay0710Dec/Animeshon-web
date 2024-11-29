import { useCallback, useState } from "react";
import { SignupSchema } from "../types/user/auth";
import { FormikHelpers } from "formik";
import UserApi from "../api/userApi";

const useSignup = () => {
  const [signupMessage, setSignupMessage] = useState<string>("");

  const handleSignupSubmit = useCallback(
    async (
      values: SignupSchema,
      actions: FormikHelpers<SignupSchema>,
    ): Promise<void> => {
      try {
        const signUpResponse = await UserApi.createUser(values);

        setSignupMessage(signUpResponse.data.message);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } 
        setSignupMessage("unable to signup please try after sometime");
      } finally {
        actions.setSubmitting(false);
      }
    },
    [],
  );
  return { handleSignupSubmit, signupMessage };
};

export default useSignup;


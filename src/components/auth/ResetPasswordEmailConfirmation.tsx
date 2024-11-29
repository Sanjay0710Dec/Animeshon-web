import React, { useCallback } from "react";
import { Formik, FormikHelpers } from "formik";
import {
  ResetPasswordEmailSchema,
  resetPasswordEmailValidation,
} from "../../types/user/auth";
import AuthButton from "../ui/buttons/AuthButton";
import AuthInput from "../ui/inputs/AuthInput";

const initialValues: ResetPasswordEmailSchema = {
  email: "",
};

const ResetPasswordEmailConfirmation: React.FC = () => {
  const handleEmailSubmit = useCallback(
    async (
      values: ResetPasswordEmailSchema,
      { setSubmitting }: FormikHelpers<ResetPasswordEmailSchema>,
    ) => {
      try {
        setSubmitting(true);
        console.log(values);
      } catch (error) {
        console.log(error);
      }
      setSubmitting(false);
    },
    [],
  );
  return (
    <section className="min-h-[100vh] flex items-center justify-center flex-col relative">
      <h1 className="text-[#e50000] tracking-[2px] text-2xl mb-2 font-semibold  mt-[-10rem] md:mt-[-17rem]">
        ANIMESHON
      </h1>
      <div
        id="sigup-container"
        className=" max-w-[600px] w-[96%]  rounded-md  bg-[rgba(32,32,32,0.5)] mx-2"
      >
        <h2 className="text-2xl flex justify-center items-center p-2 text-white ">
          Email Confirmation
        </h2>

        <div id="signup-form">
          <Formik
            initialValues={initialValues}
            validationSchema={resetPasswordEmailValidation}
            onSubmit={handleEmailSubmit}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <AuthInput
                  id="email"
                  label="Email"
                  inputType="email"
                  inputValue={formik.values.email}
                  placeholder="ex: user01@gmail.com"
                  onBlurr={formik.handleBlur}
                  onchange={formik.handleChange}
                  touched={formik.touched.email}
                  valueError={formik.errors.email}
                />

                <div className="flex justify-start items-center gap-x-8 mt-2 pl-1">
                  <AuthButton
                    type={"reset"}
                    value="Reset"
                    backgroundColor={"bg-red-500"}
                    tobeDisabled={formik.isSubmitting}
                  />

                  <AuthButton
                    type={"submit"}
                    value="Verify"
                    backgroundColor={"bg-blue-300"}
                    tobeDisabled={formik.isSubmitting || !formik.isValid}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordEmailConfirmation;


import { object, string, InferType, ref } from "yup";

export interface FormInputProps {
  id: string;
  label: string;
  inputValue: string;
  inputType: string;
  placeholder: string;
  onBlurr: (e: React.FocusEvent<HTMLInputElement>) => void;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  touched: boolean | undefined;
  valueError: string | undefined;
}
export const signupValidation = object({
  username: string()
    .required("Required")
    .min(5, "Must be at least 5 characters")
    .max(15, "Must not exceed 15 characters"),
  email: string().email("Invalid Email").required("Required"),
  password: string()
    .required("Required")
    .min(8, "Must be at least 8 characters")
    .max(16, "Must not exceed 16 characters")
    .matches(/[A-Z]/, "Must contain at least 1 Uppercase")
    .matches(/(?=(.*\d){2})/, "Password must contain at least 2 numbers")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least 1 special character",
    ),
});

export const signInValidation = object({
  username: string().required("Required"),
  password: string().required("Required"),
});

export const otpValidation = object({
  otp: string()
    .required("Required")
    .matches(/^[0-9]+$/, "OTP must only contain numbers")
    .length(6, "OTP must be exactly 6 digits"),
});

export const resetPasswordValidation = object({
  password: string()
    .required("Required")
    .min(8, "Must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least 1 Uppercase")
    .matches(/(?=(.*\d){2})/, "Password must contain at least 2 numbers")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least 1 special character",
    ),

  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Password should match"),
});

export const resetPasswordEmailValidation = object({
  email: string().email("Invalid Email").required("Required"),
});

export type SignupSchema = InferType<typeof signupValidation>;

export type SignInSchema = InferType<typeof signInValidation>;

export type OtpSchema = InferType<typeof otpValidation>;

export type ResetPasswordSchema = InferType<typeof resetPasswordValidation>;
export type ResetPasswordEmailSchema = InferType<
  typeof resetPasswordEmailValidation
>;

export interface AuthenticationButtonProps {
  type: "reset" | "submit";
  value: string;
  backgroundColor: string;
  tobeDisabled: boolean;
}

export interface signupResponse<T = null> {
  success: boolean;
  data: {
    result: T;
    message: string;
  };
}
export interface loginResponse extends signupResponse {}

export interface otpResponse extends signupResponse {}

export interface resendOtpResponse extends signupResponse {}
export interface EmailVerificationResponse extends signupResponse {}
export interface feedBackSuggestionResponse extends signupResponse {}

import {
  EmailVerificationResponse,
  feedBackSuggestionResponse,
  loginResponse,
  SignInSchema,
  signupResponse,
  SignupSchema,
} from "../types/user/auth";

class UserApi {
  static async createUser(values: SignupSchema): Promise<signupResponse> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );
      const jsonResponse = await fetchResponse.json();
      return jsonResponse;
    } catch (error) {
      throw new Error("connection to server failed");
    }
  }

  static async loginUser(values: SignInSchema): Promise<loginResponse> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const jsonResponse = await fetchResponse.json();
      return jsonResponse;
    } catch (error) {
      throw new Error("connection to server failed");
    }
  }
  static async verifyEmailForRegistrationAndPasswordReset(
    verificationId: string,
  ): Promise<EmailVerificationResponse> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/verify-email/registration-password-reset/${verificationId}`,
        {
          method: "POST",
          credentials: "include",
        },
      );
      const jsonResponse = await fetchResponse.json();
      return jsonResponse;
    } catch (error) {
      throw new Error("connection to server failed");
    }
  }
  static async uploadUserFeedBackAndSuggestion(
    feedback: string,
    suggestion: string,
  ): Promise<feedBackSuggestionResponse> {
    try {
      const fetchResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/feedback-suggestion`,
        {
          method: "POST",
          body: JSON.stringify({ feedback, suggestion }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const jsonResponse = await fetchResponse.json();
      return jsonResponse;
    } catch (error) {
      throw new Error("connection to server failed");
    }
  }
}

export default UserApi;

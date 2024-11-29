import React from "react";
import { Link } from "react-router-dom";
import useEmailVerification from "../../hooks/useEmailVerification";

const EmailVerification: React.FC = () => {
  const {
    loading,
    emailVerificationMessage,
    verificationType,
    isUserVerified,
    errorMessage,
  } = useEmailVerification();
  return (
    <main className="h-screen flex justify-center items-center bg-black text-white">
      {loading ? (
        <div className="text-xl md:text-3xl ">Verifying...</div>
      ) : errorMessage ? (
        <div className="text-xl md:text-3xl">{errorMessage}</div>
      ) : (
        <section className="max-w-[500px] w-full border border-white rounded-md p-1">
          {isUserVerified ? (
            <EmailVerificationResponse
              verificationType={verificationType}
              message={emailVerificationMessage}
            />
          ) : (
            <div className="p-2">
              <p className="text-red-400 text-xl md:text-2xl mb-3">
                {emailVerificationMessage}
              </p>
              <button className="block w-full bg-blue-400 text-center p-2 text-xl rounded-sm">
                resendVerification Link
              </button>
            </div>
          )}
        </section>
      )}
    </main>
  );
};
const EmailVerificationResponse: React.FC<{
  verificationType: string;
  message: string;
}> = ({ verificationType, message }) => {
  return (
    <div className="p-2">
      <p className="text-xl md:text-2xl text-center text-orange-400">
        {message}
      </p>
      {verificationType === "registration" ? (
        <div className="bg-pink-300 text-center p-2 rounded-sm ">
          <Link to={"/auth/login"} className="block w-full">
            Login
          </Link>
        </div>
      ) : (
        <div className="bg-pink-300 text-center p-2 rounded-sm">
          <Link to={"/auth/reset-password"} className="bloxk w-full">
            Reset Password
          </Link>
        </div>
      )}
    </div>
  );
};
export default EmailVerification;

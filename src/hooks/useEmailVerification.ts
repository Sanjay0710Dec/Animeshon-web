import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserApi from "../api/userApi";

const useEmailVerification = () => {
  const [emailVerificationMessage, setEmailVerificationMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { verificationId } = useParams();
  const [verificationType, setVerificationType] = useState("registration");
  const [isUserVerified, setIsUserVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();

  useEffect(
    function () {
      setLoading(true);
      setVerificationType(location.pathname?.split("/")[2]);
      UserApi.verifyEmailForRegistrationAndPasswordReset(verificationId || "")
        .then(function (jsonResponse) {
          if (jsonResponse.success) {
            setIsUserVerified(true);
          }
          setEmailVerificationMessage(jsonResponse.data.message);
        })
        .catch(function (error) {
          if (error instanceof Error) {
            setErrorMessage(error.message);
          } else {
            setErrorMessage(
              "failed to verify your email,connection to server failed",
            );
          }
        })
        .finally(function () {
          setLoading(false);
        });
    },
    [verificationId],
  );
  return {
    loading,
    emailVerificationMessage,
    verificationType,
    isUserVerified,
    errorMessage,
  };
};

export default useEmailVerification;

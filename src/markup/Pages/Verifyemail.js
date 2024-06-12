import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function VerifyEmail() {
  const navigate = useNavigate();
  const { token, email } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        if (!token || !email) {
          showToastError("Token or email not provided");
          navigate("/user/login");
          return;
        }
        
        const response = await axios.get(`https://novajobs.us/api/jobseeker/verify-account/${token}?email=${email}`);
        console.log(response)
        if (response.data.success) {
          showToastSuccess(response,"Email verified successfully");
          navigate("/");
        } else {
          showToastError("Verification failed");
          navigate("/user/login");
        }
      } catch (error) {
        console.error("Verification Error:", error);
        showToastError("Invalid token or email");
        navigate("/user/login");
      }
    };

    verifyEmail();
  }, [token, email, navigate]);

  return (
    <div>Verifying...</div>
  );
}

export default VerifyEmail;

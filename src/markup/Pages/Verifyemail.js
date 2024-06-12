import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function VerifyEmail() {
  const navigate = useNavigate();
  const { token} = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
       
        
        const response = await axios.post(`https://novajobs.us/api/jobseeker/verify-account/${token}`);
        console.log(response)
        if (response.data.success.token) {
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
  }, [token, navigate]);

  return (
    <div>Verifying...</div>
  );
}

export default VerifyEmail;

import { useState } from "react";
import OTPForm from "./OTPForm";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
  e.preventDefault();
  // Mock API delay
  setTimeout(() => {
    // Simulate a successful response with a fake user_id
    setUserId("mock-user-id");
    setOtpSent(true);
    alert("OTP sent (mock) to " + mobile);
  }, 1000);
};


  const handleVerifyOtp = async (enteredOtp) => {
  // Mock verification
  setTimeout(() => {
    if (enteredOtp === "123456") { // Accept only this as the correct OTP
      alert("OTP verified! You are logged in. (mock)");
      // Simulate saving a token and redirect
      localStorage.setItem("token", "mock-token");
      navigate("/home");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  }, 1000);
};



  if (!otpSent) {
    return (
      <form onSubmit={handleSendOtp}>
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            required
          />
        </label>
        <button type="submit">Send OTP</button>
      </form>
    );
  } else {
    return <OTPForm onVerify={handleVerifyOtp} />;
  }
}

export default LoginForm;

import { useState } from "react";
import OtpInput from "react-otp-input";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Mock sending OTP
    setTimeout(() => {
      setOtpSent(true);
      alert("OTP sent (mock) to " + mobile);
    }, 1000);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      alert("OTP verified! (mock)");
      // Redirect or set auth state here
    } else {
      alert("Invalid OTP. Try 123456 as the correct OTP.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      {!otpSent ? (
        <form onSubmit={handleSendOtp}>
          <h2>Login</h2>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <h2>Enter OTP</h2>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType="tel"
            shouldAutoFocus
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
          <button type="submit" style={{ marginTop: "16px" }}>
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
}

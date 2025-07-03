import { useState } from "react";
import OtpInput from "react-otp-input";

function OTPForm({ onVerify }) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      onVerify(otp);
    } else {
      alert("Please enter a 6-digit OTP");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default OTPForm;

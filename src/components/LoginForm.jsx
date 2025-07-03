import React, { useState } from "react";
import OTPForm from "./OTPForm";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setUserId("mock-user-id");
      setOtpSent(true);
      alert("OTP sent (mock) to " + mobile);
    }, 1000);
  };

  const handleVerifyOtp = (enteredOtp) => {
    setTimeout(() => {
      if (enteredOtp === "123456") {
        alert("OTP verified! You are logged in. (mock)");
        localStorage.setItem("token", "mock-token");
        navigate("/home");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    }, 1000);
  };

  if (!otpSent) {
    return (
      <Box
        component={Paper}
        elevation={3}
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight={600} textAlign="center">
          Login with OTP
        </Typography>

        <form onSubmit={handleSendOtp} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField
            label="Mobile Number"
            variant="outlined"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send OTP
          </Button>
        </form>
      </Box>
    );
  } else {
    return <OTPForm onVerify={handleVerifyOtp} />;
  }
}

export default LoginForm;

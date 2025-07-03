import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Box, Button, Typography, Paper } from "@mui/material";

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
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        Enter OTP
      </Typography>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType="tel"
          shouldAutoFocus
          renderSeparator={<span style={{ margin: "0 4px" }}>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
                textAlign: "center",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          )}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Verify OTP
        </Button>
      </form>
    </Box>
  );
}

export default OTPForm;

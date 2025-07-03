import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Paper,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const dummyProfile = {
  name: "Jane Doe",
  email: "jane@example.com",
  mobile: "9876543210",
  company_name: "CodeCraft Inc.",
  gst_no: "22ABCDE1234F1Z5",
  pan_no: "ABCDE1234F",
  location: "Bangalore, India",
  profile_image: "https://i.pravatar.cc/150?img=5",
};

function Profile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setData(dummyProfile);
      setLoading(false);
    }, 1500);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/register");
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box maxWidth="600px" mx="auto" mt={4}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Avatar
            src={data.profile_image}
            alt={data.name}
            sx={{ width: 80, height: 80 }}
          />
          <Typography variant="h5">{data.name}</Typography>
        </Stack>

        <Typography>Email: {data.email}</Typography>
        <Typography>Mobile: {data.mobile}</Typography>
        <Typography>Company: {data.company_name}</Typography>
        <Typography>GST No: {data.gst_no}</Typography>
        <Typography>PAN No: {data.pan_no}</Typography>
        <Typography>Location: {data.location}</Typography>
      </Paper>
    </Box>
  );
}

export default Profile;

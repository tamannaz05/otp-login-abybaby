import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile";

function RegisterPage() {
  const navigate = useNavigate();

  const onRegister = (formData) => {
    console.log("Registering user:", formData);
    localStorage.setItem("token", "dummy-token");
    navigate("/home");
  };

  return <RegisterForm onRegister={onRegister} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

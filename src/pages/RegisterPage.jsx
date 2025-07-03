import RegisterForm from "../components/RegisterForm";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      // Adjust the payload and endpoint as per your backend API requirements
      await api.post("/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert("Registration successful! Please log in.");
      navigate("/"); // Redirect to login page
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration failed. Please try again."
      );
    }
  };

  return (
    <div>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default RegisterPage;

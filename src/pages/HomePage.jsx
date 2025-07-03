import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Profile from "../components/Profile";

function HomePage() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome! You are logged in.</h1>
      <button onClick={handleLogout}>Logout</button>
      <Profile />
    </div>
  );
}

export default HomePage;

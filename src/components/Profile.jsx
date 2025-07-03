import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { token } = useAuth();

  // Example: fetch user_id from token or localStorage if your API needs it
  const userId = 1; // Replace with actual logic if needed

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile", userId],
    queryFn: async () => {
      const response = await api.get(`/post-details?user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    enabled: !!token, // Only run if token exists
  });

  if (isLoading) return <div>Loading profile...</div>;
  if (error) return <div>Error loading profile.</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* Render actual profile fields here */}
    </div>
  );
}

export default Profile;

import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (e.g., remove tokens from localStorage or state)
    localStorage.removeItem('authToken'); // Example: Adjust based on your auth logic

    // Redirect to the Home page
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 ring ring-blue-300 hover:ring-blue-400"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
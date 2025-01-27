import { useNavigate } from 'react-router-dom';
import homeImg from "../assets/file-loading2.webp";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement the DocuSign authentication logic here
    // For now, redirect to a placeholder route after login
    window.location.href = `https://8f0c0tv675.execute-api.us-east-1.amazonaws.com/main/oauth/login`;
  };

  return (
    <div className="flex items-center justify-center text-gray-800">
      <div className="text-center max-w-2xl p-6 my-2">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Smart DocuSign</h1>
        <p className="text-lg text-gray-600 mb-4">
          Streamline your document workflows with AI-powered insights and tools. Log in using
          DocuSign to analyze agreements, ask questions, and get audio summaries tailored to your
          needs.
        </p>
        <img src={homeImg} alt="DocuSign AI" className="mx-auto w-60" />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login Using DocuSign
        </button>
      </div>
    </div>
  );
};

export default Home;

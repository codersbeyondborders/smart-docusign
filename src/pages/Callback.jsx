import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      // Extract the code from the URL
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get('code');

      if (code) {
        try {
          // Call the backend API to exchange the code for an access token
          const response = await fetch(`https://8f0c0tv675.execute-api.us-east-1.amazonaws.com/main/oauth/callback?code=${code}`);
          const data = await response.json();

          if (data.accessToken) {
            // Save the access token to localStorage
            localStorage.setItem('accessToken', data.accessToken);
            console.log('Access Token:', data.accessToken);

            // Redirect the user to the main application (e.g., Document Insights page)
            navigate('/document-insights');
          } else {
            console.error('Failed to retrieve access token:', data);
            alert('Failed to log in. Please try again.');
          }
        } catch (error) {
          console.error('Error during callback processing:', error);
          alert('An error occurred. Please try again.');
        }
      } else {
        console.error('Authorization code missing in callback URL.');
        alert('Invalid login. Please try again.');
      }
    };

    handleCallback();
  }, [navigate]);

  return <div className="text-center">Authenticating...</div>;
};

export default Callback;

const docusign = require('docusign-esign');

const integrationKey = process.env.DOCUSIGN_CLIENT_ID;
const clientSecret = process.env.DOCUSIGN_CLIENT_SECRET;
const redirectUri = process.env.DOCUSIGN_REDIRECT_URI;

exports.handler = async (event) => {
  const path = event.path; // Get the request path

  if (path === '/oauth/login') {
    // Step 1: Redirect to DocuSign's OAuth page
    const apiClient = new docusign.ApiClient();
    apiClient.setBasePath('https://account-d.docusign.com');
    const authUrl = apiClient.getAuthorizationUri(
      integrationKey,
      'signature',
      redirectUri,
      'code'
    );
    return {
      statusCode: 302,
      headers: { Location: authUrl },
    };
  } else if (path === '/oauth/callback') {
    // Step 2: Handle OAuth callback
    const { code } = event.queryStringParameters || {};
    if (!code) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Authorization code is required' }),
      };
    }

    try {
      const apiClient = new docusign.ApiClient();
      const response = await apiClient.generateAccessToken(
        integrationKey,
        clientSecret,
        code
      );

      // Return the access token
      return {
        statusCode: 200,
        body: JSON.stringify({ accessToken: response.accessToken }),
      };
    } catch (err) {
      console.error('Error during OAuth callback:', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to generate access token' }),
      };
    }
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Invalid path' }),
    };
  }
};

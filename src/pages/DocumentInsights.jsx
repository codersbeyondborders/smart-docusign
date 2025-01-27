import { useState, useEffect } from 'react';

const DocumentInsights = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('No access token found!');
        return;
      }

      try {
        const response = await fetch(`https://8f0c0tv675.execute-api.us-east-1.amazonaws.com/main/documents`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setDocuments(data.documents || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching documents:', error);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) {
    return <div>Loading documents...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Agreements</h1>
      <ul className="bg-gray-100 p-4 rounded shadow divide-y divide-gray-300">
        {documents.length > 0 ? (
          documents.map((doc, index) => (
            <li key={index} className="py-2">{doc.name}</li>
          ))
        ) : (
          <p>No documents found.</p>
        )}
      </ul>
    </div>
  );
};

export default DocumentInsights;

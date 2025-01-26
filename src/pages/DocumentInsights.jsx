import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocument } from '../context/DocumentContext';

const DocumentInsights = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Agreement_2023.pdf', date: '2023-12-01' },
    { id: 2, name: 'Contract_2022.docx', date: '2022-11-15' },
    { id: 3, name: 'Terms_Conditions.pdf', date: '2021-10-10' },
  ]);
  const [newFile, setNewFile] = useState(null);
  const { setSelectedDocument } = useDocument();
  const navigate = useNavigate();

  const handleDocumentClick = (doc) => {
    setSelectedDocument(doc);
    navigate('/chat');
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newDoc = { id: Date.now(), name: file.name, date: new Date().toISOString().split('T')[0] };
      setDocuments((prev) => [...prev, newDoc]);
      setSelectedDocument(newDoc);
      navigate('/chat');
    }
  };

  const handleScanDocument = () => {
    const scannedDoc = { id: Date.now(), name: 'Scanned_Document.pdf', date: new Date().toISOString().split('T')[0] };
    setDocuments((prev) => [...prev, scannedDoc]);
    setSelectedDocument(scannedDoc);
    navigate('/chat');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Document Insights</h1>
      <p className="text-gray-600 mb-6">
        View your existing documents, upload new ones, or scan a document using your mobile device.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Your Documents</h2>
        <ul className="bg-gray-100 p-4 rounded shadow divide-y divide-gray-300">
          {documents.map((doc) => (
            <li
              key={doc.id}
              onClick={() => handleDocumentClick(doc)}
              className="py-2 flex justify-between items-center cursor-pointer hover:bg-gray-200"
            >
              <span className="font-medium">{doc.name}</span>
              <span className="text-gray-500 text-sm">{doc.date}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Upload a New Document</h2>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="block w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="sm:hidden">
        <h2 className="text-xl font-semibold mb-3">Scan a Document</h2>
        <button
          onClick={handleScanDocument}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Use Camera to Scan
        </button>
      </div>
    </div>
  );
};

export default DocumentInsights;

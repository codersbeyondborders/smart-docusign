import { createContext, useState, useContext } from 'react';

// Create context
const DocumentContext = createContext();

// Custom hook for using the context
export const useDocument = () => useContext(DocumentContext);

// Provider component
export const DocumentProvider = ({ children }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <DocumentContext.Provider value={{ selectedDocument, setSelectedDocument }}>
      {children}
    </DocumentContext.Provider>
  );
};

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DocumentInsights from './pages/DocumentInsights';
import Chat from './pages/Chat';
import { DocumentProvider } from './context/DocumentContext';
import LogoutButton from './components/LogoutButton';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <DocumentProvider>
      <Router>
        <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen`}>
          <nav className="bg-gray-700 text-white px-6 py-4 flex items-center justify-between shadow-lg relative">
            
          <Link to="/" className="nav-link">
            <div className="hover:bg-gray-800 ring ring-blue-300 hover:ring-blue-400 text-xl font-bold py-2 px-4 rounded-lg text-center w-full sm:w-auto">Smart DocuSign</div>
          </Link>
          
            <div className="flex items-center space-x-4">
              <LogoutButton />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </nav>
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/document-insights" element={<DocumentInsights />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DocumentProvider>
  );
};

export default App;

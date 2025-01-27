import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Callback from './pages/Callback';
import DocumentInsights from './pages/DocumentInsights';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth/callback" element={<Callback />} />
        <Route path="/document-insights" element={<DocumentInsights />} />
      </Routes>
    </Router>
  );
};

export default App;

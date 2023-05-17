import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

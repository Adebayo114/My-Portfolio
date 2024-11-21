import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'; // Import the NavBar
import Footer from './Components/Footer'; // Import the Footer
import HomePage from './Components/HomePage';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Proficiencies from './Components/Proficiencies';
import FrontEnd from './Components/FrontEnd';
import Gp from './Components/Gp';
import WebDev from './Components/WebDev';

function App() {
  return (
    <Router> {/* Changed to HashRouter */}
      <NavBar /> {/* NavBar is always displayed */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prof" element={<Proficiencies />} />
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/grph" element={<Gp />} />
        <Route path="/wd" element={<WebDev />} />
      </Routes>
      <Footer /> {/* Footer is always displayed */}
    </Router>
  );
}

export default App;

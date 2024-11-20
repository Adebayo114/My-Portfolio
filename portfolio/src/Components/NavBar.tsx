
import { Link } from 'react-router-dom'; // Use Link for client-side navigation
import '../Styles/index.css';
function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-child">Home</div>
      </Link>
      <Link to="/about">
        <div className="navbar-child">About</div>
      </Link>
      <Link to="/services">
        <div className="navbar-child">Services</div>
      </Link>
      <Link to="/projects">
        <div className="navbar-child">Projects</div>
      </Link>
      <Link to="/contact">
        <div className="navbar-child">Connect</div>
      </Link>

      <Link to="/prof">
        <div className="navbar-child">Proficiencies</div>
      </Link>
    </div>
  );
}

export default NavBar;

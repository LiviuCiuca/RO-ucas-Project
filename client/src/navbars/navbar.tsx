import "../util/css/navbar.css"
import logo from '../util/logo/logo.png';

import { Link } from "react-router-dom"


function Navbar() {
    return (
      <nav className="Navbar">
        <img src={logo} alt="Logo" />
        <Link to="/allstudent">Student</Link>
        <Link to="/university">University</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    );
  }
  
export default Navbar;
import "../util/css/navbar.css"

import { Link } from "react-router-dom"


function Navbar() {
    return (
      <nav className="Navbar">
        <Link to="/allstudent">Student</Link>
        <Link to="/university">University</Link>
      </nav>
    );
  }
  
export default Navbar;
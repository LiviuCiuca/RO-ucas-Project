import "./css/navbar.css"
import { Link } from "react-router-dom"


function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/student">Student</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/enrollments">Enrollments</Link>
        <Link to="/university">University</Link>
      </nav>
    );
  }
  
export default Navbar;
import "../../util/css/navbar.css"
import React from "react"
import { Link } from "react-router-dom"

function UniNavbar() { 
    return (
    <nav className="uni_Navbar">
      <Link to="/university">University</Link>
      {/* <Link to="/profile">Profile</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/enrollments">Enrollments</Link> */}
    </nav>
  );
}

export default UniNavbar;
import "../css/navbar.css"
import { Link } from "react-router-dom"


function StudentNavbar() {
    return (
      <nav className="student_Navbar">
        <Link to="/allstudent">Students portal</Link>
        <Link to="/student">profile</Link>
        <Link to="/student/courses">Courses</Link>
        <Link to="/enrollments">Enrollments</Link>
      </nav>
    );
  }
  
export default StudentNavbar;
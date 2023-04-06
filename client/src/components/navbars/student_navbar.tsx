import "../css/navbar.css"
import { Link } from "react-router-dom"


function StudentNavbar() {
    return (
      <nav className="student_Navbar">
        <Link to="/allstudent">Student</Link>
        <Link to="/student">Profile</Link>
        <Link to="/student/courses">Courses</Link>
        <Link to="/enrollments/:studentId">Enrollments</Link>
      </nav>
    );
  }
  
export default StudentNavbar;
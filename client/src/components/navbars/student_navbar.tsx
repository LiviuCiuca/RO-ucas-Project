import "../css/navbar.css"
import { Link } from "react-router-dom"
//{ studentId }: { studentId: number | null }

function StudentNavbar() {
    return (
      <nav className="student_Navbar">
        <Link to="/allstudent">Student</Link>
        {/* {studentId && <Link to={`/student/${studentId}`}>Profile</Link>}
        <Link to="/student/courses">Courses</Link>
        {studentId && <Link to={`/enrollments/${studentId}`}>Enrollments</Link>} */}
      </nav>
    );
  }
  
export default StudentNavbar;
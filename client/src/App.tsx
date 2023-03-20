import Navbar from './components/navbar';
import Student from './components/student/get_student'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Courses } from './components/courses/get_all_courses';
import { Enrollments } from './components/enrollments/get_enrollment';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes >
          <Route path="/student" Component={Student} />
          <Route path="/courses" Component={Courses} />
          <Route path="/enrollments" Component={Enrollments} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;


import {Parent_studentComponent} from './components/parents/student';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Enrollments } from './components/enrollments/get_all_enrollments';
import { UniversityById } from './components/university/get_uni';
import { Students } from './components/student/get_all_students';
import StudentNavbar from './components/navbars/student_navbar';
import UniNavbar from './components/navbars/uni_navbar';
import { Universities } from './components/university/get_all_unis';
import { CoursesById } from './components/courses/get_course';
import { Enrollmen } from './components/enrollments/get_enrollments';
import CreateStudent from './components/student/create_student';
import { Parent_universityComponent } from './components/parents/university';


function App() {
  return (
    <Router>
      <div className="App">

        <StudentNavbar />
        <Routes >
          <Route path="/allstudent" element={<Students/>} />
          <Route path="/create" element={<CreateStudent/>} />
          <Route path="/student/*" element={<Parent_studentComponent/>} />
          
        </Routes >

        <UniNavbar/>
        <Routes>
          <Route path='/university' element={<Universities/>}/>
          <Route path='/university/*' element={<Parent_universityComponent/>}/>
          <Route path='/courses' element={<CoursesById/>}/>
          <Route path='/enrollments' element={<Enrollments/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// can access the studentId route parameter in the Enrollmen component by using the useParams hook from react-router-dom
// the alternative was to create a parent comp again

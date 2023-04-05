
import {Parent_studentComponent} from './components/parents/student';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Enrollments } from './components/enrollments/get_all_enrollments';
import { UniversityById } from './components/university/get_uni';
import { Students } from './components/student/get_all_students';
import StudentNavbar from './components/navbars/navbar';
import UniNavbar from './components/navbars/uni_navbar';
import { Universities } from './components/university/get_all_unis';
import { CoursesById } from './components/courses/get_course';


function App() {
  return (
    <Router>
      <div className="App">

        <StudentNavbar />
        <Routes >
          <Route path="/allstudent" element={<Students/>} />
          <Route path="/student/*" element={<Parent_studentComponent/>} />
          <Route path="/enrollments" element={<Enrollments/>} />
        </Routes >

        <UniNavbar/>
        <Routes>
          <Route path='/university' element={<Universities/>}/>
          <Route path='/profile' element={<UniversityById/>}/>
          <Route path='/courses' element={<CoursesById/>}/>
          <Route path='/enrollments' element={<Enrollments/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

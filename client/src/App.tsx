import {Parent_studentComponent} from './components/parents/student';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Students } from './components/student/get_all_students';
import StudentNavbar from './components/navbars/student_navbar';
import { Universities } from './components/university/get_all_unis';
import CreateStudent from './components/student/create_student';
import { Parent_universityComponent } from './components/parents/university';
import CreateUniversity from './components/university/create_uni';


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

        
        <Routes>
          <Route path='/university' element={<Universities/>}/>
          <Route path='/university/*' element={<Parent_universityComponent/>}/>
          <Route path='/createUni' element={<CreateUniversity/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// can access the studentId route parameter in the Enrollmen component by using the useParams hook from react-router-dom
// the alternative was to create a parent comp again

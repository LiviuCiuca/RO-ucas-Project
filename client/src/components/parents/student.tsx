import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Course } from '../../util/course';
import { Student } from '../../util/student';
import { Courses } from '../courses/get_all_courses';
import {StudentById} from '../student/get_student';
import { Students } from '../student/get_all_students';
import StudentNavbar from '../navbars/student_navbar';


export const Parent_studentComponent = () => {
    const [selectedCourse, setSelectedCourse] = useState<Course>({} as Course);
    const [student, setStudent] = useState<Student>({} as Student);
    const [selectedStudent, setSelectedStudent] = useState<Student>({} as Student);
    
  console.log('Selected Course:', selectedCourse);
  console.log('Selected Student parent:', selectedStudent);
    return (
      <>
      
      <Routes>
     
        <Route
          path="/:studentId"
          element={ <StudentById selectedCourse={selectedCourse} />}
        />
        <Route 
          path="/courses"
          element={ <Courses student={student} />}
        />
      </Routes>
      </>
    );
  };
  
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Course } from '../../util/course';
import { Student } from '../../util/student';
import { Courses } from '../courses/get_all_courses';
import {StudentById} from '../student/get_student';


export const Parent_studentComponent = () => {
    const [selectedCourse, setSelectedCourse] = useState<Course>({} as Course);;
    const [student, setStudent] = useState<Student>({} as Student);;
  console.log('Selected Course:', selectedCourse);
    return (
      <>
      <Routes>
        <Route
          path="/"
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
  
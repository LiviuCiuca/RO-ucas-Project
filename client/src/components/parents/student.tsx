import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Student } from '../../util/interface/student';
import { Courses } from '../courses/get_all_courses';
import { StudentById } from '../student/get_student';
import UpdateStudent from '../student/update_student';
import { Enrollmen } from '../enrollments/get_enrollments';

//The selected student state is managed in this component and passed down to the child components as props. 
//The Routes component from react-router-dom is used to define the different routes and the corresponding components to render.

export const Parent_studentComponent = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student>({} as Student);

  console.log('Selected Student:', selectedStudent);
  
  return (
    <>
      <Routes>
        <Route
          path="/:studentId"
          element={<StudentById setSelectedStudent={setSelectedStudent} />}
        />
        <Route
          path="/courses/:studentId"
          element={<Courses student={selectedStudent} />}
        />
        <Route
          path="/update/:studentId"
          element={<UpdateStudent student={selectedStudent} />}
        />
        <Route
          path="/enrollments/:studentId"
          element={<Enrollmen />} />
      </Routes>
    </>
  );
};

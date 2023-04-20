import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Course } from '../../util/course';
import { Student } from '../../util/student';
import { Courses } from '../courses/get_all_courses';
import { StudentById } from '../student/get_student';
import UpdateStudent from '../student/update_student';
import { Enrollmen } from '../enrollments/get_enrollments';


export const Parent_studentComponent = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student>({} as Student);

  console.log('Selected Student:', selectedStudent);
  // function updateData(student: Student) {
  //   setSelectedStudent(student);
  // } 
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

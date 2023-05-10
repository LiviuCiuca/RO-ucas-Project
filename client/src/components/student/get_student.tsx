import { useState, useEffect } from 'react';
import axios from 'axios';
import { Student } from '../../util/interface/student';
import DeleteStudent from './delete_student';
import { Link, useParams } from "react-router-dom";
import React from 'react';
import { StudentByIdProps } from '../../util/interface/student_props';

import "../../util/css/all_style.css";
import "../../util/css/info_display.css"


export const StudentById: React.FC<StudentByIdProps> = ({ setSelectedStudent }) => {

  const [student, setStudent] = useState<Student>({} as Student);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { studentId } = useParams<{ studentId: string }>();

  const getStudentById = async (id: number) => {
    try {
      const response = await axios.get(`/api/student/${id}`);
      console.log('Response data:', response.data);
      setStudent(response.data);
      setLoading(false);
      setSelectedStudent(response.data);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {

    getStudentById(Number(studentId));

  }, [studentId]);

  if (loading) {
    return <div><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Student</h1>
      <div className="info-container">
        {Object.keys(student).map((key: any) => (
          key !== "id" && (
            <div key={key} className="info-item">
              {/* transforming first letter to Capital */}
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <div id={key} className="info-value">
                {student[key]}
              </div>
            </div>
          )
        ))}
      </div>

      <DeleteStudent student={student} />
      <Link to={`/student/update/${student.id}`}>
        <button className='button'>Update Student</button>
      </Link>
      <Link to={`/student/courses/${student.id}`}>
        <button className='button'>View Courses</button>
      </Link>

      <Link to={`/student/enrollments/${student.id}`}>
        <button className='button'>View Enrollments</button>
      </Link>


    </div>
  );
};

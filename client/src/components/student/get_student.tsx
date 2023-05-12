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
      // Fetch the details of the student with the given ID from the server
      const response = await axios.get(`/api/student/${id}`);
      console.log('Response data:', response.data);
      setStudent(response.data);
      setLoading(false);
      setSelectedStudent(response.data); // Set the selected student in the parent component
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudentById(Number(studentId)); // Fetch the student details when the component mounts or when the studentId changes
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
        {/* Render the student information */}
        {Object.keys(student).map((key: any) => (
          key !== "id" && (
            <div key={key} className="info-item">
              {/* Transform the first letter of the key to capital */}
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <div id={key} className="info-value">
                {student[key]}
              </div>
            </div>
          )
        ))}
      </div>

      <DeleteStudent student={student} /> {/* Component to delete the student */}
      <Link to={`/student/update/${student.id}`}>
        <button className='button'>Update Student</button> {/* Button to update the student */}
      </Link>
      <Link to={`/student/courses/${student.id}`}>
        <button className='button'>View Courses</button> {/* Button to view the courses of the student */}
      </Link>

      <Link to={`/student/enrollments/${student.id}`}>
        <button className='button'>View Enrollments</button> {/* Button to view the enrollments of the student */}
      </Link>
    </div>
  );
};
